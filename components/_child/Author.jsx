import Image from "next/image";
import Link from "next/link";

const Author = ({ img, designation, name }) => {
  return (
    <div className="author flex py-5">
      <Image
        src={img ? img : ""}
        alt="author"
        width={50}
        height={50}
        className="rounded-full"
      />
      <div className="flex flex-col justify-center px-4">
        <Link
          href="/"
          className="text-md font-bold text-gray-800 hover:text-gray-600"
        >
          {name}
        </Link>
        <span className="text-sm text-gray-500">{designation}</span>
      </div>
    </div>
  );
};

export default Author;
