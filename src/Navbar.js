import logo from "./logo.svg";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <Link className="navbar-brand" to="/">
          <img src={logo} alt="" width="30" height="24" />
          Todo
        </Link>
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <Link className="nav-link" to="/">
              Create
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/">
              Archive
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
