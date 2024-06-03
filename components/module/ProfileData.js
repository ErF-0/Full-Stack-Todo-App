import { useState } from "react";
import ProfileForm from "./ProfileForm";

const ProfileData = ({ data }) => {
  const [editData, setEditData] = useState({
    name: data.name,
    lastName: data.lastName,
    password: "",
  });
  const [openEditForm, setOpenEditForm] = useState(false);

  const editHandler = () => {
    setOpenEditForm(true);
  };
  return (
    <div>
      <div className="profile-data">
        <div>
          <span>Name :</span>
          <p>{data.name}</p>
        </div>
        <div>
          <span>Last Name :</span>
          <p>{data.lastName}</p>
        </div>
        <div>
          <span>Email :</span>
          <p>{data.email}</p>
        </div>
      </div>
      {openEditForm ? (
        <ProfileForm form={editData} setForm={setEditData} />
      ) : (
        <button onClick={editHandler}>Edit</button>
      )}
    </div>
  );
};

export default ProfileData;
