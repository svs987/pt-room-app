import React  from 'react';
import { Text, View, TextInput, Button } from 'react-native';
import styles from '../../styles';

const SignUpScreenRenderer = (props) => {
 
    return (
        <View style={styles.container}>
                <View>
                    <Text style={styles.text}>Welcome to PT Lounge. Sign up to find a coach to design your perfect training plan.</Text>
                    <TextInput
                        style={styles.inputbox}
                        placeholder="Email"
                        value={props.email}
                        onChangeText={(value) => props.setEmail(value)}
                        keyboardType="email-address"
                        textContentType="emailAddress"
                        autoCapitalize="none"
                        autoCompleteType="email"
                    />
                    <TextInput
                        style={styles.inputbox}
                        placeholder="Password"
                        value={props.password}
                        onChangeText={(value) => props.setPassword(value)}
                        secureTextEntry
                        keyboardType="default"
                        textContentType="password"
                        autoCapitalize="none"
                        autoCompleteType="password"
                    />
                    <Button
                        loading={props.signUpLoading}
                        disabled={props.signUpLoading}
                        type="outline"
                        title="Sign Up"
                        onPress={props.signUpUser}
                    />
                </View>
            
            <View
                style={{
                    flexDirection: 'row',
                    marginVertical: 18,
                    justifyContent: 'center',
                    alignItems: 'center'
                }}
            >
                <Text style={styles.text}>Already a member?</Text>
                <Button
                    style={{ marginLeft: 4 }}
                    onPress={() => props.navigation.navigate('SignIn')}
                    title='Sign in!'
                >

                </Button>
            </View>
        </View>
    );
};


export default SignUpScreenRenderer;