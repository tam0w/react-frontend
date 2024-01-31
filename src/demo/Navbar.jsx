import image from "@/assets/greensmol.png";
import {NavigationMenuList} from "@radix-ui/react-navigation-menu";
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem, NavigationMenuLink,
    NavigationMenuTrigger
} from "@/components/ui/navigation-menu.jsx";
import {AvatarIcon, HomeIcon} from "@radix-ui/react-icons";
export function Navbar({ logoSrc, onSignOut }) {

  return (
      <div className="flex items-center justify-between px-4">
          <img src={image} alt="Greensmol" className="h-12 mt-4 my-2"/>
          <div className="normal">
          <NavigationMenu className="">
                <NavigationMenuList className="flex items-center justify-end">

                    <NavigationMenuItem className="">
                        <HomeIcon className="w-6 h-6 mx-2 my-0.5"/>Home
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        Dashboard
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        Pricing
                    </NavigationMenuItem>

                    <NavigationMenuItem className="end-4 -mr-4">
                        <NavigationMenuTrigger className="">Account <AvatarIcon className="w-6 h-6 mx-2 my-0.5 "/></NavigationMenuTrigger>
                        <NavigationMenuContent className="">
                            <NavigationMenuLink>
                                <h1 className="">Profile</h1>
                                <h1 className="text-muted-foreground text-sm">Profile page to view user info and data.</h1>


                            </NavigationMenuLink>
                            {/*<Separator className="py-0.5 my-2 bg-muted-foreground" />*/}
                            <NavigationMenuLink>
                                <h1 className="">Settings</h1>
                                <h1 className="text-muted-foreground text-sm">Profile page to view user info and data.</h1>

                            </NavigationMenuLink>
                            {/*<Separator className="py-0.5 my-2 bg-muted-foreground" />*/}
                            <NavigationMenuLink onClick={onSignOut}>
                                Sign Out

                            </NavigationMenuLink>
                        </NavigationMenuContent>
                    </NavigationMenuItem>


                </NavigationMenuList>
            </NavigationMenu>
          </div>
      </div>
  );
};

