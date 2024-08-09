import { DefaultResponse, LibraryItem } from "../Interfaces";

export const getListLibrary = async (url: string): Promise<LibraryItem[]> => {
  try {
    const response = await fetch(url);
    const data: DefaultResponse = await response.json();
    return data.default.library;
  } catch (error) {
    console.error("Error fetching data:", error);
    return [];
  }
};
