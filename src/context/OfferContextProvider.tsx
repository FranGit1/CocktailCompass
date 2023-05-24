import React, { ReactNode, createContext, useState } from "react";

interface OfferContextProviderProps {
  children: ReactNode;
}

interface OfferContextType {
  showOffer: boolean;
  setShowOffer: React.Dispatch<React.SetStateAction<boolean>>;
}

export const OfferContext = createContext<OfferContextType>({
  showOffer: true,
  setShowOffer: () => {},
});

export const OfferContextProvider: React.FC<OfferContextProviderProps> = ({
  children,
}) => {
  const [showOffer, setShowOffer] = useState(true);

  return (
    <OfferContext.Provider value={{ showOffer, setShowOffer }}>
      {children}
    </OfferContext.Provider>
  );
};
