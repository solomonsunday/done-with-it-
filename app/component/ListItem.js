import React from 'react'
import { View, StyleSheet, Image, TouchableHighlight } from 'react-native'
import colors from '../config/colors'
import AppText from './AppText/AppText'
import Swipeable from 'react-native-gesture-handler/Swipeable'
// import styles from './styles'

const ListItem = ({ title, subTitle, image, IconComponent: IconComponent, onPress, renderRightActions }) => {
    return (
        <Swipeable renderRightActions=
            {renderRightActions}>
            <TouchableHighlight
                underlayColor={colors.light}
                onPress={onPress}>
                <View style={styles.container}>
                    {IconComponent}
                    {image && <Image style={styles.image} source={image} />}
                    <View style={styles.detalsContainer}>
                        <AppText style={styles.title}>{title}</AppText>
                        {subTitle && <AppText style={styles.subTitle}>{subTitle}</AppText>
                        }
                    </View>
                </View>
            </TouchableHighlight>
        </Swipeable>
    )
}


const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        padding: 20,
        backgroundColor: colors.white
    },
    detalsContainer: {
        marginLeft: 10,
        justifyContent: "center"
    },
    image: {
        width: 70,
        height: 70,
        borderRadius: 35,
    },
    subTitle: {
        color: colors.medium,
    },
    title: {
        fontWeight: "bold",
    }
})

export default ListItem
