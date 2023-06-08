import * as React from "react";
import { View, Image, StyleSheet } from "react-native";
import { SurfData } from "./List";
import { Appbar, Card, Text } from "react-native-paper";
import { SafeAreaProvider } from "react-native-safe-area-context";
import MapView, { Marker, Callout } from "react-native-maps";

interface DetailProps {
  item: SurfData;
  onClick: () => void;
}

const Detail = ({ item, onClick }: DetailProps) => {
  return (
    <SafeAreaProvider>
      <Appbar.Header>
        <Appbar.BackAction onPress={onClick} />
        <Appbar.Content title="Spot details" />
      </Appbar.Header>

      <View style={styles.container}>
        <Image style={styles.image} source={{ uri: item.Photo }} />
        <Card style={styles.card}>
          <Card.Content style={styles.cardContent}>
            <Text style={styles.title}>
              {item.Destination}
              {"\n"}
            </Text>
            <Text style={styles.text}>
              Location : {item.Address}.{"\n"}
              Surf break : {item.SurfBreak}.{"\n"}
              Difficulty level : {item.DifficultyLevel}.
            </Text>
          </Card.Content>
        </Card>
        <MapView
          style={styles.map}
          region={{
            latitude: item.Location.coordinates[1],
            longitude: item.Location.coordinates[0],
            latitudeDelta: 20,
            longitudeDelta: 20,
          }}
        >
          <Marker
            coordinate={{
              latitude: item.Location.coordinates[1],
              longitude: item.Location.coordinates[0],
            }}
          />
        </MapView>
      </View>
    </SafeAreaProvider>
  );
};

export default Detail;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: "100%",
    height: 230,
  },
  card: {
    width: "100%",
    height: 200,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    top: 200,
    padding: 5,
  },
  cardContent: {
    minWidth: 350,
  },
  title: {
    color: "#1C2942",
    fontSize: 22,
    fontWeight: "bold",
  },
  text: {
    fontSize: 15,
    lineHeight: 30,
  },
  map: {
    width: "100%",
    height: 200,
    top: 160,
  },
});
