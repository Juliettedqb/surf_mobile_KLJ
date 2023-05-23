import * as React from 'react';
import { Text, View, Image, StyleSheet } from "react-native";
import { SurfData } from "./List";
import { ConversionUtils } from "turbocommons-ts";
import { Appbar } from 'react-native-paper';
import { SafeAreaProvider } from 'react-native-safe-area-context';


interface DetailProps {
  item: SurfData;
  onClick: () => void;
}

const convertToCoordinates = (base64Code: string) => {
  const geoCodeString = ConversionUtils.base64ToString(base64Code);
  const coordinates: string = `longitude : ${
    JSON.parse(geoCodeString).o.lng
  } , latitude : ${JSON.parse(geoCodeString).o.lat}`;

  console.log(coordinates);
  return coordinates;
};

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
          source={{ width: 350, height: 200, uri: item.photos[0].url }} />
        <Text>
          Spot : {item.address} ({item["destinationRegion"]}){"\n"}
          GeoCode : {convertToCoordinates(item.geoCode)}
          {"\n"}
          Surf break : {item["surfBreak"]}
          {"\n"}
          Difficulty level : {item["difficultyLevel"]}
        </Text>
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
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  }
});
