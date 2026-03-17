import { motion } from "framer-motion";
import { Send } from "lucide-react";

export const Navbar = () => {
  return (
    <motion.nav
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="fixed top-0 left-0 right-0 z-50 border-b border-border bg-background/80 backdrop-blur-md"
    >
      <div className="container flex items-center justify-between h-16">
        <div className="flex items-center gap-2">
          <Send className="h-5 w-5 text-primary" />
          <span className="font-bold text-foreground tracking-tight">tgcparser</span>
        </div>

        <div className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
          <a href="#features" className="hover:text-foreground transition-colors">Возможности</a>
          <a href="#stats" className="hover:text-foreground transition-colors">Статистика</a>
          <a href="https://tgcparser.ru/vc" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">Отзывы</a>
        </div>

        <a
          href="https://tgcparser.ru/info"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-md bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground hover:bg-primary/90 transition-colors"
        >
          Попробовать
        </a>
      </div>
    </motion.nav>
  );
};
