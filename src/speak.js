import say from "say";

export function speakContent(content, delayTime, cb) {
  setTimeout(function() {
    if (typeof content === "string") {
      say.speak(content);
    }
    cb();
  }, delayTime);
}
