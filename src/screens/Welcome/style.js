import { StyleSheet, Dimensions } from 'react-native';
import { title, primary, content } from '../../constants/color';

const screenHeight = Dimensions.get('screen').height;
const screenWidth = Dimensions.get('screen').width;
export default StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent:'space-evenly',
        backgroundColor:'white',
    },
    title: {
        color: title,
        fontWeight: 'bold',
        fontSize: 25
    },
    logo: {
        height: screenHeight / 5,
        width: screenHeight / 2.5
    },
    button: {
        backgroundColor: primary,
        borderRadius: 30,
        width: screenWidth / 2,
        height: 60,
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: '#000', 
        elevation: 8,
        shadowOpacity: 1.0
    },
    button_title: {
        color: '#716765',
        fontSize: 22,
        textAlign:'center',
    },
    buttonContainer: {
        height: screenHeight / 3.5,
        justifyContent: 'space-around',
    }
});