import * as Location from "expo-location";

export interface LongLat {
    longitude: number;
    latitude: number;
  }

export const getUserLocation = async () => {
    const { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== "granted") {
      // Handle permission denied
      return;
    }
    const location = await Location.getCurrentPositionAsync({});
    const latitude = location.coords.latitude;
    const longitude = location.coords.longitude;
    return {latitude, longitude}
    
  };
