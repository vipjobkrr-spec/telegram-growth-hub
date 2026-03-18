import { motion, AnimatePresence } from "framer-motion";
import { Send, Menu, X } from "lucide-react";
import { useState } from "react";

export const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <motion.nav
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="fixed top-0 left-0 right-0 z-50 border-b border-border bg-background/80 backdrop-blur-md"
    >
      <div className="container flex items-center justify-between h-14 sm:h-16">
        <div className="flex items-center gap-2">
          <Send className="h-4 w-4 sm:h-5 sm:w-5 text-primary" />
          <span className="font-bold text-foreground tracking-tight text-sm sm:text-base">tgcparser</span>
        </div>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
          <a href="#features" className="hover:text-foreground transition-colors">Возможности</a>
          <a href="#stats" className="hover:text-foreground transition-colors">Статистика</a>
          <a href="https://tgcparser.ru/vc" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">Отзывы</a>
        </div>

        <div className="flex items-center gap-3">
          <a
            href="https://tgcparser.ru/info"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex rounded-md bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground hover:bg-primary/90 transition-colors"
          >
            Попробовать
          </a>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 -mr-2 text-foreground"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden border-t border-border bg-background/95 backdrop-blur-md overflow-hidden"
          >
            <div className="container py-4 flex flex-col gap-4">
              <a href="#features" onClick={() => setMobileOpen(false)} className="text-sm text-muted-foreground hover:text-foreground transition-colors py-1">Возможности</a>
              <a href="#stats" onClick={() => setMobileOpen(false)} className="text-sm text-muted-foreground hover:text-foreground transition-colors py-1">Статистика</a>
              <a href="https://tgcparser.ru/vc" target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-foreground transition-colors py-1">Отзывы</a>
              <a
                href="https://tgcparser.ru/info"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-md bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground hover:bg-primary/90 transition-colors text-center mt-2"
              >
                Попробовать
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};
