import { Stack } from "expo-router";
const NoteLayout = () => {
    return( <Stack>
        <Stack.Screen name="Index" options={{title: 'Notes'}} />
        </Stack>
        )
}

export default NoteLayout;