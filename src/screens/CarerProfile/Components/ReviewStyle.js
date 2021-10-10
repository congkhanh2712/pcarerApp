import { StyleSheet, Dimensions } from 'react-native';
import { title, primary, content } from '../../../constants/color';

const screenHeight = Dimensions.get('screen').height;
const screenWidth = Dimensions.get('screen').width;
export default StyleSheet.create({
    container: {
        flex: 1,
        paddingVertical: 10,
    },
    reviewItem: {
        paddingVertical: 5,
        paddingHorizontal: 20,
        flexDirection: 'row',
    },
    reviewAvatar: {
        height: 60,
        width: 60,
        borderRadius: 30,
    },
    reviewItem_right: {
        width: '15%',
        alignItems:'center',
        justifyContent:'flex-end',
        flexDirection:'row',
    },
    reviewItem_center: {
        width: '60%',
    },
    reviewItem_left: {
        width: '25%',
    },
    nameRow: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    name: {
        color: content,
        fontSize: 18
    },
    rating: {
        color: content,
        fontSize: 15
    },
    comment: {
        color: content,
        fontSize: 12
    },
    moreButton: {
        color: title,
        fontWeight: '500',
    }
});