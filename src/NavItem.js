import { Link } from "react-router-dom";

const NavItem = ({ items }) => {
  return (
    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
      {items.map((item) => (
        <li className="nav-item" key={item.id}>
          <Link className="nav-link" to={item.link}>
            {item.name}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default NavItem;
