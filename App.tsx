import Detail from "./components/Detail";
import List, { SurfData } from "./components/List";
import React, { useState } from "react";
import { Api } from "./ApiController";
import * as Location from "expo-location";

export default function App() {
  const getLocationAsync = async () => {
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== "granted") {
      // Handle permission denied
      return;
    }
    let location = await Location.getCurrentPositionAsync({});
    let latitude = location.coords.latitude;
    let longitude = location.coords.longitude;
    console.log(location);
  };

  getLocationAsync();

  const data = Api();
  const fields: SurfData[] = [];

  for (let i = 0; i < data.length; i++) {
    fields.push(data[i]["_rawJson"]["fields"]);
  }

  const [selectedSpot, setSelectedSpot] = useState<SurfData | null>(null);

  const changeSelectedSpot = (spot: SurfData) => setSelectedSpot(spot);

  return (
    <>
      {selectedSpot ? (
        <Detail onClick={() => setSelectedSpot(null)} item={selectedSpot} />
      ) : (
        <List onClick={changeSelectedSpot} items={fields} />
      )}
    </>
  );
}
