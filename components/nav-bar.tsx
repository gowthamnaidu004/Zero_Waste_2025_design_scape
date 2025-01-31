import Link from "next/link"
import { SignInDialog } from "@/components/sign-in-dialog"
import { RegisterDialog } from "@/components/register-dialog"

export function NavBar() {
  return (
    <nav className="border-b border-gray-800">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="text-white text-2xl font-bold">
            Zero Waste
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-white bg-gray-900 px-4 py-2 rounded-md">
              Home
            </Link>
            <Link href="/locations" className="text-gray-300 hover:text-white">
              Locations
            </Link>
            <Link href="/branches" className="text-gray-300 hover:text-white">
              Branches
            </Link>
            <Link href="/contact" className="text-gray-300 hover:text-white">
              Contact
            </Link>
          </div>

          <div className="flex items-center space-x-4">
            <SignInDialog />
            <RegisterDialog />
          </div>
        </div>
      </div>
    </nav>
  )
}

