import { View, Text } from "react-native-web"
const NoteItem = ({ note }) => {
    return (
        <View style={styles.notesItem}>
            <Text style={styles.notesText}>{note.text}</Text>
        </View>
    )
}
const styles = new StyleSheet.create({})
export default NoteItem;