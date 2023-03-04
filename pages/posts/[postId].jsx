import { Author, Errors, Related, Spinner } from "@/components/_child";
import Format from "@/layout/format";
import useFetcher from "@/lib/fetcher";
import getPost from "@/lib/helper";
import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";
import { SWRConfig } from "swr";

const Page = ({ fallback }) => {
  const router = useRouter();
  const { postId } = router.query;
  const { data, isLoading, error } = useFetcher(`/api/posts/${postId}`);

  if (isLoading) return <Spinner />;
  if (error) return <Errors />;

  return (
    <SWRConfig value={fallback}>
      <Article {...data} />
    </SWRConfig>
  );
};

const Article = ({ title, subtitle, img, author, description }) => {
  return (
    <Format>
      <section className="container mx-auto md:px-2 py-16 w-1/2">
        <div className="flex justify-center">
          <Author {...author} />
        </div>
        <div className="post py-10">
          <h1 className="font-bold text-4xl text-center mb-5">{title}</h1>
          <p className="text-gray-500 text-xl text-center">{subtitle}</p>
          <div className="py-10">
            <Image src={img} alt={"post"} width={900} height={600} />
          </div>
          <div className="content text-gray-600 text-lg flex flex-col gap-4">
            {description}
          </div>
        </div>
        <Related />
      </section>
    </Format>
  );
};

export default Page;

export const getStaticProps = async ({ params }) => {
  const { postId } = params;
  const post = await getPost(postId);
  console.log(post);
  return {
    props: post,
  };
};

export const getStaticPaths = async () => {
  const post = await getPost();
  const paths = post.map((post) => ({
    params: { postId: post.id.toString() },
  }));

  return {
    paths,
    fallback: false,
  };
};
