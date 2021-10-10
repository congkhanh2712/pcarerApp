import React, { useEffect, useState } from 'react'
import {
    TouchableOpacity,
    Text,
    View,
    Image,
    ScrollView,
    Dimensions,
} from 'react-native';
import Fontisto from 'react-native-vector-icons/Fontisto';
import MCIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import style from './style';
import { useDispatch, useSelector } from 'react-redux';
import { getPetsRequest } from '../../../store/actions/petAction';
import { getCarersRequest } from '../../../store/actions/carerAction';
import Header from '../../../components/Header/Header';
import { content, primary } from '../../../constants/color';
import { CARER_PROFILE } from '../../../constants/ScreenName';


export default function Discover({ route, navigation }) {
    const { keyword } = route.params;
    const petState = useSelector((state) => state.petReducers);
    const carerState = useSelector((state) => state.carerReducers);
    const dispatch = useDispatch();

    const [petList, setPetList] = useState([]);
    const [chosingPet, setChosingPet] = useState({
        id: -1,
        name: '',
    });
    const [careList, setCarerList] = useState([]);

    useEffect(() => {
        getData();
    }, [])
    useEffect(() => {
        if (petState.get_pets.data != null) {
            setPetList(petState.get_pets.data)
        }
    }, [petState.get_pets])
    useEffect(() => {
        if (carerState.get_carers.data != null) {
            let result = carerState.get_carers.data.filter(item => item.address.indexOf(keyword) != -1)
            setCarerList(result)
        }
    }, [carerState.get_carers])
    const getData = () => {
        dispatch(getPetsRequest());
        dispatch(getCarersRequest());
    }
    const animalPress = (id) => {
        if (id != chosingPet) {
            setChosingPet(id)
        } else {
            setChosingPet({
                id: -1,
                name: '',
            })
        }
    }
    const filterbyAnimal = (pet) => {
        if (pet != null) {
            return pet.indexOf(chosingPet.name)
        }
        return -1;
    }
    return (
        <View style={style.container}>
            <Header
                mainTitle={'Discover'}
                extraTitle={`Currently in ${keyword}`}
                righticon={<Fontisto name='nav-icon-grid-a' color='black' size={25} />} />
            <View style={style.animalContainer}>
                <ScrollView
                    contentContainerStyle={{ alignItems: 'center' }}
                    horizontal={true}>
                    {petList.map(item =>
                        <TouchableOpacity
                            key={item.id}
                            onPress={() => animalPress(item)}
                            style={[style.animalItem, { borderColor: chosingPet.id == item.id ? primary : content }]}>
                            <Text style={style.animalContent}>{item.name}</Text>
                        </TouchableOpacity>
                    )}
                </ScrollView>
            </View>
            <View style={style.carerContainer}>
                <ScrollView>
                    {careList.filter(item => filterbyAnimal(item.pet1) != -1 || filterbyAnimal(item.pet2) != -1)
                        .map(item =>
                            <TouchableOpacity
                                key={item.id}
                                onPress={() => navigation.navigate(CARER_PROFILE, {
                                    carer: item
                                })}
                                style={style.carerItem}>
                                <View style={style.carerItem_left}>
                                    <Image style={style.carerAvatar} source={{ uri: item.avatar }} />
                                </View>
                                <View style={style.carerItem_center}>
                                    <Text style={style.animalContent} numberOfLines={1}>{item.name}</Text>
                                    <View style={style.ratingRow}>
                                        <MCIcon
                                            name='star' color={'gold'} size={25} />
                                        <Text style={[style.animalContent, { fontSize: 15, paddingHorizontal: 5 }]}>{item.rating}</Text>
                                    </View>
                                </View>
                                <View style={style.carerItem_right}>
                                    <Text style={style.animalContent} numberOfLines={1}>{item.price} zl/h</Text>
                                    <View style={{ flexDirection: 'row' }}>
                                        <MCIcon
                                            name={item.pet1} color={content} size={30} />
                                        {item.pet2
                                            ? <MCIcon
                                                name={item.pet2} color={content} size={30} />
                                            : null}
                                    </View>
                                </View>
                            </TouchableOpacity>
                        )}
                </ScrollView>
            </View>
        </View>
    );
}