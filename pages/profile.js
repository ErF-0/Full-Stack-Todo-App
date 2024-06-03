import ProfilePage from "@/components/template/ProfilePage";
import { getSession } from "next-auth/react";

const Profile = () => {
  return <ProfilePage />;
};

export default Profile;
export const getServerSideProps = async ({ req }) => {
  const session = await getSession({ req });
  if (!session) {
    return {
      redirect: { destination: "/login", permanent: false },
    };
  }
  return { props: {} };
};
