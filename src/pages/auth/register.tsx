import Link from "next/link";

const RegisterPage = () => {
  return (
    <div>
      <h1>Register Page</h1>
      <p>Please enter your credentials to register.</p>
      {/* Add Register form here */}
      <p>Already have an account? <Link href="/auth/login">Login</Link></p>
    </div>
  );
};

export default RegisterPage;
