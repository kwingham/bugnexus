"use client";
import React, { useState } from "react";
import { Menu as MenuIcon } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu";

export default function BurgerMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen((prev) => !prev);

  return (
    <div className="relative">
      <button
        onClick={toggleMenu}
        className="p-2 rounded-md bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
        aria-label="Open navigation menu"
      >
        <MenuIcon className="w-6 h-6" />
      </button>

      {isOpen && (
        <NavigationMenu className="absolute top-full left-0 mt-2 w-48 bg-white rounded-md shadow-lg z-50">
          <NavigationMenuList className="flex flex-col p-4 space-y-2">
            <NavigationMenuItem>
              <NavigationMenuLink href="/" className="hover:underline">
                Home
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink href="/about" className="hover:underline">
                About
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink href="/profile" className="hover:underline">
                Profile
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink href="/posts" className="hover:underline">
                Posts
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      )}
    </div>
  );
}
