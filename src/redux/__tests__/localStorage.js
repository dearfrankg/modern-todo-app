/* eslint-disable */

import { loadState, saveState } from "../localStorage";

global.window = {};
import localStorage from "mock-local-storage";

describe("localStorage", () => {
  describe("loadState():", () => {
    it("should return undefined when no localStorage", () => {
      expect(loadState()).toBe(undefined);
    });

    it("should work properly", () => {
      saveState("data");
      expect(loadState()).toBe("data");
    });
  });
});
