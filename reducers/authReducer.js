export const authReducer = (prevState, action) => {
    switch (action.type) {
        case 'RESTORE_TOKEN':
            return {
                ...prevState,
                userToken: action.token,
                isRequestingNewPassword: false,
                isLoading: false
            };
        case 'SIGN_IN':
            return {
                ...prevState,
                isSignout: false,
                isRequestingNewPassword: false,
                userToken: action.token,
                userName: action.userName,
                isVerifying: false
            };
        case 'SIGN_OUT':
            return {
                ...prevState,
                isSignout: true,
                isRequestingNewPassword: false,
                userToken: null,
                userName: null,
                email: null,
                password: null,
                isVerifying: false
            };
        case 'VERIFYING':
            return {
                ...prevState,
                isSignout: true,
                isRequestingNewPassword: false,
                userToken: null,
                userName: null,
                isVerifying: true,
                email: action.email,
                password: action.password
            }
            case 'RESET_PASSWORD':
                return {
                    ...prevState,
                    isSignout: true,
                    isRequestingNewPassword: true,
                    userToken: null,
                    userName: null,
                    isVerifying: false,
                    email: action.email,
                    password: null
                }
    
        default:
            return prevState;
    }
};