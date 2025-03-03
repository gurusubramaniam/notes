import { FlatList, Text, View } from 'react-native';
const NoteList = ({notes}) => {
    return(
        <View>
            <FlatList
                data={notes}
                keyExtractor={item => item.id}
                renderItem={({item}) => (
                   <Note
            )} />
        </View>
    )
}
export default NoteList;