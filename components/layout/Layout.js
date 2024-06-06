import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { FiLogOut } from "react-icons/fi";
import { ToastContainer } from "react-toastify";
import Sidebar from "@/components/module/Sidebar";
import MobileNavigation from "@/components/module/MobileNavigation";

const Layout = ({ children }) => {
  const { status } = useSession();
  const logOutHandler = () => {
    signOut();
  };
  return (
    <div className="container">
      <header>
        <h1>
          <Link href="/">Next Todo App</Link>
        </h1>
        {status === "authenticated" ? (
          <button onClick={logOutHandler}>
            Logout <FiLogOut />
          </button>
        ) : null}
      </header>
      <main className="container--main">
        <aside className="sidebar">
          <Sidebar />
        </aside>
        <section>{children}</section>
      </main>
      {/* mobile navigation */}
      <div>
        <div className="mobile-container">
          <MobileNavigation />
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Layout;
