import React, { useEffect, useState } from "react";

var Airtable = require("airtable");
var base = new Airtable({
  apiKey:
    "patvRK6GN28QdbdI8.3ebcbff122ae48967dd538e0064a43595bcdb7d403e89875a668bf6bc7fd9a82",
}).base("appxNj72a7cE4N9IV");

// interface SurfApiData {
//   Address: string;
//   Destination: string;
//   "Destination State/Country": string;
//   "Difficulty Level": number;
//   Geocode: string;
//   Influencers: string[];
//   "Magic Seaweed Link": string;
//   "Peak Surf Season Begins": string;
//   "Peak Surf Season Ends": string;
//   Photos: any[];
//   "Surf Break": string[];
// }

export function Api() {
  const [data, setData] = useState<any[]>([]);

  useEffect(() => {
    base("Surf Destinations")
      .select({ view: "Main View" })
      .eachPage(
        function page(records: any[], fetchNextPage: () => void) {
          setData((prevData) => [...prevData, ...records]);
          fetchNextPage();
        },
        function done(err: any) {
          if (err) {
            console.error(err);
            return;
          }
        }
      );
  }, []);
  // ._rawJson.fields
  return data.map((it) => {
    const { fields } = it._rawJson;
    return {
      address: fields.Address,
      destination: fields.Destination,
      destinationRegion: fields["Destination State/Country"],
      difficultyLevel: fields["Difficulty Level"],
      geoCode: fields.Geocode,
      influencers: fields.Influencers,
      magicSeaweedLink: fields["Magic Seaweed Link"],
      seasonStart: fields["Peak Surf Season Begins"],
      seasonEnd: fields["Peak Surf Season Ends"],
      photos: fields.Photos,
      surfBreak: fields["Surf Break"],
    };
  });
}
