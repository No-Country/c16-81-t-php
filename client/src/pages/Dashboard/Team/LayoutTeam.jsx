import { NavLink, Outlet } from "react-router-dom";
import { dashboardTabs } from "../../../data.js";


const LayoutTeam = () => {
  return (
    <div>
      <nav className="py-6 px-10 bg-activePurple rounded-lg">
        <ul
          id="header-inner-tabs"
          className={`w-full flex gap-x-6 overflow-x-auto`}
        >
          {dashboardTabs[2].childrens.map((childrenTab, index) => (
            <li key={index}>
              <NavLink
                to={childrenTab.route}
                className={({ isActive }) =>
                  [
                    isActive ? "underline font-extrabold" : "font-bold", 
                    "text-card text-2xl",
                  ].join(" ")
                }
              >
                {childrenTab.title}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
      <br />
      <Outlet />
    </div>
  );
};

export default LayoutTeam;
