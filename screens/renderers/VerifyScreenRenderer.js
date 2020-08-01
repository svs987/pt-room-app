import React  from 'react';
import { Text, View, TextInput, Button, StyleSheet } from 'react-native';
import styles from '../../styles';

const VerifyScreenRenderer = (props) => {
 
    return (
        <View style={styles.container}>
                <View>
                    <Text style={styles.text}>Nearly done! We've sent you a verification code via e-mail. Please check your e-mail and enter the code in the box</Text>
                    <TextInput
                        style={styles.inputbox}
                        placeholder="Verification code"
                        value={props.code}
                        onChangeText={(value) => props.setCode(value)}
                        keyboardType="default"
                        autoCapitalize="none"
                    />
                               {props.verifyError ? <Text style={styles.error}>Could not verify you. Please check code and network connection and try again.</Text> : null}
                  <Button
                        loading={props.verifyLoading}
                        disabled={props.verifyLoading}
                        type="outline"
                        title="Verify"
                        onPress={props.confirm}
                    />
                </View>
                <View
                    style={{
                        marginVertical: 18,
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}
                >
                    <Text style={styles.text}>Not received your code? Check your spam folder or press "Resend code" to get a new code</Text>
                    <Button
                        style={{ marginLeft: 4 }}
                        onPress={props.handleResendCode}
                        title='Resend code'
                    >

                    </Button>

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



export default VerifyScreenRenderer;