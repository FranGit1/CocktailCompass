import React, { ReactNode, createContext, useState } from "react";

interface MenuContextProviderProps {
  children: ReactNode;
}

interface MenuContextType {
  menuOff: boolean;
  setMenuOn: React.Dispatch<React.SetStateAction<boolean>>;
}

export const MenuContext = createContext<MenuContextType>({
  menuOff: true,
  setMenuOn: () => {},
});

export const MenuContextProvider: React.FC<MenuContextProviderProps> = ({
  children,
}) => {
  const [menuOff, setMenuOn] = useState(true);

  return (
    <MenuContext.Provider value={{ menuOff, setMenuOn }}>
      {children}
    </MenuContext.Provider>
  );
};
export default MenuContextProvider;
