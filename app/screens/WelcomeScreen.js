import React from 'react';
import { Image, ImageBackground, StyleSheet, Text, View } from 'react-native';
import AppButton from '../component/AppButton';

import color from '../config/colors'
import route from '../navigation/route';

function WelcomeScreen({ navigation }) {
    return (
        <ImageBackground
            blurRadius={2}
            style={styles.background}
            source={require("../assets/airspace.jpg")}>

            <View style={styles.logoContainer}>
                <Image
                    style={styles.logo}
                    source={require("../assets/logo.png")}></Image>
                <Text style={styles.tagLine}>Sell what you dont want</Text>
            </View>

            <View style={styles.buttonContainer}>
                <AppButton title="Login" onPress={() => navigation.navigate(route.LOGIN)} />
                <AppButton title="Register" color="secondary" onPress={() => navigation.navigate(route.REGISTER)} />

            </View>

        </ImageBackground>
    );
}
const styles = StyleSheet.create({
    buttonContainer: {
        padding: 20,
        width: "100%"
    },
    background: {
        flex: 1,
        justifyContent: "flex-end",
        alignItems: "center",

    },
    logo: {
        width: 200,
        height: 100,
    },
    logoContainer: {
        position: "absolute",
        top: 70,
        alignItems: "center",
    },
    tagLine: {
        fontSize: 25,
        fontWeight: "600",
    },

})

export default WelcomeScreen;