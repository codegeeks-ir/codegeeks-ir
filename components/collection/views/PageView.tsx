import hljs from "highlight.js";
import { centerImage } from "lib/manipulate-html";
import { useEffect } from "react";
import { ProviderType } from "utils/schema/provider.interface";

const PageView = ({ provider }: { provider: ProviderType }) => {
  useEffect(() => {
    hljs.highlightAll();
    centerImage();
  }, []);
  return (
    <article
      dangerouslySetInnerHTML={{ __html: provider?.content as string }}
    ></article>
  );
};

export default PageView;
