export const authReducer = (prevState, action) => {
    console.log(action);
    switch (action.type) {
        case 'RESTORE_TOKEN':
            return {
                ...prevState,
                userToken: action.token,
                isLoading: false
            };
        case 'SIGN_IN':
            return {
                ...prevState,
                isSignout: false,
                userToken: action.token,
                userName: action.userName,
                isVerifying: false
            };
        case 'SIGN_OUT':
            return {
                ...prevState,
                isSignout: true,
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
                userToken: null,
                userName: null,
                isVerifying: true,
                email: action.email,
                password: action.password
            }
        default:
            return prevState;
    }
};