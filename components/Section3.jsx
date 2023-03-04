import useFetcher from "@/lib/fetcher";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Author, Errors, Spinner } from "./_child";
const Section3 = () => {
  const { data, error, isLoading } = useFetcher("/api/popular");

  if (isLoading) return <Spinner />;
  if (error) return <Errors />;

  return (
    <section className="container mx-auto md:px-20  py-16">
      <h1 className="text-4xl font-bold pb-12 text-left">Most Popular</h1>
      <Swiper slidesPerView={2} spaceBetween={100}>
        {data.map((post, index) => (
          <SwiperSlide key={index}>
            <Post {...post} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Section3;

const Post = ({ subtitle, title, img, author, category, published,id }) => {
  return (
    <div className="grid">
      <div className="images">
        <Link href={`/posts/${id}`}>
          <Image
            src={img}
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
            className="text-3xl md:text-4xl font-bold text-gray-800 hover:text-gray-600"
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
