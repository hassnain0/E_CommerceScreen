import React from "react";
import { FlatList, Image, ImageBackground, StyleSheet, Text, Touchable, TouchableOpacity, View } from "react-native";

const Items = () => {

  return (
    <View>
      <Image source={require('../assets/Product card_new.png')} />
    </View>
  )
}
function Home(): React.JSX.Element {

  return (
    <ImageBackground source={require('../assets/Banner.png')} style={styles.background}>
      <View style={{ flex: 1, flexDirection: 'column', marginTop: 250, left: 20, }}>
        <Text style={styles.TextContainer}>Fashion</Text>
        <Text style={styles.TextContainer}>sale</Text>
        <TouchableOpacity style={{ backgroundColor: '#D93022', width: 180, borderRadius: 20, height: 40, }}>
          <Text style={{ fontSize: 18, color: 'white', textAlign: 'center', fontWeight: '400', top: 5, }}>Check</Text>
        </TouchableOpacity>
      </View>
      <View style={{ flex: 1, backgroundColor: 'white', }}>
        <Text style={{ fontWeight: '700', fontSize: 40, color: 'black', left: 20 }}>New</Text>
        <Text style={{ left: 12, fontWeight: '300', left: 20 }}>You've never seen it before!</Text>
        <FlatList />
      </View>

    </ImageBackground>
  );
}
const styles = StyleSheet.create({
  background: {
    width: '100%',
    height: '100%',
  },
  TextContainer: {
    color: 'white', fontSize: 45, fontWeight: '900',
  },
});

export default Home;
