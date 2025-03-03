import { useState, useEffect } from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Alert} from 'react-native';
import NoteList from '@/components/NoteList';
import AddNoteModal from '../../components/AddNoteModal';
import noteService from '../../services/noteService';
import { ActivityIndicator } from 'react-native';
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
    const onDelete = async (documentId) => {
        const response = await noteService.deleteNote(documentId);
        if(response.error) {
            setError(response.error);
            Alert.alert('Error', response.error);
        } else {
            setNotes(notes.filter(note => note.$id !== documentId));
        }
    }
    return (
        <View style={styles.container}>
            {loading ? 
                (<ActivityIndicator size='large' color="#007bff"/>) 
                : (<>{error && <Text style={styles.errorText}>{error}</Text>}
                <NoteList notes={notes} onDelete={onDelete}/>
                </>
            )}
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
    },
    errorText: {
        color: 'red',
        fontSize: 16,
        marginBottom: 10
    }
});
export default NotesScreen;