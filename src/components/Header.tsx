import troll from '/troll.webp';

export default function Header() {
	return (
		<header className="header">
			<img className="header--image" src={troll} alt="troll face" />
			<h2 className="header--title">Meme generator</h2>
			<h2 className="header--project">React Project</h2>
		</header>
	);
}
