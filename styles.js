import { StyleSheet } from 'react-native';



const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 100,
    backgroundColor: '#f1faee',
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
  headingText: {
    color: '#457b9d',
    paddingTop: 10,
    fontSize: 18,

  },
  text: {
    paddingVertical: 5,
    fontSize: 17,
    paddingLeft: 5,
  },
  statusText: {
    backgroundColor: '#e63946',
    color: 'white',
    textAlign: 'center',
    textAlignVertical: 'center',
    fontSize: 17,
    fontWeight: 'bold',

  },
  statusBar: {
    borderRadius: 10,
    borderColor: '#e63946',
    backgroundColor: '#e63946',
    borderWidth: 1,
    overflow: 'hidden',
    margin: '5%',
    justifyContent: 'center',
    height: 50,

  },
  trainingProgrammeBox: {
    borderWidth: 1,
    backgroundColor: '#a8dadc',
    borderRadius: 10,
    borderColor: '#a8dadc',
    padding: 10,
  }
});

export default styles;