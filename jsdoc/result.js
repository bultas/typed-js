/** @type {Result.TOk} */
const OK = "OK";

/** @type {Result.TError} */
const ERROR = "ERROR";

/**
 * @param {Result.Value} val
 * @returns {Result.Result}
 */
export const ok = val => {
  return { status: OK, value: val };
};

/**
 * @param {Result.Value} err
 * @returns {Result.Result}
 */
export const error = err => {
  return { status: ERROR, value: err };
};

/**
 * @param {Result.Result} res
 */
const getResult = res => {
  if (res.status !== OK && res.status !== ERROR) {
    throw new Error(
      `ResultError: Value '${JSON.stringify(res, null, 4)}' is invalid result.`
    );
  }

  return res;
};

/**
 * @param {Result.Result} res
 * @returns {boolean}
 */
export const isOk = res => {
  return getResult(res).status === OK;
};

/**
 * @param {Result.Result} res
 * @returns {boolean}
 */
const isError = res => {
  return getResult(res).status === ERROR;
};

/**
 * @param {Result.Result} res
 * @returns {Result.Value}
 */
export const getValue = res => {
  if (isError(res)) {
    throw new Error(`ResultError: ${JSON.stringify(res, null, 4)}`);
  }

  return res.value;
};
