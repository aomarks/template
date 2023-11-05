/**
 * @license
 * Copyright 2023 Alexander Marks
 * SPDX-License-Identifier: Apache-2.0
 */

// Temporary patch until https://github.com/esm-bundle/chai/pull/343 is merged
// and released
declare module '@esm-bundle/chai' {
  export {
    assert,
    expect,
    should,
    use,
    util,
    config,
    Assertion,
    AssertionError,
    version,
  } from 'chai';
}
