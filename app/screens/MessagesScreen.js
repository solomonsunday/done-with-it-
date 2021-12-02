import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import ListItem from '../component/ListItem';
import Screen from '../component/Screen';


const messages = [
    {
        id: 1,
        title: 'T1',
        description: 'D1',
        image: require('../assets/solomon.jpeg')
    },
    {
        id: 2,
        title: 'T2',
        description: 'D2',
        image: require('../assets/chairs2.jpg')
    },
]

function MessagesScreen() {
    return (
        <Screen style={styles.screen}>
            <FlatList
                data={messages}
                keyExtractor={messages => messages.id.toString()}
                renderItem={({ item }) =>
                (<ListItem
                    title={item.title}
                    subTitle={item.description}
                    image={item.image}
                    onPress={() => console.log("item selected", item)}
                />
                )}
                ItemSeparatorComponent={() => (
                    <View style={{ width: "100%", height: 1, backgroundColor: "#000" }} />
                )}
            />

        </Screen>
    )
}

const styles = StyleSheet.create({
    screen: {
        // paddingTop: Platform.OS === "android" ? StatusBar.currentheight : 0
    }
})

export default MessagesScreen
