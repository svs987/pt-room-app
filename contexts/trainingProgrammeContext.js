import React from 'react';
import { trainingProgrammeReducer } from '../reducers/trainingProgrammeReducer';

const TrainingProgrammeStateContext = React.createContext();
const TrainingProgrammeDispatchContext = React.createContext();

function TrainingProgrammeProvider({ children }) {
    const [state, dispatch] = React.useReducer(trainingProgrammeReducer, {
        isLoading: true,
        reload: false,
        data: null, 
    });

    return (
        <TrainingProgrammeStateContext.Provider value={state}>
            <TrainingProgrammeDispatchContext.Provider value={dispatch}>
                {children}
            </TrainingProgrammeDispatchContext.Provider>
        </TrainingProgrammeStateContext.Provider>
    );
}

function useTrainingProgrammeState() {
    const context = React.useContext(TrainingProgrammeStateContext);
    if (context === undefined) {
        throw new Error('useTrainingProgrammeState must be used within a TrainingProgrammeProvider');
    }
    return context;
}
function useTrainingProgrammeDispatch() {
    const context = React.useContext(TrainingProgrammeDispatchContext);
    if (context === undefined) {
        throw new Error('useTrainingProgrammeDispatch must be used within a TrainingProgrammeProvider');
    }
    return context;
}

export { TrainingProgrammeProvider, useTrainingProgrammeState, useTrainingProgrammeDispatch };