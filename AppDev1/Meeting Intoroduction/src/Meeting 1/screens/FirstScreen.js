/* eslint-disable no-alert */
/* eslint-disable react-native/no-inline-styles */
// import React from 'react';
// import {Button, Text, View} from 'react-native';
// const FirstScreen = () => {
//   const openAlert = () => {
//     alert('You Clicked The Button');
//   };
//   return (
//     <View
//       style={{
//         flex: 1,
//         alignItems: 'center',
//         justifyContent: 'center',
//       }}>
//       <Text style={{color: 'red'}}>
//         Hello<Text style={{color: 'blue'}}> World !</Text>
//       </Text>
//       <Button title="This is Button" onPress={openAlert} />
//     </View>
//   );
// };

// export default FirstScreen;
import React from 'react';
import {Button, Text, View} from 'react-native';

const FirstScreen = () => {
  const openAlert = () => {
    alert('Ini adalah Alert');
  };

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text style={{color: 'red'}}>
        Hello<Text style={{color: 'blue'}}>World</Text>{' '}
      </Text>
      <Button title="Ini adalah Button" onPress={openAlert} />
    </View>
  );
};

export default FirstScreen;
