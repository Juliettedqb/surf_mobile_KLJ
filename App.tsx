import Detail from "./components/Detail";
import List, { SurfData } from "./components/List";
import React, { useState } from "react";
import { getUserLocation } from "./utils/getLocation";
import { calculateDistance } from "./utils/calculateDistance";
import SurfHeader from "./components/SurfHeader";
import AddNewSpot from "./components/AddNewSpot";
import { retrieveAllData } from "./ApiController";
import { createSpot } from "./ApiController";
import { MouseEvent } from "react";

enum Page {
  HOME,
  FORM,
}

export default function App() {
  const [selectedSpot, setSelectedSpot] = useState<SurfData | null>(null);
  const [currentPage, setCurrentPage] = useState<Page>(Page.HOME);
  const changeSelectedSpot = (spot: SurfData) => setSelectedSpot(spot);
  const fields: SurfData[] = retrieveAllData();

  const surfItems = fields.map((surfData) => ({
    item: surfData,
    coordinates: {
      longitude: surfData.Location.coordinates[0],
      latitude: surfData.Location.coordinates[1],
    },
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

  const displayForm = () => {
    setCurrentPage(Page.FORM);
  };

  const handleNewSpotSubmit = async (
    Address: string,
    Photo: string,
    Geocode: string
    // event: MouseEvent<HTMLFormElement>
  ): Promise<void> => {
    try {
      // event.preventDefault();
      const response = await createSpot(Address, Photo, Geocode);
      console.log("test post route", response);
      setCurrentPage(Page.HOME);
    } catch (error) {
      console.error(error);
    }
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
