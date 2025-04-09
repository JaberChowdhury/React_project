import { createContext, ReactNode, useState } from 'react';
import data from '../assets/data.json';

export type propsType = {
  children: ReactNode;
};

export type AuctionItem = {
  id: number;
  title: string;
  description: string;
  currentBidPrice: string;
  timeLeft: string;
  bidsCount: string;
  image: string;
  isSelected: boolean;
};

type contextTYpe = {
  items: AuctionItem[];
  handleSelect: (id: number) => void;
};

export const AuctionItemContext = createContext<contextTYpe | null>(null);

const AuctionItemProvider = ({ children }: propsType) => {
  const modifiedItems = data.items.map((item) => ({
    ...item,
    isSelected: false,
  }));
  const [items, setItems] = useState<AuctionItem[]>(modifiedItems);

  const handleSelect = (id: number) => {
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, isSelected: !item.isSelected } : item,
      ),
    );
  };

  return (
    <AuctionItemContext.Provider value={{ items, handleSelect }}>
      {children}
    </AuctionItemContext.Provider>
  );
};

export default AuctionItemProvider;
