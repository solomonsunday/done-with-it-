import React from 'react'
import { FlatList } from 'react-native'

const messages = [
    {
        id: 1,
        title: 'T1',
        description: 'D1',
        image: require('../assets/airspace.jpg')
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
        <FlatList
            data={messages}
            keyExtractor={messages => messages.id.toString()}
            renderItem={({ item }) => ListItem}
        />
    )
}

export default MessagesScreen
