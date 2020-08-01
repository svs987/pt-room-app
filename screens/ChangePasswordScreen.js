import React, { useState } from 'react';
import ChangePasswordScreenRenderer from './renderers/ChangePasswordScreenRenderer';
import { forgotPasswordSubmit, signIn } from '../services/authService';
import { useAuthDispatch, useAuthState } from '../contexts/authContext';


const sendChangePassword = async (email, code, password, dispatch) => {
    var res = null;
    try {
        await forgotPasswordSubmit(email, code, password);
        console.log('email+password', email, password);
        const res = await signIn(email, password)
        dispatch({
            type: 'SIGN_IN',
            token: res.signInUserSession.accessToken.jwtToken,
            userName: res.username
        })
    }
    catch (err) {
        res = err.message;
    }

    return res;

}

const ChangePasswordScreen = ({navigation}) => {
    const [code, setCode] = useState('');
    const [password, setPassword] = useState('');
    const [changePasswordError, setchangePasswordError] = useState(null);
    const [changePasswordLoading, setChangePasswordLoading] = useState(false);
    const dispatch = useAuthDispatch();
    const context = useAuthState();

    const handleSubmit = async () => {
        try {
            setChangePasswordLoading(true);
            const error = await sendChangePassword(context.email, code, password, dispatch);
            setChangePasswordLoading(false);
            console.log('Error from forgot password', error);
            setchangePasswordError(error);
        } catch (error) {
            setChangePasswordLoading(false);
            setchangePasswordError(error.message);

        }

    };



    return (
        <ChangePasswordScreenRenderer
            code={code}
            setCode={setCode}
            password={password}
            setPassword={setPassword}
            handleSubmit={handleSubmit}
            changePasswordError={changePasswordError}
            changePasswordLoading={changePasswordLoading}
            navigation={navigation}
        />
    )
}

export { ChangePasswordScreen, sendChangePassword };