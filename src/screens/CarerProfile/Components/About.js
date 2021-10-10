import React, { useEffect, useState } from 'react'
import {
    TouchableOpacity,
    Text,
    View,
    TextInput,
    ImageBackground,
    ScrollView
} from 'react-native';
import MCIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { content } from '../../../constants/color';
import style from './AboutStyle';


export default function About({ data }) {
    return (
        <View style={style.container}>
            <ScrollView style={style.informationContainer}>
                <View style={style.row}>
                    <MCIcon name='home-city' color={content} size={30} style={{ width: '12%' }} />
                    <Text style={style.informationText}>{data.address}</Text>
                </View>
                <View style={style.row}>
                    <MCIcon name='foot-print' color={content} size={30} style={{ width: '12%' }} />
                    <Text style={style.informationText}>{'No Information'}</Text>
                </View>
                <View style={style.row}>
                    <FontAwesome name='graduation-cap' color={content} size={30} style={{ width: '12%' }} />
                    <Text style={style.informationText}>{data.certification}</Text>
                </View>
                <View style={[style.row, { justifyContent: 'center' }]}>
                    <TouchableOpacity>
                        <Text style={{ color: '#c2c2c2', fontSize: 16 }}>Show more</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
            <View style={style.buttonContainer}>
                <TouchableOpacity style={style.button}>
                    <Text style={style.buttonText}>Contact</Text>
                </TouchableOpacity>
                <View style={{ flex: 1 }} />
                <TouchableOpacity style={style.button}>
                    <Text style={style.buttonText}>Book</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}