import { FlatList, Text, View } from 'react-native';
import NoteItem from './NoteItem';
const NoteList = ({notes}) => {
    return(
        <View>
            <FlatList
                data={notes}
                keyExtractor={item => item.id}
                renderItem={({item}) => (
                   <NoteItem
            )} />
        </View>
    )
}
export default NoteList;