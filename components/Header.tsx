import Image from "next/image";

export default function Header() {
  return (
    <header className="flex w-full items-center justify-evenly h-16 bg-gradient-to-r from-cyan-500 to-blue-500 text-white">
      <a href="https://github.com/2giosangmitom/meme_generator" target="_blank">
        <Image
          src="/troll.webp"
          width={50}
          height={50}
          alt="troll face"
        />
      </a>
      <h2 className="text-2xl font-medium">Meme generator</h2>
      <h2 className="text-2xl font-medium">React Project</h2>
    </header>
  );
}
