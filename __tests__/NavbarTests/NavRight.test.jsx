import React from "react";
import { test, describe, expect, vi } from "vitest";
import NavRight from "../../src/features/Navbar/NavRight.tsx";
import {
  render,
  screen,
  // within,
} from "../../test-setup/mockedContextProviders/MockAllContext.tsx";

const mockHandleBurgerClick = vi.fn();
const mockHandleThemeChange = vi.fn();

const renderComponent = (
  currentBurgerMenuStage = 1,
  currentSection = "projects",
  isBurgerMenuOpen = false,
  isBurgerMenuActive = false,
  isIconRotating = false,
) => {
  const { container } = render(<NavRight />, {
    handleThemeChange: mockHandleThemeChange,
    isIconRotating,
    section: currentSection,
    burgerMenuStage: currentBurgerMenuStage,
    handleBurgerClick: mockHandleBurgerClick,
    isBurgerMenuOpen,
    isBurgerMenuActive,
  });

  return { container };
};

describe("NavRight component", () => {
  test("renders the NavRight component", () => {
    // Arrange
    const { container } = renderComponent();
    const navRight = container.querySelector(
      "section[data-test='nav-right-container']",
    );
    screen.logTestingPlaygroundURL();
    // screen.debug();

    // Assert
    expect(navRight).toBeInTheDocument();
  });
});
