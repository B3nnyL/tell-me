"use strict";

var _render = require("./render");

var _speak = require("./speak");

var _meow = _interopRequireDefault(require("meow"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var cli = (0, _meow.default)("\n    Usage\n      $ tell-me <string> --in <time> --minutes|-seconds|--hours\n\n    Options\n      --in, -i       Timer duration (The default timer duration is 25 minutes)\n      --minutes, -m  Set timer duration in minutes\n      --seconds, -s  Set timer duration in seconds\n      --hours, -h    Set timer duration in hour\n\n    Examples\n      $ tell-me \"hydrate myself\"\n      The system will tell me \"hydrate myself\" in 25 minutes\n\n      $ tell-me \"attend the yoga class\" -i 1 -h\n      The system will tell me \"attend the yoga class\" in an hour\n\n      $ tell-me \"take a deep breath\" -i 30 -s\n      The system will tell you take a deep breath in 30 seconds\n", {
  flags: {
    in: {
      type: "number",
      alias: "i"
    },
    hours: {
      type: "boolean",
      alias: "h"
    },
    minutes: {
      type: "boolean",
      alias: "m"
    },
    seconds: {
      type: "boolean",
      alias: "s"
    }
  }
});
var content = cli.input[0];

var _duration;

if (cli.flags.s) {
  _duration = Number(cli.flags.i) * 1000;
}

if (cli.flags.m) {
  _duration = Number(cli.flags.i) * 1000 * 60;
}

if (cli.flags.h) {
  _duration = Number(cli.flags.i) * 1000 * 60 * 60;
}

var duration = _duration || 25000 * 60;
var array = [".", "..", "...", ".."];
var interval = (0, _render.render)(1000, array);
(0, _speak.speakContent)(content, duration, function () {
  clearInterval(interval);
});