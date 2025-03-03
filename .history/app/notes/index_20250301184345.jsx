import { useState } from 'react';
import {View, Text, StyleSheet, TouchableOpacity, FlatList, Modal, TextInput} from 'react-native';
import NoteList from '@/components/NoteList';
import AddNoteModal from '../../components/AddNoteModal';
const NotesScreen = () => {
    const [notes, setNotes] = useState([
       { id: 1, text: 'Note One'} ,
       { id: 2, text: 'Note Two'} ,
       { id: 3, text: 'Note Three'} ,
    ]);
const [modalVisible, setModalVisible] = useState(false);
const [newNote, setNewNote] = useState('');
const addNote = () => {
    if(newNote.trim() === '') {
        return;
    }
    setNotes([...notes, {id: Date.now.toString(), text: newNote}]);
    setNewNote('');
    setModalVisible(false);
}
return (
    <View style={styles.container}>
        <NoteList notes={notes} />
        <TouchableOpacity style={styles.addbutton} onPress={() => {setModalVisible(true); alert('')}}>
            <Text style={styles.addbuttonText}>+ Add Note</Text>
        </TouchableOpacity>
        <AddNoteModal
            modalVisible={modalVisible}
            setModalVisible={setModalVisible}
            newNote={newNote}
            setNewNote={setNewNote}
            addNote={addNote} />
    </View>
)}
const styles = StyleSheet.create({ 
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#ffffff'
    },
    addbutton:{
        position: 'absolute',
        bottom: 20,
        left: 20,
        right: 20,
        backgroundColor: '#007bff',
        padding: 15,
        borderRadius: 5,
        alignItems: 'center',
    },
    addbuttonText: {
        color: '#ffffff',
        fontSize: 18,
        fontWeight: 'bold'
    }
});
export default NotesScreen;