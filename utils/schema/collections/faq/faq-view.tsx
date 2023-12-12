"use client";
import hljs from "highlight.js";
import { centerImage } from "lib/manipulate-html";
import { useEffect } from "react";
import { ItemType } from "../view-type";

const FaqView = ({ item }: { item: ItemType }) => {
  useEffect(() => {
    hljs.highlightAll();
    centerImage();
  }, []);
  return (
    <article
      dangerouslySetInnerHTML={{ __html: item?.content as string }}
    ></article>
  );
};

export default FaqView;
