import * as React from "react";
import { View, Image, StyleSheet } from "react-native";
import { SurfData } from "./List";
//  import { ConversionUtils } from "turbocommons-ts";
import { Appbar, Card, Text } from "react-native-paper";
import { SafeAreaProvider } from "react-native-safe-area-context";

interface DetailProps {
  item: SurfData;
  onClick: () => void;
}

//   const convertToCoordinates = (base64Code: string) => {
//   const geoCodeString = ConversionUtils.base64ToString(base64Code);
//   const coordinates: string = `longitude : ${
//     JSON.parse(geoCodeString).o.lng
//   } , latitude : ${JSON.parse(geoCodeString).o.lat}`;

//   console.log(coordinates);
//   return coordinates;
// };

const Detail = ({ item, onClick }: DetailProps) => {
  return (
    <SafeAreaProvider>
      <Appbar.Header>
        <Appbar.BackAction onPress={onClick} />
        <Appbar.Content title="Spot details" />
      </Appbar.Header>

      <View style={styles.container}>
        <Image
          style={styles.image}
          source={{ uri: item.photos[0].url }}
        />
        <Card style={styles.card}>
          <Card.Content style={styles.cardContent}>
            <Text style={styles.title}>
              {item.destination}
              {"\n"}
            </Text>
            <Text style={styles.text}>
              {/* GeoCode : {convertToCoordinates(item.geoCode)}.{"\n"} */}
              Location : {item["address"]}.{"\n"}
              Surf break : {item["surfBreak"]}.{"\n"}
              Difficulty level : {item["difficultyLevel"]}.
            </Text>
          </Card.Content>
        </Card>
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
    height: 300,
  },
  card: {
    width: "100%",
    height: 250,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    top: 250,
    padding: 10,
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
});