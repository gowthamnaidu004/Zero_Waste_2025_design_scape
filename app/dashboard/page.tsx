"use client"

import { useState } from "react"
import { DashboardNav } from "@/components/dashboard-nav"
import { Card, CardContent } from "@/components/ui/card"

interface FoodLocation {
  id: number
  place: string
  foodType: string
  contact: string
  peopleCount: number
}

const locations: FoodLocation[] = [
  {
    id: 1,
    place: "Muzeum Powstania Warszawskiego",
    foodType: "Vegetarian",
    contact: "+916843235885",
    peopleCount: 10,
  },
  {
    id: 2,
    place: "Palac Prezydencki",
    foodType: "Non - Vegetarian",
    contact: "+918496516549",
    peopleCount: 8,
  },
  {
    id: 3,
    place: "Muranow",
    foodType: "Both",
    contact: "+916494165498",
    peopleCount: 5,
  },
]

export default function DashboardPage() {
  const [selectedLocation, setSelectedLocation] = useState<FoodLocation | null>(null)

  return (
    <div className="min-h-screen bg-black">
      <DashboardNav />
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-gray-400 mb-8">Availability of Food</h1>

        {/* Map Container */}
        <div className="w-full h-[400px] mb-8 rounded-lg overflow-hidden">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d7919.425385535714!2d77.5945624!3d12.9715987!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1643890673578!5m2!1sen!2sin" 
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
          />
        </div>

        {/* Location Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {locations.map((location) => (
            <Card key={location.id} className="bg-gray-800 text-white border-gray-700">
              <CardContent className="p-6 space-y-2">
                <div className="space-y-1">
                  <h3 className="text-lg font-semibold">Place : {location.place}</h3>
                  <p>Food Type : {location.foodType}</p>
                  <p>Contact number : {location.contact}</p>
                  <p>Food Available : {location.peopleCount} Peoples</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </main>
    </div>
  )
}

