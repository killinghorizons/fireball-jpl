export function expo(x: string) {
  const y = Number.parseFloat(x) * 10 ** 10;
  return y.toExponential();
}

export function toNumberOrNull(num: string | number | null, mult = 1) {
  if (num === null) return null;
  return Number(num) * mult;
}

export function convertNESW(value: string, dir: string): number | null {
  if (dir === "N" || dir === "E") return toNumberOrNull(value);
  return toNumberOrNull(-value);
}
