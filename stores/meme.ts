import { initializeApp, type FirebaseOptions, type FirebaseApp } from 'firebase/app'
import { getStorage, ref, listAll, getDownloadURL, type StorageReference } from 'firebase/storage'

const nuxtConfig = useRuntimeConfig()

const firebaseConfig: FirebaseOptions = {
  apiKey: nuxtConfig.apiKey,
  authDomain: nuxtConfig.authDomain,
  projectId: nuxtConfig.projectId,
  storageBucket: nuxtConfig.storageBucket,
  messagingSenderId: nuxtConfig.messagingSenderId,
  appId: nuxtConfig.appId,
  measurementId: nuxtConfig.measurementId
}

const firebaseApp = initializeApp(firebaseConfig)

function getRandomItem<T>(arr: T[]): T {
  const random = Math.floor(Math.random() * arr.length)
  return arr[random]
}

async function getAllMemesFromFirebase(firebaseApp: FirebaseApp) {
  try {
    const storage = getStorage(firebaseApp)
    const memeRef = ref(storage)
    const res = await listAll(memeRef)
    const items = res.items

    return items
  } catch (e) {
    throw new Error(`Failed to getAllMemesFromFirebase\n >>> ${e}`)
  }
}

async function getData(): Promise<{ allMemes: StorageReference[]; total: number }> {
  try {
    const allMemes = await getAllMemesFromFirebase(firebaseApp)
    const total = allMemes.length

    return { allMemes, total }
  } catch (e) {
    throw new Error(`Failed to getDownloadLink\n >>> ${e}`)
  }
}

export const useMemeStore = defineStore('meme', async () => {
  const data = await getData()
  const total = useState('total', () => data.total || 0)
  const meme = useState('meme', () => {
    const randomMeme = getRandomItem(data.allMemes) || ''

    return getDownloadURL(randomMeme)
  })

  function newMeme() {
    const randomMeme = getRandomItem(data.allMemes)
    meme.value = getDownloadURL(randomMeme)
  }

  return { meme, total, newMeme }
})
