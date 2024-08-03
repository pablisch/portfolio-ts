import React from "react";
import { test, describe, expect, vi } from "vitest";
import NavRight from "../../src/features/Navbar/NavRight.tsx";
import {
  render,
  screen,
  // within,
} from "../../test-setup/mockedContextProviders/MockAllContext.tsx";
import user from "@testing-library/user-event";

const mockHandleBurgerClick = vi.fn();
const mockHandleThemeChange = vi.fn();
const mockHandleSectionChange = vi.fn();

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
    handleSectionChange: mockHandleSectionChange,
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

  test("NavRight has a link to the about section, github and linkedin links and a settings button when section === 'projects'", () => {
    // Arrange
    renderComponent();
    const smallAboutSectionLink = screen.getByRole("link", {
      name: /more about me/i,
    });
    const extLinks = screen.getAllByRole("link", { name: /github|linkedin/i });
    const settingsButton = screen.getByRole("button", { name: /settings/i });

    // Assert
    expect(smallAboutSectionLink).toBeInTheDocument();
    expect(extLinks).toHaveLength(2);
    expect(settingsButton).toBeInTheDocument();
  });

  test("the About section link button Navigates to the 'More About Me' page", async () => {
    // Arrange
    renderComponent();
    const smallAboutSectionLink = screen.getByRole("link", {
      name: /more about me/i,
    });

    // Act
    await user.click(smallAboutSectionLink);

    // Assert
    expect(mockHandleSectionChange).toHaveBeenCalledTimes(1);
    expect(smallAboutSectionLink).toHaveAttribute("href", "/about-me");
  });

  test("the settings button calls the handleThemeChange function when clicked", async () => {
    // Arrange
    renderComponent();
    const settingsButton = screen.getByRole("button", { name: /settings/i });

    // Act
    await user.click(settingsButton);

    // Assert
    expect(mockHandleThemeChange).toHaveBeenCalledTimes(1);
  });
});
