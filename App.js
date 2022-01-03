import React, { useState, useEffect } from 'react';
import { Switch, Text, TextInput, View, Button, Image } from 'react-native';
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
import AppPicker from './app/component/AppPicker';
import LoginScreen from './app/screens/LoginScreen';
import ListEditScreen from './app/screens/ListEditScreen';
import * as ImagePicker from 'expo-image-picker';
import { Permissions } from "expo-permissions";
import ImageInput from './app/component/ImageInput';
import ImageInputList from './app/component/ImageInputList';

import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer, useNavigation } from "@react-navigation/native"
import AuthNavigation from './app/navigation/AuthNavigation';
import NavigationTheme from './app/navigation/navigationTheme';
import AppNavigator from './app/navigation/AppNavigator';



export default function App() {

  return <NavigationContainer theme={NavigationTheme}>
    {/* <AuthNavigation /> */}
    <AppNavigator />
  </NavigationContainer>


  const [imageUris, setImageUris] = useState([]);

  const handleAdd = (uri) => {
    return setImageUris([...imageUris, uri]);

  }

  const handleRemove = (uri) => {
    setImageUris(imageUris.filter(imageUri => imageUri !== uri));
  }


  return <Screen>
    <ImageInputList
      imageUris={imageUris}
      onAddImage={handleAdd}
      onRemoveImage={handleRemove} />
  </Screen>


  // return <MessagesScreen />;

  // return <ListingScreen />

  // return <LoginScreen />
  // return <ListEditScreen />

  // return <Screen>
  //   <AppPicker
  //     selectedItem={category}
  //     onSelectItem={item => setCategory(item)}
  //     items={categories} icon="apps" placeholder="Category" />
  //   <AppTextInput icon="email" placeholder="Email" />
  // </Screen>

  // return (<Screen>
  //   <Switch value={isNew}
  //     onValueChange={(newValue) => setIsNew(newValue)}>
  //   </Switch>
  // </Screen>)

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


