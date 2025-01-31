'use client'

import { DashboardNav } from "@/components/dashboard-nav"
import { DonateForm } from "@/components/donate-form"
import { ZeroWasteLogo } from "@/components/zero-waste-logo"
import { motion } from "framer-motion"

export default function DonatePage() {
  return (
    <div className="min-h-screen bg-black">
      <DashboardNav />
      <main className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Animate DonateForm */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <DonateForm />
          </motion.div>

          <div className="text-center space-y-8">
            {/* Animate Title */}
            <motion.h1
              className="text-6xl font-bold text-gray-400"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.3 }}
            >
              Donate Food
            </motion.h1>

            {/* Animate ZeroWasteLogo */}
            <motion.div
              className="w-full max-w-[400px] mx-auto"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              <ZeroWasteLogo />
            </motion.div>
          </div>
        </div>
      </main>
    </div>
  )
}
