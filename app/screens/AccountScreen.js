import React from 'react'
import { View, StyleSheet, FlatList } from 'react-native';
import Icon from '../component/Icon';

import ListItem from '../component/ListItem'
import ListItemSeparator from '../component/ListItemSeparator';
import Screen from '../component/Screen'
import colors from '../config/colors'


const menuItems = [
    {
        title: "My Listing",
        icon: {
            name: "format-list-bulleted",
            backgroundColor: colors.primary
        },
    },
    {
        title: "My Messages",
        icon: {
            name: "email",
            backgroundColor: colors.secondary
        },
    }
]

const AccountScreen = () => {
    return (
        <Screen style={styles.screen}>
            <View style={styles.container}>
                <ListItem
                    title="Solomon Sunday"
                    subTitle="Software Engineer"
                    image={require("../assets/solomon.jpeg")}
                />
            </View>
            <View style={styles.container}>
                <FlatList
                    data={menuItems}
                    keyExtractor={menuItem => menuItem.title}
                    ItemSeparatorComponent={ListItemSeparator}
                    renderItem={({ item }) =>
                        <ListItem
                            title={item.title}
                            IconComponent={
                                <Icon
                                    name={item.icon.name}
                                    backgroundColor={item.icon.backgroundColor}
                                />
                            }
                        />
                    }
                />
            </View>
            <ListItem
                title="Log out"
                IconComponent={<Icon name="logout" backgroundColor="#ffe66d" />}
            />

        </Screen>
    )
}

const styles = StyleSheet.create(
    {
        container: {
            marginVertical: 20
        },

        screen: {
            backgroundColor: colors.light
        }
    }
)

export default AccountScreen
