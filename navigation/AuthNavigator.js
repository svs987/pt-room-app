import React from 'react';
import {
    createStackNavigator,
} from '@react-navigation/stack';
import SignInScreen from '../screens/SignInScreen';
import SignUpScreen from '../screens/SignUpScreen';
import { VerifyScreen } from '../screens/VerifyScreen';
import { ForgottenPasswordScreen } from '../screens/ForgottenPasswordScreen';
import {ChangePasswordScreen} from '../screens/ChangePasswordScreen';

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
        <Stack.Screen
            name="ForgottenPassword"
            component={ForgottenPasswordScreen}
            options={{
                title: 'Forgot Password',
            }}
        />
        <Stack.Screen
            name="ChangePassword"
            component={ChangePasswordScreen}
            options={{
                title: 'Change Password',
            }}
        />

    </Stack.Navigator>
);

export default AuthNavigator;
