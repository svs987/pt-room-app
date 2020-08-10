import { enableFetchMocks } from 'jest-fetch-mock'
enableFetchMocks();

import { postTrainingProgramme, getTrainingProgramme } from './trainingProgrammeService';


it('posts a training programme', async () => {
    await postTrainingProgramme({test:'test'});
  });

 it('gets a training programme', async () => {
  fetch.mockResponseOnce(JSON.stringify({ data: '12345' }));
    const response = await getTrainingProgramme();
    expect(response).toEqual({ data: '12345' });
  });
