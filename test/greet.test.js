import assert from "node:assert/strict";
import test from "node:test";
import { greet } from "../src/greet.js";

test("greets by name", () => {
  assert.equal(greet("Factory"), "Hello, Factory!");
});

test("greets world when no name is given", () => {
  assert.equal(greet(), "Hello, world!");
});

test("trims surrounding whitespace from the name", () => {
  assert.equal(greet("  Factory  "), "Hello, Factory!");
});
