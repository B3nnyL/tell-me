"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.render = render;

var _logUpdate = _interopRequireDefault(require("log-update"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function render(rate, frameArray, output) {
  var i = 0;
  var rendering = setInterval(function () {
    var frame = frameArray[i = ++i % frameArray.length];
    (0, _logUpdate.default)("\n      Focusing".concat(frame, "\n    "));
  }, rate);
  return rendering;
}