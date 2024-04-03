/* eslint-disable no-alert */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';

const SecondScreen = () => {
  const openAlert = text => {
    alert('You chose ' + text);
  };
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'lavender',
        padding: 10,
      }}>
      <View
        style={{
          backgroundColor: 'skyblue',
          padding: 10,
          borderStyle: 'dotted',
          borderColor: 'red',
          borderWidth: 2,
          borderRadius: 15,
        }}>
        <Text>Mobile Legends</Text>
        <Text>
          <Text style={{color: 'purple'}}>Mobile Legends </Text>
          is a multiplayer online battle arena (MOBA) game. The two opposing
          teams fight to reach and destroy the enemy’s base while defending
          their own base for control of a path.
        </Text>
      </View>
      <TouchableOpacity
        style={{
          backgroundColor: 'white',
          borderWidth: 1,
          margin: 10,
          padding: 5,
        }}
        onPress={() => openAlert('Mobile Legends')}>
        <Text>Click Me ! Mobile Legends</Text>
      </TouchableOpacity>
      <View
        style={{
          backgroundColor: 'cornflowerblue',
          borderStyle: 'dotted',
          borderColor: 'red',
          padding: 5,
          borderWidth: 2,
          borderRadius: 5,
        }}>
        <Text>PUBG</Text>
        <Text style={{color: 'purple'}}>PlayerUnknowns Battleground </Text>
        <Text>
          PlayerUnknown's Battlegrounds, better known as PUBG, is a multiplayer
          battle royale game in which players drop onto an island and fight to
          be the last one left standing..
        </Text>
      </View>
      <TouchableOpacity
        style={{
          backgroundColor: 'white',
          borderWidth: 1,
          margin: 10,
          padding: 5,
        }}
        onPress={() => openAlert('PUBG')}>
        <Text>Click Me ! PUBG</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SecondScreen;
