
import Constants from 'expo-constants';


const postTrainingProgramme = async (values) => {
    console.log(values);
    try {
        var res = false;
        console.log('sending training programme');
        const requestOptions = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'x-api-key': Constants.manifest.extra.trainingProgrammeApiKey,
            },
            body: JSON.stringify(values),
        };
        const response = await fetch(Constants.manifest.extra.apiUrl, requestOptions);
        console.log('response received');
        res = true;
        await response.json();
        return new Promise((resolve, reject) => {
            resolve(res);
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
        const requestOptions = {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'x-api-key': Constants.manifest.extra.trainingProgrammeApiKey,
            },
        };
        const response = await fetch(Constants.manifest.extra.apiUrl + '/' + username, requestOptions);
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