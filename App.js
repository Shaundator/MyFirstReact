import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity, Linking } from 'react-native';

const tuborgLink = () => {
  Linking.openURL("https://tuborg.dk/")
}
export default function App() {
  return (
    <View style={styles.container}>
      <TouchableOpacity
      onPress={tuborgLink}>
        <Image 
      source={{uri: 'https://fadnord.dk/wp-content/uploads/sites/3/2019/11/gr%C3%B8n-tuborg-frog-eye_1.png'}}
      style={styles.containerImage}/>
      </TouchableOpacity>
      <Text
      style={styles.containerText}>
        Tuborg - gør livet lidt grønnere
        </Text>
      <StatusBar style="auto" />
    </View>
  );
}

// Logo Image: https://fadnord.dk/wp-content/uploads/sites/3/2019/11/gr%C3%B8n-tuborg-frog-eye_1.png

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    backgroundColor: 'lightgreen'
  },
  containerImage: {
    width: 250,
    height: 250,
    marginTop: 125
  },
  containerText: {
    marginTop: 25,
    color: 'darkgreen',
    fontWeight: 'bold',
    fontSize: 25
  }
});
