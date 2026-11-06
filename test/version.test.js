import assert from "node:assert/strict";
import test from "node:test";
import { VERSION, getVersion } from "../src/version.js";

test("VERSION is 0.1.0", () => {
  assert.equal(VERSION, "0.1.0");
});

test("getVersion returns VERSION", () => {
  assert.equal(getVersion(), VERSION);
});
