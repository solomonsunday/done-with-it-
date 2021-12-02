import React from 'react';
import { View } from 'react-native';
import { useDimensions, usseDeviceOrientation } from '@react-native-community/hooks';
import WelcomeScreen from './app/screens/WelcomeScreen';
import ViewImageScreen from './app/screens/ViewImageScreen';
import Card from './app/component/Card';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { isRequired } from 'react-native/Libraries/DeprecatedPropTypes/DeprecatedColorPropType';
import ListingDetailsScreen from './app/screens/ListingDetailsScreen';
import MessagesScreen from './app/screens/MessagesScreen';

export default function App() {
  return <MessagesScreen />;
  return <View style={{
    backgroundColor: '#f8f4f4',
    padding: 20,
    paddingTop: 100
  }}>

    <Card
      title="Chairs for sale"
      subTitle="N100"
      image={require("./app/assets/chairs.jpg")} />

    <Card
      title="Chairs for sale"
      subTitle="N100"
      image={require("./app/assets/chairs2.jpg")} />

    <Card
      title="Chairs for sale"
      subTitle="N100"
      image={require("./app/assets/splash.png")} />
  </View>
}


