import Sidebar, {SidebarItem} from "@/demo/Sidebar.jsx";
import {BellIcon, DashboardIcon, HamburgerMenuIcon, SunIcon,} from "@radix-ui/react-icons";
import {Outlet} from "react-router-dom";

export function Appli() {
    return (
        <div className='dark bg-gray-900/90 home bg-blend-multiply min-w-full min-h-svh flex flex-row'>
            <Sidebar>
                <SidebarItem text="Dashboard" icon={<DashboardIcon className="h-6 w-6 hover:muted"/>} path={'dashboard'}/>
                <SidebarItem text="Match" icon={<BellIcon className="h-6 w-6 hover:muted"/>} path={'matchreport'}/>
                <SidebarItem text="Maps" icon={<SunIcon className="h-6 w-6 hover:muted"/>} path={'maps'}/>
                <SidebarItem text="Scrims" icon={<HamburgerMenuIcon className="h-6 w-6 hover:muted"/>} path={'scrimset'}/>
            </Sidebar>
            {console.log("test"+Sidebar.context)}
            {/*{Sidebar.expanded ? <Outlet /> : <div className="flex-1 flex flex-col items-center justify-center text-white">Select a page</div>}*/}
            <Outlet />
        </div>
    )
}