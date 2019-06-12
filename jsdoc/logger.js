import { getValue } from "./result.js";

/**
 * @param {Result.Result} res
 * @returns {Log.Void}
 */
export const logger = res => {
  console.log(getValue(res));
};
