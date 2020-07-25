import React, { useState } from 'react';
import { Text, TouchableOpacity, View, TextInput, Button, StyleSheet } from 'react-native';
import { signIn, signUp, confirmSignUp } from '../services/authService';
import { useAuthDispatch, useAuthState } from '../contexts/authContext';
import VerifyScreenRenderer from './renderers/VerifyScreenRenderer';

const SignUpScreen = ({ navigation }) => {
    const dispatch = useAuthDispatch();
    const context = useAuthState();
    const [verifyLoading, setVerifyLoading] = useState(false);
    const [code, setCode] = useState('');

    const confirm = () => {
        setVerifyLoading(true);
        confirmSignUp(context.email, code)
            .then(() => {
                setVerifyLoading(false);
                signIn(context.email, context.password).then((r) => {
                    console.log(r);
                    dispatch({
                        type: 'SIGN_IN',
                        token: r.signInUserSession.accessToken.jwtToken,
                        userName: r.username
                    })
                }
                );
            })
            .catch((err) => {
                setVerifyLoading(false);
                console.log(err);
            });
    };

    return (

        <VerifyScreenRenderer
            confirm={confirm}
            code={code}
            setCode={setCode}
            verifyLoading={verifyLoading}
            navigation={navigation}
        />



    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 20,
    },
    body: {
        flex: 1,
        paddingTop: 100,
        paddingHorizontal: 20,

    },
    inputbox: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1
    },
    text: {
        paddingVertical: 5,
    },
});


export default SignUpScreen;