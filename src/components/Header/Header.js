import React, { useEffect, useState } from 'react'
import {
    TouchableOpacity,
    Text,
    View,
    TextInput,
    ImageBackground,
} from 'react-native';
import MCIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import { title } from '../../constants/color';
import { useNavigation } from '@react-navigation/native';
import style from './style';


export default function Header({ righticon, mainTitle, extraTitle }) {
    const navigation = useNavigation();
    return (
        <View style={style.container}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
                <MCIcon name='keyboard-backspace'
                    color={title}
                    size={25} />
            </TouchableOpacity>
            <View style={style.titleContainer}>
                <Text style={style.title}>{mainTitle}</Text>
                {extraTitle
                    ? <Text style={style.extra_title}>{extraTitle}</Text>
                    : null}
            </View>
            {righticon
                ? <TouchableOpacity>
                    {righticon}
                </TouchableOpacity>
                : <View style={{ width: 25, height: 25 }} />}
        </View>
    );
}