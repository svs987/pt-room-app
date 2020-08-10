import React from 'react';
import renderer from 'react-test-renderer';

import getConstant from './constantsWrapper';
//jest.mock('expo-constants');



it('gets the api key', () => {
    const apiKey = getConstant('trainingProgrammeApiKey');
    expect(apiKey).toEqual('mockApiKey');
  });

  it('gets the api url', () => {
    const apiKey = getConstant('apiUrl');
    expect(apiKey).toEqual('mockApiUrl');
  });
  
