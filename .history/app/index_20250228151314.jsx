import { Text, View, StyleSheet, Image } from "react-native";
import postitImage from '../assets/images/post-it.png';
const HomeScreen = () => {
  return (
    <View style={style.container} >
      <Image source={postitImage} style={} />
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