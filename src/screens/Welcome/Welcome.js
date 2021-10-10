import React, { useEffect } from 'react'
import {
    TouchableOpacity,
    Text,
    View,
    Image,
} from 'react-native';
import style from './style';
import {
    LOGIN
} from '../../constants/ScreenName'


export default function Welcome({ navigation }) {
    return (
        <View style={style.container}>
            <Text style={style.title}>Welcome to PCare</Text>
            <Image
                style={style.logo}
                source={require('../../assets/images/wallpaper.png')}
            />
            <View style={style.buttonContainer}>
                <TouchableOpacity style={style.button}>
                    <Text style={style.button_title}>Sign up</Text>
                </TouchableOpacity>
                <TouchableOpacity style={style.button}
                    onPress={() => navigation.navigate(LOGIN)}>
                    <Text style={style.button_title}>Log in</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}