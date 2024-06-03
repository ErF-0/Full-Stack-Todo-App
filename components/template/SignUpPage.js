import { useSession } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import Loader from "@/components/module/Loader";
// toast
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SignUpPage = () => {
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
  const signUpHandler = async () => {
    setLoader(true);
    const res = await fetch("/api/auth/signup", {
      method: "POST",
      body: JSON.stringify(form),
      headers: { "Content-Type": "application/json" },
    });
    const data = await res.json();
    if (data.status === "success") {
      toast.success(data.message);
      router.push("/login");
    } else {
      toast.error(data.message);
    }
    setLoader(false);
  };
  useEffect(() => {
    if (status === "authenticated") window.location.href = "/";
  }, [status]);
  return (
    <>
      <div className="signin-form">
        <h3>Registration Form</h3>
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
        {loader ? (
          <Loader />
        ) : (
          <button onClick={signUpHandler}>Register</button>
        )}

        <div>
          <p> Have an account?</p>

          <Link href="/login">Sign in</Link>
        </div>
      </div>
      <ToastContainer />
    </>
  );
};

export default SignUpPage;
