import { Text } from "react-native";

export default function CalculateLocation() {
  // here we should to the fetch and give the value
  const cities = [
    ["Londre", 51.509093, -0.094151],
    ["Paris", 48.866667, 2.333333],
    ["Tbilisi", 41.716667, 44.783333],
  ];

  const deg2Rad = (deg: number) => (deg * Math.PI) / 180;

  const pythagorasEquirectangular = (
    lat1: number,
    lon1: number,
    lat2: number,
    lon2: number
  ) => {
    lat1 = deg2Rad(lat1);
    lat2 = deg2Rad(lat2);
    lon1 = deg2Rad(lon1);
    lon2 = deg2Rad(lon2);
    const R = 6371;
    const x = (lon2 - lon1) * Math.cos((lat1 + lat2) / 2);
    const y = lat2 - lat1;
    const d = Math.sqrt(x * x + y * y) * R;
    return d;
  };

  const nearestCity = (latitude: number, longitude: number) => {
    let minDifference = Infinity;
    let closestCity = null;

    for (let i = 0; i < cities.length; i++) {
      const [cityName, cityLat, cityLon] = cities[i];
      const difference = pythagorasEquirectangular(
        latitude,
        longitude,
        cityLat,
        cityLon
      );

      if (difference < minDifference) {
        closestCity = cityName;
        minDifference = difference;
      }
    }

    return closestCity;
  };

  // Here should be users location
  const latitude = 47.218371;
  const longitude = -1.553621;
  const closestLocation = nearestCity(latitude, longitude);

  //console.log("Closest Location:", closestLocation);

  return (
    <>
      <Text>{closestLocation}</Text>
    </>
  );
}
