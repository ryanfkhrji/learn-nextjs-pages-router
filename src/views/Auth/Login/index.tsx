import { useState } from "react";
import styles from "./Login.module.scss";
import Link from "next/link";
import { useRouter } from "next/router";
import { signIn } from "next-auth/react";
import { redirect } from "next/dist/server/api-utils";

const LoginView = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const { push, query } = useRouter();

  const callbackUrl: any = query.callbackUrl || "/";

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");
    try {
      const res = await signIn("credentials", {
        redirect: false,
        email: e.target.email.value,
        password: e.target.password.value,
        callbackUrl,
      });

      if (!res?.error) {
        setIsLoading(false);
        push(callbackUrl);
      } else {
        setIsLoading(false);
        setError("Email atau password salah");
      }
    } catch (err: any) {
      setIsLoading(false);
      setError("Email atau password salah");
    }
  };

  return (
    <div className={styles.login}>
      <h1 className={styles.login__title}>Login</h1>
      <div className={styles.login__form}>
        <form onSubmit={handleSubmit}>
          <div className={styles.login__form__item}>
            <label htmlFor="email" className={styles.login__form__item__label}>
              Email
            </label>
            <input type="email" id="email" name="email" placeholder="example@gmail.com" required className={styles.login__form__item__input} />
          </div>
          <div className={styles.login__form__item}>
            <label htmlFor="password" className={styles.login__form__item__label}>
              Password
            </label>
            <input type="password" id="password" name="password" placeholder="********" required className={styles.login__form__item__input} />
          </div>
          <button type="submit" className={styles.login__form__item__button}>
            {isLoading ? "Loading..." : "Login"}
          </button>
        </form>
        <button onClick={() => signIn("google", { callbackUrl, redirect: false })} className={styles.login__google}>
          Login with Google
        </button>
      </div>
      {error && <p className={styles.login__error}>{error}</p>}
      <p className={styles.login__title__footer}>
        Belum punya akun?{" "}
        <Link href={"/auth/register"} className={styles.login__title__footer__link}>
          Register
        </Link>
      </p>
    </div>
  );
};

export default LoginView;
