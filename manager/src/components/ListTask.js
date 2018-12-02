import React, { Component } from 'react';
import { Text, TouchableWithoutFeedback, View } from 'react-native';
import { connect } from 'react-redux';
import { CardSection } from './common';
import * as actions from '../actions';
import { Actions } from 'react-native-router-flux';


class ListTask extends Component {
   
    onRowPress() {
        
    }

    render() {
        const { titleStyle } = styles;
        const { name } = this.props.task;
        return (
            <TouchableWithoutFeedback onPress={this.onRowPress.bind(this)}>
                <View>
                    <CardSection>
                        <Text style ={titleStyle}>
                            {name}
                        </Text>
                    </CardSection>
                </View>
            </TouchableWithoutFeedback>
        );
    }
}

const styles = {
    titleStyle: {
        fontSize: 25,
        paddingLeft: 15
    }
}

export default ListTask;