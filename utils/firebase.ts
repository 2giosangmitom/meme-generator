import {
  getDownloadURL,
  listAll,
  ref,
  type StorageReference,
} from "firebase/storage";

// Function to retrieve all meme items from Firebase Storage
export async function getAllMemes(): Promise<StorageReference[]> {
  try {
    const storage = useFirebaseStorage();
    const memeStorageRef = ref(storage);
    const allMemes = await listAll(memeStorageRef);

    return allMemes.items;
  } catch (error) {
    throw new Error(`Failed to retrieve all memes: ${error}`);
  }
}

// Function to get the download URL of a specific meme item
export async function getDownloadLink(
  memeItem: StorageReference,
): Promise<string> {
  try {
    const downloadUrl = await getDownloadURL(memeItem);
    return downloadUrl;
  } catch (error) {
    throw new Error(`Failed to get download link: ${error}`);
  }
}
