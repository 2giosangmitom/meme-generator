import {
  getDownloadURL,
  listAll,
  ref,
  type StorageReference,
} from "firebase/storage";

export async function getAllMemes() {
  try {
    const storage = useFirebaseStorage();
    const memeStorageRef = ref(storage);
    const allMemes = await listAll(memeStorageRef);

    return allMemes.items;
  } catch (e) {
    throw new Error(`Failed to get all memes available ${e}`);
  }
}

export async function getDownloadLink(memeItem: StorageReference) {
  try {
    const downloadUrl = await getDownloadURL(memeItem);
    return downloadUrl;
  } catch (e) {
    throw new Error(`Failed to get download link\n >>> ${e}`);
  }
}
