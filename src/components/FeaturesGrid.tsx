import { motion } from "framer-motion";
import { Zap, Filter, Users, Clock, Bot, Shield, BarChart3, FileText, Image } from "lucide-react";

const features = [
  { icon: Zap, title: "Молниеносный мониторинг", description: "Парсинг сотен каналов и чатов одновременно в реальном времени." },
  { icon: Filter, title: "Умная фильтрация", description: "Отбор по просмотрам, реакциям, ER, ключевым словам и типу контента." },
  { icon: Bot, title: "AI-рерайт через ChatGPT", description: "Автоматическая уникализация контента с сохранением смысла и стиля." },
  { icon: Clock, title: "Отложенный постинг", description: "Гибкое расписание публикаций по таймеру с настройкой для каждого дня." },
  { icon: Users, title: "Сбор целевой аудитории", description: "Извлечение контактов авторов сообщений для продвижения и партнёрств." },
  { icon: Shield, title: "Защита от рекламы и дублей", description: "Фильтрация рекламных постов и исключение повторяющегося контента." },
  { icon: Image, title: "Водяные знаки", description: "Брендирование изображений, видео и анимаций вашим водяным знаком." },
  { icon: FileText, title: "Экспорт в CSV / TXT", description: "Сохранение контента и медиафайлов для анализа и дальнейшего использования." },
  { icon: BarChart3, title: "Статистика и аналитика", description: "Отбор контента по количеству реакций, просмотров, репостов и комментариев." },
];

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
};

export const FeaturesGrid = () => {
  return (
    <section className="py-16 sm:py-24 md:py-32">
      <div className="container">
        <motion.div {...fadeIn} transition={{ duration: 0.5 }} className="text-center mb-10 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold tracking-tighter mb-3 sm:mb-4">
            Полный арсенал для <span className="text-gradient-primary">Telegram-маркетинга</span>
          </h2>
          <p className="text-muted-foreground text-sm sm:text-lg max-w-2xl mx-auto px-2">
            Всё что нужно для автоматизации роста и монетизации канала в одном инструменте.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
          {features.map((feature, i) => {
            const gradients = ['card-tg', 'card-tg-blue', 'card-tg-purple', 'card-tg-teal', 'card-tg', 'card-tg-blue', 'card-tg-purple', 'card-tg-teal', 'card-tg'];
            return (
            <motion.div
              key={feature.title}
              {...fadeIn}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className={`group rounded-lg border border-border/60 ${gradients[i % gradients.length]} card-tg-hover p-4 sm:p-6`}
            >
              <feature.icon className="h-5 w-5 text-primary mb-3 sm:mb-4" />
              <h3 className="font-semibold text-foreground mb-1.5 sm:mb-2 text-sm sm:text-base">{feature.title}</h3>
              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
            </motion.div>
            );
          })}
        </div>
        </div>
      </div>
    </section>
  );
};
