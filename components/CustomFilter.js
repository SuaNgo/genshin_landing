"use client";

import { useRouter } from "next/navigation";
import React, { Fragment, useState } from "react";
import Image from "next/image";
import { Transition, Listbox } from "@headlessui/react";
import { updateSearchParams } from "@/utils";

const CustomFilter = ({ title, options }) => {
  const [selected, setSelected] = useState(options[0]);
  const router = useRouter();
  const handleUpdateParams = ({ title, value }) => {
    const newPathName = updateSearchParams(title, value.toLowerCase());

    router.push(newPathName);
  };
  return (
    <div className="w-fit">
      <Listbox
        value={selected}
        onChange={(e) => {
          setSelected(e);
          handleUpdateParams(e);
        }}
      >
        <div className="relative w-fit z-10">
          <Listbox.Button className="custom-filter__btn">
            <span className="block truncate">{selected.title}</span>
            <Image src="/homeimg.webp" width={20} height={20} alt="filter" />
          </Listbox.Button>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Listbox.Options className="custom-filter__options">
              {options.map((option) => (
                <Listbox.Option
                  key={option.title}
                  value={option}
                  className={({ active }) =>
                    `cursor-pointer relative select-none py-2 px-4 ${
                      active ? "bg-primary-blue text-white" : "text-gray-900"
                    } `
                  }
                >
                  {({ selected }) => (
                    <span
                      className={`flex truncate ${
                        selected ? "font-medium" : "font-normal"
                      }`}
                    >
                      {option.title}
                      <Image
                        src={`/${
                          option.title === "Weapon"
                            ? "homeimg"
                            : option.title === "Elements"
                            ? "homeimg"
                            : option.title === "Rarity"
                            ? "star"
                            : option.title.includes("star")
                            ? "star"
                            : `${option.title}`
                        }.webp`}
                        width={20}
                        height={20}
                        className="object-contain"
                      ></Image>
                    </span>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
    </div>
  );
};

export default CustomFilter;
