import { Outlet } from "react-router-dom";
import NavLink from "../components/NavLink";

export default function Root() {
  return (
    <>
      <nav className="w-full bg-slate-900 sticky top-0 z-20 shadow-lg">
        <ul className="list-none justify-evenly flex p-4">
          <NavLink link="" title="Home" />
          <NavLink link="list" title="List" />
          <NavLink link="population" title="Population" />
          <NavLink link="languages" title="Languages" />
        </ul>
      </nav>
      <Outlet />
    </>
  );
}
