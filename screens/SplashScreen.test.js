import React from 'react';
import renderer from 'react-test-renderer';

import SplashScreen from './SplashScreen';


it('renders the Splash Screen', () => {
    expect(renderer.create(
      <SplashScreen/>
    )).toMatchSnapshot();
  });