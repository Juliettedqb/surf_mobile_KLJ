import * as React from "react";
import { View, Image, StyleSheet } from "react-native";
import { SurfData } from "./List";
//  import { ConversionUtils } from "turbocommons-ts";
import { Appbar, Card, Text } from "react-native-paper";
import { SafeAreaProvider } from "react-native-safe-area-context";
import MapView, { Marker } from "react-native-maps";
import { ConversionUtils } from "turbocommons-ts";

interface DetailProps {
  item: SurfData;
  onClick: () => void;
}

const convertToCoordinates = (base64Code: string) => {
  const geoCodeString = ConversionUtils.base64ToString(base64Code);
  const longitude = JSON.parse(geoCodeString).o.lng;
  const latitude = JSON.parse(geoCodeString).o.lat;
  const longNumber = Number(longitude);
  const latNumber = Number(latitude);
  return [longNumber, latNumber];
};

const Detail = ({ item, onClick }: DetailProps) => {
  return (
    <SafeAreaProvider>
      <Appbar.Header>
        <Appbar.BackAction onPress={onClick} />
        <Appbar.Content title="Spot details" />
      </Appbar.Header>

      <View style={styles.container}>
        <Image style={styles.image} source={{ uri: item.photos[0].url }} />
        <Card style={styles.card}>
          <Card.Content style={styles.cardContent}>
            <Text style={styles.title}>
              {item.destination}
              {"\n"}
            </Text>
            <Text style={styles.text}>
              Location : {item["address"]}.{"\n"}
              Surf break : {item["surfBreak"]}.{"\n"}
              Difficulty level : {item["difficultyLevel"]}.
            </Text>
          </Card.Content>
        </Card>
        <MapView
          style={styles.map}
          region={{
            latitude: convertToCoordinates(item.geoCode)[1],
            longitude: convertToCoordinates(item.geoCode)[0],
            latitudeDelta: 20,
            longitudeDelta: 20,
          }}
        >
          <Marker
            coordinate={{
              latitude: convertToCoordinates(item.geoCode)[1],
              longitude: convertToCoordinates(item.geoCode)[0],
            }}
            title={item.address}
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
