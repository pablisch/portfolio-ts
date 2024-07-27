import { afterEach, vi } from "vitest";
import { cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/vitest";

// Mock window.scrollTo
globalThis.scrollTo = vi.fn();

// runs a clean after each test case (e.g. clearing jsdom)
afterEach(() => {
  cleanup();
});
