import { Text, View, StyleSheet, Image } from "react-native";

const HomeScreen = () => {
  return (
    <View style={style.container} >
      <Image
      <Text>Edit app/index.tsx to edit this screen.</Text>
    </View>
  );
}
const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
})

export default HomeScreen;