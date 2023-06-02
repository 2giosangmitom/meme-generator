import { useState } from "react";
import Memes from "./Memes";

export default function Button() {
	const [memes, setMemes] = useState("");

	function handleClick() {
		const random = Math.floor(Math.random() * Memes.length);
		setMemes(Memes[random].img);
	}

	return (
		<>
			<button className="button" onClick={handleClick}>
				Click me!
			</button>
			<img src={memes} className="meme" />
		</>
	);
}
