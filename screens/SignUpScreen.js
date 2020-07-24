import React, { useState } from 'react';
import { Text, TouchableOpacity, View, TextInput, Button, StyleSheet } from 'react-native';
import { signIn, signUp, confirmSignUp } from '../services/authService';
import { useAuthDispatch } from '../contexts/authContext';
import SignUpScreenRenderer, { signUpScreenRenderer } from './renderers/SignUpScreenRenderer';

const SignUpScreen = ({ navigation }) => {
    const dispatch = useAuthDispatch();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [signed, setSigned] = useState(false);
    const [signUpLoading, setSignUpLoading] = useState(false);
    const [verifyLoading, setVerifyLoading] = useState(false);
    const [code, setCode] = useState('');

    const signUpUser = () => {
        setSignUpLoading(true);
        signUp(email, password)
            .then((data) => {
                console.log(data);
                setSigned(true);
                setSignUpLoading(false);
            })
            .catch((err) => {
                setSignUpLoading(false);
                console.log(err);
            });
    };

    const confirm = () => {
        setVerifyLoading(true);
        confirmSignUp(email, code)
            .then(() => {
                setVerifyLoading(false);
                signIn(email, password).then((r) => {
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
        <SignUpScreenRenderer
            signed={signed}
            confirm={confirm}
            email={email}
            setEmail={setEmail}
            password={password}
            setPassword={setPassword}
            signUpLoading={signUpLoading}
            signUpUser={signUpUser}
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