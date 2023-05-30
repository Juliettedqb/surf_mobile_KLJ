import React, { useEffect, useState } from "react";

export function retrieveAllData() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("http://10.0.2.2:3000/surfSpot")
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);
  return data;
}
