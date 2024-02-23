"use client";
import PostAuthor from "components/PostAuthor";
import hljs from "highlight.js";
import { centerImage } from "lib/manipulate-html";
import { useEffect } from "react";
import ICompanionData from "../companion/companion-data";
import { ProviderType } from "../view-type";

const BlogView = ({ provider }: { provider: ProviderType }) => {
  useEffect(() => {
    hljs.highlightAll();
    centerImage();
  }, []);
  return (
    <section>
      <article
        dangerouslySetInnerHTML={{ __html: provider?.content as string }}
      ></article>
      <PostAuthor
        name={(provider.data.reference as ICompanionData).name}
        githubID={(provider.data.reference as ICompanionData).githubID}
      />
    </section>
  );
};

export default BlogView;
