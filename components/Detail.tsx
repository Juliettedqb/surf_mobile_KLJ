import { Text, View, Image, StyleSheet, Button } from "react-native";
import { Spot } from "./List";

interface DetailProps {
  item: Spot;
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
        Spot : {item.title} ({item.country}){"\n"}
        Surf break : {item.surfBreak}
        {"\n"}
        Difficulty level : {item.difficulty}
      </Text>
      <Image source={{ width: 100, height: 150, uri: item.image }} />
      <Button title="Go back to listing" onPress={onClick}></Button>
    </View>
  );
};

export default Detail;
