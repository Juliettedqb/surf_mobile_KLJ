import { Text, View, Image, StyleSheet, Button } from "react-native";
import { SurfData } from "./List";

interface DetailProps {
  item: SurfData;
  onClick: () => void;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

const Detail = ({ item, onClick }: DetailProps) => {
  return (
    <View style={styles.container}>
      <Text>
        Spot : {item.Address} ({item["Destination State/Country"]}){"\n"}
        Surf break : {item["Surf Break"]}
        {"\n"}
        Difficulty level : {item["Difficulty Level"]}
      </Text>
      <Image source={{ width: 100, height: 150, uri: item.Photos[0].url }} />
      <Button title="Go back to listing" onPress={onClick}></Button>
    </View>
  );
};

export default Detail;
