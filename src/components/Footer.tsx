import { Send } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="border-t border-border py-12">
      <div className="container flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-2">
          <Send className="h-4 w-4 text-primary" />
          <span className="font-bold text-sm text-foreground">tgcparser</span>
          <span className="text-sm text-muted-foreground ml-2">© 2025</span>
        </div>
        <div className="flex items-center gap-6 text-sm text-muted-foreground">
          <a href="https://t.me/ru_tgcparser" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">Telegram</a>
          <a href="https://tgcparser.ru/promo" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">YouTube</a>
          <a href="https://tgcparser.ru/kwork" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">Kwork</a>
          <a href="https://tgcparser.ru/vc" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">VC.ru</a>
        </div>
      </div>
    </footer>
  );
};
