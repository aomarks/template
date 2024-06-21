/**
 * @license
 * Copyright 2024 Alexander Marks
 * SPDX-License-Identifier: Apache-2.0
 */

import test from 'node:test';
import {strict as assert} from 'node:assert';

test('synchronous passing test', async (t) => {
  assert.strictEqual(1, 1);

  await t.test('subtest 1', () => {
    assert.strictEqual(2, 2);
  });
});
