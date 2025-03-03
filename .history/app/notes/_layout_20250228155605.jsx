import { Stack } from "expo-router";
const NoteLayout = () => {
    return( <Stack
    
    screenOptions={{
        headerShown: false,
        headerStyle:{
            backgroundColor: 'orange',
        },
        headerTintColor: 'white',
        headerTitleStyle: {
            fontWeight: 'bold',
            fontSize: 20,
        },
        contentStyle:{
            paddingHorizontal: 10, 
            paddingTop: 10, 
            backgroundColor: 'white'
        },

    }}>
        
        </Stack>
        )
}

export default NoteLayout;