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
                dispatch({ type: 'SIGN_IN', token: r.signInUserSession.accessToken.jwtToken });
            })
            .catch((e) => {
                console.log(e);
            })
            .finally(() => setSignInLoading(false));
    };

    return (
        <View style={styles.container}>
            <Formik
                initialValues={{ email: '' }}
                onSubmit={(values) => signInUser(values)}
            >
                {({ handleChange, handleBlur, handleSubmit, values }) => (
                    <>
                        <TextInput
                            placeholder="Email"
                            value={values.email}
                            onChangeText={handleChange('email')}
                            onBlur={handleBlur('email')}
                            keyboardType="email-address"
                            textContentType="emailAddress"
                            autoCapitalize="none"
                            autoCompleteType="email"
                        />
                        <TextInput
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
                            title="SIGN IN"
                            onPress={handleSubmit}
                        />
                    </>
                )}
            </Formik>
            <View
                style={{
                    flexDirection: 'row',
                    marginVertical: 18,
                    justifyContent: 'center',
                    alignItems: 'center'
                }}
            >
                <Text style={{ color: '#CDD2D6' }}>Not registered?</Text>
                <TouchableOpacity
                    style={{ marginLeft: 4 }}
                    onPress={() => navigation.navigate('SignUp')}
                >
                    <Text>Sign up!</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
        paddingHorizontal: 20,
        paddingTop: 100,
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

export default SignInScreen;