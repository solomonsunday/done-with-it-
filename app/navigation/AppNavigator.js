import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import AccountScreen from "../screens/AccountScreen";
import ListEditScreen from "../screens/ListEditScreen";
import ListingScreen from "../screens/ListingScreen";
import FeedNavigator from "./FeedNavigator";
import AccountNavigator from "./AccountNavigator";
import { MaterialCommunityIcons } from "@expo/vector-icons"
import NewlistingButton from "./NewlistingButton";
import navigationTheme from "./navigationTheme";
import route from "./route";

const Tab = createBottomTabNavigator();

const AppNavigator = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Feed" component={FeedNavigator}
                options={{
                    tabBarIcon: ({ color, size }) =>
                        <MaterialCommunityIcons name="home" color={color} sie={size} />
                }} />
            <Tab.Screen name="ListingEdit" component={ListEditScreen}
                options={({ navigation }) => ({
                    tabBarButton: () => <NewlistingButton onPress={() => navigation.navigate(route.LISTING_EDIT)} />,
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="plus-circle" color={color} sie={size} />)
                })}
            />
            <Tab.Screen name="Account" component={AccountNavigator}
                options={{
                    tabBarIcon: ({ color, size }) =>
                        <MaterialCommunityIcons name="account" color={color} size={size} />
                }}
            />
        </Tab.Navigator>
    )
}
export default AppNavigator;