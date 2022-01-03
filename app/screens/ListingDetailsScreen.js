import React from 'react';
import { Image, StyleSheet, View } from 'react-native';
import AppText from '../component/AppText/AppText';
import ListItem from '../component/ListItem';
import colors from '../config/colors';

const ListingDetailsScreen = ({ route }) => {
    const listing = route.params;
    return (
        <View>
            <Image style={styles.image} source={listing.image} />
            <View style={styles.detailsContainer}>
                <AppText style={styles.title}>{listing.title}</AppText>
                <AppText style={styles.price}> N{listing.price}</AppText>
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
