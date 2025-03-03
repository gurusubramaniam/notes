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
        <TouchableOpacity style={styles.button} onPress={() => Router.push('/notes/add')}>
            <Text style={styles.buttonText}>Add Note</Text>
        </
    </View>
)}
const styles = StyleSheet.create({ 
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#ffffff'
    },
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
    }   
});
export default NotesScreen;