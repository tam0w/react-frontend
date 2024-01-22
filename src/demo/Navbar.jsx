import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from "@/components/ui/navigation-menu.jsx";

export function Navbar({ onSignOut }) {
    return (
        <div>
            <NavigationMenu>
                <NavigationMenuList>
                    <NavigationMenuItem>
                        Home
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        Dashboard
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        Pricing
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <NavigationMenuTrigger>Account</NavigationMenuTrigger>
                        <NavigationMenuContent>
                            <NavigationMenuLink>
                                Profile
                            </NavigationMenuLink>
                            <NavigationMenuLink>
                                Settings
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