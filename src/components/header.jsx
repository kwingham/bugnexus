import Image from "next/image";
import BurgerMenu from "./burger";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";

export default function Header() {
  return (
    <header className="flex items-center justify-between bg-orange-200 p-4">
      <div className="flex items-center">
        <Image
          src="/media/logo.webp"
          alt="Bugnexus logo"
          height={50}
          width={50}
          className="mr-4"
        />
        <h1 className="text-lg font-semibold">Bugnexus</h1>
      </div>

      <div className="flex items-center space-x-4">
        <BurgerMenu />
        <SignedOut>
          <SignInButton className="bg-purple-200 px-4 py-2 rounded text-white" />
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </div>
    </header>
  );
}