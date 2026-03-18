import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const lines = [
  { type: "comment", text: "# Инициализация Parser..." },
  { type: "command", text: "$ tgcparser --monitor @channel_news" },
  { type: "output", text: "✓ Подключено к 2 каналам" },
  { type: "command", text: "$ tgcparser --filter --views=5000" },
  { type: "output", text: "✓ Фильтр: views≥5000, ER≥3.5%" },
  { type: "command", text: "$ tgcparser --schedule" },
  { type: "success", text: "✓ Автопостинг — 3 слота/день" },
  { type: "command", text: "$ tgcparser --ai-rewrite" },
  { type: "success", text: "✓ AI-рерайт — уникализация 98.7%" },
  { type: "stats", text: "  → 1,247 постов | 312 опубл." },
];

export const TerminalWindow = () => {
  const [visibleLines, setVisibleLines] = useState(0);

  useEffect(() => {
    if (visibleLines < lines.length) {
      const timer = setTimeout(() => setVisibleLines(v => v + 1), 600);
      return () => clearTimeout(timer);
    }
  }, [visibleLines]);

  const getColor = (type: string) => {
    switch (type) {
      case "comment": return "text-muted-foreground";
      case "command": return "text-foreground";
      case "output": return "text-primary";
      case "success": return "text-success";
      case "stats": return "text-secondary";
      default: return "text-foreground";
    }
  };

  return (
    <div className="rounded-lg border border-border bg-card overflow-hidden glow-primary">
      {/* Title bar */}
      <div className="flex items-center gap-2 px-3 sm:px-4 py-2.5 sm:py-3 border-b border-border bg-accent">
        <div className="flex gap-1.5">
          <div className="h-2.5 w-2.5 sm:h-3 sm:w-3 rounded-full bg-destructive/70" />
          <div className="h-2.5 w-2.5 sm:h-3 sm:w-3 rounded-full bg-[hsl(45,80%,50%)]/70" />
          <div className="h-2.5 w-2.5 sm:h-3 sm:w-3 rounded-full bg-success/70" />
        </div>
        <span className="font-mono text-[10px] sm:text-xs text-muted-foreground ml-2 truncate">tgcparser — bash</span>
      </div>
      {/* Content */}
      <div className="p-3 sm:p-5 font-mono text-[11px] sm:text-sm leading-6 sm:leading-7 min-h-[240px] sm:min-h-[320px] overflow-x-auto">
        {lines.slice(0, visibleLines).map((line, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.2 }}
            className={`${getColor(line.type)} whitespace-nowrap`}
          >
            {line.text}
          </motion.div>
        ))}
        {visibleLines < lines.length && (
          <span className="inline-block w-2 h-4 bg-primary animate-terminal-blink" />
        )}
      </div>
    </div>
  );
};
