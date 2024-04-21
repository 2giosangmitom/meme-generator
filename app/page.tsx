"use client";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

type Meme = {
  downloadUrl: string;
  url: string;
  size: number;
  uploadedAt: string;
};

export default function Page() {
  const [meme, setMeme] = useState<Meme>();

  const getMeme = async () => {
    const res = await fetch("http://localhost:3000/api");
    const data: Meme[] = await res.json();
    const randomMeme = Math.floor(Math.random() * data.length);

    setMeme(data[randomMeme]);
  };

  return (
    <>
      <div className="flex flex-col items-center justify-center bg-black py-5">
        <h1 className="text-3xl font-bold bg-orange-600 rounded px-5">
          Meme generator
        </h1>
      </div>

      <div className="flex flex-col items-center justify-center">
        <Button
          className="mt-5 active:scale-[0.9] duration-100"
          onClick={() => getMeme()}
        >
          New Meme
        </Button>
        <div className="flex justify-center">
          {meme && (
            <img className="w-1/2 my-10" src={meme!.downloadUrl} alt="meme" />
          )}
        </div>
      </div>
    </>
  );
}
