import React, { Component } from 'react';
import { View, Text } from 'react-native';
import axios from 'axios';

class PersonList extends Component {

  componentWillMount() {
    axios.get('https://nodecopy.herokuapp.com/api/persons').then(response => console.log(response));
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