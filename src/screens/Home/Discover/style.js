import { StyleSheet, Dimensions } from 'react-native';
import { title, primary, content } from '../../../constants/color';

const screenHeight = Dimensions.get('screen').height;
const screenWidth = Dimensions.get('screen').width;
export default StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: 'white',
    },
    animalContainer: {
        flex: 1,
    },
    animalItem: {
        paddingVertical: 5,
        paddingHorizontal: 30,
        borderRadius: 10,
        borderWidth: 1,
        marginHorizontal: 15,
        justifyContent: 'center',
    },
    animalContent: {
        color: title,
        fontSize: 16,
    },
    carerContainer: {
        flex: 11,
        width: screenWidth,
    },
    carerItem: {
        height: screenHeight / 8,
        paddingVertical: 5,
        paddingHorizontal: 20,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    carerAvatar: {
        height: 80,
        width: 80,
        borderRadius: 40,
    },
    carerItem_right: {
        justifyContent: 'space-evenly',
        height: '80%',
    },
    carerItem_center: {
        flex: 2,
        height: '80%',
        justifyContent: 'space-evenly',
        paddingHorizontal: 10,
    },
    carerItem_left: {
        flex: 1,
        alignItems: 'center',
    },
    ratingRow: {
        alignItems: 'center',
        flexDirection: 'row',
    },
});