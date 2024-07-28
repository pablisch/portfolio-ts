// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import React from "react";
import { test, describe, expect, vi, beforeEach } from "vitest";
import NavLink from "../src/features/Navbar/NavLink";
import {
  render,
  // screen,
  within,
} from "../test-setup/mockedContextProviders/MockAllContext";
import user from "@testing-library/user-event";
import { projectData } from "../src/data/projectData";

const mockSetFocusProjectId = vi.fn();
const mockSetFocusAboutId = vi.fn();
const mockSetSelectedProject = vi.fn();
const mockSetSelectedAbout = vi.fn();
const exampleProject = projectData[0];

const renderComponent = (currentSection = "projects") => {
  const { container } = render(
    <NavLink children={exampleProject.navName} topic={exampleProject} />,
    {
      section: currentSection,
      setFocusProjectId: mockSetFocusProjectId,
      setSelectedProject: mockSetSelectedProject,
      setFocusAboutId: mockSetFocusAboutId,
      setSelectedAbout: mockSetSelectedAbout,
    },
  );

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

describe("first project NavLink", () => {
  beforeEach(() => {
    vi.clearAllMocks(); // or vi.resetAllMocks();
  });
  test(`renders the NavLink component with a button of expected text, "${exampleProject.navName}"`, () => {
    // Arrange
    const { container } = renderComponent();
    const LupoNavLink = within(container).getByRole("button", {
      name: /LUPO/i,
    });
    // screen.logTestingPlaygroundURL();
    // screen.debug();

    // Assert
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    expect(LupoNavLink).toBeInTheDocument();
  });

  test(`clicking the NavLink button calls the setFocusProjectId function once`, () => {
    // Arrange
    const { container } = renderComponent();
    const lupoNavLink = within(container).getByRole("button", {
      name: /LUPO/i,
    });

    // Act
    lupoNavLink.click();

    // Assert
    expect(mockSetSelectedProject).toHaveBeenCalledTimes(1);
  });

  test(`hovering over the NavLink button calls the setFocusProjectId function once`, async () => {
    // Arrange
    const { container } = renderComponent();
    const lupoNavLink = within(container).getByRole("button", {
      name: /LUPO/i,
    });

    // Act
    await user.hover(lupoNavLink);

    // Assert
    expect(mockSetFocusProjectId).toHaveBeenCalledTimes(1);
  });

  test(`hovering or unhovering over the NavLink button calls the setFocusProjectId function once`, async () => {
    // Arrange
    const { container } = renderComponent();
    const lupoNavLink = within(container).getByRole("button", {
      name: /LUPO/i,
    });

    // Act
    await user.hover(lupoNavLink);

    // Assert
    expect(mockSetFocusProjectId).toHaveBeenCalledTimes(1);

    // Act
    await user.unhover(lupoNavLink);

    // Assert
    expect(mockSetFocusProjectId).toHaveBeenCalledTimes(2);
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
