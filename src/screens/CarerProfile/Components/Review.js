import React, { useEffect, useState } from 'react'
import {
    TouchableOpacity,
    Text,
    View,
    TextInput,
    FlatList,
    Image,
} from 'react-native';
import MCIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import style from './ReviewStyle';
import { useDispatch, useSelector } from 'react-redux';
import { getReviewsRequest } from '../../../store/actions/reviewAction';


export default function Review({ data }) {
    const reviewState = useSelector((state) => state.reviewReducers);
    const dispatch = useDispatch();
    const [reviewList, setReviewList] = useState([])
    useEffect(() => {
        getReviews();
    }, [])
    useEffect(() => {
        if (reviewState.get_reviews.data != null) {
            setReviewList(reviewState.get_reviews.data)
        }
    }, [reviewState.get_reviews])
    const getReviews = async () => {
        dispatch(getReviewsRequest(data.id))
    }
    return (
        <View style={style.container}>
            <FlatList
                data={reviewList}
                ItemSeparatorComponent={() => <View style={{ height: 5 }} />}
                renderItem={({ item }) =>
                    <View
                        style={style.reviewItem}
                        key={item.id}>
                        <View style={style.reviewItem_left}>
                            <Image style={style.reviewAvatar} source={{ uri: item.avatar }} />
                        </View>
                        <View style={style.reviewItem_center}>
                            <View style={style.nameRow}>
                                <Text style={style.name} numberOfLines={1}>{item.user_name}</Text>
                                <MCIcon name='star' color='gold' size={20} style={{ paddingHorizontal: 5 }} />
                                <Text style={style.rating} numberOfLines={1}>{item.point}</Text>
                            </View>
                            <Text style={style.comment} numberOfLines={2}>{item.comment}</Text>
                            <TouchableOpacity>
                                <Text style={style.moreButton}>More</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={style.reviewItem_right}>
                            <Text style={{ color: '#4ec957', fontSize: 10, fontWeight: '500' }} >{item.like}</Text>
                            <AntDesign name='like1' color='#7b7b7b' size={15} style={{ paddingHorizontal: 2 }} />
                        </View>
                    </View>
                } />
        </View>
    );
}