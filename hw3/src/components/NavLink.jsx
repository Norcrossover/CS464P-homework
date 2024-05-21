import { Link } from "react-router-dom";

const NavLink = ({ link, title }) => (
  <li>
    <Link
      to={`/${link}`}
      className="text-2xl no-underline text-slate-200 hover:text-cyan-400"
    >
      {title}
    </Link>
  </li>
);

export default NavLink;
