import { motion } from "framer-motion";
import { Zap, Filter, Users, Clock, Bot, Shield, BarChart3, FileText, Image } from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "Молниеносный мониторинг",
    description: "Парсинг сотен каналов и чатов одновременно в реальном времени.",
    span: "lg:col-span-1",
  },
  {
    icon: Filter,
    title: "Умная фильтрация",
    description: "Отбор по просмотрам, реакциям, ER, ключевым словам и типу контента.",
    span: "lg:col-span-1",
  },
  {
    icon: Bot,
    title: "AI-рерайт через ChatGPT",
    description: "Автоматическая уникализация контента с сохранением смысла и стиля.",
    span: "lg:col-span-1",
  },
  {
    icon: Clock,
    title: "Отложенный постинг",
    description: "Гибкое расписание публикаций по таймеру с настройкой для каждого дня.",
    span: "lg:col-span-1",
  },
  {
    icon: Users,
    title: "Сбор целевой аудитории",
    description: "Извлечение контактов авторов сообщений для продвижения и партнёрств.",
    span: "lg:col-span-1",
  },
  {
    icon: Shield,
    title: "Защита от рекламы и дублей",
    description: "Фильтрация рекламных постов и исключение повторяющегося контента.",
    span: "lg:col-span-1",
  },
  {
    icon: Image,
    title: "Водяные знаки",
    description: "Брендирование изображений, видео и анимаций вашим водяным знаком.",
    span: "lg:col-span-1",
  },
  {
    icon: FileText,
    title: "Экспорт в CSV / TXT",
    description: "Сохранение контента и медиафайлов для анализа и дальнейшего использования.",
    span: "lg:col-span-1",
  },
  {
    icon: BarChart3,
    title: "Статистика и аналитика",
    description: "Отбор контента по количеству реакций, просмотров, репостов и комментариев.",
    span: "lg:col-span-1",
  },
];

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
};

export const FeaturesGrid = () => {
  return (
    <section className="py-24 md:py-32">
      <div className="container">
        <motion.div {...fadeIn} transition={{ duration: 0.5 }} className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tighter mb-4">
            Полный арсенал для <span className="text-gradient-primary">Telegram-маркетинга</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Всё что нужно для автоматизации роста и монетизации канала в одном инструменте.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              {...fadeIn}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className={`group rounded-lg border border-border bg-card p-6 transition-colors hover:border-muted-foreground ${feature.span}`}
            >
              <feature.icon className="h-5 w-5 text-primary mb-4" />
              <h3 className="font-semibold text-foreground mb-2">{feature.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
