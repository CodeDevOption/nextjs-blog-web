import useFetcher from "@/lib/fetcher";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Author, Errors, Spinner } from "./_child";

const Section4 = () => {
  const { data, isLoading, error } = useFetcher("/api/posts");

  if (isLoading) return <Spinner />;
  if (error) return <Errors />;

  return (
    <section className="container mx-auto grid md:grid-cols-2 gap-10 md:px-20  py-16">
      <div>
        <h1 className="text-3xl font-bold pb-12 text-left">Business</h1>
        <div className="flex flex-col gap-6">
          <Card {...data[1]} />
          <Card {...data[2]} />
          <Card {...data[3]} />
        </div>
      </div>
      <div>
        <h1 className="text-3xl font-bold pb-12 text-left">Travel</h1>
        <div className="flex flex-col gap-6">
          <Card {...data[4]} />
          <Card {...data[5]} />
        </div>
      </div>
    </section>
  );
};

export default Section4;

const Card = ({ title, category, published, img, author, id }) => {
  return (
    <div className="flex gap-5">
      <div className="image flex flex-col items-start">
        <Link href={`/posts/${id}`}>
          <Image
            src={img ? img : ""}
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
