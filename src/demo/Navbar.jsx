import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from "@/components/ui/navigation-menu.jsx";
import { Separator } from "@/components/ui/separator"
import image from "@/assets/greensmol.png";
import {AvatarIcon, DashboardIcon, HomeIcon, IdCardIcon} from "@radix-ui/react-icons";

export function Navbar({ onSignOut }) {
    return (
        <div>
            <NavigationMenu className="">
                <NavigationMenuList className="w-screen ">
                    <img src={image} alt="Greensmol" className="absolute start-4 h-12 mt-6 my-4"/>
                    <NavigationMenuItem className="">
                        <HomeIcon className="w-6 h-6 mx-2 my-0.5 "/>Home
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        Dashboard
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        Pricing
                    </NavigationMenuItem>
                    <NavigationMenuItem className="">
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
    );
}