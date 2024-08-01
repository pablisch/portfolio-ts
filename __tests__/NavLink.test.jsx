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
import { aboutData } from "../src/data/aboutData";
import { scrollToTop } from "../src/helpers/pageHelpers";

const mockSetFocusProjectId = vi.fn();
const mockSetFocusAboutId = vi.fn();
const mockSetSelectedProject = vi.fn();
const mockSetSelectedAbout = vi.fn();

const exampleProject = projectData[0];
const exampleAbout = aboutData[0];

const renderComponent = (
  currentSection = "projects",
  currentTopic = exampleProject,
) => {
  const { container } = render(
    <NavLink children={currentTopic.navName} topic={currentTopic} />,
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

vi.mock("../src/helpers/pageHelpers", () => ({
  scrollToTop: vi.fn(),
}));

describe("first project NavLink", () => {
  beforeEach(() => {
    vi.clearAllMocks(); // or vi.resetAllMocks();
  });

  test(`renders the project NavLink component with a button of expected text, "${exampleProject.navName}"`, () => {
    // Arrange
    const { container } = renderComponent();
    const LupoNavLink = within(container).getByRole("button", {
      name: /LUPO/i,
    });
    // screen.logTestingPlaygroundURL();
    // screen.debug();

    // Assert
    expect(LupoNavLink).toBeInTheDocument();
  });

  test(`clicking the project NavLink button calls the setFocusProjectId function once`, () => {
    // Arrange
    const { container } = renderComponent();
    const lupoNavLink = within(container).getByRole("button", {
      name: /LUPO/i,
    });

    // Act
    lupoNavLink.click();

    // Assert
    expect(mockSetSelectedProject).toHaveBeenCalledTimes(1);
    expect(mockSetSelectedAbout).toHaveBeenCalledTimes(0);
    expect(mockNavigate).toHaveBeenCalledTimes(1);
    expect(scrollToTop).toHaveBeenCalledTimes(1);
  });

  test(`hovering over the project NavLink button calls the setFocusProjectId function once`, async () => {
    // Arrange
    const { container } = renderComponent();
    const lupoNavLink = within(container).getByRole("button", {
      name: /LUPO/i,
    });

    // Act
    await user.hover(lupoNavLink);

    // Assert
    expect(mockSetFocusProjectId).toHaveBeenCalledTimes(1);
    expect(mockSetFocusAboutId).toHaveBeenCalledTimes(0);
  });

  test(`unhovering the project NavLink button calls the setFocusProjectId function once`, async () => {
    // Arrange
    const { container } = renderComponent();
    const lupoNavLink = within(container).getByRole("button", {
      name: /LUPO/i,
    });

    // Act
    await user.unhover(lupoNavLink);

    // Assert
    expect(mockSetFocusProjectId).toHaveBeenCalledTimes(1);
    expect(mockSetFocusAboutId).toHaveBeenCalledTimes(0);
  });

  test(`unhovering the project NavLink button calls the setFocusProjectId function once`, async () => {
    // Arrange
    const { container } = renderComponent();
    const lupoNavLink = within(container).getByRole("button", {
      name: /LUPO/i,
    });

    // Act
    await user.unhover(lupoNavLink);

    // Assert
    expect(mockSetFocusProjectId).toHaveBeenCalledTimes(1);
    expect(mockSetFocusAboutId).toHaveBeenCalledTimes(0);
  });
});

describe("first about NavLink", () => {
  beforeEach(() => {
    vi.clearAllMocks(); // or vi.resetAllMocks();
  });

  test(`renders the about NavLink component with a button of expected text, "${exampleProject.navName}"`, () => {
    // Arrange
    const { container } = renderComponent("about", exampleAbout);
    const spaceNavLink = within(container).getByRole("button", {
      name: /Space Explorer/i,
    });
    // screen.logTestingPlaygroundURL();
    // screen.debug();

    // Assert
    expect(spaceNavLink).toBeInTheDocument();
  });

  test(`clicking the about NavLink button calls the setFocusProjectId function once`, () => {
    // Arrange
    const { container } = renderComponent("about", exampleAbout);
    const spaceNavLink = within(container).getByRole("button", {
      name: /Space Explorer/i,
    });

    // Act
    spaceNavLink.click();

    // Assert
    expect(mockSetSelectedAbout).toHaveBeenCalledTimes(1);
    expect(mockSetSelectedProject).toHaveBeenCalledTimes(0);
    expect(mockNavigate).toHaveBeenCalledTimes(1);
    expect(scrollToTop).toHaveBeenCalledTimes(1);
  });

  test(`hovering over the about NavLink button calls the setFocusProjectId function once`, async () => {
    // Arrange
    const { container } = renderComponent("about", exampleAbout);
    const spaceNavLink = within(container).getByRole("button", {
      name: /Space Explorer/i,
    });

    // Act
    await user.hover(spaceNavLink);

    // Assert
    expect(mockSetFocusAboutId).toHaveBeenCalledTimes(1);
    expect(mockSetFocusProjectId).toHaveBeenCalledTimes(0);
  });

  test(`unhovering the about NavLink button calls the setFocusProjectId function once`, async () => {
    // Arrange
    const { container } = renderComponent("about", exampleAbout);
    const spaceNavLink = within(container).getByRole("button", {
      name: /Space Explorer/i,
    });

    // Act
    await user.unhover(spaceNavLink);

    // Assert
    expect(mockSetFocusAboutId).toHaveBeenCalledTimes(1);
    expect(mockSetFocusProjectId).toHaveBeenCalledTimes(0);
  });
});
