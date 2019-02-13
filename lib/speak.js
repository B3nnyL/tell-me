"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.speakContent = speakContent;

var _say = _interopRequireDefault(require("say"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function speakContent(content, delayTime, cb) {
  setTimeout(function () {
    if (typeof content === "string") {
      _say.default.speak(content);
    }

    cb();
  }, delayTime);
}