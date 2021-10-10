import React, { useEffect, useState } from 'react'
import {
    TouchableOpacity,
    Text,
    View,
    TextInput,
    ImageBackground,
    Image,
    ScrollView,
} from 'react-native';
import MCIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import style from './style';
import Header from '../../components/Header/Header';
import { chosen_menu, primary } from '../../constants/color';
import About from './Components/About';
import Review from './Components/Review';


export default function CarerProfile({ navigation, route }) {
    const { carer } = route.params;
    const [tab, setTab] = useState(0);
    const tabs = [
        {
            title: 'About',
            id: 0,
        },
        {
            title: 'Reviews',
            id: 1,
        },
        {
            title: 'Pricing',
            id: 2,
        }
    ]
    return (
        <View style={style.container}>
            <Header
                mainTitle={'Profile'} />
            <View style={style.informationContainer}>
                <Image
                    source={{ uri: carer.background }}
                    style={style.backgroundImage} />
                <Image
                    source={{ uri: carer.avatar }}
                    style={style.avatar} />
                <View style={style.iconRow}>
                    <TouchableOpacity>
                        <MCIcon
                            name='bookmark' color={'#ec6a6a'} size={30} />
                    </TouchableOpacity>
                    <View style={style.ratingRow}>
                        <MCIcon
                            name='star' color={'gold'} size={30} />
                        <Text style={style.rating}>{carer.rating}</Text>
                    </View>
                </View>
                <Text style={style.name}>{carer.name}</Text>
                <Text style={style.text}>{carer.age}, {carer.nationality}</Text>
            </View>
            <View style={style.tabContainer}>
                <View style={style.tabHeader}>
                    {tabs.map(item =>
                        <TouchableOpacity
                            key={item.id}
                            onPress={() => setTab(item.id)}
                            style={[style.tabButton, {
                                borderBottomColor: item.id == tab ? chosen_menu : primary,
                                borderBottomWidth: item.id == tab ? 4 : 2
                            }]}>
                            <Text style={style.name}>{item.title}</Text>
                        </TouchableOpacity>
                    )}
                </View>
                {tab == 0
                    ? <About data={carer} />
                    : tab == 1
                        ? <Review data={carer} />
                        : null}
            </View>
        </View>
    );
}