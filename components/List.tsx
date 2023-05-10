import {
  Text,
  View,
  Image,
  TouchableNativeFeedback,
  StyleSheet,
} from "react-native";
import { StatusBar } from "expo-status-bar";

interface Props {
  title: string[];
  image: string[];
}

export default function List({ title, image }: Props) {
  return (
    <View style={styles.container}>
      {title.map((e, i) => {
        console.log(e, i);
        return (
          <View key={i}>
            <Text>{e}</Text>
            {image.map((el, ind) =>
              i === ind ? (
                <Image source={{ width: 100, height: 150, uri: el }} />
              ) : (
                <></>
              )
            )}
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
