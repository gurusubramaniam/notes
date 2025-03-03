import { View, Text, StyleSheet } from "react-native-web"
const NoteItem = ({ note }) => {
    return (
        <View style={styles.notesItem}>
            <Text style={styles.notesText}>{note.text}</Text>
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
})
export default NoteItem;