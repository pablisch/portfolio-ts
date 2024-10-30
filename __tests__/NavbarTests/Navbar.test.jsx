import React from "react";
import { test, describe, expect, vi } from "vitest";
import Navbar from "../../src/features/Navbar/Navbar.tsx";
import {
  render,
  screen,
  within,
} from "../../test-setup/mockedContextProviders/MockAllContext.tsx";
import { sectionType } from "../../src/types/data.types.ts";
// import user from '@testing-library/user-event';

const mockSetSelectedProject = vi.fn();
const mockSetSelectedAbout = vi.fn();
const mockOnThemeChange = vi.fn();

const renderComponent = (
  currentTheme = "light",
  currentSection = sectionType.projects,
  isBurgerMenuActive = false,
) => {
  const { container } = render(<Navbar />, {
    theme: currentTheme,
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
    // screen.logTestingPlaygroundURL();
    // screen.debug();

    // Assert
    expect(navbar).toBeInTheDocument();
  });

  test("navbar has an avatar logo, a project section button, six project links, a link to the about section, github and linkedin links and a settings button when section === 'projects'", () => {
    // Arrange
    const { container } = renderComponent();
    const avatar = screen.getByRole("img", { name: /avatar icon/i });
    const myProjectsButton = within(container).getByRole("button", {
      name: /my projects/i,
    });
    const projectLinksContainer = container.querySelector(
      "div[data-test='topic-links-container']",
    );
    const projectLinks = within(projectLinksContainer).getAllByRole(
      "button",
      {},
    );
    const smallAboutSectionLink = screen.getByRole("button", {
      name: /more about me/i,
    });
    const extLinks = screen.getAllByRole("link", { name: /github|linkedin/i });
    const themeButton = screen.getByRole("button", { name: /Light Theme/i });

    // Assert
    expect(avatar).toBeInTheDocument();
    expect(myProjectsButton).toBeInTheDocument();
    expect(projectLinks).toHaveLength(6);
    expect(projectLinks[0].textContent).toBe("LUPO");
    expect(smallAboutSectionLink).toBeInTheDocument();
    expect(extLinks).toHaveLength(2);
    expect(themeButton).toBeInTheDocument();
  });

  test("navbar has three border div elements", () => {
    // Arrange
    const { container } = renderComponent();
    const borderDivs = container.querySelectorAll(
      "div[class^='nav-border-bar-']",
    );

    // Assert
    expect(borderDivs).toHaveLength(3);
  });

  test("navbar has an avatar logo, a project section button, six project links, a link to the about section, github and linkedin links and a settings button when section === 'about'", () => {
    // Arrange
    // const { container } = renderComponent("light", sectionType.abouts);
    const { container } = renderComponent("light", sectionType.abouts);
    // screen.logTestingPlaygroundURL()
    const aboutMeButton = within(container).getByRole("button", {
      name: /About Me/i,
    });
    const aboutLinksContainer = container.querySelector(
      "div[data-test='topic-links-container']",
    );
    const aboutLinks = within(aboutLinksContainer).getAllByRole("button", {});
    const smallProjectSectionLink = screen.getByRole("button", {
      name: /Software Projects/i,
    });

    // Assert
    expect(aboutMeButton).toBeInTheDocument();
    expect(aboutLinks).toHaveLength(6);
    expect(aboutLinks[0].textContent).toBe("Space Explorer");
    expect(smallProjectSectionLink).toBeInTheDocument();
  });
});
