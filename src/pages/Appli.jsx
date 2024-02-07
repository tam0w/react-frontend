import Sidebar, {SidebarItem} from "@/demo/Sidebar.jsx";
import {BellIcon, DashboardIcon, DoubleArrowLeftIcon, HamburgerMenuIcon, SunIcon,} from "@radix-ui/react-icons";

export function Appli() {
    return (
        <div className='dark bg-gray-900/90 home bg-blend-multiply min-w-full min-h-svh'>
            <Sidebar>
                <SidebarItem text="Dashboard" icon={<DashboardIcon className="h-6 w-6 hover:muted"/>} />
                <SidebarItem text="Test1" icon={<BellIcon className="h-6 w-6 hover:muted"/>} />
                <SidebarItem text="Test1" icon={<SunIcon className="h-6 w-6 hover:muted"/>} />
                <SidebarItem text="Test1" icon={<HamburgerMenuIcon className="h-6 w-6 hover:muted"/>} />
            </Sidebar>
        </div>
    )
}