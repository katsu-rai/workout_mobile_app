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
      backgroundColor: "ghostwhite",
      borderRadius: 5,
      gap: 5,
      padding: 10,
      marginHorizontal: 3,
  
      // shadow
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 1,
      },
      shadowOpacity: 0.20,
      shadowRadius: 1.41,

      elevation: 2,
    },
    excerciseName: {
      fontSize: 20,
      fontWeight: '500',
    }
  });