import React, { useEffect } from 'react';
import { View, Button, Text, ScrollView, SafeAreaView } from 'react-native';
import { useAuthDispatch, useAuthState } from '../contexts/authContext';
import { signOut } from '../services/authService';
import { getTrainingProgramme } from '../services/trainingProgrammeService';
import { useTrainingProgrammeDispatch, useTrainingProgrammeState } from '../contexts/trainingProgrammeContext';
import TrainingPlanView from '../components/TrainingPlanView';
import styles from '../styles';

const fetchData = async (authContext, trainingProgrammeDispatch) => {
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
    trainingProgrammeDispatch({
      type: 'LOADING_PROGRAMME_DATA',
    });
    fetchData(authContext, trainingProgrammeDispatch); // Do an initial fetch and then fetch every 10s
    const intervalID = setInterval(()=>{fetchData(authContext, trainingProgrammeDispatch)},10000)
  
    return ()=> clearInterval(intervalID); 
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
            <Text style={styles.text}>Welcome to PT Lounge. To find a coach to design your perfect training plan, touch "Find a Coach".</Text>
            <View style={styles.paragraph}>
              <Button onPress={() => navigation.navigate('FindACoachForm')} title="Find a coach"></Button>
            </View>
            <Button title="Log Out" onPress={handleSignOut} />
          </View>
        );
      } else {
        res = (
          <SafeAreaView style={styles.container}>
            <ScrollView>

              <TrainingPlanView />
              <View style={styles.paragraph}>
                <Button title="Log Out" onPress={handleSignOut} />
              </View>
            </ScrollView>
          </SafeAreaView>
        );

      }
    }

    return res;

  };


  return render();

};



export default HomeScreen;