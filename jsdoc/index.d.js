/**
 * @typedef { string | number } Result.Value;
 */

/**
 * @typedef { string } Result.TOk;
 */

/**
 * @typedef { string } Result.TError
 */

/**
 * @typedef { object } Result.Ok
 * @property { Result.TOk } status
 * @property { Result.Value } value
 */

/**
 * @typedef { object } Result.Err
 * @property { Result.TError } status
 * @property { Result.Value } value
 */

/**
 * @typedef { Result.Ok | Result.Err } Result.Result
 */

/**
 * @typedef { void } Log.Void
 */
