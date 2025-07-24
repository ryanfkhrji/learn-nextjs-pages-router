import Link from "next/link";
import styles from "./Navbar.module.css";
import { signIn, signOut, useSession } from "next-auth/react";

const Navbar = () => {
  const { data }: any = useSession();

  return (
    <>
      <div className={`${styles.navbar} sticky top-0 shadow-sm`}>
        <Link href={"/"}>Navbar</Link>
        <div>
          <Link href={"/profile"} className={styles.username}>{data && data.user.fullname}</Link>
          {data ? <button onClick={() => signOut()}>Sign Out</button> : <button onClick={() => signIn()}>Sign In</button>}
        </div>
      </div>
    </>
  );
};

export default Navbar;
