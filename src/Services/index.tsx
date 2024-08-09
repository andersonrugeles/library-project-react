import { DefaultResponse, LibraryItem } from "../Interfaces";

export const getListLibrary = async (): Promise<LibraryItem[]> => {
  try {
    const response = await fetch('https://jelou-prueba-tecnica1-frontend.rsbmk.workers.dev/');
    const data: DefaultResponse = await response.json();
    return data.default.library;
  } catch (error) {
    console.error("Error fetching data:", error);
    return [];
  }
};
