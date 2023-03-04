import Link from "next/link";
import { ImFacebook, ImGithub, ImLinkedin, ImYoutube } from "react-icons/im";

const Header = () => {
  return (
    <header className="bg-gray-50">
      <div className="xl:container gap-5 sm:gap-0 xl:mx-auto flex flex-col sm:flex-row items-center justify-center sm:justify-between text-center py-3 ">
        <div className="md:flex-none w-96 order-2 sm:order-1 ">
          <input className="input-text" type="text" placeholder="Search..." />
        </div>
        <div className="shrink w-80 sm:order-2">
          <Link href={"/"} className="text-3xl font-bold uppercase">
            Design
          </Link>
        </div>
        <div className="w-96 order-3 flex justify-center">
          <div className="flex gap-6">
            <Link href="https://web.facebook.com/CodeDevOption" target="_blank">
              <ImFacebook className="text-blue-500" />
            </Link>
            <Link href="https://github.com/CodeDevOption" target="_blank">
              <ImGithub className="text-gray-800" />
            </Link>
            <Link href="https://www.youtube.com/@codedevoption" target="_blank">
              <ImYoutube className="text-red-500" />
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
