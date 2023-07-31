import Image from "next/image";
import Link from "next/link";
import React from "react";
import CustomButton from "./CustomButton";

const Navbar = () => {
  return (
    <header className="w-full absolute z-10">
      <nav className="max-w-[1440px] mx-auto flex justify-between items-center sm:px-16 px-6 py-4">
        <Link href="/" className="flex justify-center items-center">
          <Image
            src="/homeimg.webp"
            alt="pompom"
            width={100}
            height={20}
            className="object-contain"
          />
          <p className="text-base text-gray-700">Pompom.mob</p>
        </Link>

        <CustomButton
          title="Genshin"
          btnType="button"
          containerStyles="text-white bg-primary-blue rounded-full min-w-[100px py-1 px-2 "
        />
      </nav>
    </header>
  );
};

export default Navbar;
