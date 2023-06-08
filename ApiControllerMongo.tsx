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

export async function createSpot(Address: string) {
  const response = await fetch("http://10.0.2.2:3000/surfSpot", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      Address: Address,
    }),
  });

  const data = await response.json();
  console.log("checkout response object", response);
  console.log("response body used:", response.bodyUsed);

  // Clone the response object
  const responseClone = response.clone();

  const responseBody = await responseClone.text(); // Read the response body as text
  console.log("response body:", responseBody);

  return data;
}
