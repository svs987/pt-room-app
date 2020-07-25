import React  from 'react';
import { Text, View, TextInput, Button, StyleSheet } from 'react-native';

const VerifyScreenRenderer = (props) => {
 
    return (
        <View style={styles.container}>
                <View style={styles.body}>
                    <Text style={styles.text}>Nearly done! We've sent you a verification code via e-mail. Please check your e-mail and enter the code in the box</Text>
                    <TextInput
                        style={styles.inputbox}
                        placeholder="Verification code"
                        value={props.code}
                        onChangeText={(value) => props.setCode(value)}
                        keyboardType="default"
                        autoCapitalize="none"
                    />
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


export default VerifyScreenRenderer;