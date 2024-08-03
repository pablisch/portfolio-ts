import React, { createContext, useEffect, useState } from "react";
import { scrollToTop } from "../helpers/pageHelpers";

export interface ScreenWidthContextType {
  isBurgerMenuActive: boolean;
  burgerMenuStage: number;
  isBurgerMenuOpen: boolean;
  handleBurgerClick: () => void;
}

export const ScreenWidthContext = createContext<ScreenWidthContextType>({
  isBurgerMenuActive: false,
  burgerMenuStage: 1,
  isBurgerMenuOpen: false,
  handleBurgerClick: () => {},
});

export const ScreenWidthProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [screenWidth, setScreenWidth] = useState<number>(window.innerWidth);
  const [isBurgerMenuActive, setIsBurgerMenuActive] = useState<boolean>(false);
  const [isBurgerMenuOpen, setIsBurgerMenuOpen] = useState<boolean>(false);
  const [burgerMenuStage, setBurgerMenuStage] = useState<number>(1);
  // burgerMenu stages:
  // 1 @ < 1080px width: burger menu contains only project/about links
  // 2 @ < 650px width: burger menu contains project/about links and external links (GitHub & LinkedIn)
  // 3 @ < 390px width: burger menu contains project/about links, external links (GitHub & LinkedIn) and a link to the other (project/about) section

  const handleBurgerClick = () => {
    setIsBurgerMenuOpen(!isBurgerMenuOpen);
    scrollToTop();
  };

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (screenWidth > 1080) {
      setIsBurgerMenuActive(false);
      setBurgerMenuStage(0);
    } else if (screenWidth > 650) {
      setIsBurgerMenuActive(true);
      setBurgerMenuStage(1);
    } else if (screenWidth > 390) {
      setIsBurgerMenuActive(true);
      setBurgerMenuStage(2);
    } else {
      setIsBurgerMenuActive(true);
      setBurgerMenuStage(3);
    }
    setIsBurgerMenuOpen(false);
    scrollToTop();
  }, [screenWidth, setIsBurgerMenuOpen]);

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
