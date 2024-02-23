import styles from "../../style";
import { dashboardTabs } from "../../data";
import { NavLink, Outlet } from "react-router-dom";

export default function Dashboard() {
  const { boxWidth, paddingX, flexStart } = styles;

  return (
    <div className={`${boxWidth} py-10 ${paddingX}`}>
      <div
        className={`min-h-[80vh] bg-card rounded-xl py-6 px-5 ${flexStart} gap-3 `}
      >
        <ul
          id="tabs-list"
          className="min-h-[80vh] max-h-[80vh] overflow-y-auto w-1/4 bg-greyPurple monse text-card bg-opacity-40 px-2 py-10 flex flex-col gap-2 rounded-lg"
        >
          {dashboardTabs.map((tab, index) => (
            <li key={index}>
              <NavLink
                to={tab.route}
                className={({ isActive }) =>
                  [
                    isActive ? "bg-activePurple" : "bg-greyPurple", 
                    "px-1 py-5 rounded-md flex gap-2 items-center justify-center",
                  ].join(" ")
                }
              >
                <object data={tab.icon} width="25" height="25"></object>
                <span className="text-xl font-bold">{tab.title}</span>
              </NavLink>
            </li>
          ))}
        </ul>
        <div id="tabs-content" className="min-h-[80vh] w-full p-4 bg-greyPurple bg-opacity-40 rounded-lg">
          <Outlet/>
        </div>
      </div>
    </div>
  );
}
