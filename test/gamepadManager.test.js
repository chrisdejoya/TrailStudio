import test from 'node:test';
import assert from 'node:assert/strict';
import { getDpadDiagonalStates } from '../src/managers/gamepadManager.js';

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