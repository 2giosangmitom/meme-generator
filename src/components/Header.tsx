import troll from '/troll.webp';

export default function Header() {
	return (
		<header className="header">
			<a href="https://github.com/yeuxacucodon/meme_generator" target="_blank">
				<img className="header--image" src={troll} alt="troll face" />
			</a>
			<h2 className="header--title">Meme generator</h2>
			<h2 className="header--project">React Project</h2>
		</header>
	);
}
