import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function App() {
  return (
    <View >
      
      <Image style={styles.im} source={{uri:"https://static.expo.dev/static/brand/square-512x512.png"}}/> 

    </View>
  );
}

const styles = StyleSheet.create({
  im: {
    width:60,
    height:60,
  },
});
