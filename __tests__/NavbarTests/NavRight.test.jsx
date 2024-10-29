import React from "react";
import { test, describe, expect, vi } from "vitest";
import NavRight from "../../src/features/Navbar/NavRight.tsx";
import {
  render,
  screen,
  // within,
} from "../../test-setup/mockedContextProviders/MockAllContext.tsx";
import user from "@testing-library/user-event";
import { sectionType } from "../../src/types/data.types.ts";

const mockHandleBurgerClick = vi.fn();
const mockHandleThemeChange = vi.fn();
const mockToggleSection = vi.fn();

const renderComponent = (
  currentBurgerMenuStage = 1,
  currentSection = sectionType.projects,
  isBurgerMenuOpen = false,
  isBurgerMenuActive = false,
  isIconRotating = false,
) => {
  const { container } = render(<NavRight />, {
    handleThemeChange: mockHandleThemeChange,
    isIconRotating,
    section: currentSection,
    toggleSection: mockToggleSection,
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
    // screen.logTestingPlaygroundURL();
    // screen.debug();

    // Assert
    expect(navRight).toBeInTheDocument();
  });

  test("NavRight has a link to the about section, github and linkedin links and a settings button when section === 'projects'", () => {
    // Arrange
    renderComponent();
    const smallAboutSectionLink = screen.getByRole("button", {
      name: /more about me/i,
    });
    const extLinks = screen.getAllByRole("link", { name: /github|linkedin/i });
    const themeButton = screen.getByRole("button", { name: /Light Theme/i });

    // Assert
    expect(smallAboutSectionLink).toBeInTheDocument();
    expect(extLinks).toHaveLength(2);
    expect(themeButton).toBeInTheDocument();
  });

  test("the Abouts section link button toggles the section variable", async () => {
    // Arrange
    renderComponent();
    const smallAboutSectionLink = screen.getByRole("button", {
      name: /more about me/i,
    });

    // Act
    await user.click(smallAboutSectionLink);

    // Assert
    expect(mockToggleSection).toHaveBeenCalledTimes(1);
  });

  test("the settings button calls the handleThemeChange function when clicked", async () => {
    // Arrange
    renderComponent();
    const themeButton = screen.getByRole("button", { name: /Light Theme/i });

    // Act
    await user.click(themeButton);

    // Assert
    expect(mockHandleThemeChange).toHaveBeenCalledTimes(1);
  });
});
