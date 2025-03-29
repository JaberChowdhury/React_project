import { useContext, useState } from 'react';
import React, { createContext } from 'react';

type ModelContextType = {
  isOpen: boolean;
  content: React.ReactNode;
  setContent: (content: React.ReactNode) => void;
  openModel: () => void;
  closeModel: () => void;
};

const ModelContext = createContext<ModelContextType | undefined>(undefined);

export const ModelContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [isOpen, setIsopen] = useState(false);
  const [content, setContent] = useState<React.ReactNode | null>(null);
  const openModel = () => setIsopen(true);
  const closeModel = () => setIsopen(false);
  return (
    <ModelContext.Provider
      value={{ isOpen, closeModel, openModel, content, setContent }}
    >
      {children}
    </ModelContext.Provider>
  );
};

export const useModel = () => {
  const context = useContext(ModelContext);
  if (!context) {
    throw new Error('useModel must be used within a ModelProvider');
  }
  return context;
};
