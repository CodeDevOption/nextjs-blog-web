import useFetcher from "@/lib/fetcher";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Author, Errors, Spinner } from ".";

const Related = () => {
  const { data, isLoading, error } = useFetcher("/api/posts");

  if (isLoading) return <Spinner />;
  if (error) return <Errors />;
  return (
    <section className="pt-20">
      <h1 className="text-3xl font-bold pb-12 text-left">Related</h1>
      <div className="flex flex-col gap-10">
        <Card {...data[1]} />
        <Card {...data[2]} />
        <Card {...data[3]} />
      </div>
    </section>
  );
};

export default Related;

const Card = ({ title, category, published, img, author, id }) => {
  return (
    <div className="flex gap-5">
      <div className="image flex flex-col items-start">
        <Link href={"/"}>
          <Image
            src={img}
            className="rounded"
            alt="post-image"
            width={300}
            height={250}
          />
        </Link>
      </div>

      <div className="flex flex-col justify-center">
        <div className="cat">
          <Link
            href={`/posts/${id}`}
            className="text-orange-600 hover:text-orange-800 "
          >
            {category}
          </Link>
          <Link
            href={`/posts/${id}`}
            className="text-gray-600 hover:text-gray-800 "
          >
            {published}
          </Link>
        </div>
        <div className="title">
          <Link
            href={`/posts/${id}`}
            className="text-md font-bold text-gray-800 hover:text-gray-600"
          >
            {title}
          </Link>
        </div>
        <Author {...author} />
      </div>
    </div>
  );
};
