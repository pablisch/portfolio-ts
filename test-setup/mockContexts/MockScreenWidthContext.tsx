import React, { ReactNode } from "react";
import { ScreenWidthContext } from "../../src/context/ScreenWidthContext";

interface MockScreenWidthContextProviderProps {
  children: ReactNode;
  isBurgerMenuActive: boolean;
  burgerMenuStage: number;
  isBurgerMenuOpen: boolean;
  handleBurgerClick: () => void;
}

const MockScreenWidthContext: React.FC<MockScreenWidthContextProviderProps> = ({
  children,
  isBurgerMenuActive = false,
  burgerMenuStage = 1,
  isBurgerMenuOpen = false,
  handleBurgerClick = () => {},
}) => {
  return (
    <ScreenWidthContext.Provider
      value={{
        isBurgerMenuActive,
        burgerMenuStage,
        isBurgerMenuOpen,
        handleBurgerClick,
      }}
    >
      {children}
    </ScreenWidthContext.Provider>
  );
};

export default MockScreenWidthContext;
