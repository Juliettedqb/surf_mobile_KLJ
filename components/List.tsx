import { Text, View, Image, StyleSheet } from "react-native";
import { StatusBar } from "expo-status-bar";

export interface SurfData {
  Address: string;
  Destination: string;
  "Destination State/Country": string;
  "Difficulty Level": number;
  Geocode: string;
  Influencers: string[];
  "Magic Seaweed Link": string;
  "Peak Surf Season Begins": string;
  "Peak Surf Season Ends": string;
  Photos: any[];
  "Surf Break": string[];
}

interface ListProps {
  items: SurfData[];
  onClick: (spot: SurfData) => void;
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
            {e.Destination}
          </Text>
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
