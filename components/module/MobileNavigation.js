import Link from "next/link";

//icons
import { VscListSelection } from "react-icons/vsc";
import { BiMessageSquareAdd } from "react-icons/bi";
import { RxDashboard } from "react-icons/rx";

const MobileNavigation = () => {
  return (
    <div className="mobile-navbar">
      <ul>
        <li>
          <Link href="/">
            <span className="link-icon">
              <VscListSelection />
            </span>
            <span className="link-text">Todos</span>
          </Link>
        </li>
        <li>
          <Link href="/add-todo">
            <span className="link-icon">
              <BiMessageSquareAdd />
            </span>
            <span className="link-text">Add Todo</span>
          </Link>
        </li>
        <li>
          <Link href="/profile">
            <span className="link-icon">
              <RxDashboard />
            </span>
            <span className="link-text">Profile</span>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default MobileNavigation;
