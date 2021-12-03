import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import ListItem from '../component/ListItem';
import ListItemDeleteAction from '../component/ListItemDeleteAction';
import ListItemSeparator from '../component/ListItemSeparator';
import Screen from '../component/Screen';


const initialMessages = [
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

    const [messages, setMessages] = useState(initialMessages);
    const [refreshing, setRefreshing] = useState(false);

    const handleDelete = (message) => {
        //delete the message from list of messages
        const newMessages = messages.filter(m => m.id !== message.id);
        setMessages(newMessages);
        //Also can be written as
        // setMessages(messages.filter(m => m.id !== message.id));
        //call the server



    }

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
                    renderRightActions={() =>
                        <ListItemDeleteAction onPress={() => handleDelete(item)} />}
                />
                )}
                ItemSeparatorComponent={ListItemSeparator}
                refreshing={refreshing}
                onRefresh={() => {
                    setMessages([
                        {
                            id: 2,
                            title: 'T2',
                            description: 'D2',
                            image: require('../assets/chairs2.jpg')
                        }
                    ])
                }}

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
