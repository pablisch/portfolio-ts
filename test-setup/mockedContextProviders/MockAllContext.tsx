// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import React, { ReactNode } from "react";
import { render, RenderOptions } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import MockSectionContext from "../mockContexts/MockSectionContext";
import MockScreenWidthContext from "../mockContexts/MockScreenWidthContext";
import MockThemeContext from "../mockContexts/MockThemeContext";
import { aboutObject, projectObject } from "../../src/types/data.types";

interface CustomRenderProps {
  theme?: string;
  handleThemeChange?: () => void;
  isIconRotating?: boolean;
  handleAvatarHoverStart?: () => void;
  handleAvatarHoverEnd?: () => void;
  isBurgerMenuActive?: boolean;
  burgerMenuStage?: number;
  isBurgerMenuOpen?: boolean;
  handleBurgerClick?: () => void;
  section?: string;
  handleSectionChange?: () => void;
  focusProjectId?: string;
  setFocusProjectId?: () => void;
  focusAboutId?: string;
  setFocusAboutId?: (id: string) => void;
  selectedProject?: projectObject | null;
  setSelectedProject?: () => void;
  selectedAbout?: aboutObject | null;
  setSelectedAbout?: () => void;
}

const customRender = (
  ui: ReactNode,
  {
    theme = "light",
    handleThemeChange = () => {},
    isIconRotating = false,
    handleAvatarHoverStart = () => {},
    handleAvatarHoverEnd = () => {},
    isBurgerMenuActive = false,
    burgerMenuStage = 1,
    isBurgerMenuOpen = false,
    handleBurgerClick = () => {},
    section = "projects",
    handleSectionChange = () => {},
    focusProjectId = "",
    setFocusProjectId = () => {},
    focusAboutId = "",
    setFocusAboutId = () => {},
    selectedProject = null,
    setSelectedProject = () => {},
    selectedAbout = null,
    setSelectedAbout = () => {},
    ...options
  }: CustomRenderProps = {},
) => {
  return render(
    <MockThemeContext
      theme={theme}
      handleThemeChange={handleThemeChange}
      isIconRotating={isIconRotating}
      handleAvatarHoverStart={handleAvatarHoverStart}
      handleAvatarHoverEnd={handleAvatarHoverEnd}
    >
      <MockScreenWidthContext
        isBurgerMenuActive={isBurgerMenuActive}
        burgerMenuStage={burgerMenuStage}
        isBurgerMenuOpen={isBurgerMenuOpen}
        handleBurgerClick={handleBurgerClick}
      >
        <MockSectionContext
          section={section}
          handleSectionChange={handleSectionChange}
          focusProjectId={focusProjectId}
          setFocusProjectId={setFocusProjectId}
          focusAboutId={focusAboutId}
          setFocusAboutId={setFocusAboutId}
          selectedProject={selectedProject}
          setSelectedProject={setSelectedProject}
          selectedAbout={selectedAbout}
          setSelectedAbout={setSelectedAbout}
        >
          <BrowserRouter>{ui}</BrowserRouter>
        </MockSectionContext>
      </MockScreenWidthContext>
    </MockThemeContext>,
    options as RenderOptions,
  );
};

// Export individual components and functions from @testing-library/react - ADD to list as needed
export {
  screen,
  within,
  fireEvent,
  waitFor,
  waitForElementToBeRemoved,
} from "@testing-library/react";
// Override the render method with our custom render method
export { customRender as render };
