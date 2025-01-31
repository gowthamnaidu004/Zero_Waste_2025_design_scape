"use client";

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { SignInDialog } from "@/components/sign-in-dialog";
import { RegisterDialog } from "@/components/register-dialog";

export function Header() {
  const pathname = usePathname()

  const isActive = (path: string) => pathname === path

  return (
    <header className="bg-black border-b border-gray-800">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
        <Link href="/" className="text-white text-2xl font-bold">
        <img src="/headerlogo.png" alt="Zero Waste" className="w-32 h-32" />
        </Link>

          <nav className="hidden md:flex items-center space-x-4">
            <Link
              href="/"
              className={`text-sm ${isActive("/") ? "text-white bg-gray-900" : "text-gray-300"} px-3 py-2 rounded-md hover:text-white`}
            >
              Home
            </Link>
            <Link
              href="/locations"
              className={`text-sm ${isActive("/locations") ? "text-white bg-gray-900" : "text-gray-300"} px-3 py-2 rounded-md hover:text-white`}
            >
              Locations
            </Link>
            <Link
              href="/branches"
              className={`text-sm ${isActive("/branches") ? "text-white bg-gray-900" : "text-gray-300"} px-3 py-2 rounded-md hover:text-white`}
            >
              Branches
            </Link>
            <Link
              href="/contact"
              className={`text-sm ${isActive("/contact") ? "text-white bg-gray-900" : "text-gray-300"} px-3 py-2 rounded-md hover:text-white`}
            >
              Contact
            </Link>
          </nav>
          <div className="flex items-center space-x-4">
            <SignInDialog /> 
            <RegisterDialog />
          </div>
        </div>
      </div>
    </header>
  )
}

