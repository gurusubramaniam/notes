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
      contentStyle:{{
        
      }}
    }}
  />;
}

export default RootLayout;
