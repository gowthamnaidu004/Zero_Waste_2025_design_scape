"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

interface DonationFormData {
  latitude: string
  longitude: string
  contactNumber: string
  foodType: string
  peopleCount: string
}

export function DonateForm() {
  const [formData, setFormData] = useState<DonationFormData>({
    latitude: "",
    longitude: "",
    contactNumber: "",
    foodType: "Vegetarian",
    peopleCount: "",
  })

  const [errors, setErrors] = useState<{ [key: string]: string }>({
    latitude: "",
    longitude: "",
    contactNumber: "",
    foodType: "",
    peopleCount: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (validateForm()) {
      // Handle form submission here
      console.log("Form submitted:", formData)
    } else {
      console.log("Form validation failed")
    }
  }

  const validateForm = (): boolean => {
    const newErrors: { [key: string]: string } = { latitude: "", longitude: "", contactNumber: "", foodType: "", peopleCount: "" }

    // Validate latitude (must be a valid number)
    if (!formData.latitude) {
      newErrors.latitude = "Latitude is required"
    } else if (isNaN(Number(formData.latitude))) {
      newErrors.latitude = "Latitude must be a valid number"
    }

    // Validate longitude (must be a valid number)
    if (!formData.longitude) {
      newErrors.longitude = "Longitude is required"
    } else if (isNaN(Number(formData.longitude))) {
      newErrors.longitude = "Longitude must be a valid number"
    }

    // Validate contact number (must be digits and 10 digits long)
    const phoneRegex = /^[0-9]{10}$/
    if (!formData.contactNumber) {
      newErrors.contactNumber = "Contact number is required"
    } else if (!phoneRegex.test(formData.contactNumber)) {
      newErrors.contactNumber = "Please enter a valid 10-digit contact number"
    }

    // Validate people count (must be a number and greater than 0)
    if (!formData.peopleCount) {
      newErrors.peopleCount = "People count is required"
    } else if (parseInt(formData.peopleCount) <= 0) {
      newErrors.peopleCount = "People count must be greater than 0"
    }

    setErrors(newErrors)
    return Object.values(newErrors).every((error) => error === "")
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleFoodTypeChange = (value: string) => {
    setFormData((prev) => ({
      ...prev,
      foodType: value,
    }))
  }

  return (
    <Card className="bg-white w-full max-w-md mx-auto" style={{ backgroundColor: "#4a4a4a" }}>
      <CardContent className="p-6">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="latitude">Latitude</Label>
            <Input
              id="latitude"
              name="latitude"
              value={formData.latitude}
              onChange={handleInputChange}
              placeholder="Enter latitude"
              required
            />
            {errors.latitude && <p className="text-red-500 text-sm">{errors.latitude}</p>}
          </div>

          <div className="space-y-2">
            <Label htmlFor="longitude">Longitude</Label>
            <Input
              id="longitude"
              name="longitude"
              value={formData.longitude}
              onChange={handleInputChange}
              placeholder="Enter longitude"
              required
            />
            {errors.longitude && <p className="text-red-500 text-sm">{errors.longitude}</p>}
          </div>

          <div className="space-y-2">
            <Label htmlFor="contactNumber">Contact Number</Label>
            <Input
              id="contactNumber"
              name="contactNumber"
              value={formData.contactNumber}
              onChange={handleInputChange}
              placeholder="Enter contact number"
              type="tel"
              required
            />
            {errors.contactNumber && <p className="text-red-500 text-sm">{errors.contactNumber}</p>}
          </div>

          <div className="space-y-2">
            <Label htmlFor="foodType">Food Type</Label>
            <Select value={formData.foodType} onValueChange={handleFoodTypeChange}>
              <SelectTrigger>
                <SelectValue placeholder="Select food type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Vegetarian">Vegetarian</SelectItem>
                <SelectItem value="Non-Vegetarian">Non-Vegetarian</SelectItem>
                <SelectItem value="Both">Both</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="peopleCount">People can accommodate</Label>
            <Input
              id="peopleCount"
              name="peopleCount"
              value={formData.peopleCount}
              onChange={handleInputChange}
              placeholder="Enter people count"
              type="number"
              min="1"
              required
            />
            {errors.peopleCount && <p className="text-red-500 text-sm">{errors.peopleCount}</p>}
          </div>

          <Button type="submit" className="w-full bg-gray-900 hover:bg-gray-800 text-white">
            Submit
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}
