import logo from "./logo.svg";
import { Link } from "react-router-dom";
import NavItem from "./NavItem";
import { useState } from "react";

const Navbar = () => {
  const [items, setItems] = useState([
    { name: "Home", link: "/", id: 1 },
    { name: "Create", link: "/create", id: 2 },
    { name: "Archive", link: "/archive", id: 3 },
  ]);
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white sticky-top shadow-sm">
      <div className="container">
        <Link className="navbar-brand" to="/">
          <img src={logo} alt="" width="30" height="24" />
          Todo
        </Link>
        <NavItem items={items} />
      </div>
    </nav>
  );
};

export default Navbar;
