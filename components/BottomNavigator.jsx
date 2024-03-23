import React from 'react';
import { StyleSheet } from 'react-native';

import {CommonActions} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {BottomNavigation} from 'react-native-paper';
import Icon from 'react-native-vector-icons/Entypo';
import {Favourites, Product, Users} from "./StackNavigator";

const Tab = createBottomTabNavigator();

export default function BottomNavigator() {
    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: false,
            }}
            tabBar={({ navigation, state, descriptors, insets }) => (
                <BottomNavigation.Bar
                    navigationState={state}
                    safeAreaInsets={insets}
                    onTabPress={({ route, preventDefault }) => {
                        const event = navigation.emit({
                            type: 'tabPress',
                            target: route.key,
                            canPreventDefault: true,
                        });

                        if (event.defaultPrevented) {
                            console.log('comes here');
                            preventDefault();
                        } else {
                            console.log(route.name, route.params);
                            navigation.dispatch({
                                ...CommonActions.navigate(route.name, route.params),
                                target: state.key,
                            });
                        }
                    }}
                    renderIcon={({ route, focused, color }) => {
                        const { options } = descriptors[route.key];
                        if (options.tabBarIcon) {
                            return options.tabBarIcon({ focused, color, size: 24 });
                        }

                        return null;
                    }}
                    getLabelText={({ route }) => {
                        const { options } = descriptors[route.key];
                        return options.tabBarLabel !== undefined
                            ? options.tabBarLabel
                            : options.title !== undefined
                                ? options.title
                                : route.title;
                    }}
                />
            )}
        >
            <Tab.Screen
                name="products"
                component={Product}
                options={{
                    tabBarLabel: 'Store',
                    tabBarIcon: ({ color, size }) => {
                        return <Icon name="shop" size={size} color={color} />;
                    },
                }}
            />
            <Tab.Screen
                name="favourites"
                component={Favourites}
                options={{
                    tabBarLabel: 'Favorites',
                    tabBarIcon: ({ color, size }) => {
                        return <Icon name="heart" size={size} color={color} />;
                    },
                }}
            />
            <Tab.Screen
                name="users"
                component={Users}
                options={{
                    tabBarLabel: 'User',
                    tabBarIcon: ({ color, size }) => {
                        return <Icon name="user" size={size} color={color} />;
                    },
                }}
            />
        </Tab.Navigator>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});