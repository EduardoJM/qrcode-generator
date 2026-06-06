import { cleanup } from "@testing-library/react";
import { afterEach } from "vitest";

import "@testing-library/jest-dom/vitest";

HTMLCanvasElement.prototype.getContext = () => {};

afterEach(() => {
  cleanup();
});
