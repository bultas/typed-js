type Value = String | Number;

type TError = 'ERROR';

type TOk = 'OK';

type Err = {
  status: TError,
  value: Value
};

type Ok = {
  status: TOk,
  value: Value
};

type Result = Ok | Err;

export function isOk(res: Result): Boolean;

export function isError(res: Result): Boolean;

export function getValue(res: Result): Value;

export function ok(val: Value): Ok

export function error(val: Value): Err;