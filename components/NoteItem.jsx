import { View, Text, StyleSheet, TouchableOpacity } from "react-native"
const NoteItem = ({ note, onDelete }) => {
    return (
        <View style={styles.notesItem}>
            <Text style={styles.notesText}>{note.text}</Text>
            <TouchableOpacity onPress={() => onDelete(note.$id)}>
                <Text style={styles.delete}>❌</Text>
            </TouchableOpacity>
        </View>
    )
}
const styles = new StyleSheet.create({
    notesItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: '#f5f5f5',
        padding: 15,
        borderRadius: 5,
        marginVertical: 5,
    },
    notesText: {
        fontSize: 18
    },
    delete: {
        fontSize: 18,
        color: 'red',
    },
})
export default NoteItem;