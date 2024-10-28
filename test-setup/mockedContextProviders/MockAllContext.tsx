// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import React, { ReactNode } from "react";
import { render, RenderOptions } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import MockScreenWidthContext from "../mockContexts/MockScreenWidthContext";
import MockThemeContext from "../mockContexts/MockThemeContext";
import { sectionType } from "../../src/types/data.types";
import MockSectionContext from "../mockContexts/MockSectionContext";

interface CustomRenderProps {
  // from ThemeContext
  theme?: string;
  handleThemeChange?: () => void;
  isIconRotating?: boolean;
  handleAvatarHoverStart?: () => void;
  handleAvatarHoverEnd?: () => void;
  // from ScreenWidthContext
  isBurgerMenuActive?: boolean;
  burgerMenuStage?: number;
  isBurgerMenuOpen?: boolean;
  handleBurgerClick?: () => void;
  // from FocusTopicContext
  section?: sectionType;
  toggleSection?: () => void;
  handleSectionChange?: () => void;
  hoveredTopicId?: string;
  setHoveredTopicId?: () => void;
  selectedTopicId?: string;
  setSelectedTopicId?: () => void;
  handleSetHoveredTopic?: () => void;
  handleUnsetHoveredTopic?: () => void;
  handleSelectTopicId?: () => void;
}

const customRender = (
  ui: ReactNode,
  {
    // from ThemeContext
    theme = "light",
    handleThemeChange = () => {},
    isIconRotating = false,
    handleAvatarHoverStart = () => {},
    handleAvatarHoverEnd = () => {},
    // from ScreenWidthContext
    isBurgerMenuActive = false,
    burgerMenuStage = 1,
    isBurgerMenuOpen = false,
    handleBurgerClick = () => {},
    // from FocusTopicContext
    section = sectionType.projects,
    toggleSection = () => {},
    handleSectionChange = () => {},
    hoveredTopicId = "",
    setHoveredTopicId = () => {},
    selectedTopicId = "",
    setSelectedTopicId = () => {},
    handleSetHoveredTopic = () => {},
    handleUnsetHoveredTopic = () => {},
    handleSelectTopicId = () => {},
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
          toggleSection={toggleSection}
          handleSectionChange={handleSectionChange}
          hoveredTopicId={hoveredTopicId}
          setHoveredTopicId={setHoveredTopicId}
          selectedTopicId={selectedTopicId}
          setSelectedTopicId={setSelectedTopicId}
          handleSetHoveredTopic={handleSetHoveredTopic}
          handleUnsetHoveredTopic={handleUnsetHoveredTopic}
          handleSelectTopicId={handleSelectTopicId}
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
