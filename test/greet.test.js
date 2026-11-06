import assert from "node:assert/strict";
import test from "node:test";
import { greet, farewell } from "../src/greet.js";

test("greets by name", () => {
  assert.equal(greet("Factory"), "Hello, Factory!");
});

test("says goodbye by name", () => {
  assert.equal(farewell("Factory"), "Goodbye, Factory!");
});
