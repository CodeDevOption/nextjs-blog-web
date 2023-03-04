import { Header, Footer } from "@/components/";
import Head from "next/head";

const Format = ({ children }) => {
  return (
    <>
      <Head>
        <title>Blog</title>
      </Head>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Format;
