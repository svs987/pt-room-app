import React from 'react';
import renderer from 'react-test-renderer';

import HomeScreen from './HomeScreen';
import { useTrainingProgrammeState } from '../contexts/trainingProgrammeContext';
jest.mock('../services/trainingProgrammeService');
jest.mock('../services/authService');
jest.mock('../contexts/authContext');
jest.mock('../contexts/trainingProgrammeContext');
jest.mock('../components/TrainingPlanView');

useTrainingProgrammeState.mockImplementation(()=> {
  return { isLoading: null, reload: null, data: { Count: 0 } }
})



it('renders the Home Screen', () => {
    expect(renderer.create(
      <HomeScreen/>
    )).toMatchSnapshot();
  });