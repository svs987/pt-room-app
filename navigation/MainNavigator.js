import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import FindACoachFormScreen from '../screens/FindACoachFormScreen';
import SplashScreen from '../screens/SplashScreen'
import { TrainingProgrammeProvider, useTrainingProgrammeState } from '../contexts/trainingProgrammeContext';

const Stack = createStackNavigator();

const MainNavigator = () => {

  return (
    <TrainingProgrammeProvider>
      <Stack.Navigator initialRouteName="Splash">
        <Stack.Screen name="Home"
          component={HomeScreen}
          options={{
            title: 'PT Lounge',
            headerStyle: {
              backgroundColor: '#a8dadc',
            },
            headerTintColor: '#1d3557',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }} />
        <Stack.Screen name="FindACoachForm"
          component={FindACoachFormScreen}
          options={{
            title: 'Find a Coach',
            headerStyle: {
              backgroundColor: '#a8dadc',
            },
            headerTintColor: '#1d3557',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }} />
      </Stack.Navigator>
    </TrainingProgrammeProvider>
  );

}

export default MainNavigator;