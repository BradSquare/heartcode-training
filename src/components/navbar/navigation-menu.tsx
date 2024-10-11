import Link from "next/link";
import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, navigationMenuTriggerStyle } from "../ui/navigation-menu";
import { ModeToggle } from "../ui/mode-toggle";
import Logo from "@/assets/drugabuselogo.png";
import Image from 'next/image';
import {
    SignInButton,
    SignedIn,
    SignedOut,
    UserButton
  } from '@clerk/nextjs'

export default function NavigationBar() {
    return (
        <NavigationMenu className="flex flex-row justify-between list-none min-w-full h-16 sticky top-0 p-5 backdrop-blur-md bg-transparent border-b border-gray-300">
            <div className="flex flex-row">
            <Image src={Logo} height="40" width="40" alt="logo"/>
            <NavigationMenuItem>
                <Link href="/" legacyBehavior passHref>
                    <NavigationMenuLink className={`${navigationMenuTriggerStyle()} bg-transparent hover:bg-gray-200 hover:text-black transition duration-200`}>
                        Home
                    </NavigationMenuLink>
                </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
                <Link href="/quiz" legacyBehavior passHref>
                    <NavigationMenuLink className={`${navigationMenuTriggerStyle()} bg-transparent hover:bg-gray-200 hover:text-black transition duration-200`}>
                        Quiz
                    </NavigationMenuLink>
                </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
                <Link href="/about-me" legacyBehavior passHref>
                    <NavigationMenuLink className={`${navigationMenuTriggerStyle()} bg-transparent hover:bg-gray-200 hover:text-black transition duration-200`}>
                        About me
                    </NavigationMenuLink>
                </Link>
            </NavigationMenuItem>
            </div>
            <div className="flex gap-4">
                <ModeToggle/>
                <SignedOut>
                    <SignInButton />
                </SignedOut>
                <SignedIn>
                    <UserButton/>
                </SignedIn>
            </div>
        </NavigationMenu>
    )
}