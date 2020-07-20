import React from 'react';
import { View, Button, Text, TextInput } from 'react-native';
import { Formik } from 'formik';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { postTrainingProgramme } from '../services/trainingProgrammeService'
import { useAuthState } from '../contexts/authContext';
import { useTrainingProgrammeDispatch } from '../contexts/trainingProgrammeContext';
// import { styles } from '../styles';
import { StyleSheet } from 'react-native';


const FindACoachFormScreen = ({navigation}) => {
    const trainingProgrammeDispatch = useTrainingProgrammeDispatch();
    const authContext = useAuthState();
    console.log(authContext);

    const handleSubmit = async (values) => {
        values.trainer_id = authContext.userName;
        const res = await postTrainingProgramme(values);
        trainingProgrammeDispatch({
            type: 'NEW_PRGRAMME_CREATED',
          });
        navigation.navigate('Home');
    };


    return (
        <KeyboardAwareScrollView
            contentContainerStyle={styles.container}
            scrollEnabled={true}
        >
            <Formik
                initialValues={{
                    name: '',
                    goals: '',
                    currentTraining: '',
                    videoLinks: '',
                }}
                onSubmit={values => handleSubmit(values)}
            >
                {({ handleChange, handleBlur, handleSubmit, values }) => (
                    <View style={styles.body}>
                        <Text style={styles.inputBoxHeading}>Tell us your name</Text>
                        <TextInput
                            style={styles.inputbox}
                            placeholder='Your name'
                            onChangeText={handleChange('name')}
                            onBlur={handleBlur('name')}
                            value={values.name}
                        />
                        <Text style={styles.inputBoxHeading}>Tell us about your training goals. What do you want to achieve?</Text>
                        <TextInput
                            style={styles.inputbox}
                            placeholder='Your goals'
                            onChangeText={handleChange('goals')}
                            onBlur={handleBlur('goals')}
                            value={values.goals}
                            multiline={true}
                        />
                        <Text style={styles.inputBoxHeading}>What is your current training regime? How often do you train?. What do you do? What are your 1RMs?</Text>
                        <TextInput
                            style={{...styles.inputbox, height: 100, }}
                            placeholder='Current training'
                            onChangeText={handleChange('currentTraining')}
                            onBlur={handleBlur('currentTraining')}
                            value={values.currentTraining}
                            multiline={true}
                        />
                        <Text style={styles.inputBoxHeading}>Include links to videos of you training on Youtube, Instagram etc so that the coach can assess your form </Text>
                        <TextInput
                            style={{...styles.inputbox, height: 100, }}
                            placeholder='Video links'
                            onChangeText={handleChange('videoLinks')}
                            onBlur={handleBlur('videoLinks')}
                            value={values.videoLinks}
                            multiline={true}
                        />

                        <Button onPress={handleSubmit} title="Submit" />
                        <View style={{ height: 60 }} />
                    </View>
                )}
            </Formik>
           
        </KeyboardAwareScrollView>
    );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: '#f1faee',
  },
  body: {
    flex: 1,
    paddingTop: 20,
    paddingHorizontal: 20,

  },
  inputbox: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1
  },
  headingText: {
    color: '#457b9d',
    paddingTop: 10,
    fontSize: 18,

  },
  text: {
    paddingVertical: 5,
    fontSize: 17,
    paddingLeft: 5,
  },
  statusText: {
    backgroundColor: '#e63946',
    color: 'white',
    textAlign: 'center',
    textAlignVertical: 'center',
    fontSize: 17,
    fontWeight: 'bold',

  },
  statusBar: {
    borderRadius: 10,
    borderColor: '#e63946',
    backgroundColor: '#e63946',
    borderWidth: 1,
    overflow: 'hidden',
    margin: '5%',
    justifyContent: 'center',
    height: 50,

  },
  trainingProgrammeBox: {
    borderWidth: 1,
    backgroundColor: '#a8dadc',
    borderRadius: 10,
    borderColor: '#a8dadc',
    padding: 10,
  }
});




export default FindACoachFormScreen;