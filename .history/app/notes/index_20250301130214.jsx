import { useState } from 'react';
import {View, Text, StyleSheet, TouchableOpacity, FlatList, Modal, TextInput} from 'react-native';
const NotesScreen = () => {
    const [notes, setNotes] = useState([
       { id: 1, text: 'Note One'} ,
       { id: 2, text: 'Note Two'} ,
       { id: 3, text: 'Note Three'} ,
    ]);
const [modalVisible, setModalVisible] = useState(false);
const [newNote, setNewNote] = useState('');
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
        <TouchableOpacity style={styles.addbutton} onPress={() => setModalVisible(true)}>
            <Text style={styles.addbuttonText}>+ Add Note</Text>
        </TouchableOpacity>
        <Modal visible={modalVisible} animationType='slide' transparent onRequestClose={() => setModalVisible(false)}>
            <View style={styles.modalOverlay}>
                <view style={styles.modalContent}>
                <TextInput
                style={styles.input}
                placeholder='Enter Note'
                value={newNote}
                onChangeText={setNewNote}
                />
                <TouchableOpacity style={styles.addbutton} onPress={() => {
                    setNotes([...notes, {id: notes.length + 1, text: newNote}]);
                    setModalVisible(false);
                    setNewNote('');
                }}>
                    <Text style={styles.addbuttonText}>Add Note</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.addbutton} onPress={() => setModalVisible(false)}>
                    <Text style={styles.addbuttonText}>Cancel</Text>
                </TouchableOpacity>
            </View>
            </Modal>
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