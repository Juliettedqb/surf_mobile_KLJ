import Detail from "./components/Detail";
import List, { SurfData } from "./components/List";
import React, { useState } from "react";
import { Api } from "./ApiController";

export default function App() {
  const data = Api();
  const fields: SurfData[] = [];

  for (let i = 0; i < data.length; i++) {
    fields.push(data[i]["_rawJson"]["fields"]);
  }

  console.log(fields[0]);

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
