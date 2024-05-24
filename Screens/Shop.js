import React from "react";
import { View, Text, StyleSheet } from "react-native";

function Shop(): React.JSX.Element {
  return (
    <View style={styles.container}>
      <Text>Shop Screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Shop;
