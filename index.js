// Import a library to help create a component
import React from 'react';
import { Text, AppRegistry } from 'react-native';

// Create a component
const App = () => (
    <Text>Keep working after git</Text>
);

// Render it to the device
AppRegistry.registerComponent('albums', () => App);
