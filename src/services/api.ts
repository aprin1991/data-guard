export const BASE_URL = "https://data-guard-plugins.onrender.com";

export async function callApi(endpoint: string, method = "GET", data?: any) {
  const url = `${BASE_URL}/${endpoint}`;

  const headers = {
    "Content-Type": "application/json",
  };

  const requestOptions: RequestInit = {
    method,
    headers,
    body: data ? JSON.stringify(data) : undefined,
  };

  try {
    const response = await fetch(url, requestOptions);
    if (!response.ok) {
      throw new Error(`Request failed with status ${response.status}`);
    }
    const jsonData = await response.json();
    return jsonData;
  } catch (error) {
    console.error("API call failed:", error);
    throw error;
  }
}
