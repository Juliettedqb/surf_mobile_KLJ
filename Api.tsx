const fetchDataFromAirtable = async () => {
  const apiKey =
    "patvRK6GN28QdbdI8.3ebcbff122ae48967dd538e0064a43595bcdb7d403e89875a668bf6bc7fd9a82";
  const tableId = "tblKX1jM2rozgIgHv";

  const response = await fetch(
    `https://api.airtable.com/v0/appxNj72a7cE4N9IV/${tableId}`,
    {
      headers: {
        Authorization: `Bearer ${apiKey}`,
      },
    }
  );
  const data = await response.json();
  
  console.log("test start")
  console.log(data)
  console.log("test end")
  return data;
};

export default fetchDataFromAirtable;

