import { Stack } from "expo-router";

const RootLayout = () => {
  return <Stack 
    screenOptions={{
      headerStyle:{
        backgroundColor: 'red',
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
    }}
  >
<Stack.Screen name="Index" component={HomeScreen} options={{title: 'Home'}} />

  </Stack>;
}

export default RootLayout;
