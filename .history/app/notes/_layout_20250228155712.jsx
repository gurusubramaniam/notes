import { Stack } from "expo-router";
const NoteLayout = () => {
    return( <Stack
    screenOptions={{
        headerShown: false
    }}>
        <Stack.Screen name="Noted" options={{title: 'Home'}}/>
        </Stack>
        )
}

export default NoteLayout;