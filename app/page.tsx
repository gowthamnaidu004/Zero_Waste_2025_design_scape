'use client';
import { motion } from "framer-motion";
import { Header } from "@/components/header";
import { ZeroWasteLogo } from "@/components/zero-waste-logo";
import { Button } from "@/components/ui/button";
import { SignInDialog } from "@/components/sign-in-dialog";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-black">
      <Header />
      <main className="container mx-auto px-4 py-16 md:py-24">
        <div className="grid gap-12 lg:grid-cols-2 items-center">
          <div className="space-y-6">
            <motion.h1
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-6xl font-bold text-gray-400"
            >
              About us
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl text-white leading-relaxed"
            >
              At events and functions, instead of letting surplus food go to waste, we can make a positive impact by
              donating it to organizations that distribute meals to those in need.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <SignInDialog buttonname="Get Started"  /> 
            </motion.div>
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex justify-center lg:justify-end"
          >
            <ZeroWasteLogo className="w-full max-w-[500px]" />
          </motion.div>
        </div>
      </main>
    </div>
  );
}