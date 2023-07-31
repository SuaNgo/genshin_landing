"use client";
import { characters } from "@/constants";
import { Combobox, Transition } from "@headlessui/react";
import Image from "next/image";
import { Fragment, useState } from "react";

const SearchCharacter = ({ character, setCharacter }) => {
  const [input, setInput] = useState("");
  const filterCharacter =
    input === ""
      ? characters
      : characters.filter((item) =>
          item.toLowerCase().includes(input.toLowerCase())
        );

  return (
    <div className="search-character">
      <Combobox value={character} onChange={setCharacter}>
        <div className="relative w-full">
          <Combobox.Button className="absolute top-[14px]">
            <Image
              src="/characters.webp"
              width={20}
              height={20}
              className="ml-4"
              alt="Character logo"
            />
          </Combobox.Button>

          <Combobox.Input
            className="search-character__input"
            placeholder="Amber"
            displayValue={(character) => character}
            onChange={(event) => setInput(event.target.value)}
          />

          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
            afterLeave={() => setInput("")}
          >
            <Combobox.Options>
              {filterCharacter.length === 0 && input !== "" ? (
                <Combobox.Option
                  value={input}
                  className="search-character__options"
                  static
                ></Combobox.Option>
              ) : (
                filterCharacter.map((item) => (
                  <Combobox.Option
                    key={item}
                    value={item}
                    className={({ active }) =>
                      `relative search-character__option ${
                        active ? "bg-primary-blue text-white" : "text-gray-900"
                      }`
                    }
                  >
                    {({ selected, active }) => (
                      <>
                        <span
                          className={`block truncate ${
                            selected ? "font-medium" : "font-normal"
                          }`}
                        >
                          {item}
                        </span>
                        {selected ? (
                          <span
                            className={`absolute inset-y-0 left-0 flex items-center pl-3 ${
                              active
                                ? "text-white"
                                : "text-pribg-primary-purple"
                            }`}
                          ></span>
                        ) : null}
                      </>
                    )}
                  </Combobox.Option>
                ))
              )}
            </Combobox.Options>
          </Transition>
        </div>
      </Combobox>
    </div>
  );
};

export default SearchCharacter;
