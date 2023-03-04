import useFetcher from "@/lib/fetcher";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Author, Errors, Spinner } from "./_child";

const Section2 = () => {
  const { data, isLoading, error } = useFetcher("/api/posts");
  if (isLoading) return <Spinner />;
  if(error) return <Errors />

  return (
    <section className="container mx-auto md:px-20  py-10 ">
      <h1 className="text-4xl font-bold pb-12 text-left">Latest</h1>
      <div className="mx-auto sm:px-0 grid gap-12 md:grid-cols-2 lg:grid-cols-3">
        {data.map((post, index) => (
          <Post
            key={index}
            imageUrl={post? post.img : ''}
            category={post.category}
            published={post.published}
            title={post.title}
            subtitle={post.subtitle}
            author={post.author}
            id={post.id}
          />
        ))}
      </div>
    </section>
  );
};

export default Section2;

const Post = ({ imageUrl, category, published, title, subtitle, author,id }) => {
  return (
    <div className="item flex flex-col items-center">
      <div className="images">
        <Link href={`/posts/${id}`}>
          <Image
            src={imageUrl}
            alt="image-one"
            width={400}
            height={250}
            className="rounded mb-5"
          />
        </Link>
      </div>
      <div className="info px-10 sm:px-0">
        <div className="cat">
          <Link href={`/posts/${id}`} className="text-orange-600 hover:text-orange-800 ">
            {category}
          </Link>
          <Link href={`/posts/${id}`} className="text-gray-600 hover:text-gray-800 ">
            {published}
          </Link>
        </div>
        <div className="title">
          <Link
            href={`/posts/${id}`}
            className="text-sm md:text-2xl font-bold text-gray-800 hover:text-gray-600"
          >
            {title}
          </Link>
        </div>
        <p className="text-gray-500 py-3">{subtitle}</p>
        <Author {...author} />
      </div>
    </div>
  );
};
