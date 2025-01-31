'use client';
import { DashboardNav } from "@/components/dashboard-nav"
import { ProfileForm } from "@/components/profile-form"
import { ZeroWasteLogo } from "@/components/zero-waste-logo"
import { motion } from "framer-motion"

export default function ProfilePage() {
  return (
    <div className="min-h-screen bg-black">
      <DashboardNav />
      <main className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <ProfileForm />
          </motion.div>
          <div className="text-center space-y-8">
            <motion.h1
              className="text-6xl font-bold text-gray-400"
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              Update profile
            </motion.h1>
            <motion.div
              className="w-full max-w-[400px] mx-auto"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <ZeroWasteLogo />
            </motion.div>
          </div>
        </div>
      </main>
    </div>
  )
}
