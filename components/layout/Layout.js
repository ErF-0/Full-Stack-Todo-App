import Link from "next/link";
import { signOut, useSession } from "next-auth/react";
//icons
import { VscListSelection } from "react-icons/vsc";
import { BiMessageSquareAdd } from "react-icons/bi";
import { RxDashboard } from "react-icons/rx";
import { FiLogOut } from "react-icons/fi";
import { ToastContainer } from "react-toastify";

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
        <aside>
          <p>Welcome 👋</p>
          <div>
            <ul>
              <li>
                <VscListSelection />
                <Link href="/">Todos</Link>
              </li>
              <li>
                <BiMessageSquareAdd />
                <Link href="/add-todo">Add Todo</Link>
              </li>
              <li>
                <RxDashboard />
                <Link href="/profile">Profile</Link>
              </li>
            </ul>
            <footer>
              <p>
                Made with 💗 by{" "}
                <a
                  href="https://github.com/ErF-0"
                  target="_blank"
                  rel="noreferrer"
                >
                  ERFaN
                </a>{" "}
              </p>
            </footer>
          </div>
        </aside>
        <section>{children}</section>
      </main>
      <ToastContainer />
    </div>
  );
};

export default Layout;
