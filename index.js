// Import a library to help create a component
import React from 'react';
import { AppRegistry } from 'react-native'; // module unique
import Header from './src/components/header'; // personal module needs path

// Create a component
const App = () => (
    <Header/>
);

// Render it to the device
AppRegistry.registerComponent('albums', () => App);
