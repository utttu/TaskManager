import React, { Component } from 'react';
import { connect } from 'react-redux';
import { taskUpdate, taskCreate } from '../actions';
import { Picker, Text } from 'react-native';
import { Card, CardSection, Input, Button} from './common';

class TaskCreate extends Component {
    onButtonPress(){
        const { name } = this.props;

        this.props.taskCreate({ name, uid: this.props.group.uid, group: this.props.group });
    }

    render() {
        return (
            <Card>
                <CardSection>
                    <Input 
                        label="Name"
                        placeholder="MyTask"
                        value={this.props.name}
                        onChangeText={ value => this.props.taskUpdate({ prop: 'name', value, uid: this.props.group.uid })}
                    />
                </CardSection>

                {/* <CardSection>
                    <Input 
                        label="Phone"
                        placeholder="555-555-555"
                        value={this.props.phone}
                        onChangeText={ value => this.props.employeeUpdate({ prop: 'phone', value })}
                    />
                </CardSection> */}

                {/* <CardSection style={{ flexDirection: 'column' }}>
                    <Text style={styles.pickerTextStyle}>
                        Shift
                    </Text>
                    <Picker 
                        selectedValue={this.props.shift} 
                        onValueChange={value => this.props.employeeUpdate({ prop: 'shift', value })}
                    >
                        <Picker.Item label="Monday" value="Monday" />
                        <Picker.Item label="Tuesday" value="Tuesday" />
                        <Picker.Item label="Wednesday" value="Wednesday" />
                        <Picker.Item label="Thursday" value="Thursday" />
                        <Picker.Item label="Friday" value="Friday" />
                        <Picker.Item label="Saturday" value="Saturday" />
                        <Picker.Item label="Sunday" value="Sunday" />
                    </Picker>
                </CardSection> */}

                <CardSection>
                    <Button onPress={this.onButtonPress.bind(this)}>
                        Create
                    </Button>
                </CardSection>
            </Card>
        );
    }
}

const styles = {
    pickerTextStyle: {
        fontSize: 18,
        paddingLeft: 20
    }
};

const mapStateToProps = (state) => {
    const { name } = state.TaskForm;

    return { name };
};

export default connect(mapStateToProps, { taskUpdate, taskCreate })(TaskCreate);