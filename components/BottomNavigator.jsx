import React from 'react';
import {CommonActions} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {BottomNavigation} from 'react-native-paper';
import Icon from 'react-native-vector-icons/Entypo';
import {Favourites, Product, Users} from "./StackNavigator";

const TabScreenData = [
    {
        name: 'products',
        component: Product,
        options: {
            tabBarLabel: 'Store',
            tabBarIcon: ({color, size}) => <Icon name="shop" size={size} color={color}/>,
        },
    },
    {
        name: 'favourites',
        component: Favourites,
        options: {
            tabBarLabel: 'Favorites',
            tabBarIcon: ({color, size}) => <Icon name="heart" size={size} color={color}/>,
        },
    },
    {
        name: 'users',
        component: Users,
        options: {
            tabBarLabel: 'User',
            tabBarIcon: ({color, size}) => <Icon name="user" size={size} color={color}/>,
        },
    },
];

const Tab = createBottomTabNavigator();

const getIcon = ({route, focused, color, descriptors}) => {
    const {options} = descriptors[route.key];
    if (options.tabBarIcon) {
        return options.tabBarIcon({focused, color, size: 24});
    }
    return null;
}

const getLabelText = ({route, descriptors}) => {
    const {options} = descriptors[route.key];
    return options.tabBarLabel !== undefined ? options.tabBarLabel :
        options.title !== undefined ? options.title :
            route.title;
}

const onTabPress = ({route, preventDefault, navigation, state}) => {
    const event = navigation.emit({
        type: 'tabPress',
        target: route.key,
        canPreventDefault: true,
    });

    if (!event.defaultPrevented) {
        navigation.dispatch({
            ...CommonActions.navigate(route.name, route.params),
            target: state.key,
        });
    } else {
        preventDefault();
    }
}

export default function BottomNavigator() {
    return (
        <Tab.Navigator
            screenOptions={{headerShown: false}}
            tabBar={({navigation, state, descriptors, insets}) => (
                <BottomNavigation.Bar
                    navigationState={state}
                    safeAreaInsets={insets}
                    onTabPress={({route, preventDefault}) => onTabPress({route, preventDefault, navigation, state})}
                    renderIcon={(props) => getIcon({...props, descriptors})}
                    getLabelText={(props) => getLabelText({...props, descriptors})}
                />
            )}
        >
            {TabScreenData.map(tab => (
                <Tab.Screen
                    key={tab.name}
                    name={tab.name}
                    component={tab.component}
                    options={tab.options}
                />
            ))}
        </Tab.Navigator>
    );
}