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
        className="p-3 rounded-md bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-400"
        aria-label="Open navigation menu"
      >
        <MenuIcon className="w-6 h-6" />
      </button>

      {isOpen && (
        <NavigationMenu className="absolute top-full left-[-10rem] mt-2 w-64 bg-gray-800 rounded-lg shadow-lg z-50">
          <NavigationMenuList className="flex flex-col p-4 space-y-6">
            <NavigationMenuItem>
              <NavigationMenuLink
                href="/"
                className="block text-4xl text-white hover:text-green-400"
              >
                Home
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink
                href="/about"
                className="block text-4xl text-white hover:text-green-400"
              >
                About
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink
                href="/profile"
                className="block text-4xl text-white hover:text-green-400"
              >
                Profile
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink
                href="/posts"
                className="block text-4xl text-white hover:text-green-400"
              >
                Posts
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      )}
    </div>
  );
}
