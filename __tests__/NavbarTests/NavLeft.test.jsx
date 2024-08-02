import React from "react";
import { test, describe, expect, vi } from "vitest";
import NavLeft from "../../src/features/Navbar/NavLeft.tsx";
import {
  render,
  screen,
  // within,
} from "../../test-setup/mockedContextProviders/MockAllContext.tsx";

const mockHandleAvatarHoverStart = vi.fn();
const mockHandleAvatarHoverEnd = vi.fn();
const mockHandleThemeChange = vi.fn();

const renderComponent = (
  currentTheme = "light",
  currentSection = "projects",
  isBurgerMenuActive = false,
) => {
  const { container } = render(<NavLeft />, {
    theme: currentTheme,
    handleAvatarHoverStart: mockHandleAvatarHoverStart,
    handleAvatarHoverEnd: mockHandleAvatarHoverEnd,
    section: currentSection,
    handleThemeChange: mockHandleThemeChange,
    isBurgerMenuActive,
  });

  return { container };
};

describe("NavLeft component", () => {
  test("renders the NavLeft component", () => {
    // Arrange
    const { container } = renderComponent();
    const navLeft = container.querySelector(
      "section[data-test='nav-left-container']",
    );
    screen.logTestingPlaygroundURL();
    // screen.debug();

    // Assert
    expect(navLeft).toBeInTheDocument();
  });
});
