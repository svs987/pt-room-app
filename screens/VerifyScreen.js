import React, { useState } from 'react';
import { signIn, confirmSignUp } from '../services/authService';
import { useAuthDispatch, useAuthState } from '../contexts/authContext';
import VerifyScreenRenderer from './renderers/VerifyScreenRenderer';

const SignUpScreen = ({ navigation }) => {
    const dispatch = useAuthDispatch();
    const context = useAuthState();
    const [verifyLoading, setVerifyLoading] = useState(false);
    const [verifyError, setVerifyError] = useState(false);
    const [code, setCode] = useState('');

    const confirm = () => {
        setVerifyLoading(true);
        setVerifyError(false);
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
                setVerifyError(true);
                console.log(err);
            });
    };

    const handleResendCode = () => {

    }

    return (

        <VerifyScreenRenderer
            confirm={confirm}
            code={code}
            setCode={setCode}
            verifyLoading={verifyLoading}
            navigation={navigation}
            verifyError={verifyError}
            handleResendCode={handleResendCode}
        />



    );
};



export default SignUpScreen;