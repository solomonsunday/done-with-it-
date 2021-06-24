
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, Image, SafeAreaView, Alert, TouchableOpacity, Button, View } from 'react-native';
import { useDimension, useDeviceOrientation } from '@react-native-community/hooks';

export default function App() {
    // let x = 1;
    // console.log("App executed")
    const { landscape } = useDeviceOrientation();

    return (
        <>
            {/* <SafeAreaView style={styles.container}>
        <Text >Hello World, I will so explore this technology, Yaay i am back</Text>
        <TouchableOpacity onPress={() => { console.log("Image Press"), alert("Image tapped") }}>
          <Image
            source={{
              width: 200,
              height: 300,
              uri: "https://picsum.photos/200/300",

            }} />
        </TouchableOpacity>
        <StatusBar style="auto" />
      </SafeAreaView> */}

            {/* <SafeAreaView style={styles.container}>
        <Button title="Click Me"
          color="orange"
          onPress={() =>
            Alert.prompt("My title", "my Message",
              text => console.log(text))} />

      </SafeAreaView> */}

            <SafeAreaView style={styles.container}>
                <View style={{
                    backgroundColor: "dodgerblue",
                    width: "100%",
                    height: landscape ? "100%" : "30%",
                }}>

                </View>
            </SafeAreaView>
        </>
    );
}



const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
    },
});
