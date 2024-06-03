import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { signIn, useSession } from "next-auth/react";
import Link from "next/link";
import Loader from "@/components/module/Loader";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const LoginPage = () => {
  const router = useRouter();
  const { status } = useSession();
  const [loader, setLoader] = useState(false);
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const changeHandler = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };
  const loginHandler = async () => {
    setLoader(true);
    const res = await signIn("credentials", {
      email: form.email,
      password: form.password,
      redirect: false,
    });
    if (!res.error) {
      toast.success("You logged in successfully");
      router.push("/");
    } else {
      toast.error("Wrong user name or password!");
    }
    setLoader(false);
  };
  useEffect(() => {
    if (status === "authenticated") window.location.href = "/";
  }, [status]);
  return (
    <>
      <div className="signin-form">
        <h3>Login Form</h3>
        <input
          type="text"
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={changeHandler}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={form.password}
          onChange={changeHandler}
        />
        {loader ? <Loader /> : <button onClick={loginHandler}>Login</button>}

        <div>
          <p>Create an account?</p>
          <Link href="/signup">Sign up</Link>
        </div>
      </div>
      <ToastContainer />
    </>
  );
};

export default LoginPage;
