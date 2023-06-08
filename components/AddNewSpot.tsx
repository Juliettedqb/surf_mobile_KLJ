import React, { FormEvent, useState } from "react";
import { View, Text, TextInput, Button } from "react-native";
import { MouseEvent } from "react";

interface AddNewSpotProps {
  onSubmit: (
    Address: string,
    Photo: string,
    Geocode: string
    // event?: React.MouseEvent<HTMLFormElement> | FormEvent<HTMLFormElement>
  ) => Promise<void>;
}

export default function AddNewSpot({ onSubmit }: AddNewSpotProps) {
  const [Address, setAddress] = useState("");
  const [Photo, setPhoto] = useState("");
  const [Geocode, setGeocode] = useState("");

  const handleFormSubmit = () => {
    onSubmit(Address, Photo, Geocode);
  };

  return (
    <View>
      <Text>Address:</Text>
      <TextInput
        value={Address}
        onChangeText={setAddress}
        placeholder="Enter address"
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
        placeholder="Enter geocode"
      />

      <Button title="Submit" onPress={handleFormSubmit} />
    </View>
  );
}
