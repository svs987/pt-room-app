export const trainingProgrammeReducer = (prevState, action) => {
    console.log(action);
    switch (action.type) {
        case 'SET_PROGRAMME_DATA':
            return {
                ...prevState,
                data: action.data,
                isLoading: false,
                reload: false
            };
        case 'NEW_PRGRAMME_CREATED':
            return {
                ...prevState,
                reload: true
            };
        case 'LOADING_PROGRAMME_DATA':
            return {
                ...prevState,
                isLoading: true,
                reload: false,
            }

        default:
            return prevState;
    }
};