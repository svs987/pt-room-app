import React, { useState } from 'react';
import { Text, View, TouchableOpacity, TextInput, Input, Button, StyleSheet } from 'react-native';
import { Formik } from 'formik';
import { signIn } from '../services/authService';
import { useAuthDispatch } from '../contexts/authContext';

const SignInScreen = ({ navigation }) => {
    const dispatch = useAuthDispatch();
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

    return (
        <View style={styles.container}>
            <Text style={styles.text}>Welcome to PT Lounge. Sign In or Sign up to find a coach to design your perfect training plan.</Text>
            <View style={styles.body}>
                    <Formik
                    initialValues={{ email: '' }}
                    onSubmit={(values) => signInUser(values)}
                >
                    {({ handleChange, handleBlur, handleSubmit, values }) => (
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

                    onPress={() => navigation.navigate('SignUp')}
                    title='Sign up!'
                >

                </Button>
            </View>
        </View>
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
        borderColor: 'gray',
        borderWidth: 1,
        paddingVertical: 10,
        paddingHorizontal: 20,
    },
    text: {
        paddingVertical: 5,
    },
});

export default SignInScreen;