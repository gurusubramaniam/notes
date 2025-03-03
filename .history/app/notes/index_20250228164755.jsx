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
    <TouchableOpacity>
        <Text>{item.text}</Text>
    </TouchableOpacity>
    )} />
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