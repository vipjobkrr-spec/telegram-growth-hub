import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const lines = [
  { type: "comment", text: "# Инициализация Telegram Content Parser..." },
  { type: "command", text: "$ tgcparser --monitor @channel_news @tech_daily" },
  { type: "output", text: "✓ Подключено к 2 каналам" },
  { type: "command", text: "$ tgcparser --filter --min-views=5000 --er=3.5" },
  { type: "output", text: "✓ Фильтр настроен: views≥5000, ER≥3.5%" },
  { type: "command", text: "$ tgcparser --post --schedule=\"09:00,13:00,19:00\"" },
  { type: "success", text: "✓ Автопостинг активирован — 3 слота/день" },
  { type: "command", text: "$ tgcparser --ai-rewrite --gpt4" },
  { type: "success", text: "✓ AI-рерайт включён — уникализация 98.7%" },
  { type: "stats", text: "  → Обработано: 1,247 постов | Опубликовано: 312" },
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
      <div className="flex items-center gap-2 px-4 py-3 border-b border-border bg-accent">
        <div className="flex gap-1.5">
          <div className="h-3 w-3 rounded-full bg-destructive/70" />
          <div className="h-3 w-3 rounded-full bg-[hsl(45,80%,50%)]/70" />
          <div className="h-3 w-3 rounded-full bg-success/70" />
        </div>
        <span className="font-mono text-xs text-muted-foreground ml-2">tgcparser — bash</span>
      </div>
      {/* Content */}
      <div className="p-5 font-mono text-sm leading-7 min-h-[320px]">
        {lines.slice(0, visibleLines).map((line, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.2 }}
            className={getColor(line.type)}
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
