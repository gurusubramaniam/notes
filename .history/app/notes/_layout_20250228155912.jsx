import { Stack } from "expo-router";
const NoteLayout = () => {
    return( <Stack
    screenOptions={{
        headerShown: false
    }}>
        <Stack.Screen name="Notes" options={{title: 'Notes'}}/>
        </Stack>
        )
}
export default NoteLayout;