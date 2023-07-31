"use client";
import Image from "next/image";
import { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { fetchCharsImage } from "@/utils";

const CharDetails = ({ isOpen, closeModal, char, data }) => {
  const element =
    data.vision === "Geo"
      ? "/geo.webp"
      : data.vision === "Hydro"
      ? "/hydro.webp"
      : data.vision === "Pyro"
      ? "/pyro.webp"
      : data.vision === "Dendro"
      ? "/dendro.webp"
      : data.vision === "Anemo"
      ? "/anemo.webp"
      : data.vision === "Cryo"
      ? "/cryo.webp"
      : "/electro.webp";

  const weapon =
    data.weapon === "Polearm"
      ? "/polearm.webp"
      : data.weapon === "Sword"
      ? "/sword.webp"
      : data.weapon === "Claymore"
      ? "/claymore.webp"
      : data.weapon === "Catalyst"
      ? "/catalyst.webp"
      : "/bow.webp";
  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div
              className="flex min-h-full items-center justify-center 
            text-center p-4 "
            >
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="relative w-full max-w-lg max-h-[90vh] overflow-y-auto transform rounded-2xl bg-white text-left shadow-xl transition-all flex flex-col gap-5">
                  <button
                    type="button"
                    onClick={closeModal}
                    className="absolute top-2 right-2 z-10 w-fit p-2 bg-gray-300 rounded-full"
                  >
                    <Image
                      src="/close_icon.svg"
                      alt="close button"
                      width="20"
                      height="20"
                    />
                  </button>
                  <div className="flex flex-row flex-1 gap-3">
                    <div className="relative w-fit h-fit bg-pattern bg-left rounded-lg">
                      <Image
                        src={fetchCharsImage(char)}
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        alt="char picture"
                        width={224}
                        height={400}
                        priority
                        className="object-left object-cover"
                      />
                    </div>
                    <div className="mt-10 grid grid-cols-2 gap-x-[3.5rem] grid-flow-row ">
                      <img
                        src={element}
                        alt="weapon picture"
                        className="w-20 h-20"
                      />
                      <img
                        src={weapon}
                        alt="ele picture"
                        className="w-12 h-36"
                      />
                      <h4 className="text-gray font-bold capitalize">Rarity</h4>
                      <div className="flex">
                        <p className="font-semibold text-black-100 ">
                          {data.rarity}
                        </p>
                        <img src="/star.webp" className="ml-1 w-6 h-6"></img>
                      </div>

                      <h4 className="text-gray font-bold capitalize">Region</h4>
                      <p className="font-semibold text-black-100 ">
                        {data.nation}
                      </p>
                      <h4 className="text-gray font-bold capitalize">
                        Constellation
                      </h4>
                      <p className="font-semibold text-black-100 ">
                        {data.constellation}
                      </p>
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default CharDetails;
