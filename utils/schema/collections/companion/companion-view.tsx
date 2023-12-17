"use client";
import hljs from "highlight.js";
import { centerImage } from "lib/manipulate-html";
import Image from "next/image";
import GithubIcon from "public/icones/social/github.svg";
import { useEffect } from "react";
import ICompanionData from "./companion-data";
import { DataType } from "../data-type";
import { ProviderType } from "../view-type";
import { ElementFactory } from "../element-type";

const CompanionView = ({ provider }: { provider: ProviderType }) => {
  useEffect(() => {
    hljs.highlightAll();
    centerImage();
  }, []);
  return (
    <>
      <div className="mb-0 flex flex-col items-center justify-center rounded-none">
        <div className="profile-picture relative my-4 w-44">
          <Image
            src={`https://github.com/${
              (provider?.data as ICompanionData).githubID
            }.png`}
            width="176"
            height="176"
            alt={(provider?.data as ICompanionData).githubID}
          />
          <a
            className="github-icon relative"
            href={`https://github.com/${
              (provider?.data as ICompanionData).githubID
            }`}
          >
            <GithubIcon className="icon w-8" />
          </a>
        </div>
        <h2 className="card-title justify-center">
          {(provider?.data as ICompanionData).name}
        </h2>
        <p className="card-subtitle mb-2 text-center">
          {(provider?.data as ICompanionData).position}
        </p>
      </div>
      <div
        className="non-important m-1 mt-0 rounded-t-none p-1 text-center"
        dangerouslySetInnerHTML={{ __html: provider?.content as string }}
      ></div>
      <ul
        className="m-0 mt-5 flex w-full flex-col 
      flex-wrap items-center justify-center rounded-md bg-slate-300 p-4"
      >
        {(provider.data.reference as DataType[]).map((data) => (
          <ElementFactory data={data} />
        ))}
      </ul>
    </>
  );
};

export default CompanionView;
