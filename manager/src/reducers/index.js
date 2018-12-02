import { combineReducers } from 'redux';
import AuthReducer from './AuthReducer';
import GroupFormReducer from './GroupFormReducer';
import GroupReducer from './GroupReducer';
import TaskReducer from './TaskReducer';
import TaskFormReducer from './TaskFormReducer';


export default combineReducers({
    auth: AuthReducer,
    GroupForm: GroupFormReducer,
    Groups: GroupReducer,
    Tasks: TaskReducer,
    TaskForm: TaskFormReducer
});