"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { ChevronDown } from "lucide-react"
import { auth } from "@/lib/auth"

export function DashboardNav() {
  const pathname = usePathname()
  const router = useRouter()
  const [isLoggingOut, setIsLoggingOut] = useState(false)

  const isActive = (path: string) => {
    return pathname === path
  }

  const handleLogout = async () => {
    try {
      setIsLoggingOut(true)
      await auth.logout()
      router.push("/")
    } catch (error) {
      console.error("Logout failed:", error)
    } finally {
      setIsLoggingOut(false)
    }
  }

  return (
    <nav className="border-b border-gray-800">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
        <Link href="/" className="text-white text-2xl font-bold">
        <img src="/headerlogo.png" alt="Zero Waste" className="w-32 h-32" />
        </Link>

          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="/"
              className={`${isActive("/") ? "text-white bg-gray-900" : "text-gray-300"} px-4 py-2 rounded-md hover:text-white`}
            >
              Home
            </Link>
            <Link
              href="/locations"
              className={`${isActive("/locations") ? "text-white bg-gray-900" : "text-gray-300"} px-4 py-2 rounded-md hover:text-white`}
            >
              Locations
            </Link>
            <Link
              href="/branches"
              className={`${isActive("/branches") ? "text-white bg-gray-900" : "text-gray-300"} px-4 py-2 rounded-md hover:text-white`}
            >
              Branches
            </Link>
            <Link
              href="/contact"
              className={`${isActive("/contact") ? "text-white bg-gray-900" : "text-gray-300"} px-4 py-2 rounded-md hover:text-white`}
            >
              Contact
            </Link>
          </div>

          <div className="flex items-center space-x-4">
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center space-x-2 focus:outline-none">
                <div className="flex items-center space-x-2">
                  <Avatar>
                    <AvatarImage src="/Pic1.jpg" />
                    <AvatarFallback>NA</AvatarFallback>
                  </Avatar>
                  <span className="text-white">Nagananda</span>
                  <ChevronDown className="w-4 h-4 text-white" />
                </div>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-[200px] bg-white/90 backdrop-blur-sm"  style={{ backgroundColor: "#4a4a4a" }}>
                <DropdownMenuItem>
                  <Link href="/profile" className="w-full">
                    Profile Setting
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="/donate" className="w-full">
                    Donate food
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="/locations" className="w-full">
                    Locations
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="/branches" className="w-full">
                    Branches
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem
                  className="bg-red-500 text-white hover:bg-red-600 hover:text-white focus:bg-red-600 focus:text-white"
                  disabled={isLoggingOut}
                  onSelect={handleLogout}
                >
                  {isLoggingOut ? "Logging out..." : "Logout"}
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>
    </nav>
  )
}

