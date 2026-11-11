import assert from "node:assert/strict";
import test from "node:test";
import { VERSION, getVersion } from "../src/version.js";

test("VERSION은 0.1.0이다", () => {
  assert.equal(VERSION, "0.1.0");
});

test("getVersion은 VERSION을 반환한다", () => {
  assert.equal(getVersion(), VERSION);
});
