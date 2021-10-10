import { StyleSheet, Dimensions } from 'react-native';
import { title, primary, content } from '../../constants/color';

const screenHeight = Dimensions.get('screen').height;
const screenWidth = Dimensions.get('screen').width;
export default StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: 'white',
    },
    informationContainer: {
        height: screenHeight / 4,
        width: screenWidth,
        alignItems: 'center',
    },
    backgroundImage: {
        height: screenHeight / 8,
        width: screenWidth,
    },
    avatar: {
        height: screenHeight / 8,
        width: screenHeight / 8,
        borderRadius: screenHeight / 16,
        marginTop: screenHeight / 16,
        position: 'absolute',
        borderWidth: 2,
        borderColor: 'white',
        zIndex: 1,
    },
    iconRow: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        width: '100%',
        height: screenHeight / 16,
    },
    rating: {
        color: content,
        paddingHorizontal: 2,
    },
    ratingRow: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    name: {
        color: content,
        fontSize: 20,
    },
    text: {
        color: content,
    },
    tabContainer: {
        flex: 1,
        width: screenWidth,
        paddingHorizontal: 20,
    },
    tabHeader: {
        flexDirection: 'row',
        paddingHorizontal: 20,
    },
    tabButton: {
        flex: 1,
        paddingVertical: 10,
        alignItems: 'center',
    },
    tabBody: {
        flex: 1,
        backgroundColor:'red'
    }
});