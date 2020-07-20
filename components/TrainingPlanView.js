import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { useTrainingProgrammeState } from '../contexts/trainingProgrammeContext';
import styles from '../styles';

const TrainingPlanView = () => {
    const { isLoading, reload, data } = useTrainingProgrammeState();

    console.log('In training plan view', data.Items[0]);


    return (
<View>
    <Text style = {styles.text, styles.headingText}>My Goals:</Text>
    <Text style = {styles.text}>{data.Items[0].goals}</Text>
    { data.Items[0].trainingPlan ? (
        <>
        <Text style = {{...styles.headingText, paddingBottom: 10,} }>My Training Programme:</Text>
        <View style={styles.trainingProgrammeBox}>
        <Text style = {styles.text}>{data.Items[0].trainingPlan}</Text>
        </View>
        </>
    ): (
        <>
        <Text style = {styles.headingText}>Training Programme Status:</Text>
    <View style = {styles.statusBar}>
    <Text style = {styles.statusText}>{data.Items[0].status}</Text>
    </View>
        </>
    )}

</View>
    );
}

export default TrainingPlanView;