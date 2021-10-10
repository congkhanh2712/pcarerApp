import React, { useEffect, useState } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
    WELCOME,
    LOGIN,
    FIND,
    HOME_SCREEN,
    NOTIFICATION_SCREEN,
    PROFILE_SCREEN,
    MESSAGE_SCREEN,
    REBOOK_SCREEN,
    DISCOVER_SCREEN,
    CARER_PROFILE,
    DISCOVER_TAB,
} from '../constants/ScreenName';
import { useDispatch, useSelector } from 'react-redux';
import { setUser } from '../store/actions/authAction';
//Icon
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Ionicons from 'react-native-vector-icons/Ionicons';
//screen
import Welcome from '../screens/Welcome/Welcome';
import Login from '../screens/Login/Login';
import Find from '../screens/Find/Find';
import Discover from '../screens/Home/Discover/Discover';
import SplashScreen from '../screens/SplashScreen/SplashScreen';
import Other from '../screens/Home/Other/Other';
import CarerProfile from '../screens/CarerProfile/CarerProfile';
//color
import { chosen_menu, primary, title } from '../constants/color';


const Stack = createNativeStackNavigator();
const DiscoverStack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

export default function MainStack() {
    const [isloading, setIsloading] = useState(false);
    const [user, setUserState] = useState(null)
    const dispatch = useDispatch();
    useEffect(() => {
        loginCheck();
        // AsyncStorage.removeItem('@user')
    }, [])
    const loginCheck = async () => {
        setIsloading(true);
        const userItem = await AsyncStorage.getItem('@user');
        if (userItem != null) {
            setUserState(userItem);
            dispatch(setUser(JSON.parse(user)))
        }
        setTimeout(() => {
            setIsloading(false);
        }, 3000)
    }
    if (isloading) {
        return <SplashScreen />
    } else {
        return (
            <Stack.Navigator screenOptions={{
                headerShown: false
            }}
                initialRouteName={user != null ? FIND : WELCOME}>
                <Stack.Screen name={WELCOME} component={Welcome} />
                <Stack.Screen name={LOGIN} component={Login} />
                <Stack.Screen name={FIND} component={Find} />
                <Stack.Screen name={HOME_SCREEN} component={HomeSreen} />
            </Stack.Navigator>
        );
    }
}
function DiscoverScreen() {
    return (
        <DiscoverStack.Navigator screenOptions={{
            headerShown: false
        }}>
            <DiscoverStack.Screen name={DISCOVER_SCREEN} component={Discover} />
            <DiscoverStack.Screen name={CARER_PROFILE} component={CarerProfile} />
        </DiscoverStack.Navigator>
    );
}
function HomeSreen() {
    return (
        <Tab.Navigator
            screenOptions={{
                tabBarStyle: {
                    backgroundColor: primary,
                },
                tabBarActiveTintColor: chosen_menu,
                tabBarInactiveTintColor: title,
                tabBarShowLabel: false,
            }}>
            <Tab.Screen name={DISCOVER_TAB} component={DiscoverScreen}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <Fontisto name="world-o" color={color} size={size} />
                    ),
                    headerShown: false
                }} />
            <Tab.Screen name={REBOOK_SCREEN} component={Other}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <Icon name="reload" color={color} size={size} />
                    ),
                }} />
            <Tab.Screen name={NOTIFICATION_SCREEN} component={Other}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="notifications-outline" color={color} size={size} />
                    ),
                }} />
            <Tab.Screen name={MESSAGE_SCREEN} component={Other}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <Icon name="email-outline" color={color} size={size} />
                    ),
                }} />
            <Tab.Screen name={PROFILE_SCREEN} component={Other}
                options={{
                    tabBarLabel: '',
                    tabBarIcon: ({ color, size }) => (
                        <Icon name="account-outline" color={color} size={size} />
                    ),
                }} />
        </Tab.Navigator>
    );
};