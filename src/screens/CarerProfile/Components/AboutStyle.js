import { StyleSheet, Dimensions } from 'react-native';
import { title, primary, content } from '../../../constants/color';

const screenHeight = Dimensions.get('screen').height;
const screenWidth = Dimensions.get('screen').width;
export default StyleSheet.create({
    container: {
        flex: 1,
    },
    informationContainer: {
        paddingVertical: 10,
    },
    buttonContainer: {
        height: screenHeight / 7,
        paddingHorizontal: 25,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around'
    },
    button: {
        flex: 10,
        backgroundColor: primary,
        paddingVertical: 15,
        alignItems: 'center',
        borderRadius: 30,
        elevation: 8,
        shadowOpacity: 1.0
    },
    buttonText: {
        color: content,
        fontSize: 18,
    },
    row: {
        flexDirection:'row',
        alignItems:'center',
        marginVertical: 15
    },
    informationText:{
        color: content,
        fontSize: 15,
        paddingHorizontal: 20
    }
});