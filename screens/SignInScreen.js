import React, { useState } from 'react';
import { Text, View, TouchableOpacity, TextInput, Input, Button, StyleSheet } from 'react-native';
import { Formik } from 'formik';
import * as Yup from 'yup';

import { signIn } from '../services/authService';
import { useAuthDispatch, useAuthState } from '../contexts/authContext';
import styles from '../styles';

const SignInScreen = ({ navigation }) => {
    const dispatch = useAuthDispatch();
    const authContext = useAuthState();
    const [signInLoading, setSignInLoading] = useState(false);

    const signInUser = async (values) => {
        const { email, password } = values;
        setSignInLoading(true);
        signIn(email, password)
            .then((r) => {
                console.log(r);
                dispatch({
                    type: 'SIGN_IN',
                    token: r.signInUserSession.accessToken.jwtToken,
                    userName: r.username
                });
            })
            .catch((e) => {
                console.log(e);
            })
            .finally(() => setSignInLoading(false));
    };

    const navigateToSignUp = () => {
        if (authContext.isVerifying) {
            navigation.navigate('Verify');
        } else {
            navigation.navigate('SignUp');
        }
    }

    const SignupSchema = Yup.object().shape({
           password: Yup.string()
             .required('You need to enter your password'),
           email: Yup.string()
             .email('You need to enter a valid email address')
             .required('You need to enter a valid email address'),
         });
         

    return (
        <View style={styles.container}>
            <Text style={styles.text}>Welcome to PT Lounge. Sign In or Sign up to find a coach to design your perfect training plan.</Text>
            <View>
                    <Formik
                    initialValues={{ email: '' }}
                    onSubmit={(values) => signInUser(values)}
                    validationSchema={SignupSchema}
                >
                    {({ errors, handleChange, handleBlur, handleSubmit, values }) => (
                        <>
                            <TextInput style={styles.inputbox}
                                placeholder="Email"
                                value={values.email}
                                onChangeText={handleChange('email')}
                                onBlur={handleBlur('email')}
                                keyboardType="email-address"
                                textContentType="emailAddress"
                                autoCapitalize="none"
                                autoCompleteType="email"
                            />
                            {errors.email ? <Text style={styles.error}>{errors.email}</Text> : null}
                            <TextInput style={styles.inputbox}
                                placeholder="Password"
                                value={values.password}
                                onChangeText={handleChange('password')}
                                onBlur={handleBlur('password')}
                                secureTextEntry
                                keyboardType="default"
                                textContentType="password"
                                autoCapitalize="none"
                                autoCompleteType="password"
                            />
                             {errors.password ? <Text style={styles.error}>{errors.password}</Text> : null}

                            <Button
                                loading={signInLoading}
                                disabled={signInLoading}
                                type="outline"
                                title="Sign in"
                                onPress={handleSubmit}
                            />
                        </>
                    )}
                </Formik>
            </View>
            <View
                style={{
                    flexDirection: 'row',
                    marginVertical: 18,
                    justifyContent: 'center',
                    alignItems: 'center'
                }}
            >

                <Text style={styles.text}>Not registered?</Text>
                <Button

                    onPress={navigateToSignUp}
                    title='Sign up!'
                >

                </Button>
            </View>
        </View>
    );
};


export default SignInScreen;