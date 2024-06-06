import Link from "next/link";

//icons
import { VscListSelection } from "react-icons/vsc";
import { BiMessageSquareAdd } from "react-icons/bi";
import { RxDashboard } from "react-icons/rx";
const Sidebar = () => {
  return (
    <>
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
            <a href="https://github.com/ErF-0" target="_blank" rel="noreferrer">
              ERFaN
            </a>{" "}
          </p>
        </footer>
      </div>
    </>
  );
};

export default Sidebar;
