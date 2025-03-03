import { Text, View, StyleSheet, Image } from "react-native";
import postitImage from '../assets/images/post-it.png';
const HomeScreen = () => {
  return (
    <View style={styles.container} >
      <Image source={postitImage} style={styles.image} />
      <Text style={styles.title}>Welcome to Notes App</Text>
      <Text style={styles.subTitle}>Capture your thoughts anywhere</Text>
    </View>
  );
}
const styles = StyleSheet.create({
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
    color: '#333',
    marginBottom: 10,
  },
  subTitle:{
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
    marginBottom: 20,
  }
})

export default HomeScreen;