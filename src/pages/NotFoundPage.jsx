import { Ghost } from "lucide-react";
import { motion } from "framer-motion";

export default function NotFoundPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-background">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="flex flex-col items-center"
      >
        <Ghost className="w-16 h-16  mb-6 drop-shadow-lg" />
        <h1 className="text-4xl font-semibold  mb-2 tracking-tight">404</h1>
        <p className="text-lg  mb-8">
          Sorry, the page you’re looking for doesn’t exist.
        </p>
        <a
          href="/"
          className="px-6 py-2 rounded-full hover:bg-gray-700 transition shadow-lg backdrop-blur border border-gray-700"
        >
          Go Home
        </a>
      </motion.div>
    </div>
  );
}
