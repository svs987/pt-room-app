import React, { useEffect } from 'react';
import { View, Button, StyleSheet, Text } from 'react-native';
import { useAuthDispatch, useAuthState } from '../contexts/authContext';
import { signOut } from '../services/authService';
import { getTrainingProgramme } from '../services/trainingProgrammeService';
import { useTrainingProgrammeDispatch, useTrainingProgrammeState } from '../contexts/trainingProgrammeContext';
import TrainingPlanView from '../components/TrainingPlanView';

const HomeScreen = ({ navigation }) => {
  const authDispatch = useAuthDispatch();
  const trainingProgrammeDispatch = useTrainingProgrammeDispatch();
  const authContext = useAuthState();
  const { isLoading, reload, data } = useTrainingProgrammeState();


  const handleSignOut = async () => {
    try {
      await signOut();
      authDispatch({ type: 'SIGN_OUT' });
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    console.log('In HomeScreen.useEffect');
    const fetchData = async () => {
      try {
        const data = await getTrainingProgramme(authContext.userName);
        console.log(data);
        trainingProgrammeDispatch({
          type: 'SET_PROGRAMME_DATA',
          data: data,
        })
      } catch (e) {
        console.log('Error in HomeScreen.useEffect', e)
      }

    };

    fetchData();
  }, [reload]);

  const render = () => {
    var res;
    if (isLoading) {
      res = (
        <View style={styles.container}>
          <Text>Loading...</Text>
        </View>
      )
    } else {
      console.log('In render ', data.Count);
      if (!data.Count) {
        res = (
          <View style={styles.container}>
            <Text>Welcome to PT Lounge. To find a coach to design your perfect training plan, touch "Find a Coach".</Text>
            <Button onPress={() => navigation.navigate('FindACoachForm')} title="Find a coach"></Button>
            <Button title="Log Out" onPress={handleSignOut} />
          </View>
        );
      } else {
        res = (<View style={styles.container}>
          <TrainingPlanView/>
          <Button title="Log Out" onPress={handleSignOut} />
        </View>
        );

      }
    }

    return res;

  };


  return render();

};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 100,
    backgroundColor: '#f1faee',
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


export default HomeScreen;