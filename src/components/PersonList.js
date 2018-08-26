import React, { Component } from 'react';
import { View, Text } from 'react-native';

class PersonList extends Component {

  componentWillMount() {
    console.log('ComponentWillMount in PersonList');
    debugger;
  }

  render () {
    return (
      <View>
        <Text>Person List!!!!</Text>
      </View>
    );
  }
}

export default PersonList;