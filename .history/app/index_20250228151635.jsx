import { Text, View, StyleSheet, Image } from "react-native";
import postitImage from '../assets/images/post-it.png';
const HomeScreen = () => {
  return (
    <View style={style.container} >
      <Image source={postitImage} style={style.image} />
      <Text styler={style.title}>Welcome to Notes App</Text>
      <Text styler={style.subTitle}>Capture your thoughts anywhere</Text>
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
    marginBottom: 20,
    borderRadius:20
  },
  title:{
    fontSize: 28,
    fontWeight: 'bold',
    color: 'black',
    marginBottom: 10,
    color: 'black'
  },
  subTitle:{}
})

export default HomeScreen;