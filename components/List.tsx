import {
    Text,
    View,
    Image,
    TouchableNativeFeedback,
    StyleSheet
  } from "react-native";
  import { StatusBar } from "expo-status-bar";

interface Data {
    data : object[]
}

export default function List({data} : Data) {

return(
    <View style={styles.container}>
      {data.map((e) => {
        console.log(e)
        return (
            <></>
        //   <View key={e.title}>
        //     <Text>{e.title}</Text>
        //   </View>
        );
      })}

      <StatusBar style="auto" />
    </View>
)
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#fff",
      alignItems: "center",
      justifyContent: "center",
    },
  });