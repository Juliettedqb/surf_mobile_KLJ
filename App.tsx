import Detail, { convertToCoordinates } from "./components/Detail";
import List, { SurfData } from "./components/List";
import React, { useState } from "react";
import { Api } from "./ApiController";
import * as Location from "expo-location";
import { ConversionUtils } from "turbocommons-ts";
import CalculateLocation from "./components/CalculateLocation";

export default function App() {
  // remove state hook and declare it as a variable if we do not need it to render
  const [currLatitude, setCurrLatitude] = useState<number>(0);
  const [currLongitude, setCurrLongitude] = useState<number>(0);

  const getLocationAsync = async () => {
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== "granted") {
      // Handle permission denied
      return;
    }
    let location = await Location.getCurrentPositionAsync({});
    let latitude = location.coords.latitude;
    let longitude = location.coords.longitude;
    setCurrLatitude(latitude);
    setCurrLongitude(longitude);
    // console.log(location);
  };

  getLocationAsync();
  console.log(currLongitude);

  const data = Api();
  const fields: SurfData[] = [];
  //const allPlaces: any[] = [];

  for (let i = 0; i < data.length; i++) {
    fields.push(data[i]["_rawJson"]["fields"]);
    let address = data[i]["_rawJson"]["fields"]["Address"];
    /*let geoCode = convertToCoordinates(
      data[i]["_rawJson"]["fields"]["Geocode"]
    );
    console.log("Geocode", geoCode)
    let decodeGeoCode = convertCoordinatesToNum(geoCode);
    console.log(decodeGeoCode)
    let adrGeo = [address, decodeGeoCode];
    allPlaces.push(adrGeo); */
  }

  console.log("all Places", fields);

  //let coordinates = convertToCoordinates("eyJpIjoiUGFzdGEgUG9pbnQsIE1hbGRpdmVzIiwibyI6eyJzdGF0dXMiOiJPSyIsImZvcm1hdHRlZEFkZHJlc3MiOiJNYWxlIE5vcnRoIEhhcmJvdXIsIEJvZHV0aGFrdXJ1ZmFhbnUgTWFndSwgTWFsw6ksIE1hbGRpdmVzIiwibGF0Ijo0LjMxNzg0MiwibG5nIjo3My41OTE3MzI5OTk5OTk5OH0sImUiOjE1MzUzMDcwMzA5MTJ9")

  // converting string coordinates to numbers
  const convertToCoordinates = (base64Code: string) => {
    const geoCodeString = ConversionUtils.base64ToString(base64Code);
    const coordinates: string = `longitude : ${
      JSON.parse(geoCodeString).o.lng
    } , latitude : ${JSON.parse(geoCodeString).o.lat}`;
    const place: string = `location:${JSON.parse(geoCodeString).i}`;
    console.log(place);

    let resultOfStrings = coordinates.split(" ");
    let latitudeNum = Number(resultOfStrings[2]);
    let LongNum = Number(resultOfStrings[resultOfStrings.length - 1]);

    console.log([place, latitudeNum, LongNum]);
    return [place, latitudeNum, LongNum];
  };

  convertToCoordinates(
    "eyJpIjoiUGFzdGEgUG9pbnQsIE1hbGRpdmVzIiwibyI6eyJzdGF0dXMiOiJPSyIsImZvcm1hdHRlZEFkZHJlc3MiOiJNYWxlIE5vcnRoIEhhcmJvdXIsIEJvZHV0aGFrdXJ1ZmFhbnUgTWFndSwgTWFsw6ksIE1hbGRpdmVzIiwibGF0Ijo0LjMxNzg0MiwibG5nIjo3My41OTE3MzI5OTk5OTk5OH0sImUiOjE1MzUzMDcwMzA5MTJ9"
  );

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
