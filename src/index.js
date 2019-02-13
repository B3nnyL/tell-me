import { render } from "./render";
import { speakContent } from "./speak";
import meow from "meow";

const cli = meow(
  `
    Usage
      $ tell-me <string> --in <time> --minutes|-seconds|--hours

    Options
      --in, -i       Timer duration (The default timer duration is 25 minutes)
      --minutes, -m  Set timer duration in minutes
      --seconds, -s  Set timer duration in seconds
      --hours, -h    Set timer duration in hour

    Examples
      $ tell-me "hydrate myself"
      The system will tell me "hydrate myself" in 25 minutes

      $ tell-me "attend the yoga class" -i 1 -h
      The system will tell me "attend the yoga class" in an hour

      $ tell-me "take a deep breath" -i 30 -s
      The system will tell you take a deep breath in 30 seconds
`,
  {
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
  }
);

const content = cli.input[0];

let _duration;
if (cli.flags.s) {
  _duration = Number(cli.flags.i) * 1000;
}
if (cli.flags.m) {
  _duration = Number(cli.flags.i) * 1000 * 60;
}
if (cli.flags.h) {
  _duration = Number(cli.flags.i) * 1000 * 60 * 60;
}

const duration = _duration || 25000 * 60;

const array = [".", "..", "...", ".."];

const interval = render(1000, array);

speakContent(content, duration, () => {
  clearInterval(interval);
});
