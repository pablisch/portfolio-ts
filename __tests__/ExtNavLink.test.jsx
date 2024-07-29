// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import React from "react";
import { test, describe, expect, vi, beforeEach, afterEach } from "vitest";
import ExtNavLink from "../src/features/Navbar/ExtNavLink";
import {
  render,
  screen,
  within,
} from "../test-setup/mockedContextProviders/MockAllContext";
// import user from "@testing-library/user-event";
import { extLinkData } from "../src/data/extLinkData";

const renderComponent = (
  currentExtLink = extLinkData[0],
  isBurgerMenuActive = false,
) => {
  const { container } = render(
    <ExtNavLink key={currentExtLink.linkUrl} extLink={currentExtLink} />,
    {
      isBurgerMenuActive,
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
  let openSpy;

  beforeEach(() => {
    // Spy on window.open using globalThis
    openSpy = vi.spyOn(globalThis, "open").mockImplementation(() => null);
  });

  afterEach(() => {
    openSpy.mockRestore();
  });

  test(`renders the GitHub ExtNavLink component`, () => {
    // Arrange
    const { container } = renderComponent();
    const githubLink = within(container).getByRole("link", {
      name: /github/i,
    });
    const githubLogoImage = within(container).getByRole("image", {
      name: /Github logo/i,
    });
    screen.logTestingPlaygroundURL();
    // screen.debug();

    // Assert
    expect(githubLink).toBeInTheDocument();
    expect(githubLogoImage).toBeInTheDocument();
  });

  test(`clicking the project NavLink button calls the setFocusProjectId function once`, () => {
    // Arrange
    const { container } = renderComponent();
    const githubLink = within(container).getByRole("link", {
      name: /github/i,
    });

    // Act
    githubLink.click();

    // Assert
    expect(githubLink).toHaveAttribute("href", "https://github.com/pablisch");
    expect(githubLink).toHaveAttribute("target", "_blank");
    expect(githubLink).toHaveAttribute("rel", "noreferrer");
  });

  // test(`hovering over the project NavLink button calls the setFocusProjectId function once`, async () => {
  //   // Arrange
  //   const { container } = renderComponent();
  //   const lupoNavLink = within(container).getByRole("button", {
  //     name: /LUPO/i,
  //   });
  //
  //   // Act
  //   await user.hover(lupoNavLink);
  //
  //   // Assert
  //   expect(mockSetFocusProjectId).toHaveBeenCalledTimes(1);
  //   expect(mockSetFocusAboutId).toHaveBeenCalledTimes(0);
  // });
  //
  // test(`unhovering the project NavLink button calls the setFocusProjectId function once`, async () => {
  //   // Arrange
  //   const { container } = renderComponent();
  //   const lupoNavLink = within(container).getByRole("button", {
  //     name: /LUPO/i,
  //   });
  //
  //   // Act
  //   await user.unhover(lupoNavLink);
  //
  //   // Assert
  //   expect(mockSetFocusProjectId).toHaveBeenCalledTimes(1);
  //   expect(mockSetFocusAboutId).toHaveBeenCalledTimes(0);
  // });
});

// describe("first about NavLink", () => {
//   beforeEach(() => {
//     vi.clearAllMocks(); // or vi.resetAllMocks();
//   });
//
//   test(`renders the about NavLink component with a button of expected text, "${exampleProject.navName}"`, () => {
//     // Arrange
//     const { container } = renderComponent("about", exampleAbout);
//     const spaceNavLink = within(container).getByRole("button", {
//       name: /Space Explorer/i,
//     });
//     // screen.logTestingPlaygroundURL();
//     // screen.debug();
//
//     // Assert
//     // eslint-disable-next-line @typescript-eslint/ban-ts-comment
//     // @ts-expect-error
//     expect(spaceNavLink).toBeInTheDocument();
//   });
//
//   test(`clicking the about NavLink button calls the setFocusProjectId function once`, () => {
//     // Arrange
//     const { container } = renderComponent("about", exampleAbout);
//     const spaceNavLink = within(container).getByRole("button", {
//       name: /Space Explorer/i,
//     });
//
//     // Act
//     spaceNavLink.click();
//
//     // Assert
//     expect(mockSetSelectedAbout).toHaveBeenCalledTimes(1);
//     expect(mockSetSelectedProject).toHaveBeenCalledTimes(0);
//   });
//
//   test(`hovering over the about NavLink button calls the setFocusProjectId function once`, async () => {
//     // Arrange
//     const { container } = renderComponent("about", exampleAbout);
//     const spaceNavLink = within(container).getByRole("button", {
//       name: /Space Explorer/i,
//     });
//
//     // Act
//     await user.hover(spaceNavLink);
//
//     // Assert
//     expect(mockSetFocusAboutId).toHaveBeenCalledTimes(1);
//     expect(mockSetFocusProjectId).toHaveBeenCalledTimes(0);
//   });
//
//   test(`unhovering the about NavLink button calls the setFocusProjectId function once`, async () => {
//     // Arrange
//     const { container } = renderComponent("about", exampleAbout);
//     const spaceNavLink = within(container).getByRole("button", {
//       name: /Space Explorer/i,
//     });
//
//     // Act
//     await user.unhover(spaceNavLink);
//
//     // Assert
//     expect(mockSetFocusAboutId).toHaveBeenCalledTimes(1);
//     expect(mockSetFocusProjectId).toHaveBeenCalledTimes(0);
//   });
// });
