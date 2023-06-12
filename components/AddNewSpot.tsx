import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  Pressable,
} from "react-native";
import { Appbar, Card } from "react-native-paper";
import { MouseEvent } from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";

interface AddNewSpotProps {
  onSubmit: (
    Address: string,
    Photo: string,
    Geocode: string,
    SurfBreak: string,
    DifficultyLevel: string
    // event?: React.MouseEvent<HTMLFormElement> | FormEvent<HTMLFormElement>
  ) => Promise<void>;
  onClick: () => void;
}

export default function AddNewSpot({ onSubmit, onClick }: AddNewSpotProps) {
  const [Destination, setDestination] = useState("");
  const [Photo, setPhoto] = useState("");
  const [Geocode, setGeocode] = useState("");
  const [SurfBreak, setSurfBreak] = useState("");
  const [DifficultyLevel, setDifficultyLevel] = useState("");

  const handleFormSubmit = () => {
    onSubmit(Destination, Photo, Geocode, SurfBreak, DifficultyLevel);
  };

  return (
    <SafeAreaProvider>
      <Appbar.Header>
        <Appbar.BackAction onPress={onClick} />
        <Appbar.Content title="Add new spot" />
      </Appbar.Header>
      <View style={styles.container}>
        <Card style={styles.card}>
          <Card.Content style={styles.cardContent}>
            <Text>Destination:</Text>
            <TextInput
              value={Destination}
              onChangeText={setDestination}
              placeholder="Enter destination"
            />

            <Text>Photo:</Text>
            <TextInput
              value={Photo}
              onChangeText={setPhoto}
              placeholder="Enter photo URL"
            />

            <Text>Geocode:</Text>
            <TextInput
              value={Geocode}
              onChangeText={setGeocode}
              placeholder="Enter longitude, latitude"
            />

            <Text>Surf break:</Text>
            <TextInput
              value={SurfBreak}
              onChangeText={setSurfBreak}
              placeholder="Enter surf break"
            />

            <Text>Difficulty level:</Text>
            <TextInput
              value={DifficultyLevel}
              onChangeText={setDifficultyLevel}
              placeholder="Enter difficulty level"
            />

            {/* <Button title="Submit" onPress={handleFormSubmit} /> */}

            <Pressable style={styles.button} onPress={handleFormSubmit}>
              <Text style={styles.buttonText}>Submit</Text>
            </Pressable>
          </Card.Content>
        </Card>
      </View>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  card: {
    width: "100%",
    height: 300,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    top: 150,
    padding: 5,
  },
  cardContent: {
    minWidth: 350,
  },
  button: {
    backgroundColor: "#1C2942",
    padding: 10,
    borderRadius: 10,
    marginTop: 15,
    textAlign: "center",
    top: 50,
  },
  buttonText: {
    color: "white",
    textAlign: "center",
  },
});
