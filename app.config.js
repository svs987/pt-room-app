// app.config.js development version

export default ({ config }) => {

  return {
    ...config,
    extra: {
      apiUrl: 'https://xo4i0rnow7.execute-api.us-east-1.amazonaws.com/default/ptRoomTrainingRegimes',
      trainingProgrammeApiKey: 'VrBbtpCVnHGa09Aplgd197ihZG0Qbbj7IFCxYFo8',
      environment: 'Dev',
     },
  };
};
