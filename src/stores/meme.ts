import { defineStore } from 'pinia';
import { initializeApp, type FirebaseApp } from 'firebase/app';
import { getStorage, ref, listAll, getDownloadURL } from 'firebase/storage';
import { ref as refVue } from 'vue';

const env = import.meta.env;
const firebaseApp = initializeApp({
  apiKey: env.VITE_APIKEY,
  authDomain: env.VITE_AUTHDOMAIN,
  projectId: env.VITE_PROJECTID,
  storageBucket: env.VITE_STORAGEBUCKET,
  messagingSenderId: env.VITE_MESSAGINGSENDERID,
  appId: env.VITE_APPID,
  measurementId: env.VITE_MEASUREMENTID
});

function randomItemFromArray<T>(arr: T[]): T {
  const random = Math.floor(Math.random() * arr.length);
  return arr[random];
}

async function getAllMemesFromFirebase(firebaseApp: FirebaseApp) {
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

async function getDownloadLink(): Promise<{ downloadURL: string; total: number }> {
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

export const useMemeStore = defineStore('meme', () => {
  const meme = refVue('');
  const total = refVue(0);

  getDownloadLink().then((v) => {
    meme.value = v.downloadURL;
    total.value = v.total;
  });

  function newMeme() {
    getDownloadLink().then((v) => {
      meme.value = v.downloadURL;
      total.value = v.total;
    });
  }

  return { meme, total, newMeme };
});
