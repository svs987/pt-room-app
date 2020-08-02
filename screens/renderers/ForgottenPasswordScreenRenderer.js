import React from 'react';
import { Text, View, TextInput, Button } from 'react-native';
import styles from '../../styles';

const ForgottenPasswordScreenRenderer = (props) => {

    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.text}>Forgotten your password? Please enter your email address and we will send you a code that will allow you to reset your password</Text>
                <TextInput
                    style={styles.inputbox}
                    placeholder="Email"
                    value={props.email}
                    onChangeText={(value) => props.setEmail(value)}
                    keyboardType="default"
                    autoCapitalize="none"
                />
                {props.emailError ? <Text style={styles.error}>{props.emailError}</Text> : null}
                <View style={styles.paragraph} >
                    <Button
                        loading={props.forgottenPasswordLoading}
                        disabled={props.forgottenPasswordLoading}
                        type="outline"
                        title="Send Code"
                        onPress={props.handleSubmit}
                    />
                </View>
            </View>


            <View
                style={{
                    flexDirection: 'row',
                    marginVertical: 18,
                    justifyContent: 'center',
                    alignItems: 'center'
                }}
            >
                <Text style={styles.text}>Remembered your password?  </Text>
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



export default ForgottenPasswordScreenRenderer;