/**
 * Selects a random item from an array.
 * @param arr The array from which to select a random item.
 * @returns The randomly selected item from the array.
 */
export function randomItemFromArray<T>(arr: T[]) {
  const random = Math.floor(Math.random() * arr.length);
  return arr[random];
}
