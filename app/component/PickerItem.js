import React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
import AppText from './AppText/AppText';
import { MaterialCommunityIcons } from "@expo/vector-icons"

const PickerItem = ({ onPress, label, name }) => {
    return (
        <TouchableOpacity onPress={onPress}>
            <AppText style={styles.text}>
                {label}
            </AppText>
            <MaterialCommunityIcons name={name} />
        </TouchableOpacity>
    )
}


const styles = StyleSheet.create({
    text: {
        padding: 20,
    }

})
export default PickerItem
