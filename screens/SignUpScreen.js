import React, { useState } from 'react';
import { Text, TouchableOpacity, View, TextInput, Button, StyleSheet } from 'react-native';
import { signIn, signUp, confirmSignUp } from '../services/authService';
import { useAuthDispatch } from '../contexts/authContext';

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
                signIn(email, password).then(() =>
                    dispatch({ type: 'SIGN_IN', token: 'dummy-auth-token' })
                );
            })
            .catch((err) => {
                setVerifyLoading(false);
                console.log(err);
            });
    };

    return (
        <View style={styles.container}>
            {!signed && (
                <View style={styles.body}>
                    <TextInput
                        placeholder="Email"
                        value={email}
                        onChangeText={(value) => setEmail(value)}
                        keyboardType="email-address"
                        textContentType="emailAddress"
                        autoCapitalize="none"
                        autoCompleteType="email"
                    />
                    <TextInput
                        placeholder="Password"
                        value={password}
                        onChangeText={(value) => setPassword(value)}
                        secureTextEntry
                        keyboardType="default"
                        textContentType="password"
                        autoCapitalize="none"
                        autoCompleteType="password"
                    />
                    <Button
                        loading={signUpLoading}
                        disabled={signUpLoading}
                        type="outline"
                        title="SIGN UP"
                        onPress={signUpUser}
                    />
                </View>
            )}
            {signed && (
                <View style={styles.body}>
                    <TextInput
                        placeholder="Verification code"
                        value={code}
                        onChangeText={(value) => setCode(value)}
                        keyboardType="default"
                        autoCapitalize="none"
                    />
                    <Button
                        loading={verifyLoading}
                        disabled={verifyLoading}
                        type="outline"
                        title="Verify"
                        onPress={confirm}
                    />
                </View>
            )}
            <View
                style={{
                    flexDirection: 'row',
                    marginVertical: 18,
                    justifyContent: 'center',
                    alignItems: 'center'
                }}
            >
                <Text style={{ color: '#CDD2D6' }}>Already a member?</Text>
                <TouchableOpacity
                    style={{ marginLeft: 4 }}
                    onPress={() => navigation.navigate('SignIn')}
                >
                    <Text>Sign in!</Text>
                </TouchableOpacity>
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
		height: 40,
		borderColor: 'gray',
		borderWidth: 1
	},
	text: {
		paddingVertical: 5,
	},
});


export default SignUpScreen;