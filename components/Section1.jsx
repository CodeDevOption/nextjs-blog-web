import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Author, Errors, Spinner } from "./_child";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import swiperCore, {
  A11y,
  Autoplay,
  Navigation,
  Pagination,
  Scrollbar,
} from "swiper";
import useFetcher from "@/lib/fetcher";

const bg = {
  background: "url('/images/banner.png') no-repeat",
  backgroundPosition: "right",
};

swiperCore.use([Autoplay]);

const Section1 = () => {
  const { data, isLoading, error } = useFetcher("/api/trending");

  if (isLoading) return <Spinner />;
  if (error) return <Errors />;
  return (
    <section className="py-5" style={bg}>
      <div className="container mx-auto md:px-20">
        <h1 className="text-4xl font-bold pb-12 text-center">Trending</h1>
        <Swiper autoplay={{ delay: 2000 }} loop={true} slidesPerView={1}>
          {data.map((post, index) => (
            <SwiperSlide key={index}>
              <Slider
                imageUrl={post ? post.img : ""}
                category={post.category}
                published={post.published}
                title={post.title}
                subtitle={post.subtitle}
                author={post.author}
                id={post.id}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Section1;

const Slider = ({
  imageUrl,
  category,
  published,
  title,
  subtitle,
  author,
  id,
}) => {
  return (
    <div className="grid md:grid-cols-2">
      <div className="image">
        <Link href={`/posts/${id}`}>
          {" "}
          <Image src={imageUrl} alt="image-one" width={500} height={500} />
        </Link>
      </div>
      <div className="info flex flex-col justify-center">
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
            className="text-3xl md:text-5xl font-bold text-gray-800 hover:text-gray-600"
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
