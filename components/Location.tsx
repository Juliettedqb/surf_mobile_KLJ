import React, { useEffect } from "react";
import * as Location from "expo-location";

const MyComponent = () => {
  useEffect(() => {
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
  }, []);

  return <></>;
};

export default MyComponent;
