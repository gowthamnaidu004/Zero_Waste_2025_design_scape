'use client'

import { Header } from "@/components/header"
import { Map } from "@/components/map"
import { Card, CardContent } from "@/components/ui/card"
import { motion } from "framer-motion"

interface Branch {
  id: number
  place: string
  foodType: string
  contact: string
  lat: number
  lng: number
}

const branches: Branch[] = [
  {
    id: 1,
    place: "Sri Sri Ravishankar Ashrama",
    foodType: "Vegetarian",
    contact: "+916843235885",
    lat: 12.828575,
    lng: 77.512426,
  },
  {
    id: 2,
    place: "Vishwa Shanti Ashrama",
    foodType: "Both",
    contact: "+918496516549",
    lat: 13.082563,
    lng: 77.417132,
  },
  {
    id: 3,
    place: "Ramakrishna vivekananda vedanta Ashrama",
    foodType: "Vegetarian",
    contact: "+916561548456",
    lat: 13.138897,
    lng: 77.560874,
  },
  {
    id: 4,
    place: "Bhagwaan Gopinathji Ashrama, Whitefield",
    foodType: "Vegetarian",
    contact: "+916843235886",
    lat: 12.963256,
    lng: 77.838016,
  },
]

export default function BranchesPage() {
  return (
    <div className="min-h-screen bg-black">
      <Header />
      <main className="container mx-auto px-4 py-8">
        {/* Animate the title */}
        <motion.h1
          className="text-4xl font-bold text-gray-400 mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Branches
        </motion.h1>

        {/* Animate the Map container */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <Map
            markers={branches.map((branch) => ({
              lat: branch.lat,
              lng: branch.lng,
              popup: `<b>${branch.place}</b><br>Food Type: ${branch.foodType}<br>Contact Number: ${branch.contact}`,
            }))}
            center={[12.9716, 77.5946]}
            zoom={11}
          />
        </motion.div>

        {/* Animate the card list */}
        <motion.div
          className="grid md:grid-cols-2 gap-6 mt-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          {branches.map((branch) => (
            <motion.div
              key={branch.id}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <Card className="bg-gray-800 text-white border-gray-700">
                <CardContent className="p-6 space-y-2">
                  <h3 className="text-lg font-semibold">Place: {branch.place}</h3>
                  <p>Food Type: {branch.foodType}</p>
                  <p>Contact number: {branch.contact}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </main>
    </div>
  )
}
