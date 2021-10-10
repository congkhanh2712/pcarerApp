import React, { useEffect, useState } from 'react'
import {
    TouchableOpacity,
    Text,
    View,
    Alert,
    TextInput,
} from 'react-native';
import style from './style';
import { FIND } from '../../constants/ScreenName';
import { content } from '../../constants/color';
import { useDispatch, useSelector } from 'react-redux';
import { loginFail, loginRequest } from '../../store/actions/authAction';


export default function Login({ navigation }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const authState = useSelector((state) => state.authReducers);
    const dispatch = useDispatch();
    useEffect(() => {
        if (authState.login.data != null) {
            Alert.alert(
                'Notification',
                'Logged in successfully!',
                [
                    { text: 'OK', onPress: () => navigation.replace(FIND) }
                ],
                { cancelable: false }
            )
        } else if (authState.login.error != null) {
            Alert.alert('Notification', authState.login.error)
            setPassword('')
        }
    }, [authState.login])
    const loginPress = () => {
        dispatch(loginRequest({
            email, password
        }))
    }
    return (
        <View style={style.container}>
            <Text style={style.title}>Log in</Text>
            <View style={style.inputContainer}>
                <TextInput
                    placeholder={'e-mail'}
                    placeholderTextColor={content}
                    keyboardType={'email-address'}
                    onChangeText={(content) => setEmail(content)}
                    value={email}
                    style={style.input} />
                <TextInput
                    placeholder={'password'}
                    placeholderTextColor={content}
                    secureTextEntry={true}
                    value={password}
                    onChangeText={(content) => setPassword(content)}
                    style={style.input} />
                <TouchableOpacity>
                    <Text style={style.forgot_password}>forgot password?</Text>
                </TouchableOpacity>
            </View>
            <View style={style.buttonContainer}>
                <TouchableOpacity style={style.button}
                    onPress={() => loginPress()}>
                    <Text style={style.button_title}>Log in</Text>
                </TouchableOpacity>
                <TouchableOpacity style={style.login_facebook_button}>
                    <Text style={style.login_facebook_title}>Log in with Facebook</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}