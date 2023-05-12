import { Text, View, Image, StyleSheet } from "react-native";
import { StatusBar } from "expo-status-bar";

export interface Spot {
  title: string;
  image: string;
  surfBreak: string;
  country: string;
  difficulty: number;
  moreInformation: string;
}

interface ListProps {
  items: Spot[];
  onClick: (spot: Spot) => void;
}

export default function List({ items, onClick }: ListProps) {
  return (
    <View style={styles.container}>
      {items.map((e, i) => (
        <View key={i}>
          <Text
            onPress={() => {
              onClick(e);
            }}
          >
            {e.title}
          </Text>
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
