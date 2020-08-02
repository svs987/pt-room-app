import React from 'react';
import { Text, View, TextInput, Button } from 'react-native';
import styles from '../../styles';

const ChangePasswordScreenRenderer = (props) => {

    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.text}>Enter the code that we sent you and a new password</Text>
                <View style={styles.paragraph}>
                <TextInput
                    style={styles.inputbox}
                    placeholder="Code"
                    value={props.code}
                    onChangeText={(value) => props.setCode(value)}
                    keyboardType="default"
                    autoCapitalize="none"
                />
                </View>
                <TextInput
                    style={styles.inputbox}
                    placeholder="Password"
                    value={props.password}
                    onChangeText={(value) => props.setPassword(value)}
                    keyboardType="default"
                    autoCapitalize="none"
                    autoCompleteType='password'
                    secureTextEntry={true}
                />
                {props.changePasswordError ? <Text style={styles.error}>{props.changePasswordError}</Text> : null}
                <View style={styles.paragraph}>

                <Button
                    loading={props.changePasswordLoading}
                    disabled={props.changePasswordLoading}
                    type="outline"
                    title="Change Password"
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



export default ChangePasswordScreenRenderer;