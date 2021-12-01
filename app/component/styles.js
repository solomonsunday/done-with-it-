import { StyleSheet, Platform } from 'react-native'

const styles = StyleSheet.create({
    text: {
        fontSize: 18,
        fontFamily: Platform.OS === "android" ? 8 : 10,
    },
})

export default styles