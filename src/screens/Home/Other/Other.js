import React, { useEffect, useState } from 'react'
import {
    TouchableOpacity,
    Text,
    View,
    TextInput,
    ImageBackground,
} from 'react-native';
import MCIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import style from './style';


export default function Other({ navigation }) {
    const [keyword, setKeyword] = useState('');
    return (
        <View style={style.container}>
            <Text>Other</Text>
        </View>
    );
}