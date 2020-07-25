import React from 'react';
import {
    createStackNavigator,
    CardStyleInterpolators
} from '@react-navigation/stack';
import SignInScreen from '../screens/SignInScreen';
import SignUpScreen from '../screens/SignUpScreen';
import VerifyScreen from '../screens/VerifyScreen';

const Stack = createStackNavigator();

const AuthNavigator = ({ isSignout }) => (
    <Stack.Navigator initialRouteName="SignIn"
        screenOptions={{
            animationTypeForReplace: isSignout ? 'pop' : 'push',
            headerStyle: {
                backgroundColor: '#a8dadc',
            },
            headerTintColor: '#1d3557',
            headerTitleStyle: {
                fontWeight: 'bold',
            },
        }}
    >
        <Stack.Screen
            name="SignIn"
            component={SignInScreen}
            options={{
                title: 'Sign In',
            }}
        />
        <Stack.Screen
            name="SignUp"
            component={SignUpScreen}
            options={{
                title: 'Sign Up',
            }}
        />
        <Stack.Screen
            name="Verify"
            component={VerifyScreen}
            options={{
                title: 'Verify',
                headerLeft: (props) => {
                    console.log(props);
                }
                
            }}
        />
    </Stack.Navigator>
);

export default AuthNavigator;
