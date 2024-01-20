export function randomItemFromArray<T>(arr: T[]) {
	const random = Math.floor(Math.random() * arr.length);
	return arr[random];
}
