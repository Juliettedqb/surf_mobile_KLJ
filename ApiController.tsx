import React, { useEffect, useState } from "react";

export function Api() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("")
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);
  return data;
}
