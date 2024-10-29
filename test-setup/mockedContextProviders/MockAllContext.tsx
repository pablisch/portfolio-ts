// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import React, { ReactNode } from "react";
import { render, RenderOptions } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import MockScreenWidthContext from "../mockContexts/MockScreenWidthContext";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import MockThemeContext from "../mockContexts/MockThemeContext";
import { sectionType } from "../../src/types/data.types";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import MockFocusTopicContext from "../mockContexts/MockFocusTopicContext";

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
  handleSetHoveredTopic?: () => void;
  handleUnsetHoveredTopic?: () => void;
  selectedTopicId?: string;
  handleSelectedTopicId?: () => void;
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
    handleSetHoveredTopic = () => {},
    handleUnsetHoveredTopic = () => {},
    selectedTopicId = "",
    handleSelectedTopicId = () => {},
    ...options
  }: CustomRenderProps = {},
) => {
  return render(
    // @ts-expect-error TS17004
    <MockThemeContext
      theme={theme}
      handleThemeChange={handleThemeChange}
      isIconRotating={isIconRotating}
      handleAvatarHoverStart={handleAvatarHoverStart}
      handleAvatarHoverEnd={handleAvatarHoverEnd}
    >
      {/*@ts-expect-error TS17004*/}
      <MockScreenWidthContext
        isBurgerMenuActive={isBurgerMenuActive}
        burgerMenuStage={burgerMenuStage}
        isBurgerMenuOpen={isBurgerMenuOpen}
        handleBurgerClick={handleBurgerClick}
      >
        {/*@ts-expect-error TS17004*/}
        <MockFocusTopicContext
          section={section}
          toggleSection={toggleSection}
          handleSectionChange={handleSectionChange}
          hoveredTopicId={hoveredTopicId}
          handleSetHoveredTopic={handleSetHoveredTopic}
          handleUnsetHoveredTopic={handleUnsetHoveredTopic}
          selectedTopicId={selectedTopicId}
          handleSelectedTopicId={handleSelectedTopicId}
        >
          {/*@ts-expect-error TS17004*/}
          <BrowserRouter>{ui}</BrowserRouter>
        </MockFocusTopicContext>
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
