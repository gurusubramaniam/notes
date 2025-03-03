import { useState } from 'react';
import {View, Text, StyleSheet, TouchableOpacity, FlatList} from 'react-native';
const NotesScreen = () => {
    const [notes, setNotes] = useState([
       { id: 1, text: 'Note 1', } 
    ]);
    const addNote = () => {
        setNotes([...notes, {id: notes.length, text: `Note ${notes.length}`}]);
    }
return (
<View style={styles.container}>
<Text style={styles.title}>Notes</Text>
</View>
)}
const styles = StyleSheet.create({ 
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#ffffff'
    },
});
export default NotesScreen;