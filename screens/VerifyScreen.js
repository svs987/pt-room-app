import React, { useState } from 'react';
import { signIn, confirmSignUp,  resendSignUp} from '../services/authService';
import { useAuthDispatch, useAuthState } from '../contexts/authContext';
import VerifyScreenRenderer from './renderers/VerifyScreenRenderer';

const resendCode = async (email, setVerifyLoading, setVerifyError) => {
    setVerifyLoading(true);
    setVerifyError(null);
    try {
        const response = await resendSignUp(email);
        setVerifyLoading(false);
        return response;
    } catch (error) {
        setVerifyLoading(false);
        setVerifyError(error.message);
        console.log(error.message);
    }


}

const VerifyScreen = ({ navigation }) => {
    const dispatch = useAuthDispatch();
    const context = useAuthState();
    const [verifyLoading, setVerifyLoading] = useState(false);
    const [verifyError, setVerifyError] = useState(false);
    const [code, setCode] = useState('');

    const confirm = () => {
        setVerifyLoading(true);
        setVerifyError(null);
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
                setVerifyError(err.message);
                console.log(err);
            });
    };

    const handleResendCode = () => {
        resendCode(context.email, setVerifyLoading, setVerifyError);

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



export { VerifyScreen, resendCode} ;