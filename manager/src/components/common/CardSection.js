/* eslint-disable no-unused-vars */
import React from 'react';
import { View } from 'react-native';

const CardSection = (props) => {
	return (
        <View style={[styles.containerStyle, props.style]}>
            {props.children}
        </View>
	);
};

const styles = {
	containerStyle: {
		padding: 5,
		backgroundColor: '#fff',
		justifyContent: 'flex-start',
		flexDirection: 'row',
		borderRadius: 2,
		borderColor: '#ddd',
		borderBottomWidth: 1,
		position: 'relative'
	}
};

export { CardSection };
