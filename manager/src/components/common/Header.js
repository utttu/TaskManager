/* eslint-disable no-unused-vars */
// Import libraries for making a component
import React from 'react';
import { Text, View } from 'react-native';

// Make a component
const Header = (props) => {
	const { textStyle, viewStyle } = styles;
	return (
        <View style={viewStyle}>
            <Text style={textStyle}>{props.headerText}</Text>
        </View>
	);
};
const styles = {
	viewStyle: {
        
		justifyContent: 'center',
		alignItems: 'center',
		height: 60,
		shadowColor: '#000',
		shadowOffset: { width: 0, height: 2 },
		shadowOpacity: 0.2,
		backgroundColor: '#F8F8F8',
		elevation: 3,
		position: 'relative',
        paddingTop: 15
	},
	textStyle: {
		fontSize: 30

	}
};

// Make the component available to other parts of the app
export { Header };
