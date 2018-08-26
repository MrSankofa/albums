import React, { Component } from 'react';
import { View, Text } from 'react-native';
import axios from 'axios';

class PersonList extends Component {
  state = { Persons: [] };
  componentWillMount() {
   axios.get('https://nodecopy.herokuapp.com/api/persons').then( response => this.setState({ Persons: response.data}) );
  }

  renderPerson() {
    return this.state.Persons.map( person => <Text>{person.firstname}</Text>);
  }

  render () {
    console.log(this.state);
    
    return (
      <View>
        {this.renderPerson()}
      </View>
    );
  }
}

export default PersonList;