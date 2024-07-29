// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import React from "react";
import { test, describe, expect, vi } from "vitest";
import Navbar from "../src/features/Navbar/Navbar";
import {
  render,
  screen,
  // within
} from "../test-setup/mockedContextProviders/MockAllContext";
// import user from '@testing-library/user-event';

// const mockSetAvatarHovered = vi.fn();
// const mockSetIsBurgerMenuOpen = vi.fn();
const mockSetSelectedProject = vi.fn();
const mockSetSelectedAbout = vi.fn();
const mockOnThemeChange = vi.fn();

const renderComponent = (
  currentSection = "projects",
  isBurgerMenuActive = false,
  // isBurgerMenuOpen = false
) => {
  const { container } = render(<Navbar />, {
    theme: "light",
    setSelectedProject: mockSetSelectedProject,
    setSelectedAbout: mockSetSelectedAbout,
    section: currentSection,
    handleThemeChange: mockOnThemeChange,
    isBurgerMenuActive,
  });

  return { container };
};

const mockNavigate = vi.fn();

vi.mock("react-router-dom", async () => {
  const actual = await vi.importActual("react-router-dom");
  return {
    ...actual,
    useNavigate: () => mockNavigate,
  };
});

describe("Navbar", () => {
  test("renders the Navbar component", () => {
    // Arrange
    const { container } = renderComponent();
    const navbar = container.querySelector("nav");
    screen.logTestingPlaygroundURL();
    // screen.debug();

    // Assert

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    expect(navbar).toBeInTheDocument();
    // expect(navbar).not.toBeNull();
  });
});
//
// test("it has an avatar logo, a project section button, six project links, a link to the about section, github and linkedin links and a settings button when section === 'projects'", () => {
//   // Arrange
//   const { container } = renderComponent();
//   const avatar = screen.getByRole('img', { name: /avatar icon/i });
//   const sectionButton = screen.getByRole('button', { name: /my projects/i });
//   const projectLinksContainer = container.querySelector('#section-links');
//   const projectLinks = within(projectLinksContainer).getAllByRole('button', {});
//   const otherSectionLink = screen.getByRole('link', {
//     name: /more about me/i,
//   });
//   const extLinks = screen.getAllByRole('link', { name: /github|linkedin/i });
//   const settingsButton = screen.getByRole('button', { name: /settings/i });
//
//   // Assert
//   expect(avatar).toBeInTheDocument();
//   expect(sectionButton).toBeInTheDocument();
//   expect(projectLinks).toHaveLength(6);
//   expect(projectLinks[0].textContent).toBe('LUPO');
//   expect(otherSectionLink).toBeInTheDocument();
//   expect(extLinks).toHaveLength(2);
//   expect(settingsButton).toBeInTheDocument();
// });
//
// test("it has an avatar logo, an about section button, six about links, a link to the projects section, github and linkedin links and a settings button when section === 'about'", () => {
//   // Arrange
//   const { container } = renderComponent('about');
//   const sectionButton = screen.getByRole('button', { name: /about me/i });
//   const projectLinksContainer = container.querySelector('#section-links');
//   const projectLinks = within(projectLinksContainer).getAllByRole('button', {});
//   const otherSectionLink = screen.getByRole('link', {
//     name: /software projects/i,
//   });
//
//   // Assert
//   expect(sectionButton).toBeInTheDocument();
//   expect(projectLinks).toHaveLength(6);
//   expect(projectLinks[0].textContent).toBe('Space Explorer');
//   expect(otherSectionLink).toBeInTheDocument();
// });

// test('isAvatarHovered is called when avatar is hovered over or unhovered', async () => {
//   // Arrange
//   renderComponent();
//   const avatar = screen.getByRole('img', { name: /avatar icon/i });
//
//   // Act
//   await user.hover(avatar);
//
//   // Assert
//   expect(mockSetAvatarHovered).toHaveBeenCalledTimes(1);
//
//   // Act
//   await user.unhover(avatar);
//
//   // Assert
//   expect(mockSetAvatarHovered).toHaveBeenCalledTimes(2);
// });
//
// test('it calls handleNavTitleClick when section button is clicked', async () => {
//   // Arrange
//   renderComponent();
//   const sectionButton = screen.getByRole('button', { name: /my projects/i });
//
//   // Act
//   await user.click(sectionButton);
//
//   // Assert
//   expect(mockNavigate).toHaveBeenCalledTimes(1);
//   expect(mockNavigate).toHaveBeenCalledWith('/');
//   expect(mockSetSelectedProject).toHaveBeenCalledTimes(1);
//   expect(mockSetSelectedProject).toHaveBeenCalledWith({});
//   expect(mockSetSelectedAbout).toHaveBeenCalledTimes(1);
//   expect(mockSetSelectedAbout).toHaveBeenCalledWith({});
//
//   // Act
//   await user.click(sectionButton);
//
//   // Assert
//   expect(mockSetSelectedProject).toHaveBeenCalledTimes(2);
// });
//
// test('it calls onThemeChange when settings button is clicked', async () => {
//   // Arrange
//   renderComponent();
//   const settingsButton = screen.getByRole('button', { name: /settings/i });
//
//   // Act
//   await user.click(settingsButton);
//
//   // Assert
//   expect(mockOnThemeChange).toHaveBeenCalledTimes(1);
// });
//
// test('it calls handleBurgerClick when hamburger button is clicked', async () => {
//   // Arrange
//   const { container } = renderComponent('projects', true);
//   const hamburgerMenu = screen.getByRole('button', { name: /menu/i });
//   const HamburgerMenuMiddleBar = container.querySelector('.pattie');
//
//   // Act
//   await user.click(hamburgerMenu);
//
//   // Assert
//   expect(HamburgerMenuMiddleBar).toBeInTheDocument();
//   expect(mockSetIsBurgerMenuOpen).toHaveBeenCalledTimes(1);
//   expect(mockSetIsBurgerMenuOpen).toHaveBeenCalledWith(true);
// });
//
// test('it does not show the middle hamburger menu bar when the menu is open', () => {
//   // Arrange
//   const { container } = renderComponent('projects', true, true);
//   const HamburgerMenuMiddleBar = container.querySelector('.pattie');
//
//   // Assert
//   expect(HamburgerMenuMiddleBar).toHaveClass('burger-open');
// });
// });
