import { FlatList, Text, View } from 'react-native';
const NoteList = ({notes}) => {
    return(
        <View>
            <FlatList
                data={notes}
                keyExtractor={item => item.id}
                renderItem={({item}) => (
                   
            )} />
        </View>
    )
}
export default NoteList;