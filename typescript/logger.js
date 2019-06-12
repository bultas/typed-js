import { getValue } from "./result.js";

export const logger = res => {
  console.log(getValue(res));
};
