import {View, Text, StyleSheet, TouchableOpacity, FlatList, Modal, TextInput} from 'react-native';
import { useState } from 'react';
const AddNoteModal = ({modalVisible, setModalVisible, newNote, setNewNote, addNote}) => {
            return (<Modal visible={modalVisible} animationType='slide' transparent onRequestClose={() => setModalVisible(false)}>
                <View style={styles.modalOverlay}>
                    <View style={styles.modalContent}>
                        <Text style={styles.modalTitle}>Add New Note</Text>
                        <TextInput
                        style={styles.input}
                        placeholder='Enter Note'
                        value={newNote}
                        onChangeText={setNewNote}
                        />
                        <View style={styles.modalButtons}>
                            <TouchableOpacity style={styles.savebutton} onPress={addNote}>
                                    <Text style={styles.savebuttonText}>Save</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.cancelbutton} onPress={() => {setModalVisible(false); alert('note')}}>
                                <Text style={styles.cancelbuttonText}>Cancel</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </Modal>)
}
const styles = StyleSheet.create({
    modalOverlay: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)'
    },
    modalContent: {
        width: '80%',
        backgroundColor: '#ffffff',
        padding: 20,
        borderRadius: 10,
    },
    modalTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    input: {
        backgroundColor: '#f5f5f5',
        padding: 10,
        borderRadius: 5,
        marginBottom: 10,
    },
    cancelbuttonText: {
        color: '#333',
        fontSize: 18,
        marginRight: 10,
    },
    savebuttonText: {
        color: '#fff',
        fontSize: 18,
    },
    modalButtons: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    savebutton: {
        padding: 10,
        backgroundColor: '#007bff',
        borderRadius: 5,
        flex:1,
        alignItems: 'center',
        marginRight: 10,
    },
    cancelbutton: {
        padding: 10,
        color: '#ffffff',
        borderRadius: 5,
        flex:1,
        alignItems: 'center',
        backgroundColor: '#cccccc',
    }
})
export default AddNoteModal;