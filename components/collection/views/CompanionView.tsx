import hljs from "highlight.js";
import { centerImage } from "lib/manipulate-html";
import Image from "next/image";
import GithubIcon from "public/icones/social/github.svg";
import { useEffect } from "react";
import ICompanion from "utils/schema/data/companion.interface";
import { ProviderType } from "utils/schema/provider.interface";
import ElementFactory from "../elements";

const CompanionView = ({ provider }: { provider: ProviderType }) => {
  const activities = (provider.data as ICompanion).reference;
  useEffect(() => {
    hljs.highlightAll();
    centerImage();
  }, []);
  return (
    <section>
      <section className="mb-0 flex flex-col items-center justify-center rounded-none">
        <section className="profile-picture relative my-4 w-44">
          <Image
            src={`https://github.com/${
              (provider?.data as ICompanion).githubID
            }.png`}
            width="176"
            height="176"
            alt={(provider?.data as ICompanion).githubID}
          />
          <a
            className="btn-primary relative"
            href={`https://github.com/${
              (provider?.data as ICompanion).githubID
            }`}
          >
            <GithubIcon className="icon w-8" />
          </a>
        </section>
        <h2 className="card-title justify-center">
          {(provider?.data as ICompanion).name}
        </h2>
        <p className="card-subtitle mb-2 text-center">
          {(provider?.data as ICompanion).position}
        </p>
      </section>
      <article
        className="non-important m-1 mt-0 rounded-t-none p-1 text-center"
        dangerouslySetInnerHTML={{ __html: provider?.content as string }}
      ></article>
      <ul
        className="m-0 mt-5 flex w-full flex-col 
      flex-wrap items-center justify-center rounded-md p-4"
      >
        {activities.map((data) => (
          <ElementFactory data={data} key={data.slug} />
        ))}
      </ul>
    </section>
  );
};

export default CompanionView;
