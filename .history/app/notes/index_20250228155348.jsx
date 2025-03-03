import {View, Text, StyleSheet, TouchableOpacity, FlatList} from 'react-native';
const NotesScreen = () => {
return (
<View style={styles.container}>
<Text style={styles.title}>Notes</Text>
</View>
}
const styles = StyleSheet.create({ 
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#f8f9fa'
    },
});
export default NotesScreen;