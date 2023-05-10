import {
  Text,
  View,
  Image,
  TouchableNativeFeedback,
  StyleSheet,
} from "react-native";
import { StatusBar } from "expo-status-bar";

export interface Spot {
  title: string;
  image: string;
  type: "surf" | "wave" | "person";
}

interface Props {
  items: Spot[];
}

export default function List({ items }: Props) {
  return (
    <View style={styles.container}>
      {items.map((e, i) => (
        <View key={i}>
          <Text>{e.title}</Text>
          <Image source={{ width: 100, height: 150, uri: e.image }} />
        </View>
      ))}

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
