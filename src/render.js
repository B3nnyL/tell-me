import logUpdate from "log-update";

export function render(rate, frameArray, output) {
  let i = 0;
  const rendering = setInterval(() => {
    const frame = frameArray[(i = ++i % frameArray.length)];
    logUpdate(
      `
      Focusing${frame}
    `
    );
  }, rate);
  return rendering;
}
