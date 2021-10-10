import { StyleSheet, Dimensions } from 'react-native';
import { title, primary, content } from '../../constants/color';

const screenHeight = Dimensions.get('screen').height;
const screenWidth = Dimensions.get('screen').width;
export default StyleSheet.create({
    container: {
        justifyContent: 'space-between',
        alignItems:'center',
        height: screenHeight / 12,
        width: screenWidth,
        flexDirection:'row',
        paddingHorizontal: 15,
    },
    title: {
        color: title,
        fontSize: 20,
        fontWeight: '400'
    },
    extra_title: {
        color: title,
        fontSize: 14,
        fontWeight: '400'
    },
    titleContainer: {
        alignItems:'center',
        justifyContent:'center'
    }
});