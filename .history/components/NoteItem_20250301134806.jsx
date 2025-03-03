import { View, Text } from "react-native-web"
const NoteItem = () => {
    return (
        <View style={styles.notesItem}>
            <Text style={styles.notesText}>{item.text}</Text>
        </View>
    )
}