import { NavLink, Outlet } from "react-router-dom";
import { dashboardTabs } from "../../../data.js";


const LayoutTeam = () => {
  return (
    <div>
      <nav className="py-6 px-2 sm:px-10 bg-activePurple rounded-lg">
        <ol className={`w-full flex space-x-1 md:space-x-2 sm:gap-x-6 overflow-x-auto`}>
          {dashboardTabs[2].childrens.map((childrenTab, index) => (
            <li key={index}>
              <div className="flex items-center">
                <svg className="rtl:rotate-180 w-3 h-3 text-secondary mx-1" aria-hidden="true" fill="none" viewBox="0 0 6 10">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4"/>
                </svg>
                <NavLink
                  to={childrenTab.route}
                  className={({ isActive }) =>
                    [
                      isActive ? "underline font-bold" : "font-semibold", 
                      "text-card text-center text-[14px] sm:text-2xl",
                    ].join(" ")
                  }
                >
                  {childrenTab.title}
                </NavLink>
              </div>
            </li>
          ))}
        </ol>
      </nav>
      <br />
      <Outlet />
    </div>
  );
};

export default LayoutTeam;
