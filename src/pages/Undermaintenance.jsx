import React from "react";
import { motion } from "framer-motion";
import { ExternalLink, Wrench } from "lucide-react";
import image from "../assets/images/Here.png";

const Undermaintenance = () => {
  return (
    <div className="bg-background min-h-screen text-foreground flex flex-col justify-center items-center p-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center max-w-2xl"
      >
        <motion.div
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="mb-8"
        >
          <div className="flex justify-center mb-4">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center"
            >
              <Wrench className="w-8 h-8 text-primary" />
            </motion.div>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Website Under Maintenance
          </h1>
          <p className="text-muted-foreground text-lg mb-8">
            We're working hard to improve your experience. Check out our project details below!
          </p>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="bg-card border border-border rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
        >
          <motion.a
            href="https://devfolio.co/projects/orbitus-d287"
            target="_blank"
            rel="noopener noreferrer"
            className="block group"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <div className="relative overflow-hidden rounded-lg mb-4">
              <img
                src={image}
                alt="OrbitUs Project"
                className="w-full h-auto object-contain group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
            <div className="flex items-center justify-center space-x-2 text-primary hover:text-primary/80 transition-colors">
              <span className="font-medium">View Project on Devfolio</span>
              <ExternalLink className="w-4 h-4" />
            </div>
          </motion.a>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="mt-8 text-muted-foreground"
        >
          <p>We'll be back soon with exciting new features!</p>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Undermaintenance;