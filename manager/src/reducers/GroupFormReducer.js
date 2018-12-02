import { GROUP_UPDATE, GROUP_CREATE } from '../actions/types';

const INITIAL_STATE = { name:''};

export default (state= INITIAL_STATE, action) => {
    switch (action.type) {
        case GROUP_UPDATE:
            return { ...state, [action.payload.prop]: action.payload.value };
        case GROUP_CREATE:
            return INITIAL_STATE;
        default:
            return state;
    }
};