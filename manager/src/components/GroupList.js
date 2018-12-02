import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ListView, View, Text } from 'react-native';
import { groupsFetch } from '../actions';
import ListItem from './ListItem';


class GroupList extends Component {
    componentWillMount(){
        this.props.groupsFetch();

        this.createDataSource(this.props);
    }

    componentWillReceiveProps(nextProps) {
        //nextProps are the next set of props that this component will be rendered with this.props still hold the old set of props.
        this.createDataSource(nextProps);
    }

    createDataSource({ groups }) {
       
        const ds = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2
        });

        this.dataSource = ds.cloneWithRows(groups);
        
    }
    renderRow(group) {
        return <ListItem group={group} />;
    }

    render() {
        return (
            <ListView 
                enableEmptySections
                dataSource={this.dataSource}
                renderRow={this.renderRow}
            />
        )
    }
}

const mapStateToProps = state => {
    const groups = _.map(state.Groups, (val, uid) => {
        return { ...val, uid};
    });
    return { groups };
};

export default connect(mapStateToProps, {groupsFetch})(GroupList);