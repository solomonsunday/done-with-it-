import React from 'react'
import { StyleSheet, View } from 'react-native'
import colors from '../config/colors';
import { MaterialCommunityIcons } from "@expo/vector-icons"
import { TouchableOpacity } from 'react-native-gesture-handler';


const NewlistingButton = ({ onPress }) => {
    return (
        <TouchableOpacity style={styles.container} onPress={onPress}>
            <View>
                <MaterialCommunityIcons name='plus-circle'
                    size={50}
                    color={colors.white} />
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        backgroundColor: colors.primary,
        borderColor: colors.white,
        borderWidth: 10,
        borderRadius: 37.5,
        bottom: 20,
        height: 75,
        justifyContent: 'center',
        width: 75,
    }
})

export default NewlistingButton
