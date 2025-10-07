"use client";

import { motion } from "framer-motion";
import { redirect } from "next/navigation";
import { useStacks } from "@/hooks/use-stacks";
import { Button } from "@/components/ui/button";

export default function Home() {
  const { userData } = useStacks();

  if (userData) {
    redirect(`/${userData.profile.stxAddress.mainnet}`);
  }

  return (
    <main className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-gradient-to-b from-gray-900 via-indigo-900 to-black text-white">
      {/* Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.15)_0%,transparent_70%)]" />

      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10 text-center max-w-3xl px-4"
      >
        <h1 className="text-5xl md:text-7xl font-extrabold leading-tight bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-cyan-400">
          Welcome to <span className="text-white">Starks</span>
          <span> Explorer</span>
        </h1>

        <p className="mt-6 text-lg md:text-xl text-gray-300">
          A next-generation explorer for tracking transactions
        </p>

        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            className="rounded-2xl bg-gradient-to-r from-indigo-500 to-purple-600 text-lg font-semibold px-8 py-4 hover:from-indigo-400 hover:to-purple-500 transition-all"
            onClick={() => alert("Coming soon...")}
          >
            Get Started
          </Button>

          <Button
            variant="outline"
            className="border-gray-600 text-gray-300 hover:bg-gray-800 px-8 py-4 rounded-2xl"
            onClick={() => alert("Docs launching soon")}
          >
            Read Docs
          </Button>
        </div>
      </motion.div>

      {/* Subtext */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 text-sm text-gray-500"
      >
        <span>⚡ Empowering transparency on all transactions</span>
      </motion.div>
    </main>
  );
}
