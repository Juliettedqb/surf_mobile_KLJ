import { Text, View, Image, StyleSheet, Pressable } from "react-native";
import { StatusBar } from "expo-status-bar";

export interface SurfData {
  address: string;
  destination: string;
  destinationRegion: string;
  difficultyLevel: number;
  geoCode: string;
  influencers: string[];
  magicSeaweedLink: string;
  seasonStart: string;
  seasonEnd: string;
  photos: any[];
  surfBreak: string[];
}

interface ListProps {
  items: SurfData[];
  onClick: (spot: SurfData) => void;
  handleButtonPress: () => void;
}

export default function List({ items, onClick, handleButtonPress }: ListProps) {
  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: "https://media.gqmagazine.fr/photos/5b990d30930b710011049152/16:9/w_2560%2Cc_limit/nicolas_cage_va_mettre_fin____sa_carri__re_d___acteur_7117.jpeg",
        }}
        style={styles.image}
      />
      <Text style={styles.title}>Surf Spots</Text>
      {items.map((e, i) => (
        <View style={styles.listElements} key={i}>
          <Text
            style={styles.spots}
            onPress={() => {
              onClick(e);
            }}
          >
            {e.destination}
          </Text>
        </View>
      ))}
      {/* <View style={{ display: "flex", flexDirection: "row", gap: 10 }}>
        <Pressable style={styles.button} onPress={handleButtonPress}>
          <Text style={styles.colorTextButton}>Find nearest spot</Text>
        </Pressable>
        <Pressable style={styles.button}>
          <Text style={styles.colorTextButton}>Add new spot</Text>
        </Pressable>
      </View> */}
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
  listElements: {
    backgroundColor: "#4D7092",
    borderWidth: 2,
    borderColor: "white",
    minWidth: 300,
    padding: 6,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  title: {
    fontSize: 25,
    fontWeight: "bold",
    color: "#1C2942",
    padding: 5,
  },
  spots: {
    textAlign: "center",
    color: "white",
    fontSize: 16,
  },
  button: {
    backgroundColor: "#1C2942",
    padding: 10,
    borderRadius: 10,
    marginTop: 15,
  },
  colorTextButton: {
    color: "white",
  },
});
