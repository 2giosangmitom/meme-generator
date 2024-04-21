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
  const [data, setData] = useState<{ meme: Meme[]; total: number }>();
  const [isFetched, setIsFetched] = useState(false);
  const [meme, setMeme] = useState<Meme>();

  const fetchData = async () => {
    const res = await fetch("/api");
    const data: Meme[] = await res.json();
    setData({ meme: data, total: data.length });
    setIsFetched(true);
  };

  const newMeme = () => {
    if (!data) {
      return;
    }
    const random = Math.floor(Math.random() * data.total);
    setMeme(data.meme[random]);
  };

  return (
    <>
      <div className="flex flex-col items-center justify-center bg-black py-5">
        <h1 className="text-3xl font-bold bg-orange-600 rounded px-5">
          Meme generator
        </h1>
      </div>
      <span>Total memes: {(data && data.total) || 0}</span>

      <div className="flex flex-col items-center justify-center">
        <Button
          className="mt-5 active:scale-[0.9] duration-100"
          onClick={() => {
            if (!isFetched) {
              fetchData();
            }
            newMeme();
          }}
        >
          New Meme
        </Button>
        <div className="flex justify-center w-1/2">
          {meme && (
            <img className="my-10 h-auto" src={meme.downloadUrl} alt="meme" />
          )}
        </div>
      </div>
    </>
  );
}
