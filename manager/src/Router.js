import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import GroupList from './components/GroupList';
import GroupCreate from './components/GroupCreate';
import TaskCreate from './components/TaskCreate';
import TaskList from './components/TaskList';

const RouterComponent = () => {
    return (
        <Router sceneStyle={{ paddingTop: 65 }}>
            <Scene key="root" hideNavBar>
                <Scene key="auth">
                    <Scene key="login" component={LoginForm} title="Please Login" initial  />
                </Scene>
                <Scene key="main">
                    <Scene 
                        rightTitle="Add"
                        onRight={() => { Actions.GroupCreate() }}
                        key="GroupList" 
                        component={GroupList} 
                        title="Groups" 
                    />
                    
                    <Scene 
                        key="GroupCreate" 
                        component={GroupCreate} 
                        title="Group Create" 
                    />
                    <Scene 
                        key="TaskList" 
                        component={TaskList} 
                        title="Tasks" 
                    />
                    <Scene 
                        key="TaskCreate" 
                        component={TaskCreate} 
                        title="Task Create" 
                    />
                </Scene>
            </Scene>
        </Router>
    );
};

export default RouterComponent;