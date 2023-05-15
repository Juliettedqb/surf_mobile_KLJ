import Detail from "./components/Detail";
import List, { Spot } from "./components/List";
import React, { useState } from "react";
import { Api } from "./ApiController";

export default function App() {
  const data = Api();

  // for (let i = 0; i < data.length; i++) {
  //   console.log("data retrieved", data[i]["_rawJson"]["fields"]["Address"]);
  // }

  const array: Spot[] = [
    {
      title: "Malibu Baby !",
      image:
        "https://tahesport.com/media/catalog/product/cache/d96fc7b71f34502139701fbc9e1b3b74/m/i/mini-malibu-right.jpg",
      surfBreak: "wave break",
      country: "US",
      difficulty: 3,
      moreInformation: "",
    },
    {
      title: "Hossegor Baby !",
      image:
        "https://oceanadventure.surf/wp-content/uploads/2019/11/cedric-oa.jpg",
      surfBreak: "point break",
      country: "France",
      difficulty: 2,
      moreInformation: "",
    },
  ];

  const [selectedSpot, setSelectedSpot] = useState<Spot | null>(null);

  const changeSelectedSpot = (spot: Spot) => setSelectedSpot(spot);

  return (
    <>
      {selectedSpot ? (
        <Detail onClick={() => setSelectedSpot(null)} item={selectedSpot} />
      ) : (
        <List onClick={changeSelectedSpot} items={array} />
      )}
    </>
  );
}
