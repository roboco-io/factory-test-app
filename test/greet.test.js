import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";
import { greet } from "../src/greet.js";

test("documents the name parameter and greeting return value", () => {
  const source = readFileSync(new URL("../src/greet.js", import.meta.url), "utf8");
  assert.match(source, /\/\*\*[\s\S]*@param \{string\} \[name=world\][\s\S]*@returns \{string\}[\s\S]*\*\/\s*export function greet/);
});

test("greets by name", () => {
  assert.equal(greet("Factory"), "Hello, Factory!");
});

test("greets world when no name is given", () => {
  assert.equal(greet(), "Hello, world!");
});
