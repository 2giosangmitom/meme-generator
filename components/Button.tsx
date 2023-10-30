"use client";
import { useState } from "react";
import Image from "next/image";
import { memes_image } from "./Memes";

export default function Button() {
  const [meme, setMeme] = useState<string>("");

  function handleClick() {
    const random = Math.floor(Math.random() * memes_image.length);
    setMeme(memes_image[random]);
  }

  return (
    <>
      <button className="button" onClick={handleClick}>
        Click me!
      </button>
      <Image
        src={meme}
        alt="meme"
        width={450}
        height={450}
        className="absolute bottom-3 left-1/2 -translate-x-1/2 max-h-[450px] max-w-[600px]"
      />
    </>
  );
}
