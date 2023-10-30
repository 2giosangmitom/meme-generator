"use client";
import { useState } from "react";
import Image from "next/image";
import { memes_image } from "./Memes";

export default function Button() {
  const random = Math.floor(Math.random() * memes_image.length);
  const [meme, setMeme] = useState<string>(memes_image[random]);

  return (
    <div className="flex justify-center">
      <button
        className="font-sans font-medium text-xl mt-14 cursor-pointer px-3 bg-gradient-to-r from-cyan-500 to-blue-500 rounded uppercase outline-none w-52"
        onClick={() => setMeme(memes_image[random])}
      >
        Click me!
      </button>
      <Image
        src={meme}
        alt="meme"
        width={450}
        height={450}
        className="absolute bottom-3 left-1/2 -translate-x-1/2 max-h-[450px] max-w-[600px] w-auto h-auto"
      />
    </div>
  );
}
