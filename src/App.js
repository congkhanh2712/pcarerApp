import React, { useEffect } from 'react'
import MainStack from './router';
import { NavigationContainer } from '@react-navigation/native';
import store from './store';
import { Provider } from 'react-redux';

export default function App() {
    return (
        <Provider store={store}>
            <NavigationContainer>
                <MainStack />
            </NavigationContainer>
        </Provider>
    );
}