import { getDownloadLink } from "@/utils/firebase";

export const useMemeStore = defineStore("memeStore", {
	state: () => ({ meme: "", total: 0 }),
	actions: {
		async getNewMeme() {
			const config = useRuntimeConfig();
			const firebaseApp = initApp(config);
			const link = await getDownloadLink(firebaseApp);
			this.meme = link.downloadURL;
			this.total = link.total;
		},
	},
});
