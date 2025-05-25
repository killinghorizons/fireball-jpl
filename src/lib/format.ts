export function expo(x: string) {
  const y = Number.parseFloat(x) * 10 ** 10;
  return y.toExponential();
}
