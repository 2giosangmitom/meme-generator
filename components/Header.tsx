import Image from "next/image";

export default function Header() {
  return (
    <header className="header">
      <a href="https://github.com/2giosangmitom/meme_generator" target="_blank">
        <Image
          className=""
          src="/troll.webp"
          width={50}
          height={50}
          alt="troll face"
        />
      </a>
      <h2 className="header--title">Meme generator</h2>
      <h2 className="header--project">React Project</h2>
    </header>
  );
}
