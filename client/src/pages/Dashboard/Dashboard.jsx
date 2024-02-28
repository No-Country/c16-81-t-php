import styles from "../../style";
import { dashboardTabs } from "../../data";
import { NavLink, Outlet, useLocation } from "react-router-dom";
import { dashboardPreview } from "../../assets";

export default function Dashboard() {
  const { boxWidth, paddingX, flexStart } = styles;
  const location = useLocation();
  const isChildRoute = location.pathname !== '/dashboard';

  return (
    <div className={`${boxWidth} py-10 ${paddingX}`}>

      <div className={`min-h-[80vh] bg-card rounded-xl py-6 px-5 ${flexStart} gap-3 flex-col ss:flex-row `}>
        <ul
          id="tabs-list"
          className="ss:min-h-[80vh] ss:max-h-[80vh] overflow-y-auto ss:w-1/4 w-full bg-greyPurple font-monse text-card bg-opacity-40 px-2 py-2 ss:pb-10 ss:pt-4 flex flex-row ss:flex-col gap-2 rounded-lg"
        >
          {dashboardTabs.map((tab, index) => (
            <li key={index}>
              <NavLink
                to={tab.route}
                className={({ isActive }) =>
                  [
                    isActive ? "bg-activePurple" : "bg-greyPurple", 
                    "px-1 py-5 rounded-md flex gap-2 w-[40px] h-[40px] ss:w-auto ss:h-auto items-center justify-center",
                  ].join(" ")
                }
              >
                <span style={{ backgroundImage: `url(${tab.icon})`, width: '25px', height: '25px', backgroundSize: 'cover' }}></span>
                <span className="text-xl font-bold hidden sm:flex">{tab.title}</span>
              </NavLink>
            </li>
          ))}
        </ul>
        <div id="tabs-content" className="min-h-[80vh] w-full p-4 bg-greyPurple bg-opacity-40 rounded-lg">
          {!isChildRoute && (
            <>
              <h1 className="font-monse font-semibold text-[30px] text-secondary">Dashboard</h1>
              <div className="sm:px-40">
                <img src={dashboardPreview} width={500} height={500} className="object-cover"/>
              </div>
            </>
          )}
          <Outlet/>
        </div>
      </div>
    </div>
  );
}
