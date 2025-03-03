import { Stack } from "expo-router";

const RootLayout = () => {
  return <Stack 
    screenOptions={{
      headerStyle:{
        backgroundColor: 'red',
      },
      headerTintColor: 'white',
      
    }}
  />;
}

export default RootLayout;
