import {Link} from "react-router-dom";
import {createContext, useContext, useState} from "react";
import img1 from "@/assets/greensmol.png";
import img2 from "@/assets/logo.png";
import {ChevronRightIcon, DoubleArrowLeftIcon, DoubleArrowRightIcon} from "@radix-ui/react-icons";

const SidebarContext = createContext(undefined)
export default function Component({children}) {

  const [expanded, setExpanded] = useState(true)

  return (
      <div className="flex h-screen">
          <aside className={`${expanded ? "w-72" : "w-20"} bg-muted/50 font text-2xl text-card-foreground border-r-2 border-muted-foreground`}>
              <div className="h-24 flex items-center space-x-2 justify-center border-muted-foreground">
                  {expanded ? <img src={img1} className={`h-12 overflow-hidden transition-all`}></img> : <img src={img2} className={`h-12 overflow-hidden transition-all`}></img>}

              </div>
              <ul>
                  <SidebarContext.Provider value={{expanded}}>
                  {children}
                  </SidebarContext.Provider>
              </ul>
              <button className='py-6' onClick={() => setExpanded((curr) => !curr)}>
                  {expanded ? <DoubleArrowLeftIcon className='h-6 w-6 hover:muted ml-6'/> :<DoubleArrowRightIcon className="h-6 w-6 hover:muted ml-6"/>}
              </button>
          </aside>

      </div>
)
}

export function SidebarItem({
    icon, text, active}) {
  const {expanded} = useContext(SidebarContext)

  return (
      <li className={`
        flex items-center cursor-pointer py-6
        transition-colors group hover:bg-primary/20 hover:text-blue-100 hover:border-l-2
        ${expanded ? "px-6" : "px-6"}
        
        `}>
          {icon}
        <span
            className={`overflow-hidden transition-all ${
                expanded ? "w-52 ml-3" : "w-0"
            }`}
        >
        {text}
      </span>

        {!expanded && (
            <div
                className={`
          absolute left-full rounded-md px-2 py-1 ml-6
          bg-indigo-100 text-indigo-800 text-sm
          invisible opacity-20 -translate-x-3 transition-all
          group-hover:visible group-hover:opacity-100 group-hover:translate-x-0
      `}
            >
              {text}
            </div>
        )}
      </li>
  )
}


// <li className="flex items-center p-6 hover:bg-primary/20 hover:text-blue-100 hover:border-l-2">
//   <Link className="flex items-center space-x-4" href="#">
//     <DashboardIcon className="h-6 w-6 hover:muted"/>
//     <span className="">Dashboard</span>
//   </Link>
// </li>
// <li className="flex items-center p-6 hover:bg-primary/20 hover:text-blue-100 hover:border-l-2">
//   <Link className="flex items-center space-x-4" href="#">
//     <BellIcon className="h-6 w-6 hover:muted"/>
//     <span className="">Users</span>
//   </Link>
// </li>
// <li className="flex items-center p-6 hover:bg-primary/20 hover:text-blue-100 hover:border-l-2">
//   <Link className="flex items-center space-x-4" href="#">
//     <SunIcon className="h-6 w-6 hover:muted"/>
//     <span className="">Orders</span>
//   </Link>
// </li>
// <li className="flex items-center p-6 hover:bg-primary/20 hover:text-blue-100 hover:border-l-2">
//   <Link className="flex items-center space-x-4" href="#">
//     <HamburgerMenuIcon className="h-6 w-6 hover:muted"/>
//     <span className="">Settings</span>
//   </Link>
// </li>