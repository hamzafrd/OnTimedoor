/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {ScrollView, Text, View} from 'react-native';
import {Icon} from 'react-native-elements/dist/icons/Icon';
import {Feeds, Story} from 'src/components/instagramComponents';

const InstagramHomeScreen = () => {
  return (
    <View style={{flex: 1}}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <Text
          style={{
            fontFamily: 'StyleScript-Regular',
            fontSize: 40,
            marginLeft: 16,
          }}>
          Instagram
        </Text>

        <View
          style={{
            margin: 8,
            flexDirection: 'row',
          }}>
          <Icon name="plus-square-o" type="font-awesome" size={28} />
          <Icon
            name="paper-plane-outline"
            type="ionicon"
            size={26}
            style={{
              marginStart: 10,
              marginEnd: 10,
            }}
          />
          <Icon name="heart-o" type="font-awesome" size={28} />
        </View>
      </View>

      <ScrollView>
        <ScrollView horizontal>
          <Story
            username="Mr Hamza"
            profile={require('../../assets/images/profilePicture1.png')}
          />
          <Story
            username="Dharma"
            profile={require('../../assets/images/profilePicture2.png')}
          />
          <Story
            username="Jasmine"
            profile={require('../../assets/images/profilePicture3.png')}
          />
          <Story
            username="Chris"
            profile={require('../../assets/images/profilePicture4.png')}
          />
          <Story
            username="Osiris"
            profile={require('../../assets/images/profilePicture5.png')}
          />
        </ScrollView>
        <Feeds
          username="Mr Hamza"
          profile={require('../../assets/images/profilePicture1.png')}
          post={{uri: 'https://wallpaperaccess.com/full/201215.jpg'}}
        />
        <Feeds
          username="Dharma"
          profile={require('../../assets/images/profilePicture2.png')}
          post={{uri: 'https://wallpaperaccess.com/full/288027.jpg'}}
        />
        <Feeds
          username="Jasmine"
          profile={require('../../assets/images/profilePicture3.png')}
          post={{uri: 'https://wallpaperaccess.com/full/1288011.jpg'}}
        />
        <Feeds
          username="Chris"
          profile={require('../../assets/images/profilePicture4.png')}
          post={{uri: 'https://wallpaperaccess.com/full/2756.jpg'}}
        />
        <Feeds
          username="Osiris"
          profile={require('../../assets/images/profilePicture5.png')}
          post={{uri: 'https://wallpaperaccess.com/full/4632383.png'}}
        />
      </ScrollView>
    </View>
  );
};

export default InstagramHomeScreen;
