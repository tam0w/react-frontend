import {Link, NavLink, useLocation, useMatch} from "react-router-dom";
import {createContext, useContext, useEffect, useState} from "react";
import img1 from "@/assets/greensmol.png";
import img2 from "@/assets/logo.png";
import {ChevronRightIcon, DoubleArrowLeftIcon, DoubleArrowRightIcon} from "@radix-ui/react-icons";
import {Separator} from "@/components/ui/separator.jsx";


const SidebarContext = createContext(undefined)
export default function Component({children}) {

  const [expanded, setExpanded] = useState(true)


  return (<>
      <div className={`flex min-h-screen`}>
          <aside
              className={`${expanded ? "w-72" : "w-20"} bg-muted/50 font text-2xl text-card-foreground border-r-2 border-muted-foreground`}>
              <div className={`h-24 flex items-center space-x-2 justify-center border-muted-foreground`}>
                  {expanded ? <img src={img1} className={`h-12 overflow-hidden transition-all`}></img> :
                      <img src={img2} className={`h-12 overflow-hidden transition-all`}></img>}

              </div>
              <ul>

                  <SidebarContext.Provider value={{expanded}}>
                      {children}
                  </SidebarContext.Provider>
              </ul>
              <Separator className={'bg-muted-foreground'}/>
              <button className='py-6' onClick={() => setExpanded((curr) => !curr)}>
                  {expanded ? <DoubleArrowLeftIcon className='h-6 w-6 hover:muted ml-6'/> :
                      <DoubleArrowRightIcon className="h-6 w-6 hover:muted ml-6"/>}
              </button>
              <div className={`flex flex-col justify-center justify-between border-muted-foreground`}>

                  <div className={`flex flex-col gap-y-4 ${expanded ? "" : ""}`}>
                      {/*<Separator className={'bg-muted-foreground'}/>*/}
                      <div className={`flex items-center cursor-pointer p-2
      transition-colors group`}>
         <img src={'https://ui-avatars.com/api/?name=Tamim&bold=true&color=ffffff&background=342334'} className={'border-2 border-card-foreground opacity-70 rounded-md ml-1 h-14 w-14'}/>
         <div className={`flex flex-col`}><span className={`text-muted-foreground overflow-hidden break-words text-sm transition-all ${expanded ? "w-52 ml-3" : "hidden"}`}>
             <span className={'text-card-foreground text-lg'}>Tamim Muhammed</span> <br/>
             work.tamimmuhammed@gmail.com
         </span>
         </div>

                      </div>
                  </div>
              </div>
          </aside>

      </div>
      {/*{expanded ? <div className={'bg-destructive/70'}></div> : ""}*/}
  </>)
}

export function SidebarItem({icon, text, path}) {

    const {expanded} = useContext(SidebarContext)


    return (
        <li>
            <NavLink to={path} className={`flex items-center cursor-pointer p-6
      transition-colors group hover:bg-primary/20 hover:text-blue-100 hover:border-l-4 
            `}>
        {icon}
         <span
            className={`overflow-hidden transition-all ${
                expanded ? "w-52 ml-3" : "w-0"}`}>
        {text}
         </span>
      </NavLink>
    </li>
  );
}