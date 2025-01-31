'use client'

import { Header } from "@/components/header"
import { Map } from "@/components/map"
import { Card, CardContent } from "@/components/ui/card"
import { motion } from "framer-motion"

interface Location {
  id: number
  place: string
  foodType: string
  contact: string
  peopleCount: number
  lat: number
  lng: number
}

const locations: Location[] = [
  {
    id: 1,
    place: "Maanikya",
    foodType: "Non - Vegetarian",
    contact: "+916843235885",
    peopleCount: 80,
    lat: 13.000791,
    lng: 77.593837,
  },
  {
    id: 2,
    place: "Angsana Oasis Spa & Resort",
    foodType: "Both",
    contact: "+918496516549",
    peopleCount: 150,
    lat: 13.182606,
    lng: 77.559770,
  },
  {
    id: 3,
    place: "Sumatra Wedding Venue",
    foodType: "Vegetarian",
    contact: "+916494165498",
    peopleCount: 100,
    lat: 12.868967,
    lng: 77.573881,
  }, 
  {
    id: 4,
    place: "The Rameshwaram cafe - Kundanahalli",
    foodType: "Vegetarian",
    contact: "+916494169115",
    peopleCount: 50,
    lat: 12.970749,
    lng: 77.712579,
  },
]

export default function LocationsPage() {
  return (
    <div className="min-h-screen bg-black">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <motion.h1
          className="text-4xl font-bold text-gray-400 mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Availability of Food
        </motion.h1>

        {/* Animate the Map container */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <Map
            markers={locations.map((loc) => ({
              lat: loc.lat,
              lng: loc.lng,
              popup: `<b>${loc.place}</b><br>Food Type: ${loc.foodType}<br>Available for: ${loc.peopleCount} people`,
            }))}
            center={[12.9716, 77.5946]}
            zoom={11}
          />
        </motion.div>

        {/* Animate the card list */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          {locations.map((location) => (
            <motion.div
              key={location.id}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <Card className="bg-gray-800 text-white border-gray-700">
                <CardContent className="p-6 space-y-2">
                  <h3 className="text-lg font-semibold">Place: {location.place}</h3>
                  <p>Food Type: {location.foodType}</p>
                  <p>Contact number: {location.contact}</p>
                  <p>Food Available: {location.peopleCount} People</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </main>
    </div>
  )
}
