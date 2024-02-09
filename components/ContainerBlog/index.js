import Head from "next/head";
import { useContext } from "react";
import DarkModeContext from "../../contexts/darkMode";
import BlogBar from "../BlogBar";

export default function ContainerBlog({ children }) {
  const { dark } = useContext(DarkModeContext);

  return (
    <div className={dark ? "dark" : ""}>
      <Head>
        <title>Laurate S. ロリー</title>
        <meta name="description" content="Let's build something together!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <BlogBar />

      <main className="transition duration-300 ease-in p-3 flex justify-center dark:text-neutral-200 dark:bg-gray-800">
        <div className="lg:w-[60%]">{children}</div>
      </main>
    </div>
  );
}