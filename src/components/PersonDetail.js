import React from 'react';
import { Text } from 'react-native';
import Card from './card';
import CardSection from './CardSection';

const PersonDetail = (props) => {
  return (
    <Card>
      <CardSection>
      <Text>{props.personProp.firstname}</Text>
      </CardSection>
    </Card>
  );
};

export default PersonDetail;