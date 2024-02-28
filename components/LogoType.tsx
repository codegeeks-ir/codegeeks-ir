"use client";
import config from "data/config";
import socialItems from "data/navigation/social-navigation";
import CodegeeksIcon from "public/icones/codegeeks/codegeeks-icon.svg";
import { useMemo } from "react";

const LogoType = () => {
  const github = useMemo(
    () => socialItems.find((item) => item.name == "github"),
    [],
  );
  return (
    <section
      className="flex flex-col items-center mb-2 grow
      border border-slate-400 p-0 rounded-md pt-6 px-4
      animate__animated animate__fadeInUp animate__faster"
    >
      <CodegeeksIcon className="mb-4 w-40 fill-slate-600 md:w-30" />
      <section
        className="flex flex-col w-80 items-center
        p-0 rounded-md border-slate-400 
        "
      >
        <h1 className="m-0 p-0 pt-6 text-center text-slate-600 font-extralight">
          کدخورا
        </h1>
        <p className="m-0 p-0 pb-6 text-center text-sm text-slate-600 ">
          بچه‌های کامپیوتر دانشگاه صنعتی ارومیه
        </p>
        {github && (
          <a
            className="btn-primary flex flex-col items-center justify-center
            w-3/4 h-16 m-0 rounded-b-none border-b-0 order"
            href={github.link}
            target="_blank"
          >
            {github.icon}
            <span className="text-sm">{config.github}</span>
          </a>
        )}
      </section>
    </section>
  );
};

export default LogoType;
