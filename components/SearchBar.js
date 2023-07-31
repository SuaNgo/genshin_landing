"use client";

import { useState } from "react";
import { SearchCharacter } from "./";
import Image from "next/image";
import { useRouter } from "next/navigation";

const SearchBar = () => {
  const [character, setCharacter] = useState("");
  const router = useRouter();
  const handlerSearch = (e) => {
    e.preventDefault();
    if (character === "") {
      return;
    }

    updateSearch(character.toLowerCase());
  };

  const updateSearch = (character) => {
    const searchParams = new URLSearchParams(window.location.search);
    if (character) {
      searchParams.set("character", character);
    } else {
      searchParams.delete("character");
    }

    const newPathname = `${
      window.location.pathname
    }?${searchParams.toString()}`;

    router.push(newPathname);
  };

  return (
    <form className="searchbar" onSubmit={handlerSearch}>
      <div className="searchbar__item">
        <SearchCharacter character={character} setCharacter={setCharacter} />
        <button className="-ml-12 z-10 " type="submit">
          <Image
            src="/searchicon.svg"
            alt="search"
            width={40}
            height={40}
            className="object-contain"
          />
        </button>
      </div>
    </form>
  );
};
export default SearchBar;
