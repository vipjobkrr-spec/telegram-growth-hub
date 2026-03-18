import { motion } from "framer-motion";
import { Search, Filter, Bot, Send } from "lucide-react";
import dashboardParsing from "@/assets/dashboard-parsing.jpg";
import dashboardAudience from "@/assets/dashboard-audience.jpg";
import dashboardAi from "@/assets/dashboard-ai.jpg";

const steps = [
  {
    step: "01",
    icon: Search,
    title: "Укажите источники",
    description: "Добавьте неограниченный список каналов и чатов для мониторинга — открытых и закрытых, с запретом копирования и без.",
    image: dashboardParsing,
    details: ["Открытые и закрытые чаты", "Переписки с людьми и ботами", "Контент с запретом копирования"],
  },
  {
    step: "02",
    icon: Filter,
    title: "Настройте фильтры и AI",
    description: "Задайте ключевые слова, ER, AI-промпты для модерации и рерайта. Парсер отберёт только релевантный контент.",
    image: dashboardAi,
    details: ["Пропуск повторов и рекламы", "ИИ-модерация текста и изображений", "ChatGPT рерайт и уникализация"],
  },
  {
    step: "03",
    icon: Bot,
    title: "Собирайте аудиторию",
    description: "Находите лидов и целевую аудиторию из чатов по ключевым или AI-запросам с контактными данными.",
    image: dashboardAudience,
    details: ["Имя, юзернейм, телефон", "Дата и ссылка на сообщение", "Один нейрозапрос вместо тысячи ключевых"],
  },
  {
    step: "04",
    icon: Send,
    title: "Публикуйте на автопилоте",
    description: "Отложенный постинг ведёт ваши каналы автоматически — без вашего участия, 24/7.",
    image: null,
    details: ["Гибкое расписание по дням", "Автозапуск при остановке", "Водяные знаки на медиа"],
  },
];

const fadeIn = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
};

export const HowItWorks = () => {
  return (
    <section className="py-16 sm:py-24 md:py-32">
      <div className="container">
        <motion.div {...fadeIn} transition={{ duration: 0.5 }} className="text-center mb-12 sm:mb-20">
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-accent px-4 py-1.5 mb-5">
            <span className="font-mono text-xs text-muted-foreground">Как это работает</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold tracking-tighter mb-3 sm:mb-4">
            От источника до <span className="text-gradient-primary">публикации за минуты</span>
          </h2>
          <p className="text-muted-foreground text-sm sm:text-lg max-w-2xl mx-auto px-2">
            Четыре шага к полной автоматизации контент-маркетинга в Telegram
          </p>
        </motion.div>

        <div className="space-y-12 sm:space-y-20">
          {steps.map((step, i) => (
            <motion.div
              key={step.step}
              {...fadeIn}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`grid lg:grid-cols-2 gap-8 sm:gap-12 items-center ${
                i % 2 === 1 ? "lg:direction-rtl" : ""
              }`}
            >
              {/* Text side */}
              <div className={i % 2 === 1 ? "lg:order-2" : ""}>
                <div className="flex items-center gap-3 mb-4">
                  <span className="font-mono text-xs text-primary bg-primary/10 rounded-full px-3 py-1">
                    Шаг {step.step}
                  </span>
                </div>
                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold tracking-tight mb-3">
                  {step.title}
                </h3>
                <p className="text-muted-foreground text-sm sm:text-base leading-relaxed mb-5">
                  {step.description}
                </p>
                <ul className="space-y-2.5">
                  {step.details.map((detail) => (
                    <li key={detail} className="flex items-center gap-3 text-sm text-foreground">
                      <span className="h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Image side */}
              <div className={i % 2 === 1 ? "lg:order-1" : ""}>
                {step.image ? (
                  <div className="rounded-lg border border-border overflow-hidden glow-primary">
                    <img
                      src={step.image}
                      alt={step.title}
                      className="w-full h-auto"
                      loading="lazy"
                    />
                  </div>
                ) : (
                  <div className="rounded-lg border border-border bg-card p-8 sm:p-12 flex flex-col items-center justify-center text-center min-h-[280px] glow-primary">
                    <motion.div
                      animate={{ scale: [1, 1.1, 1] }}
                      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                      className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-primary/10 mb-6"
                    >
                      <step.icon className="h-7 w-7 text-primary" />
                    </motion.div>
                    <p className="text-lg font-semibold text-foreground mb-2">Автопилот 24/7</p>
                    <p className="text-sm text-muted-foreground max-w-xs">
                      Парсер работает без вашего участия — автозапуск, расписание и брендирование
                    </p>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
