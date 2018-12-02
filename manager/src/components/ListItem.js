import React, { Component } from 'react';
import { Text, TouchableWithoutFeedback, View } from 'react-native';
import { connect } from 'react-redux';
import { CardSection } from './common';
import * as actions from '../actions';
import { Actions } from 'react-native-router-flux';


class ListItem extends Component {
    // renderDescription() {
    //     // const { library, selectedLibraryId } = this.props;

    //     // if(library.id === selectedLibraryId) {
    //         return (
    //             <Text>{employee.phone}</Text>
    //         )
    //     }
   // }
    onRowPress() {
        Actions.TaskList({ group: this.props.group });
    }

    render() {
        const { titleStyle } = styles;
        const { name } = this.props.group;
        return (
            <TouchableWithoutFeedback onPress={this.onRowPress.bind(this)}>
                <View>
                    <CardSection>
                        <Text style ={titleStyle}>
                            {name}
                        </Text>
                    </CardSection>
                    {/* {this.renderDescription()} */}
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

// const mapStateToProps = state => {
//     return { selectLibrary: state.selectedLibraryId }
// }connect(mapStateToProps, actions)

export default ListItem;