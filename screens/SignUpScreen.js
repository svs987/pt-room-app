import React, { useState } from 'react';
import { signIn, signUp, confirmSignUp } from '../services/authService';
import { useAuthDispatch } from '../contexts/authContext';
import SignUpScreenRenderer from './renderers/SignUpScreenRenderer';

const SignUpScreen = ({ navigation }) => {
    const dispatch = useAuthDispatch();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [signed, setSigned] = useState(false);
    const [signUpLoading, setSignUpLoading] = useState(false);
    const [verifyLoading, setVerifyLoading] = useState(false);
    const [code, setCode] = useState('');

    console.log('signed: ', signed);

    const signUpUser = (values) => {
        console.log('In signUpUser. Values: ', values);
        setEmail(values.email);
        setPassword(values.password);
        setSignUpLoading(true);
        signUp(values.email, values.password)
            .then((data) => {
                console.log(data);
                setSigned(true);
                setSignUpLoading(false);
                dispatch({
                    type: 'VERIFYING',
                    email: values.email,
                    password: values.password
                })
                navigation.navigate('Verify');
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
            email={email}
            setEmail={setEmail}
            password={password}
            setPassword={setPassword}
            signUpLoading={signUpLoading}
            signUpUser={signUpUser}
            navigation={navigation}
        />

    );
};



export default SignUpScreen;