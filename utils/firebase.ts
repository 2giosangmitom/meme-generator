import { initializeApp, type FirebaseApp } from "firebase/app";
import type { RuntimeConfig } from "nuxt/schema";
import { getStorage, listAll, ref, getDownloadURL } from "firebase/storage";

/**
 * Initializes a Firebase app instance using the provided runtime configuration.
 * @param config The runtime configuration containing Firebase credentials.
 * @returns The initialized Firebase app instance.
 */
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

/**
 * Retrieves all meme items from Firebase storage.
 * @param firebaseApp The initialized Firebase app instance.
 * @returns A Promise resolving to an array of StorageReference objects.
 */
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

/**
 * Retrieves a download link for a random meme from Firebase storage.
 * @param firebaseApp The initialized Firebase app instance.
 * @returns A Promise resolving to an object containing the download URL and total number of memes.
 */
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
