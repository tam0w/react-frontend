import {Link} from "react-router-dom";
import{BellIcon,  DashboardIcon, DoubleArrowLeftIcon, HamburgerMenuIcon, SunIcon,} from "@radix-ui/react-icons";
import {useState} from "react";
import img1 from "@/assets/greensmol.png";
export default function Component() {

  const [expanded, setExpanded] = useState(true)

  return (
    <div className="flex h-screen">
      <aside className="w-72 bg-muted/50 font text-2xl text-card-foreground border-r-2 border-muted-foreground">
        <div className="h-24 flex items-center space-x-2 justify-center border-muted-foreground">
          <img src={img1} className={`h-12 overflow-hidden transition-all ${
              expanded ? "w-56" : "w-0"
            }`}></img>
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
