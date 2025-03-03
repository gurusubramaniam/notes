import {View, Text, StyleSheet, TouchableOpacity, FlatList, Modal, TextInput} from 'react-native';
import { useState } from 'react';
const AddNoteModal = ({modalVisible, setModalVisible, newNote, setNewNote}) => {
            <Modal visible={modalVisible} animationType='slide' transparent onRequestClose={() => setModalVisible(false)}>
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
    
                            <TouchableOpacity style={styles.cancelbutton} onPress={() => setModalVisible(false)}>
                                <Text style={styles.cancelbuttonText}>Cancel</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </Modal>
}
export default AddNoteModal;