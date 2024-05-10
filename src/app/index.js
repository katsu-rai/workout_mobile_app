import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import excercises from '../../assets/data/exercises.json';
import ExcerciseListItem from '../components/ExerciseListItem.jsx';

export default function App() {
  return (
    <View style={styles.container}>
      <FlatList
        data={excercises}
        contentContainerStyle={{gap: 5}}
        keyExtractor={(item, index) => item.name + index}
        renderItem = {({ item, index }) => <ExcerciseListItem item={item} index={index}/>}
      />


      <StatusBar style="auto" />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
  }
});
