import Detail from "./components/Detail";
import List, { SurfData } from "./components/List";
import React, { useState } from "react";
import { Api } from "./ApiController";
import { convertToCoordinates } from "./utils/convertToCoordinates";
import { getUserLocation } from "./utils/getLocation";

export default function App() {
  const [selectedSpot, setSelectedSpot] = useState<SurfData | null>(null);
  const changeSelectedSpot = (spot: SurfData) => setSelectedSpot(spot);
  const data = Api();
  const fields: SurfData[] = data.map((item) => item._rawJson.fields);

  const surfItems = fields.map((surfData) =>
    convertToCoordinates(surfData.Geocode)
  );

  getUserLocation().then((userLocation) => {
    //Map through surf items to determine each of their distances from user's location
    //take the min length
  });

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
