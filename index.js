// Import a library to help create a component
import React from 'react';
import { AppRegistry } from 'react-native'; // module unique
import Header from './src/components/header'; // personal module needs path

// Create a component
const App = () => (
    <Header headerText={'My Profile'}/>
);

// Render it to the device
AppRegistry.registerComponent('albums', () => App);

// Passing a prop
// 1. identify the variable or value that we want to be provided the parent
// Example the Your Profile in the Header.js component
// 2. provide a reference to the props that's coming in from the parent component
// Because header is a child component it will be given a props object form the parent
// 3. the parent component provides that reference
// the parent component (index.js) provides a reference