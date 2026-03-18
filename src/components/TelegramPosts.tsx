import { motion } from "framer-motion";
import { ExternalLink, Heart, ThumbsUp, Flame } from "lucide-react";

const posts = [
  {
    date: "26 февраля",
    title: "Обновление v8.0",
    text: "Полная поддержка прокси, улучшенный UI/UX, AI-сбор ЦА по одному нейрозапросу, автозапуск и отложенный постинг.",
    reactions: { "👍": 4, "❤": 3 },
    views: 280,
    link: "https://t.me/ru_tgcparser/67",
  },
  {
    date: "1 марта",
    title: "Поиск ЦА в Telegram",
    text: "Отслеживание чатов в реальном времени: ID, имя, юзернейм, телефон, дата сообщения и ключевой запрос по каждому контакту.",
    reactions: { "🔥": 3, "👍": 1 },
    views: 214,
    link: "https://t.me/ru_tgcparser/78",
  },
  {
    date: "5 марта",
    title: "Фильтрация и обработка контента",
    text: "Пропуск повторов и рекламы, отбор по ER и ключевым, ИИ-модерация и рерайт, водяные знаки — за доли секунды.",
    reactions: { "❤": 1, "👍": 1, "🔥": 1 },
    views: 248,
    link: "https://t.me/ru_tgcparser/82",
  },
  {
    date: "7 марта",
    title: "Быстрый поиск лидов",
    text: "Находите чаты через Target Parser, указывайте их Content Parser — и получайте контакты целевых клиентов на автомате.",
    reactions: { "❤": 1, "🔥": 1 },
    views: 248,
    link: "https://t.me/ru_tgcparser/85",
  },
];

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
};

export const TelegramPosts = () => {
  return (
    <section className="py-16 sm:py-24 md:py-32">
      <div className="container">
        <motion.div {...fadeIn} transition={{ duration: 0.5 }} className="text-center mb-10 sm:mb-16">
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-accent px-4 py-1.5 mb-5">
            <span className="font-mono text-xs text-muted-foreground">@ru_tgcparser</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold tracking-tighter mb-3 sm:mb-4">
            Последние <span className="text-gradient-primary">обновления</span>
          </h2>
          <p className="text-muted-foreground text-sm sm:text-lg max-w-2xl mx-auto px-2">
            Свежие новости и релизы из нашего Telegram-канала
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-4 sm:gap-5">
          {posts.map((post, i) => (
            <motion.a
              key={post.title}
              href={post.link}
              target="_blank"
              rel="noopener noreferrer"
              {...fadeIn}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              whileHover={{ y: -2 }}
              className="group block rounded-lg border border-border bg-card p-5 sm:p-6 transition-colors hover:border-primary/40"
            >
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs text-muted-foreground font-mono">{post.date}</span>
                <ExternalLink className="h-3.5 w-3.5 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <h3 className="font-semibold text-foreground mb-2 text-sm sm:text-base">{post.title}</h3>
              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed mb-4">{post.text}</p>
              <div className="flex items-center justify-between pt-3 border-t border-border">
                <div className="flex items-center gap-2">
                  {Object.entries(post.reactions).map(([emoji, count]) => (
                    <span key={emoji} className="inline-flex items-center gap-1 text-xs text-muted-foreground">
                      {emoji} {count}
                    </span>
                  ))}
                </div>
                <span className="text-xs text-muted-foreground">{post.views} просмотров</span>
              </div>
            </motion.a>
          ))}
        </div>

        <motion.div {...fadeIn} transition={{ duration: 0.5, delay: 0.3 }} className="text-center mt-8">
          <a
            href="https://t.me/ru_tgcparser"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-primary hover:text-primary/80 transition-colors font-medium"
          >
            Подписаться на канал
            <ExternalLink className="h-3.5 w-3.5" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};
