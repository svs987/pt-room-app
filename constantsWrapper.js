// Wrapper for expo constants. Needed because jest won't work with the Constants import
import Constants from 'expo-constants';

const getConstant = (key) => {
    return Constants.manifest.extra[key];
}

export default getConstant;