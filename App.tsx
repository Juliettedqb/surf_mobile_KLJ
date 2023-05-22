import Detail from "./components/Detail";
import List, { SurfData } from "./components/List";
import React, { useState } from "react";
import { Api } from "./ApiController";
import { convertToCoordinates } from "./utils/convertToCoordinates";
import { getUserLocation } from "./utils/getLocation";
import { calculateDistance } from "./utils/calculateDistance";

export default function App() {
  const [selectedSpot, setSelectedSpot] = useState<SurfData | null>(null);
  const changeSelectedSpot = (spot: SurfData) => setSelectedSpot(spot);
  const data = Api();
  const fields: SurfData[] = data.map((item) => item._rawJson.fields);

  const surfItems = fields.map((surfData) =>
    convertToCoordinates(surfData.Geocode)
  );

  getUserLocation().then((userLocation) => {
    const surfDistances = surfItems.map((item, i) => [
      calculateDistance(
        userLocation?.latitude,
        item?.latitude,
        userLocation?.longitude,
        item?.longitude
      ),
      i,
    ]);

    let smallestSumElement = null;
    let smallestSum = Infinity;

    for (let i = 0; i < surfDistances.length; i++) {
      const currentSum = surfDistances[i][0] + surfDistances[i][1];
      if (currentSum < smallestSum) {
        smallestSum = currentSum;
        smallestSumElement = surfDistances[i];
      }
    }

    console.log("min surfDistance element", smallestSumElement);
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
