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
                    <Text style={styles.modalTitle}>Add New Note</Text>
                    <TextInput
                    style={styles.input}
                    placeholder='Enter Note'
                    value={newNote}
                    onChangeText={setNewNote}
                    />
                    <view style={styles.modalButtons}>
                       
                        <TouchableOpacity style={styles.cancelbutton} onPress={() => setModalVisible(false)}>
                            <Text style={styles.cancelbuttonText}>Cancel</Text>
                        </TouchableOpacity>

                        
                    </view>
                </view>
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
    },
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
    modalButtons: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
    },
    cancelbuttonText: {
        color: '#333',
        fontSize: 18,
        marginRight: 10,
    },
    savebuttonText: {
        color: '#007bff',
        fontSize: 18,
    },
    savebutton: {
        padding: 10,
        backgroundColor: '##007bff',
        borderRadius: 5,
        flex:1,
        alignItems: 'center',
    },
    cancelbutton: {
        padding: 10,
        color: '#ffffff',
        borderRadius: 5,
        flex:1,
        alignItems: 'center',
    },  
});
export default NotesScreen;