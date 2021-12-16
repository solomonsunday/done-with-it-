import React, { useRef } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import ImageInput from './ImageInput';

const ImageInputList = ({ imageUris = [], onRemoveImage, onAddImage }) => {
    const scrollView = useRef();

    return (
        <View>
            <ScrollView ref={scrollView}
                onContentSizeChange={() => scrollView.current.scrollToEnd()}
                horizontal={true}>
                <View style={styles.container}>
                    {imageUris && imageUris.length > 0 && imageUris.map(imageUri => {
                        return (<View key={imageUri} style={styles.image}>
                            <ImageInput
                                imageUri={imageUri}
                                onChangeImage={() => onRemoveImage(imageUri)} />
                        </View>)
                    })}

                    <ImageInput onChangeImage={(imageUri) => onAddImage(imageUri)} />

                </View >
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
    },
    image: {

    }
})

export default ImageInputList
