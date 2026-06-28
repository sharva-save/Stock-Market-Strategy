import { Pressable, StyleSheet, Text, View } from "react-native";

export default function Home() {
  return (
    <View style={{ backgroundColor: "black", height: "100%" }}>
      <View style={styles.nifty}>
        <Text> Nifty 50 </Text>
        <Text> 23,012.70 </Text>
        <Text>
          23,012.70 <Text>+0.23%</Text>
        </Text>
      </View>

      <Text style={{ color: "white" }}>YOUR STRATEGIES</Text>
      <Pressable style={{ backgroundColor: "#003566" }}>
        <View >
          <Text>AB Candle</Text>
          <Text>Body wick R:R 1:1</Text>
        </View>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  nifty: {
    margin: 10,
    height: 90,
    borderRadius: 10,
    backgroundColor: "#2d6a4f",
  },
});
