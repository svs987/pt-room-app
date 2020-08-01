import React, { useState } from 'react';
import ForgottenPasswordScreenRenderer from './renderers/ForgottenPasswordScreenRenderer';
import { forgotPassword } from '../services/authService';
import { useAuthDispatch } from '../contexts/authContext';


const sendForgotPassword = async (email, dispatch) => {
    var res = null;
    try {
        await forgotPassword(email);
        dispatch({
            type: 'RESET_PASSWORD',
            email: email,
        }
        )
    } catch (err) {
        res = err.message;
    }

    return res;

}

const ForgottenPasswordScreen = ({navigation}) => {
    const [email, setEmail] = useState('');
    const [forgottenPasswordError, setForgottenPasswordError] = useState(null);
    const [forgottenPasswordLoading, setForgottenPasswordLoading] = useState(false);
    const dispatch = useAuthDispatch();

    const handleSubmit = async () => {
        setForgottenPasswordLoading(true);
        const error = await sendForgotPassword(email, dispatch);
        setForgottenPasswordLoading(false);
        if (error) {
        console.log('Error from forgot password', error);
        setForgottenPasswordError(error);
        } else {
            navigation.navigate('ChangePassword');
        }

    };



    return (
        <ForgottenPasswordScreenRenderer
            email={email}
            setEmail={setEmail}
            handleSubmit={handleSubmit}
            emailError={forgottenPasswordError}
            forgottenPasswordLoading={forgottenPasswordLoading}
        />
    )
}

export { ForgottenPasswordScreen, sendForgotPassword };