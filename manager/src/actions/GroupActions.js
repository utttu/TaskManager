import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import { GROUP_UPDATE, GROUP_CREATE, GROUP_FETCH_SUCCESS } from './types';

export const groupUpdate = ({ prop, value }) => {
    return {
        type: GROUP_UPDATE,
        payload: { prop, value }
    };
};

export const groupCreate = ({ name }) => {
    const { currentUser } = firebase.auth();
    return (dispatch) => {
    firebase.database().ref(`/users/${currentUser.uid}/groups`)
        .push({ name })
        .then( () => {
            dispatch({ type: GROUP_CREATE });
            Actions.GroupList({ type: 'reset' });
        })
    };
};

export const groupsFetch = () => {
    const { currentUser } = firebase.auth();

    return (dispatch) => {
        firebase.database().ref(`/users/${currentUser.uid}/groups`)
        .on('value', snapshot => {
            dispatch({ type: GROUP_FETCH_SUCCESS, payload: snapshot.val() })
        });
    };
};