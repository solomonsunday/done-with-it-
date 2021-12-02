import React from 'react'
import { StyleSheet, View } from 'react-native'
import colors from '../config/colors'

const ListItemSeparator = () => {
    return (
        <View style={styles.separator} />

    )
}

const styles = StyleSheet.create({
    separeatr: {
        width: '100%',
        hreight: 1,
        backgroundColor: colors.light
    }
})

export default ListItemSeparator
