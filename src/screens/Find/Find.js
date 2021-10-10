import React, { useEffect, useState } from 'react'
import {
    TouchableOpacity,
    Text,
    View,
    TextInput,
    ImageBackground,
} from 'react-native';
import MCIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import { DISCOVER_SCREEN, DISCOVER_TAB, HOME_SCREEN } from '../../constants/ScreenName';
import style from './style';


export default function Find({ navigation }) {
    const [keyword, setKeyword] = useState('');
    return (
        <ImageBackground style={style.container}
            imageStyle={{ opacity: 0.2 }}
            source={require('../../assets/images/wallpaper.png')}>
            <View style={style.wrapper}>
                <Text style={style.title}>Find a pet carer in</Text>
                <View style={style.inputContainer}>
                    <TextInput
                        value={keyword}
                        autoCapitalize="words"
                        onChangeText={(content) => setKeyword(content)}
                        style={style.input} />
                    <MCIcon name='square' color='black' size={10} />
                </View>
            </View>
            <View style={style.buttonContainer}>
                <TouchableOpacity
                    onPress={() => navigation.navigate(HOME_SCREEN, {
                        screen: DISCOVER_TAB,
                        params: {
                            screen: DISCOVER_SCREEN,
                            params: {
                                keyword
                            }
                        }
                    }
                    )}
                    style={style.button}>
                    <Text style={style.button_title}>Go</Text>
                </TouchableOpacity>
            </View>
        </ImageBackground>
    );
}