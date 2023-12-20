"use client";
import { getPersianLongDate } from "lib/persian-long-date";
import hljs from "highlight.js";
import { useEffect } from "react";
import { centerImage } from "lib/manipulate-html";
import IChallengeData from "./challenge-data";
import { ProviderType } from "../view-type";

const ChallengeView = ({ provider }: { provider: ProviderType }) => {
  useEffect(() => {
    hljs.highlightAll();
    centerImage();
  }, []);
  return (
    <section>
      <h1 className="mb-0">{(provider.data as IChallengeData).title}</h1>
      <h5 className="card-subtitle mt-0 mb-2">
        {(provider.data as IChallengeData).score}
      </h5>
      <section className="non-important mt-10 mb-20 flex flex-row p-0">
        <section className="w-1/2">
          <h5>زمان</h5>
          <p className="my-0">
            {getPersianLongDate((provider.data as IChallengeData).date)}
          </p>
          <p className="my-0">
            ساعت {(provider.data as IChallengeData).date.split(" ")[1]}
          </p>
        </section>
      </section>
      <article
        dangerouslySetInnerHTML={{ __html: provider?.content as string }}
      ></article>{" "}
    </section>
  );
};

export default ChallengeView;
