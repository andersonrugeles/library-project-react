// src/stores/useReadingListStore.ts
import create from 'zustand';
import { Book } from '../Interfaces';

interface ReadingListState {
  readingList: Book[];
  addBook: (book: Book) => void;
  removeBook: (book: Book) => void;
}

const useReadingListStore = create<ReadingListState>(set => ({
  readingList: [],
  addBook: (book: Book) => set(state => ({
    readingList: [...state.readingList, book],
  })),
  removeBook: (book: Book) => set(state => ({
    readingList: state.readingList.filter(b => b.ISBN !== book.ISBN),
  })),
}));

export default useReadingListStore;
