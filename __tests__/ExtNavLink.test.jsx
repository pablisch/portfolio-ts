import React from "react";
import { test, describe, expect, vi } from "vitest";
import ExtNavLink from "../src/features/Navbar/ExtNavLink";
import {
  render,
  // screen,
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
  test(`renders the GitHub ExtNavLink component`, () => {
    // Arrange
    const { container } = renderComponent();
    const githubLink = within(container).getByRole("link", {
      name: /github/i,
    });
    const githubLogoImage = within(container).getByRole("image", {
      name: /Github logo/i,
    });
    // screen.logTestingPlaygroundURL();
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
});
