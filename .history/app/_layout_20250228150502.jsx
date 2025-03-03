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
      contentStyle:{paddingHorizontal: 10, paddingTop: 20, },
    }}
  />;
}

export default RootLayout;
