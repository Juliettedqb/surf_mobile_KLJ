import Detail from "./components/Detail";
import List, { SurfData } from "./components/List";
import React, { useState } from "react";
import { Api } from "./ApiController";
import { convertToCoordinates } from "./utils/convertToCoordinates";
import { getUserLocation } from "./utils/getLocation";
import { calculateDistance } from "./utils/calculateDistance";
import { Text, Pressable } from "react-native";
import SurfHeader from "./components/SurfHeader";
import SurfFooter from "./components/SurfFooter";
import AddNewSpot from "./components/AddNewSpot";

enum Page {
  HOME,
  FORM,
}

export default function App() {
  const [selectedSpot, setSelectedSpot] = useState<SurfData | null>(null);
  const [minDistance, setMinDistance] = useState<any>("");
  const [currentPage, setCurrentPage] = useState<Page>(Page.HOME);

  const changeSelectedSpot = (spot: SurfData) => setSelectedSpot(spot);
  const fields: SurfData[] = Api();

  const surfItems = fields.map((surfData) =>
    convertToCoordinates(surfData.geoCode)
  );

  const findNearestSpot = async () => {
    try {
      const userLocation = await getUserLocation();

      const surfDistances = surfItems.map((item) => {
        return {
          distance: calculateDistance(
            userLocation?.latitude,
            item?.latitude,
            userLocation?.longitude,
            item?.longitude
          ),
          name: item?.name,
        };
      });

      console.log("distances", surfDistances);

      let smallestSumElement = null;
      let smallestSum = Infinity;

      for (let i = 0; i < surfDistances.length; i++) {
        const currentSum = surfDistances[i].distance;
        if (currentSum < smallestSum) {
          smallestSum = currentSum;
          smallestSumElement = surfDistances[i];
        }
      }

      setMinDistance(smallestSumElement?.name);
      console.log("min surfDistance element", smallestSumElement);
    } catch (error) {
      console.error("Error retrieving user location:", error);
    }
  };

  const displayForm = () => {
    setCurrentPage(Page.FORM);
  };

  const handleNewSpotSubmit = (
    address: string,
    photo: string,
    geocode: string
  ) => {
    console.log("New spot submitted:", address, photo, geocode);
  };

  const HomePage = () => {
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
            handleAddButton={displayForm}
          />
        )}
      </>
    );
  };

  const FormPage = () => {
    return <AddNewSpot onSubmit={handleNewSpotSubmit} />;
  };

  return (
    <>
      {currentPage === Page.HOME && <HomePage />}
      {currentPage === Page.FORM && <FormPage />}
    </>
  );
}
