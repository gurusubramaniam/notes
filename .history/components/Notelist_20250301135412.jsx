import { FlatList, Text, View } from 'react-native';
const NoteList = ({notes}) => {
    return(
        <View>
         <FlatList
            data={notes}
            keyExtractor={item => item.id}
            renderItem={({item}) => (
                <View style={styles.notesItem}>
                    <Text style={styles.notesText}>{item.text}</Text>
                </View>
        )} />
    )
}
export default NoteList;