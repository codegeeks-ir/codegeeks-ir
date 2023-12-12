"use client";
import PostAuthor from "components/PostAuthor";
import hljs from "highlight.js";
import { centerImage } from "lib/manipulate-html";
import { useEffect } from "react";
import ICompanionData from "../companion/companion-data";
import { ItemType } from "../view-type";

const BlogView = ({ item }: { item: ItemType }) => {
  useEffect(() => {
    hljs.highlightAll();
    centerImage();
  }, []);
  return (
    <>
      <article
        dangerouslySetInnerHTML={{ __html: item?.content as string }}
      ></article>
      <PostAuthor
        name={(item.data.reference as ICompanionData).name}
        githubID={(item.data.reference as ICompanionData).githubID}
      />
    </>
  );
};

export default BlogView;
