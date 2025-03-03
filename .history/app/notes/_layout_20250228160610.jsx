import { Stack } from "expo-router";
const NoteLayout = () => {
    return( <Stack
    screenOptions={{
        headerShown: false
    }}>
        <Stack.Screen name="notes" options={{headerTitle: 'Notes'}}/>
        </Stack>
        )
}
export default NoteLayout;