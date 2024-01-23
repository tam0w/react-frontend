import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from "@/components/ui/navigation-menu.jsx";
import { Separator } from "@/components/ui/separator"


export function Navbar({ onSignOut }) {
    return (
        <div>
            <NavigationMenu className="">
                <NavigationMenuList className="w-screen bg-secondary">
                    <NavigationMenuItem className="">
                        Home
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        Dashboard
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        Pricing
                    </NavigationMenuItem>
                    <NavigationMenuItem className="">
                        <NavigationMenuTrigger className="">Account</NavigationMenuTrigger>
                        <NavigationMenuContent className="">
                            <NavigationMenuLink>
                                <h1 className="">Profile</h1>
                                <h1 className="text-secondary-foreground text-sm">Profile page to view user info and data.</h1>
                                <Separator className="pt-1 mt-2" />

                            </NavigationMenuLink>
                            <NavigationMenuLink>
                                <h1 className="">Settings</h1>
                                <h1 className="text-secondary-foreground text-sm">Profile page to view user info and data.</h1>
                                <Separator className="pt-1 mt-2" />
                            </NavigationMenuLink>
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