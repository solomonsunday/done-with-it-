import React, { useState } from 'react';
import { Switch, Text, TextInput, View } from 'react-native';
import { useDimensions, usseDeviceOrientation } from '@react-native-community/hooks';
import WelcomeScreen from './app/screens/WelcomeScreen';
import ViewImageScreen from './app/screens/ViewImageScreen';
import Card from './app/component/Card';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { isRequired } from 'react-native/Libraries/DeprecatedPropTypes/DeprecatedColorPropType';
import ListingDetailsScreen from './app/screens/ListingDetailsScreen';
import MessagesScreen from './app/screens/MessagesScreen';
import Screen from './app/component/Screen';
import Icon from './app/component/Icon';
import ListItem from './app/component/ListItem';
import AccountScreen from './app/screens/AccountScreen';
import ListingScreen from './app/screens/ListingScreen';
import AppTextInput from './app/component/AppTextInput';

export default function App() {
  const [firstName, setFirstName] = useState();
  const [isNew, setIsNew] = useState(false)

  // return <MessagesScreen />;
  // return <ListingScreen />


  return (<Screen>
    <Switch value={isNew}
      onValueChange={(newValue) => setIsNew(newValue)}
    >

    </Switch>

  </Screen>)

  // return (
  //   <Screen>
  //     <AppTextInput
  //       placeholder="First Name"
  //       icon="email"
  //     />

  //   </Screen>
  // )

  // return (
  //   <Screen>
  //     <Text> {firstName}</Text>
  //     <TextInput
  //       keyboardType=""
  //       clearButtonMode="always"
  //       secureTextEntry
  //       onChangeText={text => setFirstName(text)}
  //       placeholder="Firt Name"
  //       style={{
  //         borderBottomColor: "#ccc",
  //         borderBottomWidth: 1
  //       }}
  //     />

  //   </Screen>
  // )





  return <Screen>
    <ListItem title="My title"
      subTitle="My subtitle"
      IconComponent={<Icon name="email" />} />
  </Screen>


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


