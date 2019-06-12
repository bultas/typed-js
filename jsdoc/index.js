import { isOk, ok, getValue } from "./result.js";
import { logger } from "./logger.js";

const val = "Test";
const res = ok(val);

console.log(isOk(res));
console.log(getValue(res) === val);

logger(res);
