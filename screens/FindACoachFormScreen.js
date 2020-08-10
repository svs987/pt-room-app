import React from 'react';
import { View, Button, Text, TextInput } from 'react-native';
import { Formik } from 'formik';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { postTrainingProgramme } from '../services/trainingProgrammeService'
import { useAuthState } from '../contexts/authContext';
import { useTrainingProgrammeDispatch } from '../contexts/trainingProgrammeContext';
import styles from '../styles';



const FindACoachFormScreen = ({ navigation }) => {
  const trainingProgrammeDispatch = useTrainingProgrammeDispatch();
  const authContext = useAuthState();
  console.log(authContext);

  const handleSubmit = async (values) => {
    values.trainer_id = authContext.userName;
    try {
      await postTrainingProgramme(values);
      trainingProgrammeDispatch({
        type: 'NEW_PRGRAMME_CREATED',
      });
      navigation.navigate('Home');
    } catch (error) {
      console.log(error);
    }
  };


  return (
    <KeyboardAwareScrollView
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
          <View style={{
            marginTop: 10,
            paddingHorizontal: 20,
          }}>
            <Text style={styles.text}>Tell us your name</Text>
            <TextInput
              style={styles.inputbox}
              placeholder='Your name'
              onChangeText={handleChange('name')}
              onBlur={handleBlur('name')}
              value={values.name}
            />
            <Text style={styles.text}>Tell us about your training goals. What do you want to achieve?</Text>
            <TextInput
              style={styles.inputbox}
              placeholder='Your goals'
              onChangeText={handleChange('goals')}
              onBlur={handleBlur('goals')}
              value={values.goals}
              multiline={true}
            />
            <Text style={styles.text}>What is your current training regime? How often do you train?. What do you do? What are your 1RMs?</Text>
            <TextInput
              style={{ ...styles.inputbox, height: 100, }}
              placeholder='Current training'
              onChangeText={handleChange('currentTraining')}
              onBlur={handleBlur('currentTraining')}
              value={values.currentTraining}
              multiline={true}
            />
            <Text style={styles.text}>Include links to videos of you training on Youtube, Instagram etc so that the coach can assess your form </Text>
            <TextInput
              style={{ ...styles.inputbox, height: 100, }}
              placeholder='Video links'
              onChangeText={handleChange('videoLinks')}
              onBlur={handleBlur('videoLinks')}
              value={values.videoLinks}
              multiline={true}
            />
            <View style={styles.paragraph}>
              <Button onPress={handleSubmit} title="Submit" />
            </View>
            <View style={{ height: 60 }} />
          </View>
        )}
      </Formik>

    </KeyboardAwareScrollView>
  );
};



export default FindACoachFormScreen;