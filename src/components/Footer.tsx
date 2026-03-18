import { Send, Mail, MapPin } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="border-t border-border py-10 sm:py-16">
      <div className="container">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 mb-10 sm:mb-14">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <Send className="h-4 w-4 text-primary" />
              <span className="font-bold text-foreground">tgcparser</span>
            </div>
            <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
              Высокопроизводительный парсер контента и аудитории для Telegram-каналов.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-sm font-semibold text-foreground mb-3">Навигация</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#features" className="hover:text-foreground transition-colors">Возможности</a></li>
              <li><a href="#how-it-works" className="hover:text-foreground transition-colors">Как работает</a></li>
              <li><a href="#use-cases" className="hover:text-foreground transition-colors">Кейсы</a></li>
              <li><a href="#pricing" className="hover:text-foreground transition-colors">Тарифы</a></li>
              <li><a href="#faq" className="hover:text-foreground transition-colors">FAQ</a></li>
            </ul>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-sm font-semibold text-foreground mb-3">Ресурсы</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="https://t.me/ru_tgcparser" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">Telegram-канал</a></li>
              <li><a href="https://tgcparser.ru/vc" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">Отзывы на VC.ru</a></li>
              <li><a href="https://tgcparser.ru/promo" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">YouTube</a></li>
              <li><a href="https://tgcparser.ru/kwork" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">Kwork</a></li>
            </ul>
          </div>

          {/* Contacts */}
          <div>
            <h4 className="text-sm font-semibold text-foreground mb-3">Контакты</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex items-center gap-2">
                <Send className="h-3.5 w-3.5 text-primary shrink-0" />
                <a href="https://t.me/ru_tgcparser" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">@ru_tgcparser</a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-3.5 w-3.5 text-primary shrink-0" />
                <a href="mailto:support@tgcparser.ru" className="hover:text-foreground transition-colors">support@tgcparser.ru</a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="h-3.5 w-3.5 text-primary shrink-0 mt-0.5" />
                <span>Россия · Удалённая команда</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-6 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-3">
          <span className="text-xs text-muted-foreground">© 2025 tgcparser. Все права защищены.</span>
          <div className="flex items-center gap-4 text-xs text-muted-foreground">
            <a href="https://tgcparser.ru/info" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">Политика конфиденциальности</a>
            <a href="https://tgcparser.ru/info" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">Оферта</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
