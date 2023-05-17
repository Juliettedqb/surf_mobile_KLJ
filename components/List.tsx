import { Text, View, Image, StyleSheet, Pressable } from "react-native";
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
      <Image
        source={{
          width: 395,
          height: 180,
          uri: "https://media.gqmagazine.fr/photos/5b990d30930b710011049152/16:9/w_2560%2Cc_limit/nicolas_cage_va_mettre_fin____sa_carri__re_d___acteur_7117.jpeg",
        }}
      />
      <Text
        style={{
          fontSize: 25,
          fontWeight: "bold",
          color: "#1C2942",
          padding: 5,
        }}
      >
        Surf Spots
      </Text>
      {items.map((e, i) => (
        <View style={styles.listElements} key={i}>
          <Text
            style={{ textAlign: "center", color: "white", fontSize: 15 }}
            onPress={() => {
              onClick(e);
            }}
          >
            {e.Destination}
          </Text>
        </View>
      ))}
      <View style={{ display: "flex", flexDirection: "row", gap: 10 }}>
        <Pressable style={styles.button}>
          <Text style={{ color: "white" }}>Find nearest spot</Text>
        </Pressable>
        <Pressable style={styles.button}>
          <Text style={{ color: "white" }}>Add new spot</Text>
        </Pressable>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 0.5,
    backgroundColor: "#fff",
    alignItems: "center",
  },
  listElements: {
    backgroundColor: "#4D7092",
    borderWidth: 1,
    borderColor: "white",
    minWidth: 300,
    padding: 5,
  },
  button: {
    backgroundColor: "#1C2942",
    padding: 10,
    borderRadius: 10,
    marginTop: 15,
  },
});
