// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import React, { ReactNode } from "react";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
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
    // @ts-expect-error TS17004
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
