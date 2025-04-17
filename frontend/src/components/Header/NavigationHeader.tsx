import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Cable, Music, Shirt, Watch } from "lucide-react";

function NavigationHeader() {
  return (
    <header>
      <div className="hidden main-container flex items-center justify-between m-8">
        <div>
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-lg font-bold hover:bg-transparent cursor-pointer">
                  Categories
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="flex items-center gap-2 text-md p-2 cursor-pointer font-bold hover:bg-[var(--input)]  duration-300 rounded-sm h-12">
                    <Shirt className="text-sm" />
                    <NavigationMenuLink className="hover:bg-transparent">
                      Fashion
                    </NavigationMenuLink>
                  </div>
                  <div className="flex items-center gap-2 text-md p-2 cursor-pointer font-bold hover:bg-[var(--input)]  duration-300 rounded-sm h-12">
                    <Cable className="text-sm" />
                    <NavigationMenuLink className="hover:bg-transparent">
                      Electronics
                    </NavigationMenuLink>
                  </div>
                  <div className="flex items-center gap-2 text-md p-2 cursor-pointer font-bold hover:bg-[var(--input)]  duration-300 rounded-sm h-12">
                    <Watch className="text-sm" />
                    <NavigationMenuLink className="hover:bg-transparent">
                      Watches
                    </NavigationMenuLink>
                  </div>
                  <div className="flex items-center gap-2 text-md p-2 cursor-pointer font-bold hover:bg-[var(--input)]  duration-300 rounded-sm h-12">
                    <Music className="text-sm" />
                    <NavigationMenuLink className="hover:bg-transparent">
                      Music
                    </NavigationMenuLink>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
      </div>
    </header>
  );
}

export default NavigationHeader;
