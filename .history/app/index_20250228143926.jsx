import { Text, View, StyleSheet } from "react-native";

const HomeScreen() {
  return (
    <View style={style.container} >
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