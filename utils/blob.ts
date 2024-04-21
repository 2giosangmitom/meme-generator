import { list } from "@vercel/blob";

export async function listAllFiles() {
  const response = await list();
  return response.blobs;
}
