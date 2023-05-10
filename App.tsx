import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableNativeFeedback,
} from "react-native";
export default function App() {
  const array = [
    {
      title: "Malibu",
      address: "Malibu 44000",
      image:
        "https://www.martysurfdelivery.com/img/leoblog/b/lg-b-aqutaine.jpeg",
      description: "Regardez comme c'est beau !",
    },
    {
      title: "Hossegor",
      address: "Hossegor 44000",
      image:
        "https://www.martysurfdelivery.com/img/leoblog/b/lg-b-aqutaine.jpeg",
      description: "Regardez comme c'est beau !",
    },
  ];
  return (
    <View style={styles.container}>
      {array.map((e) => {
        return (
          <View key={e.title}>
            <TouchableNativeFeedback onPress={() => console.log("pressed")}>
              <Image
                source={{
                  width: 200,
                  height: 300,
                  uri: e.image,
                }}
              />
            </TouchableNativeFeedback>
            <Text>{e.title}</Text>
          </View>
        );
      })}

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
