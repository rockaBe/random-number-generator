'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var randomNoGenerator = function randomNoGenerator(min, max) {
  if (typeof max !== 'number' && typeof min !== 'number') {
    min = 0;max = 1;
  }
  return Math.random() * (max - min) + min;
};

exports.default = randomNoGenerator;