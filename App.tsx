import Detail from "./components/Detail";
import List, { SurfData } from "./components/List";
import React, { useState } from "react";
import { Api } from "./ApiController";
import { convertToCoordinates } from "./utils/convertToCoordinates";
import { getUserLocation } from "./utils/getLocation";
import { calculateDistance } from "./utils/calculateDistance";
import SurfHeader from "./components/SurfHeader";

enum Page {
  HOME,
  FORM,
}

export default function App() {
  const [selectedSpot, setSelectedSpot] = useState<SurfData | null>(null);
  const [currentPage, setCurrentPage] = useState<Page>(Page.HOME);
  const changeSelectedSpot = (spot: SurfData) => setSelectedSpot(spot);
  const fields: SurfData[] = Api();

  const surfItems = fields.map((surfData) => ({
    item: surfData,
    coordinates: convertToCoordinates(surfData.geoCode),
  }));

  const findNearestSpot = async () => {
    try {
      const userLocation = await getUserLocation();

      const surfDistances = surfItems.map(({ item, coordinates }) => {
        return {
          distance: calculateDistance(
            userLocation?.latitude,
            coordinates?.latitude,
            userLocation?.longitude,
            coordinates?.longitude
          ),
          item,
        };
      });

      //console.log("distances", surfDistances);

      let smallestSumElement = null;
      let smallestSum = Infinity;

      for (let i = 0; i < surfDistances.length; i++) {
        const currentSum = surfDistances[i].distance;
        if (currentSum < smallestSum) {
          smallestSum = currentSum;
          smallestSumElement = surfDistances[i];
        }
      }

      setSelectedSpot(smallestSumElement?.item!);
      console.log("min surfDistance element", smallestSumElement);
    } catch (error) {
      console.error("Error retrieving user location:", error);
    }
  };

  return (
    <>
      <SurfHeader />
      {selectedSpot ? (
        <Detail onClick={() => setSelectedSpot(null)} item={selectedSpot} />
      ) : (
        <List
          onClick={changeSelectedSpot}
          items={fields}
          handleButtonPress={findNearestSpot}
        />
      )}
    </>
  );
}
