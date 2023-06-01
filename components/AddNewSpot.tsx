import React, { useState } from "react";
import { View, Text, TextInput, Button } from "react-native";

interface AddNewSpotProps {
  onSubmit: (address: string, photo: string, geocode: string) => void;
}

const AddNewSpot: React.FC<AddNewSpotProps> = ({ onSubmit }) => {
  const [address, setAddress] = useState("");
  const [photo, setPhoto] = useState("");
  const [geocode, setGeocode] = useState("");

  const handleFormSubmit = () => {
    onSubmit(address, photo, geocode);
  };

  return (
    <View>
      <Text>Address:</Text>
      <TextInput
        value={address}
        onChangeText={setAddress}
        placeholder="Enter address"
      />

      <Text>Photo:</Text>
      <TextInput
        value={photo}
        onChangeText={setPhoto}
        placeholder="Enter photo URL"
      />

      <Text>Geocode:</Text>
      <TextInput
        value={geocode}
        onChangeText={setGeocode}
        placeholder="Enter geocode"
      />

      <Button title="Submit" onPress={handleFormSubmit} />
    </View>
  );
};

export default AddNewSpot;
