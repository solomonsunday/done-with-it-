import React from 'react';
import { Image, StyleSheet, View } from 'react-native';
import AppText from '../component/AppText/AppText';
import ListItem from '../component/ListItem';
import colors from '../config/colors';

const ListingDetailsScreen = () => {
    return (
        <View>
            <Image style={styles.image} source={require("../assets/chairs.jpg")} />
            <View style={styles.detailsContainer}>
                <AppText style={styles.title}>Reading chair</AppText>
                <AppText style={styles.price}> N400</AppText>
                <View style={styles.userContainer}>
                    <ListItem
                        image={require("../assets/solomon.jpeg")}
                        title="Dev Solomon"
                        subTitle="5 Listings"
                    />
                </View>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    detailsContainer: {
        padding: 20,
    },
    image: {
        width: '100%',
        height: 300
    },
    price: {
        color: colors.secondary,
        fontWeight: "bold",
        fontSize: 20,
        marginVertical: 10
    },
    title: {
        marginBottom: 7,
        fontSize: 24,
        fontWeight: "bold"
    },
    userContainer: {
        marginVertical: 40,
    }
})

export default ListingDetailsScreen
