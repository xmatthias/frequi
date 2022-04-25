export default function buySellVolumes(columns: string[], data: Array<number[]>) {
  const closeIdx = columns.indexOf('close');
  const highIdx = columns.indexOf('high');
  const lowIdx = columns.indexOf('low');
  const volumeIdx = columns.indexOf('volume');

  return data.map((original) => {
    // Prevent mutation of original data
    const candle = original.slice();
    const highMinusLow = candle[highIdx] - candle[lowIdx];
    const greenVol =
      highMinusLow > 0
        ? (candle[volumeIdx] * (candle[closeIdx] - candle[lowIdx])) / highMinusLow
        : 0;
    const redVol =
      highMinusLow > 0
        ? (candle[volumeIdx] * (candle[highIdx] - candle[closeIdx])) / highMinusLow
        : 0;
    candle.push(greenVol, redVol);
    return candle;
  });
}
