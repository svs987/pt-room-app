import React from 'react';
import { Text, View, TextInput, Button } from 'react-native';
import styles from '../../styles';
import * as Yup from 'yup';
import { Formik } from 'formik';

const SignUpScreenRenderer = (props) => {

    const SignupSchema = Yup.object().shape({
        password: Yup.string()
            .min(8, 'Please enter a password that is at least 8 characters long')
            .max(50, 'Too Long!')
            .required('Please enter a password that is at least 8 characters long'),
        email: Yup.string()
            .email('Please enter a valid e-mail address')
            .required('Please enter a valid e-mail address'),
    });



    return (
        <View style={styles.container}>
            <View>
                <Formik
                    initialValues={{ email: '' }}
                    onSubmit={(values) => props.signUpUser(values)}
                    validationSchema={SignupSchema}
                >
                    {({ errors, touched, handleChange, handleBlur, handleSubmit, values }) => (
                        <>
                            <Text style={styles.text}>Welcome to PT Lounge. Sign up to find a coach to design your perfect training plan.</Text>
                            <View style={styles.paragraph}>
                                <TextInput
                                    style={styles.inputbox}
                                    placeholder="Email"
                                    value={values.email}
                                    onChangeText={handleChange('email')}
                                    onBlur={handleBlur('email')}
                                    keyboardType="email-address"
                                    textContentType="emailAddress"
                                    autoCapitalize="none"
                                    autoCompleteType="email" />
                                {errors.email && touched.email ? <Text style={styles.error}>{errors.email}</Text> : null}
                            </View>
                            <TextInput
                                style={styles.inputbox}
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
                            {errors.password && touched.password ? <Text style={styles.error}>{errors.password}</Text> : null}
                            {props.signUpError ? <Text style={styles.error}>{props.signUpError}</Text> : null}
                            <View style={styles.paragraph}>
                            <Button
                                loading={props.signUpLoading}
                                disabled={props.signUpLoading}
                                type="outline"
                                title="Sign Up"
                                onPress={handleSubmit}
                            />
                            </View>
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
                <Text style={styles.text}>Already a member?  </Text>
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