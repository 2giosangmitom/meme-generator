import { useState } from "react";
import Memes from "./Memes";

export default function Button() {
	const [quotes, setMemes] = useState("");

	function handleClick() {
		const random = Math.floor(Math.random() * Memes.length);
		setMemes(Memes[random].img);
	}

	return (
		<>
			<button className="button" onClick={handleClick}>
				Click me!
			</button>
			<img src={quotes} alt="meme" className="meme" />
		</>
	);
}
