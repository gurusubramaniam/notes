import { useState } from 'react';
import {View, Text, StyleSheet, TouchableOpacity, FlatList} from 'react-native';
const NotesScreen = () => {
    const [notes, setNotes] = useState([
       { id: 1, text: 'Note One'} ,
       { id: 2, text: 'Note Two'} ,
       { id: 3, text: 'Note Three'} ,
    ]);

return (
    <View style={styles.container}>
        <FlatList
        data={notes}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
            <View style={styles.notesItem}>
                <text style={styles.notesText}>{item.text}</text>
            </View>
        )} />
    </View>
)}
const styles = StyleSheet.create({ 
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#ffffff'
    },
    notesItem: {
        padding: 20,
        backgroundColor: '#f8f9fa',
        marginBottom: 10,
        borderRadius: 10
    },
});
export default NotesScreen;