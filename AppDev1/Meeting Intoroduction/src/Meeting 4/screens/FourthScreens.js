/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {ImageBackground, Text, TextInput, View} from 'react-native';
import {InputComponent} from 'src/Meeting 4/components/inputComponents';

const Challange_A = () => {
  return (
    <View style={{margin: 16}}>
      <ImageBackground
        style={{
          width: '100%',
          height: 300,
          justifyContent: 'flex-end',
          alignItems: 'flex-end',
          opacity: 0.5,
        }}
        imageStyle={{borderRadius: 10}}
        source={{
          uri: 'https://wallpaperaccess.com/full/250180.jpg',
        }}>
        <Text
          style={{
            backgroundColor: 'mistyrose',
            padding: 8,
            margin: 8,
            fontSize: 18,
            fontWeight: 'bold',
          }}>
          Disneyland
        </Text>
      </ImageBackground>
    </View>
  );
};

const Challange_B = () => {
  return (
    <View style={{padding: 5}}>
      {/* <Text style={{fontSize: 20, textAlign: 'center', color: 'white'}}>
        Input Default
      </Text>
      <TextInput
        style={{
          padding: 10,
          borderWidth: 1,
          height: 40,
          fontSize: 16,
          margin: 5,
          borderColor: 'white',
        }}
        placeholder="description for your text input"
        multiline={true}
        keyboardType="default"
      /> */}
      <InputComponent
        title="Deskripsi"
        height={150}
        placeholder="Masukan Deskripsi"
        keyboardType="phone-pad"
      />

      <InputComponent
        title="Phone Number"
        height={20}
        placeholder="Masukan Deskripsi"
        keyboardType="default"
      />

      <Text style={{fontSize: 20, textAlign: 'center', color: 'white'}}>
        Input Phone Pad
      </Text>
      <TextInput
        style={{
          padding: 10,
          borderWidth: 1,
          height: 40,
          fontSize: 16,
          margin: 5,
          borderColor: 'white',
        }}
        placeholder="description for your text input"
        multiline={true}
        keyboardType="phone-pad"
      />

      <Text style={{fontSize: 20, textAlign: 'center', color: 'white'}}>
        Input Numeric
      </Text>
      <TextInput
        style={{
          padding: 10,
          borderWidth: 1,
          height: 40,
          fontSize: 16,
          margin: 5,
          borderColor: 'white',
        }}
        placeholder="description for your text input"
        multiline={true}
        keyboardType="numeric"
      />
    </View>
  );
};

const ChallengeScreen = () => {
  return (
    <View style={{flex: 1}}>
      <ImageBackground
        style={{
          flex: 1,
          justifyContent: 'center',
        }}
        imageStyle={{opacity: 0.5}}
        source={{
          uri: 'https://i.pinimg.com/736x/e4/28/c5/e428c5f6e045bcf567fa4267f7985076.jpg',
        }}>
        <View style={{alignItems: 'flex-end'}}>
          <Text
            style={{
              fontWeight: 'bold',
              fontSize: 16,
              backgroundColor: 'beige',
              padding: 15,
              margin: 5,
            }}>
            Colosseum
          </Text>
        </View>
        <View style={{margin: 8, padding: 8}}>
          <InputComponent
            title="Description"
            placeholder="about The Place"
            height={100}
          />
          <InputComponent
            title="Phone Number"
            placeholder="Phone Number"
            keyboardType="phone-pad"
          />
          <InputComponent
            title="Location"
            placeholder="Location"
            keyboardType="numeric"
          />
        </View>
      </ImageBackground>
    </View>
  );
};

export default ChallengeScreen;
