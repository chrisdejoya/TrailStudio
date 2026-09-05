import test from 'node:test';
import assert from 'node:assert/strict';
import {
  getDpadDiagonalStates,
  getDpadDirectionalStates,
} from '../src/managers/gamepadManager.js';

function buttonsFor(...pressedIndices) {
  const buttons = Array.from({ length: 17 }, () => ({ pressed: false, value: 0 }));
  pressedIndices.forEach((index) => {
    buttons[index] = { pressed: true, value: 1 };
  });
  return buttons;
}

test('derives each D-pad diagonal from its two cardinal directions', () => {
  const expectedPairs = [
    [[12, 14], 'D-Pad Up-Left'],
    [[12, 15], 'D-Pad Up-Right'],
    [[13, 14], 'D-Pad Down-Left'],
    [[13, 15], 'D-Pad Down-Right'],
  ];

  expectedPairs.forEach(([pair, name], expectedIndex) => {
    const states = getDpadDiagonalStates(buttonsFor(...pair));
    assert.equal(states[expectedIndex].name, name);
    assert.equal(states[expectedIndex].pressed, true);
    states.forEach((state, index) => {
      if (index !== expectedIndex) assert.equal(state.pressed, false);
    });
  });
});

test('uses the weaker cardinal value as diagonal pressure', () => {
  const buttons = buttonsFor(12, 15);
  buttons[12].value = 0.4;
  buttons[15].value = 0.8;

  assert.equal(getDpadDiagonalStates(buttons)[1].value, 0.4);
});

test('derives diagonals from left-stick input when direction sync is enabled', () => {
  const buttons = buttonsFor();
  const states = getDpadDirectionalStates(buttons, [-0.8, -0.6], true);

  assert.equal(states[0].pressed, true);
  assert.equal(states[2].pressed, true);
  assert.equal(states[3].pressed, false);
  assert.equal(states[4].pressed, true);
  assert.equal(states[4].value, 0.6);
});

test('treats value-only D-pad input as pressed', () => {
  const buttons = buttonsFor();
  buttons[12] = { pressed: false, value: 0.7 };
  buttons[15] = { pressed: false, value: 0.5 };

  const states = getDpadDirectionalStates(buttons);
  assert.equal(states[0].pressed, true);
  assert.equal(states[3].pressed, true);
  assert.equal(states[5].pressed, true);
});