import { Text, View, Image, StyleSheet, Pressable } from "react-native";
import { StatusBar } from "expo-status-bar";

export interface SurfData {
  Address: string;
  Destination: string;
  DestinationCountry: string;
  DifficultyLevel: number;
  Influencers: string;
  Location: any;
  MagicSeaweedLink: string;
  PeakSurfSeasonBegins: string;
  PeakSurfSeasonEnds: string;
  Photos: string[];
  SurfBreak: string[];
}

interface ListProps {
  items: SurfData[];
  onClick: (spot: SurfData) => void;
  handleButtonPress: () => void;
  handleAddButton: () => void;
}

export default function List({
  items,
  onClick,
  handleButtonPress,
  handleAddButton,
}: ListProps) {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={{
          uri: "https://media.gqmagazine.fr/photos/5b990d30930b710011049152/16:9/w_2560%2Cc_limit/nicolas_cage_va_mettre_fin____sa_carri__re_d___acteur_7117.jpeg",
        }}
      />
      <Text style={styles.title}>Surf Spots</Text>
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
        <Pressable style={styles.button} onPress={handleButtonPress}>
          <Text style={{ color: "white" }}>Find nearest spot</Text>
        </Pressable>
        <Pressable style={styles.button} onPress={handleAddButton}>
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
  image: {
    width: "100%",
    height: 180,
  },
  title: {
    fontSize: 25,
    fontWeight: "bold",
    color: "#1C2942",
    padding: 5,
  },
  listElements: {
    backgroundColor: "#4D7092",
    borderWidth: 1,
    borderColor: "white",
    minWidth: 300,
    padding: 5,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  button: {
    backgroundColor: "#1C2942",
    padding: 10,
    borderRadius: 10,
    marginTop: 15,
  },
});
