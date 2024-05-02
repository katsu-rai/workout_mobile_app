import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import excercises from './assets/data/exercises.json';

export default function App() {
  const excercise = excercises[0];
  return (
    <View style={styles.container}>
      <View style={styles.excerciseContainer}>
        <Text>{excercise.name.toUpperCase()}</Text>
        <Text>{excercise.equipment}</Text>
        <StatusBar style="auto" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
  },
  excerciseContainer: {
    backgroundColor: "gray",
    borderRadius: 5,
    gap: 5,
    padding: 10,
  }
});
