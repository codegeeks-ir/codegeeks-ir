import hljs from "highlight.js";
import { centerImage } from "lib/manipulate-html";
import { getPersianLongDate } from "lib/persian-long-date";
import { useEffect } from "react";
import IChallenge from "utils/schema/data/challenge.interface";
import { ProviderType } from "utils/schema/provider.interface";

const ChallengeView = ({ provider }: { provider: ProviderType }) => {
  const data = provider.data as IChallenge;
  useEffect(() => {
    hljs.highlightAll();
    centerImage();
  }, []);
  return (
    <section>
      <h1 className="mb-0">{data.title}</h1>
      <h5 className="card-subtitle mt-0 mb-2">{data.score}</h5>
      <section className="non-important mt-10 mb-20 flex flex-row p-0">
        <section className="w-1/2">
          <h5>زمان</h5>
          <p className="my-0">{getPersianLongDate(data.date)}</p>
          <p className="my-0">
            ساعت ${data.date.getHours()}:${data.date.getMinutes()}
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
