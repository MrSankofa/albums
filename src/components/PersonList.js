import React, { Component } from 'react';
import { View, Text } from 'react-native';
import axios from 'axios';

class PersonList extends Component {
  state = { Persons: [] };
  componentWillMount() {
   axios.get('https://nodecopy.herokuapp.com/api/persons').then( response => this.setState({ Persons: response.data}) );
  }

  /* Requires use for performance purposes whenever 
  *  we use an array and render it to the screen to
  *  assign a key value to the place where the array
  *  element is defined. 
  *  Rule 1: that key value must be unique
  *  Rule 2: It also must be the same value for 
  *          re-renders of the list. Ex. Don't use
  *          person again as a key value.
  *          ex. don't use person.name because people
  *          could have the same name. It needs to be
  *          unique whenever we log the data*/
  renderPerson() {
    return this.state.Persons.map( person => 
    <Text key={person._id}>{person.firstname}</Text>
  );
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