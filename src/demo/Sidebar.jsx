
import {Link} from "react-router-dom";
import{BellIcon,  DashboardIcon, DoubleArrowLeftIcon, HamburgerMenuIcon, SunIcon,} from "@radix-ui/react-icons";

export default function Component() {
  return (
    <div className="flex h-screen">
      <aside className="w-72 bg-muted/50 font text-2xl text-card-foreground border-r-2 border-muted-foreground">
        <div className="h-24 flex items-center space-x-9 justify-center border-muted-foreground">
          <h2 className="font button-text text-3xl">Practistics</h2>
          <DoubleArrowLeftIcon className="h-8 w-8 border-muted-foreground/30 rounded hover:text-blue-300" />
        </div>
        <ul>
          <li className="flex items-center p-6 hover:bg-primary/20 hover:text-blue-100 hover:border-l-2">
            <Link className="flex items-center space-x-4" href="#">
              <DashboardIcon className="h-6 w-6 hover:muted" />
              <span className="">Dashboard</span>
            </Link>
          </li>
          <li className="flex items-center p-6 hover:bg-primary/20 hover:text-blue-100 hover:border-l-2">
            <Link className="flex items-center space-x-4" href="#">
              <BellIcon className="h-6 w-6 hover:muted" />
              <span className="">Users</span>
            </Link>
          </li>
          <li className="flex items-center p-6 hover:bg-primary/20 hover:text-blue-100 hover:border-l-2">
            <Link className="flex items-center space-x-4" href="#">
              <SunIcon className="h-6 w-6 hover:muted" />
              <span className="">Orders</span>
            </Link>
          </li>
          <li className="flex items-center p-6 hover:bg-primary/20 hover:text-blue-100 hover:border-l-2">
            <Link className="flex items-center space-x-4" href="#">
              <HamburgerMenuIcon className="h-6 w-6 hover:muted" />
              <span className="">Settings</span>
            </Link>
          </li>
        </ul>
      </aside>

    </div>
  )
}
