import { View, Text } from "react-native-web"
const NoteItem = ({ note }) => {
    return (
        <View style={styles.notesItem}>
            <Text style={styles.notesText}>{item.text}</Text>
        </View>
    )
}
export default NoteItem;