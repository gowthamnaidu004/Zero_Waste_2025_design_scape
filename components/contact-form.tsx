"use client"

import { useState, useRef } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { init, send } from "emailjs-com"

interface ProfileData {
  name: string
  email: string
  phone: string
  description: string
}

export function ContactForm() {
  const [formData, setFormData] = useState<ProfileData>({
    name: "",
    email: "",
    phone: "",
    description: "",
  })
  const fileInputRef = useRef<HTMLInputElement>(null)


  init("kSeS3JdDnEq1f-1OB")

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    // Send the form data via EmailJS
    const templateParams = {
      to_name: formData.name,
      from_name: formData.name,         
      message: formData.description,    
      from_email: formData.email,
      phone: formData.phone,
    }

    send(
      "service_l9e1myw", 
      "template_kju2054", 
      templateParams,
      "kSeS3JdDnEq1f-1OB" 
    )
      .then((response) => {
        console.log("Email sent successfully!", response)
        
      })
      .catch((error) => {
        console.log("Error sending email:", error)
        
      })
  }

  return (
    <Card className="bg-gray-800 w-full max-w-md mx-auto"
    style={{ backgroundColor: "#4a4a4a" }}>
      <CardContent className="p-6">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name">Name</Label>
              <Input
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Enter your name"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Enter your email"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="phone">Phone Number</Label>
              <Input
                id="phone"
                name="phone"
                type="tel"
                value={formData.phone}
                onChange={handleInputChange}
                placeholder="Enter your phone number"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="description">Description</Label>
              <textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleInputChange}
              placeholder="Enter your description"
              rows={4}
              className="w-full p-2 border border-gray-300 rounded bg-black text-white"  
              required
            />

            </div>
          </div>

          <Button type="submit" className="w-full bg-gray-900 text-white hover:bg-gray-800">
            Submit
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}
