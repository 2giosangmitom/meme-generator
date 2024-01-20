import { getDownloadLink } from "../utils/firebase";

export const useMemeStore = defineStore("meme", () => {
	const config = useRuntimeConfig();
	const firebaseApp = initApp(config);
	const meme = ref("");
	const total = ref(0);

	getDownloadLink(firebaseApp).then((v) => {
		meme.value = v.downloadURL;
		total.value = v.total;
	});

	function newMeme() {
		getDownloadLink(firebaseApp).then((v) => {
			meme.value = v.downloadURL;
			total.value = v.total;
		});
	}

	return { meme, total, newMeme };
});
