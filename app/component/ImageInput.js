import React, { useEffect } from 'react'
import { Image, StyleSheet, TouchableWithoutFeedback, View, } from 'react-native'
import colors from '../config/colors'
import Screen from './Screen';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';
import { Alert } from 'react-native';

const ImageInput = ({ imageUri, onChangeImage }) => {

    const handlePress = () => {
        if (!imageUri) selectImage();
        else Alert.alert('Delete', 'Are you sure you want to delete this image?', [{
            text: "Yes", onPress: () => onChangeImage(null)
        }, { text: "No" }

        ])
    }
    const selectImage = async () => {
        try {
            const result = await ImagePicker.launchImageLibraryAsync({
                mediaTypes: ImagePicker.MediaTypeOptions.Images,
                quality: 0.5
            });
            if (!result.cancelled)
                onChangeImage(result.uri);
        } catch (error) {
            console.log("Error reading document", error)
        }
    }
    useEffect(() => {
        requestPermission();
    }, [])

    const requestPermission = async () => {
        const result = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (!result.granted) {
            alert("You need to enable permision to access your media library")
        }
    }


    return (
        <TouchableWithoutFeedback onPress={handlePress}>
            <View style={styles.container}>
                {!imageUri && (<MaterialCommunityIcons name="camera" color={colors.medium} size={40} />)
                }
                {imageUri && <Image source={{ uri: imageUri }} style={styles.image} />}
            </View>
        </TouchableWithoutFeedback>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        backgroundColor: colors.light,
        borderRadius: 15,
        justifyContent: 'center',
        height: 100,
        width: 100,
        overflow: "hidden",
        marginRight: 10
    },
    image: {
        width: "100%",
        height: "100%",
    }
})

export default ImageInput
