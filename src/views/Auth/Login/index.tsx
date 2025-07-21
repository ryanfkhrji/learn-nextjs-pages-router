import { useRouter } from "next/router";
import Link from "next/link";
import styles from "./Login.module.scss";

const LoginViews = () => {
  // handle login dengan useRouter untuk navigasi setelah login dan pengecekan apakah user sudah login atau belum

  const { push } = useRouter();

  const handleLogin = () => {
    push("/product");
  };

  return (
    <div className={styles.login}>
      <h1 className="text-3xl text-indigo-400 font-semibold">Login Page</h1>
      <p>Please enter your credentials to log in.</p>
      {/* Add login form here */}
      <button onClick={() => handleLogin()}>Login</button>

      <p>
        Don't have an account? <Link href="/auth/register">Register</Link>
      </p>
    </div>
  );
};

export default LoginViews;
