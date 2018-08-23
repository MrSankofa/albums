// Import libraries for making a component
import React from 'react';
import { Text } from 'react-native';

// Make a component
const Header = () => {
  const { textStyle } = styles;

  return <Text style={textStyle}>Your Profile</Text>;
};

const styles = {
  textStyle: {
    fontSize: 200
  }
};

// Make the component available to other parts of the app
export default Header;