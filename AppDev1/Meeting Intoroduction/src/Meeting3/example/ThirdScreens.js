/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Image, ScrollView, Text, View} from 'react-native';

const ThirdScreen = () => {
  return (
    <View
      style={{
        flex: 1,
        flexDirection: 'row',
        backgroundColor: 'red',
      }}>
      <View
        style={{
          flex: 1,
          backgroundColor: 'black',
        }}>
        <Text
          style={{
            color: 'white',
            flex: 1,
          }}>
          Pikachu
        </Text>
      </View>
      <View>
        <Text
          style={{
            color: 'white',
          }}>
          Pikachu
        </Text>
      </View>
    </View>
  );
};

const Addimages = () => {
  return (
    <View>
      <ScrollView>
        <View>
          <Image
            style={{width: 100, height: 100}}
            source={require('../../../assets/images/pikachu.png')}
          />
        </View>
        <View>
          <Image
            style={{width: 100, height: 100}}
            source={require('../../../assets/images/pikachu.png')}
          />
        </View>
        <View>
          <Image
            style={{width: 100, height: 100}}
            source={require('../../../assets/images/pikachu.png')}
          />
        </View>
        <View>
          <Image
            style={{width: 100, height: 100}}
            source={require('../../../assets/images/pikachu.png')}
          />
        </View>
        <View>
          <Image
            style={{width: 100, height: 100}}
            source={{uri: 'https://i.ibb.co/bLz74hj/psyduck.png'}}
          />
        </View>
        <View>
          <Image
            style={{width: 100, height: 100}}
            source={{uri: 'https://i.ibb.co/GQBLC7r/bulbasaur.png'}}
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default Addimages;
