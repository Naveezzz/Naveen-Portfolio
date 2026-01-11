import { motion } from 'framer-motion';
import { Terminal, Heart } from 'lucide-react';

export function Footer() {
  return (
    <footer className="py-12 border-t border-border relative">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <motion.div
            className="flex items-center gap-2"
            whileHover={{ scale: 1.05 }}
          >
            <Terminal className="w-5 h-5 text-teal" />
            <span className="font-bold text-gradient">Naveen JN</span>
          </motion.div>

          {/* Center Text */}
          <p className="text-sm text-muted-foreground flex items-center gap-1">
            Built with <Heart className="w-4 h-4 text-coral fill-coral" /> and lots of coffee
          </p>

          {/* Copyright */}
          <p className="text-sm text-muted-foreground font-mono">
            © {new Date().getFullYear()} All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
}
