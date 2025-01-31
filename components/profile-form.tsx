"use client"

import { useState, useRef } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

interface ProfileData {
  name: string
  email: string
  phone: string
  photo: string | null
}

export function ProfileForm() {
  const [formData, setFormData] = useState<ProfileData>({
    name: "",
    email: "",
    phone: "",
    photo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-UfgfE9jcx9y6fGNqwDR5gAg36jOke5.png", // Using the provided image as placeholder
  })
  
  const [errors, setErrors] = useState<{ [key: string]: string }>({
    name: "",
    email: "",
    phone: "",
  })
  
  const fileInputRef = useRef<HTMLInputElement>(null)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handlePhotoClick = () => {
    fileInputRef.current?.click()
  }

  const handlePhotoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onloadend = () => {
        setFormData((prev) => ({
          ...prev,
          photo: reader.result as string,
        }))
      }
      reader.readAsDataURL(file)
    }
  }

  const validateForm = () => {
    const newErrors: { [key: string]: string } = { name: "", email: "", phone: "" }

    // Validate name (should not contain numbers)
    const nameRegex = /^[A-Za-z\s]+$/ // Only allows letters and spaces
    if (!formData.name) {
      newErrors.name = "Name is required"
    } else if (!nameRegex.test(formData.name)) {
      newErrors.name = "Name should not contain numbers"
    }

    // Validate email format
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
    if (!formData.email) {
      newErrors.email = "Email is required"
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = "Please enter a valid email address"
    }

    // Validate phone number format (basic validation)
    const phoneRegex = /^[0-9]{10}$/
    if (!formData.phone) {
      newErrors.phone = "Phone number is required"
    } else if (!phoneRegex.test(formData.phone)) {
      newErrors.phone = "Please enter a valid phone number (10 digits)"
    }

    setErrors(newErrors)
    return Object.values(newErrors).every((error) => error === "")
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (validateForm()) {
      // Handle form submission here
      console.log("Form submitted:", formData)
    } else {
      console.log("Form validation failed")
    }
  }

  return (
    <Card className="bg-gray-200 w-full max-w-md mx-auto" style={{ backgroundColor: "#4a4a4a" }}>
      <CardContent className="p-6">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="flex flex-col items-center space-y-4">
            <div className="relative w-32 h-32">
              <Image
                src={ "/Pic1.jpg"}
                alt="Profile"
                fill
                className="rounded-full object-cover"
              />
            </div>
            <input type="file" ref={fileInputRef} onChange={handlePhotoChange} accept="image/*" className="hidden" />
            <Button
              type="button"
              variant="secondary"
              onClick={handlePhotoClick}
              className="bg-gray-900 text-white hover:bg-gray-800"
            >
              Change Photo
            </Button>
          </div>

          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name">Name</Label>
              <Input
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Value"
                required
              />
              {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Value"
                required
              />
              {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
            </div>

            <div className="space-y-2">
              <Label htmlFor="phone">Phone Number</Label>
              <Input
                id="phone"
                name="phone"
                type="tel"
                value={formData.phone}
                onChange={handleInputChange}
                placeholder="Value"
                required
              />
              {errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}
            </div>
          </div>

          <Button type="submit" className="w-full bg-gray-900 text-white hover:bg-gray-800">
            Update
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}
