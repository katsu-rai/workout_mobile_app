import { StyleSheet, Text, View, FlatList } from 'react-native';

export default function ExerciseListItem({ item, index }) {
  return(
    <View style={styles.excerciseContainer}>
    <Text style={styles.excerciseName}>{index}. {item.name}</Text>
    <Text>{item.equipment.toUpperCase()}</Text>
  </View>
  )
}

const styles = StyleSheet.create({
    excerciseContainer: {
      backgroundColor: "gray",
      borderRadius: 5,
      gap: 5,
      padding: 10,
    },
    excerciseName: {
      fontSize: 20,
      fontWeight: '500',
    }
  });