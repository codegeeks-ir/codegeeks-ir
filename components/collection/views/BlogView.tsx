import PostAuthor from "components/PostAuthor";
import hljs from "highlight.js";
import { centerImage } from "lib/manipulate-html";
import { useEffect } from "react";
import IBlog from "utils/schema/data/blog.interface";
import { ProviderType } from "utils/schema/provider.interface";

const BlogView = ({ provider }: { provider: ProviderType }) => {
  const companion = (provider.data as IBlog).reference;
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
        name={companion ? companion.name : ""}
        githubID={companion ? companion.githubID : ""}
      />
    </section>
  );
};

export default BlogView;
