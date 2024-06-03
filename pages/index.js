import HomePage from "@/components/template/HomePage";
import { getSession } from "next-auth/react";
const Index = () => {
  return <HomePage />;
};

export default Index;
export const getServerSideProps = async ({ req }) => {
  const session = await getSession({ req });
  if (!session) {
    return {
      redirect: { destination: "/login", permanent: false },
    };
  }
  return {
    props: {},
  };
};
