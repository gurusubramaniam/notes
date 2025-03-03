import { useState, useEffect } from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Alert} from 'react-native';
import NoteList from '@/components/NoteList';
import AddNoteModal from '../../components/AddNoteModal';
import noteService from '../../services/noteService';
const NotesScreen = () => {
    const [notes, setNotes] = useState([]);
    const [modalVisible, setModalVisible] = useState(false);
    const [newNote, setNewNote] = useState('');
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    useEffect(() => {
        fetchNotes();
    },[]);
    const fetchNotes = async () => {
        const response = await noteService.getNotes();
        if(response.error) {
            setError(response.error);
            Alert.alert('Error', response.error);
        } else {
            setNotes(response.data);
        }
        setLoading(false);
    }
    const addNote =  async () => {
        if(newNote.trim() === '') {
            return;
        }
        // setNotes([...notes, {id: Date.now.toString(), text: newNote}]);
        // setNewNote('');
        const response = await noteService.addNotes(newNote);
        if(response.error) {
            setError(response.error);
            Alert.alert('Error', response.error);
        } else {
            setNotes([...notes, response.data]);
        }
        setNewNote('');
        setModalVisible(false);
    }
    return (
        <View style={styles.container}>
            <NoteList notes={notes} />
            <TouchableOpacity style={styles.addbutton} onPress={() => setModalVisible(true)}>
                <Text style={styles.addbuttonText}>+ Add Note</Text>
            </TouchableOpacity>
            <AddNoteModal
                modalVisible={modalVisible}
                setModalVisible={setModalVisible}
                newNote={newNote}
                setNewNote={setNewNote}
                addNote={addNote} />
        </View>
    )
}
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