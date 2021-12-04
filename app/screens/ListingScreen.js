import React from 'react';
import { FlatList, StyleSheet } from 'react-native';
import Card from '../component/Card';

import Screen from '../component/Screen';
import colors from '../config/colors';


const listings = [
    {
        id: 1,
        title: 'Brown jacket for sale ',
        price: 7000,
        image: require('../../app/assets/jacket.jpg')
    },
    {
        id: 2,
        title: 'Couch in great condition',
        price: 4000,
        image: require('../assets/traypan.png')
    },
    {
        id: 3,
        title: 'Tray pan for sale',
        price: 10000,
        image: require('../assets/couch.jpg')
    }
]

const ListingScreen = (props) => {
    return (
        <Screen style={styles.screen}>
            <FlatList
                data={listings}
                keyExtractor={listing => listing.id.toString()}
                renderItem={({ item }) =>
                    <Card
                        title={item.title}
                        subTitle={"N" + item.price}
                        image={item.image} />
                }

            />
        </Screen>
    );
}

const styles = StyleSheet.create({
    screen: {
        padding: 20,
        backgroundColor: colors.light,
    }
})

export default ListingScreen
