import Image from "next/image";
import Link from "next/link";
import React from "react";
import { footerLinks } from "@/constants";

const Footer = () => {
  return (
    <footer className="flex flex-col text-black-100 mt-5 border-t border-gray-100">
      <div className="flex max-md:flex-col flex-wrap justify-between gap-5 sm:px-16 px-6 py-10">
        <div className="flex flex-col justify-start items-start gap-6">
          <Image
            src="/homeimg.webp"
            alt="pompom"
            width={100}
            height={20}
            className="object-contain"
          />
          <p className="text-base text-gray-700">
            Pompom.mob <br />
            Learning project
          </p>
        </div>
        <div className="footer__links">
          {footerLinks.map((link) => (
            <div key={link.title} className="footer__link">
              <h3 className="font-bold">{link.title}</h3>
              {link.links.map((item) => (
                <Link
                  key={item.title}
                  href={item.url}
                  className="text-gray-500"
                >
                  {item.title}
                </Link>
              ))}
            </div>
          ))}
        </div>
      </div>
      <div className="text-center items-center flex-wrap mt-10 border-t border-gray-100 sm:px-16 px-6 py-10">
        <p>
          Đây là dự án mình vừa học vừa làm, các hình ảnh được lấy trên google,
          nếu có vấn đề bản quyền thì mọi người hãy liên hệ với mình
        </p>
      </div>
    </footer>
  );
};

export default Footer;
