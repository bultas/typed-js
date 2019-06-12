const OK = "OK";
const ERROR = "ERROR";

export const ok = val => {
  return { status: OK, value: val };
};

export const error = err => {
  return { status: ERROR, value: err };
};

const getResult = res => {
  if (res.status !== OK && res.status !== ERROR) {
    throw new Error(
      `ResultError: Value '${JSON.stringify(res, null, 4)}' is invalid result.`
    );
  }

  return res;
};

export const isOk = res => {
  return getResult(res).status === OK;
};

export const isError = res => {
  return getResult(res).status === ERROR;
};

export const getValue = res => {
  if (isError(res)) {
    throw new Error(`ResultError: ${JSON.stringify(res, null, 4)}`);
  }

  return res.value;
};
