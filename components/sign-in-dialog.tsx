"use client"

import { AwaitedReactNode, JSXElementConstructor, ReactElement, ReactNode, ReactPortal, useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

// Import the cookie utility functions
import { setCookie } from "../utils/cookies"
interface SignInDialogProps {
  buttonname?: string; // Optional prop (string or undefined)
}
export function SignInDialog({ buttonname }: SignInDialogProps) {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const router = useRouter()
  const buttonClass = buttonname ? "bg-red-600 hover:bg-red-700" : ""

  if(buttonname == null)
    buttonname = "Sign in";
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    // Check for default credentials
    if (email === "admin@gmail.com" && password === "admin") {
      // Simulating successful login
      const auth_token = "your-auth-token-here"

      setCookie("auth_token", auth_token, { expires: 3600 })

      router.push("/locations")
    } else {
      setError("Invalid credentials, please try again.")
    }
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="secondary" className={buttonClass}>{buttonname}</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-center text-2xl">Sign In</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          {error && <p className="text-red-500 text-center">{error}</p>}
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="Enter the email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              type="password"
              placeholder="Enter the password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <Button type="submit" className="w-full bg-purple-600 hover:bg-purple-700">
            Sign In
          </Button>
          <div className="text-center space-y-2">
            <Link href="/forgot-password" className="text-sm text-gray-400 hover:text-white block">
              Forgot password?
            </Link>
            <Link href="/register" className="text-sm text-gray-400 hover:text-white block">
              {"Doesn't have an account? Click here"}
            </Link>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  )
}
