import { View, Text } from 'react-native';
import { useLocalSearchParams } from 'expo-router';

export default function ExerciseDetailsScreen({ item }) {
const params = useLocalSearchParams();

    return(
        <View>
            <Text>Exercise Details: { params }</Text>
        </View>
    )
}