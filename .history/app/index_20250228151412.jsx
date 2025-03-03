import { Text, View, StyleSheet, Image } from "react-native";
import postitImage from '../assets/images/post-it.png';
const HomeScreen = () => {
  return (
    <View style={style.container} >
      <Image source={postitImage} style={style.image} />
      <Text>Edit app/index.tsx to edit this screen.</Text>
    </View>
  );
}
const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor:'#f8f9fa'
  },
  image:{
    width:100,
    height: 100,
    
  }
})

export default HomeScreen;