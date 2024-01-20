import { initializeApp, type FirebaseApp } from "firebase/app";
import type { RuntimeConfig } from "nuxt/schema";
import { getStorage, listAll, ref, getDownloadURL } from "firebase/storage";

export function initApp(config: RuntimeConfig) {
	return initializeApp({
		apiKey: config.public.apiKey,
		authDomain: config.public.authDomain,
		projectId: config.public.projectId,
		storageBucket: config.public.storageBucket,
		messagingSenderId: config.public.messagingSenderId,
		appId: config.public.appId,
		measurementId: config.public.measurementId,
	});
}

export async function getAllMemesFromFirebase(firebaseApp: FirebaseApp) {
	try {
		const storage = getStorage(firebaseApp);
		const memeRef = ref(storage);
		const res = await listAll(memeRef);
		const items = res.items;

		return items;
	} catch (e) {
		throw new Error(`Failed to getAllMemesFromFirebase\n >>> ${e}`);
	}
}

export async function getDownloadLink(firebaseApp: FirebaseApp) {
	try {
		const allMemes = await getAllMemesFromFirebase(firebaseApp);
		const randomMeme = randomItemFromArray(allMemes);
		const downloadURL = await getDownloadURL(randomMeme);
		const total = allMemes.length;

		return { downloadURL, total };
	} catch (e) {
		throw new Error(`Failed to getDownloadLink\n >>> ${e}`);
	}
}
