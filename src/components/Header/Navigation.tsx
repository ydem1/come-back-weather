import cn from "classnames";
import { NavLink } from "react-router-dom";
import { NAVIGATION_LINKS } from "./constants";

export const Navigation = () => (
  <nav>
    <ul className="flex gap-5">
      {NAVIGATION_LINKS.map(({ id, href, label }) => (
        <li key={id}>
          <NavLink
            className={({isActive}) =>
              cn(
                "bg-blue-500 px-5 py-3 text-20 text-white rounded-lg hover:opacity-80",
                { "bg-blue-700 hover:opacity-100": isActive }
              )
            }
            to={href}
          >
            {label}
          </NavLink>
        </li>
      ))}
    </ul>
  </nav>
);
