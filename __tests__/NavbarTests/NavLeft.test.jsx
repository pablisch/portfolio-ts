import React from "react";
import { test, describe, expect, vi, beforeEach } from "vitest";
import NavLeft from "../../src/features/Navbar/NavLeft.tsx";
import {
  render,
  screen,
  within,
} from "../../test-setup/mockedContextProviders/MockAllContext.tsx";
import user from "@testing-library/user-event";

const mockHandleAvatarHoverStart = vi.fn();
const mockHandleAvatarHoverEnd = vi.fn();
const mockHandleThemeChange = vi.fn();

const mockNavigate = vi.fn();

vi.mock("react-router-dom", async () => {
  const actual = await vi.importActual("react-router-dom");
  return {
    ...actual,
    useNavigate: () => mockNavigate,
  };
});

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
  beforeEach(() => {
    vi.clearAllMocks(); // or vi.resetAllMocks();
  });

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

  test("NavLeft has an avatar logo, a project section button and six project links when section === 'projects'", () => {
    // Arrange
    const { container } = renderComponent();
    const avatar = screen.getByRole("img", { name: /avatar icon/i });
    const myProjectsButton = screen.getByRole("button", {
      name: /my projects/i,
    });
    const projectLinksContainer = container.querySelector(
      "div[data-test='topic-links-container']",
    );
    const projectLinks = within(projectLinksContainer).getAllByRole(
      "button",
      {},
    );

    // Assert
    expect(avatar).toBeInTheDocument();
    expect(myProjectsButton).toBeInTheDocument();
    expect(projectLinks).toHaveLength(6);
    expect(projectLinks[0].textContent).toBe("LUPO");
  });

  test("the My 'Projects' title button calls the navigate function when clicked", async () => {
    // Arrange
    renderComponent();
    const myProjectsButton = screen.getByRole("button", {
      name: /my projects/i,
    });

    // Act
    await user.click(myProjectsButton);

    // Assert
    // TODO this should fail when btn is implemented
    expect(mockNavigate).toHaveBeenCalledTimes(0);
  });

  test("handleAvatarHoverStart is called when the navbar avatar is hovered over", async () => {
    // Arrange
    renderComponent();
    const avatar = screen.getByRole("img", { name: /avatar icon/i });

    // Act
    await user.hover(avatar);

    // Assert
    expect(mockHandleAvatarHoverStart).toHaveBeenCalledTimes(1);
    expect(mockHandleAvatarHoverEnd).toHaveBeenCalledTimes(0);
  });

  test("handleAvatarHoverEnd is called when the navbar avatar is unhovered", async () => {
    // Arrange
    renderComponent();
    const avatar = screen.getByRole("img", { name: /avatar icon/i });

    // Act
    await user.unhover(avatar);

    // Assert
    expect(mockHandleAvatarHoverStart).toHaveBeenCalledTimes(0);
    expect(mockHandleAvatarHoverEnd).toHaveBeenCalledTimes(1);
  });
});
