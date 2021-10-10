import { StyleSheet, Dimensions } from 'react-native';
import { title, primary, content } from '../../constants/color';

const screenHeight = Dimensions.get('screen').height;
const screenWidth = Dimensions.get('screen').width;
export default StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-evenly'
    },
    title: {
        color: content,
        fontWeight: '500',
        fontSize: 30
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
        textAlign: 'center',
    },
    login_facebook_button: {
        backgroundColor: '#1766d1',
        borderRadius: 30,
        width: screenWidth / 2,
        height: 60,
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: '#000',
        elevation: 8,
        shadowOpacity: 1.0
    },
    login_facebook_title: {
        fontSize: 15,
        color: 'white',
        textAlign: 'center',
    },
    input: {
        width: screenWidth * 0.75,
        borderBottomWidth: 1,
        borderBottomColor: primary,
        fontSize: 17,
        paddingVertical: 5,
        color:'black',
    },
    forgot_password: {
        color: 'black',
        textDecorationLine: 'underline',
        fontWeight: '400',
        textAlign: 'right',
        width: screenWidth * 0.75,
    },
    inputContainer: {
        height: screenHeight / 5,
        justifyContent: 'space-around',
    },
    buttonContainer: {
        height: screenHeight / 3.5,
        justifyContent: 'space-around',
    }
});