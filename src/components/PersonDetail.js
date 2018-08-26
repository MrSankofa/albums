import React from 'react';
import { View, Text } from 'react-native';

const PersonDetail = (props) => {
  return (
    <View>
      <Text>{props.personProp.firstname}</Text>
    </View>
  );
};

export default PersonDetail;