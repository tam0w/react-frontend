import Sidebar, {SidebarItem} from "@/demo/Sidebar.jsx";
import {
    ActivityLogIcon, BarChartIcon,
    BellIcon,
    CalendarIcon, CardStackIcon, CardStackPlusIcon, ClipboardIcon, CopyIcon,
    DashboardIcon, FilePlusIcon, GearIcon,
    HamburgerMenuIcon, ImageIcon, LayersIcon, MagnifyingGlassIcon, PieChartIcon, ReaderIcon,
    SunIcon, ThickArrowDownIcon, TrackNextIcon,
} from "@radix-ui/react-icons";
import {Outlet} from "react-router-dom";
import {PieChart} from "recharts";

export function Appli() {
    return (
        <div className='dark bg-gray-900/90 home bg-blend-multiply min-w-full min-h-svh flex flex-row'>
            <Sidebar>
                <SidebarItem text="Dashboard" icon={<HamburgerMenuIcon className="h-6 w-6 hover:muted"/>} path={'dashboard'}/>
                <SidebarItem text="Trends" icon={<BarChartIcon className="h-6 w-6 hover:muted"/>} path={'trends'}/>
                <SidebarItem text="Match" icon={<ClipboardIcon className="h-6 w-6 hover:muted"/>} path={'matchreport'}/>
                <SidebarItem text="Maps" icon={<LayersIcon className="h-6 w-6 hover:muted"/>} path={'maps'}/>
                <SidebarItem text="Aggregate" icon={<PieChartIcon className="h-6 w-6 hover:muted"/>} path={'scrimset'}/>
                <SidebarItem text="Query" icon={<MagnifyingGlassIcon className="h-6 w-6 hover:muted"/>} path={'query'}/>
            </Sidebar>
            {console.log("test"+Sidebar.context)}
            {/*{Sidebar.expanded ? <Outlet /> : <div className="flex-1 flex flex-col items-center justify-center text-white">Select a page</div>}*/}
            <Outlet />
        </div>
    )
}