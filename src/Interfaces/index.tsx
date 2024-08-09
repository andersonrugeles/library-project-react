interface Author {
    name: string;
    otherBooks: string[];
  }
  
  export interface Book {
    title: string;
    pages: number;
    genre: string;
    cover: string;
    synopsis: string;
    year: number;
    ISBN: string;
    author: Author;
  }
  
  export interface LibraryItem {
    book: Book;
  }
  
  export interface DefaultResponse {
    default: {
      library: LibraryItem[];
    };
  }
  
 export interface ShoppingCartContextProps {
    isProductDetailOpen: boolean;
    openBookDetail: () => void;
    closeBookDetail: () => void;
    bookToShow: Book|undefined;
    setBookToShow: (product: Book) => void;
  }