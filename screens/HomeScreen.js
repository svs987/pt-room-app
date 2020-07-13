import React from 'react';
import { View, Button, StyleSheet, Text } from 'react-native';
import { useAuthDispatch } from '../contexts/authContext';
import { signOut } from '../services/authService';

const HomeScreen = () => {
  const dispatch = useAuthDispatch();

  const handleSignOut = async () => {
    try {
      await signOut();
      dispatch({ type: 'SIGN_OUT' });
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <View style={styles.container}>
      <Text>Hello World!</Text>
      <Button title="Log Out" onPress={handleSignOut} />
    </View>
  );
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
    paddingHorizontal: 20,
    paddingTop: 100,
	},
	body: {
		flex: 1,
		paddingTop: 100,
		paddingHorizontal: 20,

	},
	inputbox: {
		height: 40,
		borderColor: 'gray',
		borderWidth: 1
	},
	text: {
		paddingVertical: 5,
	},
});


export default HomeScreen;