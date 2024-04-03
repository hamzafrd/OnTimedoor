/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Image, ScrollView, Text, View} from 'react-native';

const AddImages = () => {
  return (
    <View
      style={{
        backgroundColor: 'blue',
      }}>
      <Text
        style={{
          fontSize: 20,
          color: 'black',
          textAlign: 'center',
          paddingTop: 10,
          paddingBottom: 10,
          borderBottomWidth: 1,
          borderBottomColor: 'black',
        }}>
        Pokemon's Profile
      </Text>
      <View style={{marginBottom: 45, flexDirection: 'row'}}>
        <ScrollView>
          <View
            style={{
              padding: 8,
              flexDirection: 'row',
              backgroundColor: getColor(),
              justifyContent: 'center',
            }}>
            <Image
              style={{
                width: 150,
                height: 150,
                borderRadius: 100,
                borderWidth: 1,
                borderColor: 'green',
                backgroundColor: 'aliceblue',
              }}
              source={require('../../../assets/images/pikachu.png')}
            />
            <View
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                paddingLeft: 20,
              }}>
              <Text>
                Name : Pikachu
                {'\n'}
                Category : Mouse
                {'\n'}
                Abilities : Static
                {'\n'}
                Weaknesses : Ground
              </Text>
            </View>
          </View>

          <View
            style={{
              padding: 8,
              flexDirection: 'row',
              backgroundColor: getColor(),
              justifyContent: 'center',
            }}>
            <Image
              style={{
                width: 150,
                height: 150,
                borderRadius: 100,
                borderWidth: 1,
                borderColor: 'green',
                backgroundColor: 'aliceblue',
              }}
              source={require('../../../assets/images/flareon.png')}
            />
            <View
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                paddingLeft: 20,
              }}>
              <Text>
                Name : Pikachu
                {'\n'}
                Category : Mouse
                {'\n'}
                Abilities : Static
                {'\n'}
                Weaknesses : Ground
              </Text>
            </View>
          </View>
          <View
            style={{
              padding: 8,
              flexDirection: 'row',
              backgroundColor: getColor(),
              justifyContent: 'center',
            }}>
            <Image
              style={{
                width: 150,
                height: 150,
                borderRadius: 100,
                borderWidth: 1,
                borderColor: 'green',
                backgroundColor: 'aliceblue',
              }}
              source={require('../../../assets/images/rapidash.png')}
            />
            <View
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                paddingLeft: 20,
              }}>
              <Text>
                Name : Pikachu
                {'\n'}
                Category : Mouse
                {'\n'}
                Abilities : Static
                {'\n'}
                Weaknesses : Ground
              </Text>
            </View>
          </View>
          <View
            style={{
              padding: 8,
              flexDirection: 'row',
              backgroundColor: getColor(),
              justifyContent: 'center',
            }}>
            <Image
              style={{
                width: 150,
                height: 150,
                borderRadius: 100,
                borderWidth: 1,
                borderColor: 'green',
                backgroundColor: 'aliceblue',
              }}
              source={{uri: 'https://i.ibb.co/bLz74hj/psyduck.png'}}
            />
            <View
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                paddingLeft: 20,
              }}>
              <Text>
                Name : Pikachu
                {'\n'}
                Category : Mouse
                {'\n'}
                Abilities : Static
                {'\n'}
                Weaknesses : Ground
              </Text>
            </View>
          </View>
          <View
            style={{
              padding: 8,
              flexDirection: 'row',
              backgroundColor: getColor(),
              justifyContent: 'center',
            }}>
            <Image
              style={{
                width: 150,
                height: 150,
                borderRadius: 100,
                borderWidth: 1,
                borderColor: 'green',
                backgroundColor: 'aliceblue',
              }}
              source={{uri: 'https://i.ibb.co/GQBLC7r/bulbasaur.png'}}
            />
            <View
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                paddingLeft: 20,
              }}>
              <Text>
                Name : Pikachu
                {'\n'}
                Category : Mouse
                {'\n'}
                Abilities : Static
                {'\n'}
                Weaknesses : Ground
              </Text>
            </View>
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

function getColor() {
  const color = [
    '#FFFFFF', // White
    '#FFFF00', // Yellow
    '#FF0000', // Red
    '#00FF00', // Green
    '#0000FF', // Blue
    '#FFA500', // Orange
    '#800080', // Purple
    '#FFC0CB', // Pink
    '#00FFFF', // Cyan
    '#FFD700', // Gold
    '#008000', // Dark Green
    '#800000', // Maroon
    '#9400D3', // Dark Violet
    '#FF6347', // Tomato
    '#FF4500', // Orange Red
    '#FF69B4', // Hot Pink
    '#8A2BE2', // Blue Violet
    '#48D1CC', // Medium Turquoise
    '#9932CC', // Dark Orchid
    '#FA8072', // Salmon
  ];

  const random = Math.floor(Math.random() * color.length);
  return color[random];
}
const ThirdScreen = () => {
  return (
    <View
      style={{
        flex: 2,
        backgroundColor: 'indigo',
        // flexDirection: 'row',
      }}>
      <View
        style={{
          backgroundColor: 'red',
          flex: 1,
        }}>
        <Image
          style={{width: 100, height: 100}}
          source={{
            uri: 'https://i.ibb.co/d0rysBc/pikachu.png',
          }}
        />
        <Text style={{color: 'black'}}>Pikachu</Text>
      </View>
      <View style={{backgroundColor: 'orange', flex: 1}}>
        <Image
          style={{width: 100, height: 100}}
          source={require('@images/flareon.png')}
        />
        <Text style={{color: 'white'}}>Flareon</Text>
      </View>
      <View style={{flex: 1}}>
        <Image
          style={{width: 100, height: 100}}
          source={require('../../../assets/images/rapidash.png')}
        />
        <Text style={{color: 'white'}}>Rapidash</Text>
      </View>
    </View>
  );
};

export default AddImages;
