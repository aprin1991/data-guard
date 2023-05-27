import { TTabData } from "../types";
import { callApi } from "./api";

export async function getData() {
  try {
    const response = await callApi("db");
    return response;
  } catch (error) {
    console.error("Failed to fetch users:", error);
    throw error;
  }
}

export async function getTabData() {
  try {
    const response = await callApi("tabdata");
    return response;
  } catch (error) {
    console.error("Failed to fetch users:", error);
    throw error;
  }
}
export async function updateTabsData(data: TTabData = {}) {
  try {
    const response = await callApi("tabdata", "PUT", data);

    return response;
  } catch (error) {
    console.error("Failed to fetch users:", error);
    throw error;
  }
}
