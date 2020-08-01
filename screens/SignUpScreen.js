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
    const [signUpError, setSignUpError] = useState(null);

    console.log('signed: ', signed);

    const signUpUser = (values) => {
        setEmail(values.email);
        setPassword(values.password);
        setSignUpLoading(true);
        setSignUpError(null);
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
                setSignUpError(err.message);
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
            signUpError={signUpError}
        />

    );
};



export default SignUpScreen;