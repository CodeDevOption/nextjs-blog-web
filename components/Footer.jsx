import Link from "next/link";
import React from "react";
import { ImFacebook, ImGithub, ImYoutube } from "react-icons/im";
import { NewsLetter } from "./_child";

const bg = {
  background: "url('/images/footer.png') no-repeat",
  backgroundPosition: "bottom left",
};

const Footer = () => {
  return (
    <footer className="bg-gray-50" style={bg}>
      <NewsLetter />
      <div className="container mx-auto flex justify-center py-12">
        <div className="py-5">
          <div className="flex gap-6 justify-center">
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
          <p className="py-5 text-gray-400">
            Copyright &copy; 2023 All Right Reserved |{" "}
            <Link href={"mailto:codedevoption@gmail.com"}>@CodeDevOption</Link>
          </p>
          <p className="text-gray-400 text-center">Terms & Conditions</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
