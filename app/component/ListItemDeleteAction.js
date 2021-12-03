import React from 'react';
import { View, StyleSheet } from 'react-native';
import colors from '../config/colors';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';


const ListItemDeleteAction = ({ onPress }) => {
    return (
        <TouchableWithoutFeedback onPress={onPress}>
            <View style={styles.container}>
                <MaterialCommunityIcons name="trash-can" color={colors.white} size={35} />

            </View>
        </TouchableWithoutFeedback>
    )
}


const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.danger,
        width: 70,
        justifyContent: "center",
        alignItems: "center",
        height: "100%"
    }


})
export default ListItemDeleteAction
