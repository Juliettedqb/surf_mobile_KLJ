import React, { useEffect, useState } from "react";

var Airtable = require("airtable");
var base = new Airtable({
  apiKey:
    "patvRK6GN28QdbdI8.3ebcbff122ae48967dd538e0064a43595bcdb7d403e89875a668bf6bc7fd9a82",
}).base("appxNj72a7cE4N9IV");

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

  return data;
}
