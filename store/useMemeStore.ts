import { type StorageReference } from "firebase/storage";

export const useMemeStore = defineStore("meme", {
  state: (): { total: number; src: string; items: StorageReference[] } => ({
    total: 0,
    src: "",
    items: [],
  }),
  actions: {
    async init() {
      this.items = await getAllMemes();
      this.total = this.items.length;
    },
    async getNewMeme() {
      const randomMeme = this.items[Math.floor(Math.random() * this.total)];
      const downloadUrl = await getDownloadLink(randomMeme);
      this.src = downloadUrl;
    },
  },
});
