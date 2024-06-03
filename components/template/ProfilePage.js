import { useEffect, useState } from "react";
import { CgProfile } from "react-icons/cg";

import ProfileData from "@/components/module/ProfileData";
import ProfileForm from "@/components/module/ProfileForm";
const ProfilePage = () => {
  const [form, setForm] = useState({
    name: "",
    lastName: "",
    password: "",
  });
  const [data, setData] = useState(null);
  useEffect(() => {
    fetchProfile();
  }, []);

  const fetchProfile = async () => {
    const res = await fetch("/api/profile");
    const data = await res.json();
    if (data.status === "success" && data.data.name && data.data.lastName)
      setData(data.data);
  };
  return (
    <div className="profile-form">
      <h2>
        <CgProfile />
        Profile
      </h2>
      <div>
        {data ? (
          <ProfileData data={data} />
        ) : (
          <ProfileForm form={form} setForm={setForm} />
        )}
      </div>
    </div>
  );
};

export default ProfilePage;
