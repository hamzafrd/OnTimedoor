/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Text, TextInput, View} from 'react-native';

export const InputComponent = props => {
  const {title, height} = props;

  return (
    <View>
      <Text style={{color: 'white', marginTop: 12, marginBottom: 12}}>
        {title}
      </Text>
      <TextInput
        style={{
          padding: 10,
          borderWidth: 1,
          height: height,
          fontSize: 16,
        }}
        {...props}
      />
    </View>
  );
};
