import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import { TASK_UPDATE, TASK_CREATE, TASK_FETCH_SUCCESS } from './types';

export const taskUpdate = ({ prop, value, uid}) => {
    return {
        type: TASK_UPDATE,
        payload: { prop, value, uid }
    };
};

export const taskCreate = ({ name, uid, group }) => {
    const { currentUser } = firebase.auth();
    return (dispatch) => {
    firebase.database().ref(`/users/${currentUser.uid}/groups/${uid}/tasks`)
        .push({ name })
        .then( () => {
            dispatch({ type: TASK_CREATE });
            Actions.TaskList({ type: 'pop', group: group });
            Actions.pop();
        })
    };
};

export const tasksFetch = ({ uid }) => {
    const { currentUser } = firebase.auth();

    return (dispatch) => {
        firebase.database().ref(`/users/${currentUser.uid}/groups/${uid}/tasks`)
        .on('value', snapshot => {
            dispatch({ type: TASK_FETCH_SUCCESS, payload: snapshot.val() })
        });
    };
};