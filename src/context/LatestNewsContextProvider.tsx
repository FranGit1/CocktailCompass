import React, { ReactNode, createContext, useState } from "react";

interface LatestNewsContextProviderProps {
  children: ReactNode;
}

interface LatestNewsContextType {
  showLatest: boolean;
  setShowLatest: React.Dispatch<React.SetStateAction<boolean>>;
}

export const LatestNewsContext = createContext<LatestNewsContextType>({
  showLatest: false,
  setShowLatest: () => {},
});

export const LatestNewsContextProvider: React.FC<
  LatestNewsContextProviderProps
> = ({ children }) => {
  const [showLatest, setShowLatest] = useState(false);

  return (
    <LatestNewsContext.Provider value={{ showLatest, setShowLatest }}>
      {children}
    </LatestNewsContext.Provider>
  );
};
export default LatestNewsContextProvider;
