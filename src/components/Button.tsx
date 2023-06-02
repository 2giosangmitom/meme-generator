import { useState } from "react";
import Memes from "./Memes";

export default function Button() {
	const [quotes, setQuotes] = useState("");

	function handleClick() {
		const random = Math.floor(Math.random() * Memes.length);
		setQuotes(Memes[random].img);
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
