import { test } from "tape";
import { ok, isOk, getValue } from "./result.js";

test("result", t => {
  const val = "Test";
  const okResult = ok(val);

  t.equal(isOk(okResult), true);
  t.equal(getValue(okResult), val);

  t.end();
});
