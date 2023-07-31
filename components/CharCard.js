"use client";

import { useState } from "react";
import Image from "next/image";
import CharDetails from "./CharDetails";
import { fetchCharsImage } from "@/utils";

const CharCard = ({ char, data }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className="character-card group hover:cursor-pointer hover:scale-105"
      onClick={() => {
        setIsOpen(true);
      }}
    >
      <div className="character-card__content">
        <h2 className="character-card__content-title">{char}</h2>
      </div>
      <div className="relative w-full h-[36rem] my-3 object-contain">
        <Image
          src={fetchCharsImage(char)}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          alt="char picture"
          fill
          priority
          className="object-cover object-top rounded-xl"
        />
      </div>

      {isOpen ? (
        <CharDetails
          isOpen={isOpen}
          closeModal={() => setIsOpen(false)}
          char={char}
          data={data}
        />
      ) : (
        <></>
      )}
    </div>
  );
};

export default CharCard;
