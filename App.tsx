import Detail from "./components/Detail";
import List, { Spot } from "./components/List";
import React, { useState } from "react";

export default function App() {
  const array: Spot[] = [
    {
      title: "Malibu Baby !",
      image:
        "https://tahesport.com/media/catalog/product/cache/d96fc7b71f34502139701fbc9e1b3b74/m/i/mini-malibu-right.jpg",
      type: "person",
    },
    {
      title: "Hossegor Baby !",
      image:
        "https://oceanadventure.surf/wp-content/uploads/2019/11/cedric-oa.jpg",
      type: "wave",
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
