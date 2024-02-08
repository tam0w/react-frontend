import Sidebar, {SidebarItem} from "@/demo/Sidebar.jsx";
import {BellIcon, DashboardIcon, DoubleArrowLeftIcon, HamburgerMenuIcon, SunIcon,} from "@radix-ui/react-icons";
import {Outlet} from "react-router-dom";

export function Appli() {
    return (
        <div className='dark bg-gray-900/90 home bg-blend-multiply min-w-full min-h-svh flex flex-row'>
            <Sidebar>
                <SidebarItem text="Dashboard" icon={<DashboardIcon className="h-6 w-6 hover:muted"/>} path={'test'}/>
                <SidebarItem text="Back" icon={<BellIcon className="h-6 w-6 hover:muted"/>} path={'test2'}/>
                <SidebarItem text="Summary" icon={<SunIcon className="h-6 w-6 hover:muted"/>} path={'test3'}/>
                <SidebarItem text="Summary" icon={<HamburgerMenuIcon className="h-6 w-6 hover:muted"/>} path={'test4'}/>
            </Sidebar>
            <Outlet />

        </div>
    )
}