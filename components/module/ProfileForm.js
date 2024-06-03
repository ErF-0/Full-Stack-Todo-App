import { useState } from "react";
import Loader from "@/components/module/Loader";
import { useRouter } from "next/router";
import { toast } from "react-toastify";

const ProfileForm = ({ form, setForm }) => {
  const router = useRouter();
  const [loader, setLoader] = useState(false);

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };
  const submitHandler = async () => {
    setLoader(true);

    const res = await fetch("/api/profile", {
      method: "POST",
      body: JSON.stringify(form),
      headers: { "Content-Type": "application/json" },
    });
    const data = await res.json();
    if (data.status === "success") {
      setLoader(false);
      toast.success(data.message);
      router.reload();
    }
  };
  return (
    <div className="profile-form__input">
      <div>
        <label htmlFor="name">Name :</label>
        <input
          value={form.name}
          onChange={changeHandler}
          name="name"
          type="text"
        />
      </div>
      <div>
        <label htmlFor="lastName">Last Name :</label>
        <input
          value={form.lastName}
          onChange={changeHandler}
          name="lastName"
          type="text"
        />
      </div>
      <div>
        <label htmlFor="password">Password :</label>
        <input
          value={form.password}
          onChange={changeHandler}
          name="password"
          type="password"
        />
      </div>

      {loader ? <Loader /> : <button onClick={submitHandler}>Submit</button>}
    </div>
  );
};

export default ProfileForm;
