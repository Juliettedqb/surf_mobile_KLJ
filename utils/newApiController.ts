const baseUrl = "http://10.0.2.2:3000";

function buildUrl(params: string) {
    return baseUrl + params;
  }

  export async function getAllSurfSpot() {
    const url = buildUrl("/surfSpot");
    const response = await fetch(url)
    return await response.json();
  }

