import React from 'react';
import {
    createStackNavigator,
    CardStyleInterpolators
} from '@react-navigation/stack';
import SignInScreen from '../screens/SignInScreen';
import SignUpScreen from '../screens/SignUpScreen';

const Stack = createStackNavigator();

const AuthNavigator = ({ isSignout }) => (
    <Stack.Navigator initialRouteName="SignIn" headerMode="none">
        <Stack.Screen
            name="SignIn"
            component={SignInScreen}
            options={{
                title: 'Sign in',
                animationTypeForReplace: isSignout ? 'pop' : 'push'
            }}
        />
        <Stack.Screen
            name="SignUp"
            component={SignUpScreen}
            options={{
                cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS
            }}
        />
    </Stack.Navigator>
);

export default AuthNavigator;
