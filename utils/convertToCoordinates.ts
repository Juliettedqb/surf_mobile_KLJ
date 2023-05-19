import { ConversionUtils } from "turbocommons-ts";

interface GeoCode {
    name : string;
    longitude: number;
    latitude: number;
}

export const convertToCoordinates = (base64Code: string) => {
    try {
      const geoCodeString = ConversionUtils.base64ToString(base64Code);
      const parsedGeoCode = JSON.parse(geoCodeString);
      const geoCode: GeoCode = {
        name: parsedGeoCode.i,
        longitude: parsedGeoCode.o.lng,
        latitude: parsedGeoCode.o.lat,
      };
      return geoCode;
    } catch (error) {
      console.error(`Error parsing JSON: ${base64Code}`);
      return null;
    }
  };