import { Text, View, Image, StyleSheet, Button } from "react-native";
import { SurfData } from "./List";
import { ConversionUtils } from "turbocommons-ts";

interface DetailProps {
  item: SurfData;
  onClick: () => void;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

// const convertToCoordinates = (base64Code: string) => {
//   const geoCodeString = ConversionUtils.base64ToString(base64Code);
//   const coordinates: string = `longitude : ${
//     JSON.parse(geoCodeString).o.lng
//   } , latitude : ${JSON.parse(geoCodeString).o.lat}`;

//   console.log(coordinates);
//   return coordinates;
// };

const Detail = ({ item, onClick }: DetailProps) => {
  return (
    <View style={styles.container}>
      <Text>
        Spot : {item.Address} ({item.Destination}){"\n"}
        {/* GeoCode : {convertToCoordinates(item.geoCode)} */}
        {"\n"}
        Surf break : {item.SurfBreak}
        {"\n"}
        Difficulty level : {item.DifficultyLevel}
      </Text>
      <Image source={{ width: 100, height: 150, uri: item.Photos[0] }} />
      <Button title="Go back to listing" onPress={onClick}></Button>
    </View>
  );
};

export default Detail;
