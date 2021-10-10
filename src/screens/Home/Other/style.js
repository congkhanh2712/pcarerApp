import { StyleSheet, Dimensions } from 'react-native';
import { title, primary, content } from '../../../constants/color';

const screenHeight = Dimensions.get('screen').height;
const screenWidth = Dimensions.get('screen').width;
export default StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-evenly',
        backgroundColor:'white'
    },
});