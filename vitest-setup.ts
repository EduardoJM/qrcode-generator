import { cleanup } from "@testing-library/react";
import { afterEach, vi } from "vitest";

import "@testing-library/jest-dom/vitest";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
(window as any).HTMLCanvasElement.prototype.getContext = vi.fn();

afterEach(() => {
  cleanup();
});
