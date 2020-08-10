
import React from 'react';
import getConstant from '../constantsWrapper';


const postTrainingProgramme = async (values) => {
    console.log(values);
   try {
        console.log('sending training programme');
       const apiKey = getConstant('trainingProgrammeApiKey');
       console.log(apiKey);
        const requestOptions = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'x-api-key': apiKey,
            },
            body: JSON.stringify(values),
        };
        const response = await fetch(getConstant('apiUrl'), requestOptions);
        console.log('response received');
        return new Promise((resolve, reject) => {
            resolve(true);
        }
        )
    }
    catch (error) {
        console.log('Error in trainingProgrammeService.postTrainingProgramme', error);
        return new Promise((resolve, reject) => {
            reject(`Error in trainingProgrammeService.postTrainingProgramme ${error}`);
        })
    }


}

const getTrainingProgramme = async (username) => {
    try {
        var res = false;
        console.log('getting training programme');
        console.log('api key', getConstant('trainingProgrammeApiKey'));
        const requestOptions = {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'x-api-key': getConstant('trainingProgrammeApiKey'),
            },
        };
        const response = await fetch(getConstant('apiUrl') + '/' + username, requestOptions);
        console.log('response received');
        const data = await response.json();
        console.log('json returned');
        return new Promise((resolve, reject) => {
            resolve(data);
        }
        )
    }
    catch (error) {
        console.log('Error in trainingProgrammeService.getTrainingProgramme ', error);
        return new Promise((resolve, reject) => {
            reject(`Error in trainingProgrammeService.postTrainingProgramme ${error}`);
        })
    }



};

export { postTrainingProgramme, getTrainingProgramme };