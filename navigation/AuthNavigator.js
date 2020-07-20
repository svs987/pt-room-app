import React from 'react';
import {
    createStackNavigator,
    CardStyleInterpolators
} from '@react-navigation/stack';
import SignInScreen from '../screens/SignInScreen';
import SignUpScreen from '../screens/SignUpScreen';

const Stack = createStackNavigator();

const AuthNavigator = ({ isSignout }) => (
    <Stack.Navigator initialRouteName="SignIn">
        <Stack.Screen
            name="SignIn"
            component={SignInScreen}
            options={{
                title: 'Sign In',
                animationTypeForReplace: isSignout ? 'pop' : 'push',
                headerStyle: {
                    backgroundColor: '#a8dadc',
                },
                headerTintColor: '#1d3557',
                headerTitleStyle: {
                    fontWeight: 'bold',
                },
            }}
        />
        <Stack.Screen
            name="SignUp"
            component={SignUpScreen}
            options={{
                title: 'Sign Up',
                cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
                headerStyle: {
                    backgroundColor: '#a8dadc',
                },
                headerTintColor: '#1d3557',
                headerTitleStyle: {
                    fontWeight: 'bold',
                },
            }}
        />
    </Stack.Navigator>
);

export default AuthNavigator;
