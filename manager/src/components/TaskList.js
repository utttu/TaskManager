import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ListView, View, Text } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { tasksFetch } from '../actions';
import ListTask from './ListTask';
import { Button, Card, CardSection } from './common';


class TaskList extends Component {
    componentWillMount(){
        console.log(this.props.group);
        this.props.tasksFetch({uid: this.props.group.uid});

        this.createDataSource(this.props);
    }

    componentWillReceiveProps(nextProps) {
        //nextProps are the next set of props that this component will be rendered with this.props still hold the old set of props.
        this.createDataSource(nextProps);
    }

    createDataSource({ tasks }) {
       
        const ds = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2
        });

        this.dataSource = ds.cloneWithRows(tasks);
        
    }
    renderRow(task) {
        return <ListTask task={task} />;
    }

    onButtonPress() {
        Actions.TaskCreate({ group: this.props.group });
    }

    render() {
        return (
            <Card>
                <CardSection>
                    <ListView 
                        enableEmptySections
                        dataSource={this.dataSource}
                        renderRow={this.renderRow}
                    />
                </CardSection>

                <CardSection>
                    <Button onPress={this.onButtonPress.bind(this)}>
                        Add
                    </Button>
                </CardSection>
            </Card>
        )
    }
}

const mapStateToProps = state => {
    const tasks = _.map(state.Tasks, (val, uid) => {
        return { ...val, uid};
    });

    return { tasks };
};

export default connect(mapStateToProps, {tasksFetch})(TaskList);