"use client";
import config from "data/config";
import socialItems from "data/navigation/social-navigation";
import { usePathname } from "next/navigation";

const Footer = () => (
  <>
    {usePathname() == "/" && (
      <footer className="animate__animated animate__fadeIn  animate__faster animate__delay-2s">
        <p>
          تمامی حقوق متعلق به انجمن علمی کامپیوتر دانشگاه صنعتی ارومیه می‌باشد.
        </p>
        <ul className="flex flex-row justify-center w-full">
          {socialItems
            .filter((item) => item.name != "github")
            .map((item) => (
              <li className="grow w-full flex justify-center" key={item.name}>
                <a href={item.link} target="_blank">
                  {item.icon}
                </a>
              </li>
            ))}
        </ul>
      </footer>
    )}
  </>
);

export default Footer;
