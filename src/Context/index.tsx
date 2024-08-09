import { createContext, useState, ReactNode } from 'react';
import { Book, ShoppingCartContextProps } from '../Interfaces';




export const ShoppingCartContext = createContext<ShoppingCartContextProps | undefined>(undefined);

interface ShoppingCartProviderProps {
  children: ReactNode;
}

export const ShoppingCartProvider: React.FC<ShoppingCartProviderProps> = ({ children }) => {
  const [isProductDetailOpen, setIsProductDetailOpen] = useState<boolean>(false);

  const [bookToShow, setBookToShow] = useState<Book | undefined>(undefined);

  const openBookDetail = () => setIsProductDetailOpen(true);
  const closeBookDetail = () => setIsProductDetailOpen(false);

  return (
    <ShoppingCartContext.Provider
      value={{
        openBookDetail,
        closeBookDetail,
        isProductDetailOpen,
        bookToShow,
        setBookToShow
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
};