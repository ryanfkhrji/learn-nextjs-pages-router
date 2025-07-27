import Link from "next/link";
import styles from "./Navbar.module.css";
import { signIn, signOut, useSession } from "next-auth/react";
import Image from "next/image";
import Script from "next/script";

const Navbar = () => {
  const { data }: any = useSession();

  return (
    <>
      <div className={`${styles.navbar} sticky top-0 shadow-sm`}>
        <Link href={"/"}>
          <span id="logo"></span>
        </Link>
        <Script id="script-logo" strategy="lazyOnload">
          {`document.getElementById('logo').innerHTML = 'Navbar'`}
        </Script>
        <div className="flex items-center gap-2">
          {data?.user?.image && <Image src={data.user.image} alt={data.user.fullname} width={32} height={32} className="rounded-full" />}
          {data?.user?.fullname}
          {data ? <button onClick={() => signOut()}>Sign Out</button> : <button onClick={() => signIn()}>Sign In</button>}
        </div>
      </div>
    </>
  );
};

export default Navbar;
