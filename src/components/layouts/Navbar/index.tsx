import Head from "next/head";
import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <>
      <Head>
        <meta name="description" content="A simple Next.js application" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div className={`${styles.navbar} sticky top-0 shadow-sm`}>
        <div>Navbar</div>
      </div>
    </>
  );
};

export default Navbar;
