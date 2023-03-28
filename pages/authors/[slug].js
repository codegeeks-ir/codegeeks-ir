import PostItem from "components/collection/item/PostItem";
import DefaultLayout from "layouts/DefaultLayout";
import PageLayout from "layouts/PageLayout";
import { getItem, getPropCollection, getSlugs } from "lib/get-collection";
import Head from "next/head";
import Image from "next/image";
import GithubIcon from "public/icones/social/github.svg";

export default function AuthorPage({ data, myPosts }) {
  return (
    <>
      <Head>
        <title>{data.name}</title>
        <meta
          name="description"
          key="desc"
          content={`${data.name} - انجمن کامپیوتر صنعتی ارومیه`}
        />
      </Head>
      <div className="flex flex-col items-center justify-center mb-0 rounded-none">
        <div className="profile-picture relative w-44 my-4">
          <Image
            src={`https://github.com/${data.githubID}.png`}
            width="176"
            height="176"
            alt={data.githubID}
          />
          <a
            className="github-icon relative"
            href={`https://github.com/${data.githubID}`}
          >
            <GithubIcon className="icon w-8" />
          </a>
        </div>
        <h2 className="card-title justify-center">{data.name}</h2>
        <p className="card-subtitle text-center mb-2">{data.position}</p>
      </div>
      <div
        className="non-important text-center rounded-t-none m-1 mt-0 p-1"
        dangerouslySetInnerHTML={{ __html: data.content }}
      ></div>
      <ul className="flex flex-col items-center justify-center w-full m-0 mt-5">
        {myPosts.map((post) => (
          <PostItem item={post} key={post.slug} />
        ))}
      </ul>
    </>
  );
}

AuthorPage.getLayout = function getLayout(content) {
  return (
    <DefaultLayout>
      <PageLayout>{content}</PageLayout>
    </DefaultLayout>
  );
};

export async function getStaticProps({ params }) {
  const data = await getItem(`${params.slug}.md`, "collections/companions/bios");
  const allPosts = await getPropCollection("collections/blog/posts/", "blog");
  const myPosts = allPosts.filter((post) => post.githubID == data.githubID);
  return {
    props: {
      data,
      myPosts,
    },
  };
}

export async function getStaticPaths() {
  const paths = getSlugs("collections/companions/bios");
  return { paths, fallback: false };
}
