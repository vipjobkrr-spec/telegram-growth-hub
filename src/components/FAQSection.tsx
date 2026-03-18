import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "Что такое tgcparser и как он работает?",
    a: "tgcparser — это сервис для парсинга и аналитики Telegram-каналов. Он автоматически собирает посты, аудиторию и статистику из открытых каналов, фильтрует данные с помощью ИИ и предоставляет удобные отчёты.",
  },
  {
    q: "Это легально?",
    a: "Да. Мы работаем только с публично доступной информацией из открытых Telegram-каналов. Сервис не нарушает пользовательское соглашение Telegram и соответствует законодательству о персональных данных.",
  },
  {
    q: "Какие каналы можно парсить?",
    a: "Любые публичные Telegram-каналы и чаты. Закрытые каналы доступны только если у вас есть к ним доступ через ваш аккаунт.",
  },
  {
    q: "Как быстро начать работу?",
    a: "Регистрация занимает 2 минуты. Укажите каналы-источники, настройте фильтры и запустите сбор данных. Первые результаты появятся в течение нескольких минут.",
  },
  {
    q: "Можно ли использовать для лидогенерации?",
    a: "Да, это один из основных сценариев. Вы можете собирать активную аудиторию из тематических каналов, фильтровать по активности и вовлечённости, а затем использовать для таргетированных рассылок.",
  },
  {
    q: "Есть ли бесплатный тариф?",
    a: "Да, тариф «Старт» позволяет парсить до 5 каналов с базовой аналитикой. Для расширенных возможностей доступны тарифы «Pro» и «Бизнес».",
  },
  {
    q: "Как работает ИИ-фильтрация?",
    a: "Наш ИИ анализирует контент постов, определяет тематику, тональность и релевантность. Вы задаёте критерии, а система автоматически отбирает только подходящие публикации.",
  },
  {
    q: "Можно ли выгрузить данные?",
    a: "Да, все данные можно экспортировать в CSV, Excel или JSON. На тарифах Pro и Бизнес доступна интеграция через API.",
  },
];

export const FAQSection = () => {
  return (
    <section className="py-16 sm:py-24 bg-background">
      <div className="container max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10 sm:mb-14"
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-3">
            Частые вопросы
          </h2>
          <p className="text-muted-foreground text-sm sm:text-base">
            Ответы на популярные вопросы о сервисе
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, i) => (
              <AccordionItem key={i} value={`item-${i}`} className="border-border">
                <AccordionTrigger className="text-left text-sm sm:text-base text-foreground hover:no-underline hover:text-primary">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-sm leading-relaxed">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};
