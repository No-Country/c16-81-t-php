import styles from "../../style";
import { dashboardTabs } from "../../data";
import { Link, Outlet } from "react-router-dom";

export default function Dashboard() {
  const { boxWidth, marginY, paddingX, flexStart } = styles;

  return (
    <div className={`${boxWidth} ${marginY} ${paddingX}`}>
      <div
        className={`h-[80vh] bg-card rounded-xl py-6 px-5 ${flexStart} gap-3`}
      >
        <ul
          id="tabs-list"
          className="bg-greyPurple monse text-card bg-opacity-40 h-full overflow-y-auto w-1/4 px-2 py-10 flex flex-col gap-2 rounded-lg"
        >
          {dashboardTabs.map((tab, index) => (
            <li key={index}>
              <Link
                to={tab.route}
                className={`px-1 py-5 rounded-md flex gap-2 items-center justify-center 
              ${index === 0 ? "bg-activePurple" : "bg-greyPurple"} `}
              >
                <object data={tab.icon} width="25" height="25"></object>
                <span className="text-xl font-bold">{tab.title}</span>
              </Link>
            </li>
          ))}
        </ul>
        <div
          id="tabs-content"
          className="p-4 bg-greyPurple bg-opacity-40 h-full w-full rounded-lg"
        >
          <Outlet />
        </div>
      </div>
    </div>
  );
}
