import { Text, View, Image, StyleSheet } from "react-native";

const SurfHeader = () => {
  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <Image
          style={{ width: 50, height: 50 }}
          source={require("../assets/wave-removebg-preview.png")}
        />
        <Text style={{ color: "white", fontSize: 20 }}>WaveRider</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 0.1,
    backgroundColor: "#1C2942",
    color: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  innerContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
});

export default SurfHeader;
