import { useState } from "react";
import { tariffs } from "./mocks/tariffs";
import API_IMAGE from "./assets/api.png";

const Arrow = () => (
  <span aria-hidden="true" className="text-lg leading-none">
    ↗
  </span>
);

const features = [
  {
    icon: "◌",
    title: "Мгновенные депозиты",
    text: "Приём депозитов из любой точки мира — средства поступают моментально",
  },
  {
    icon: "⌘",
    title: "Простая интеграция",
    text: "Готовые модули, API и понятная документация для запуска за несколько минут.",
  },
  {
    icon: "⌁",
    title: "Прозрачная аналитика",
    text: "Следите за операциями, балансом, статусами депозитов и результатами AML-проверки в одном кабинете",
  },
];

const steps = [
  ["01", "Создайте аккаунт", "Зарегистрируйтесь и добавьте свой проект."],
  [
    "02",
    "Выберите тариф",
    "Выберите тариф, соответствующий вашим потребностям.",
  ],
  [
    "03",
    "Принимайте депозиты",
    "Получайте уведомления и управляйте финансами в кабинете.",
  ],
];

const dashboardTools = [
  [
    "01",
    "Баланс и операции",
    "Контролируйте поступления, токены и движение средств в реальном времени.",
  ],
  [
    "02",
    "Сделки и кошельки",
    "Создавайте сделки, следите за статусами и управляйте адресами кошельков.",
  ],
  [
    "03",
    "API и Webhook",
    "Подключайте продукт к своей системе и получайте уведомления о событиях.",
  ],
  [
    "04",
    "Аналитика",
    "Смотрите ключевые показатели, динамику депозитов и активность клиентов.",
  ],
  [
    "05",
    "AML-проверка",
    "Каждый депозит автоматически проходит AML-проверку перед обработкой.",
  ],
];

const tariffAccents = [
  {
    accent: "rgba(51, 133, 240, .18)",
    glow: "radial-gradient(circle, rgba(51, 133, 240, .3) 0%, transparent 72%)",
  },
  {
    accent: "rgba(32, 200, 168, .22)",
    glow: "radial-gradient(circle, rgba(32, 200, 168, .28) 0%, transparent 72%)",
  },
  {
    accent: "rgba(242, 193, 78, .22)",
    glow: "radial-gradient(circle, rgba(242, 193, 78, .28) 0%, transparent 72%)",
  },
];

const faqs = [
  [
    "Как быстро можно начать работу?",
    "Обычно подключение занимает несколько минут: создайте проект, выберите удобный способ интеграции и сформируйте первую платёжную ссылку.",
  ],
  [
    "Какие способы интеграции доступны?",
    "Можно использовать API, готовые CMS-модули или платёжные ссылки для быстрых продаж без разработки.",
  ],
  [
    "Есть ли комиссия за подключение?",
    "Подключение и создание аккаунта бесплатны. Условия обработки депозитов зависят от выбранного тарифа.",
  ],
  [
    "В каких сетях мы принимаем депозиты?",
    "Мы принимаем депозиты в сетях USDT TRC20, USDT ERC20 и USDT BEP20.",
  ],
  [
    "Могу ли я получить прямой доступ к одному из своих кошельков в админ панели?",
    "Да, в админ панели вы можете получить сид-фразу или апи-ключ от выбранного вами кошелька",
  ],
  [
    "Что будет если депозит не пройдет AML-проверку?",
    "1. Данный кошелек не будет участвовать в приеме депозитов.\n2. Вы получите уведомление, что депозит не прошел AML-проверку. Мы советуем подключить данный кошелек к вашему крипто-приложению и вернуть депозит отправителю.",
  ],
];

function App() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const scrollToSection = (id: string) => {
    setMenuOpen(false);
    window.setTimeout(
      () =>
        document
          .getElementById(id)
          ?.scrollIntoView({ behavior: "smooth", block: "start" }),
      0,
    );
  };

  return (
    <main className="min-h-screen overflow-hidden bg-[#0b111e] text-[#ebf2f5] selection:bg-[#3385f0]">
      <nav className="sticky top-0 z-30 mx-auto flex max-w-[1320px] items-center justify-between border-b border-white/[.08] bg-[#080c17]/95 px-6 py-4 backdrop-blur lg:px-10">
        <a
          className="aurora-logo flex items-center gap-2 text-[22px] font-medium tracking-[-.8px]"
          href="#top"
        >
          <img src="/aurora.svg" className="h-10 w-10" alt="CryptoCloud" />
          <span className="aurora-word">CryptoCloud</span>
        </a>
        <div className="hidden items-center gap-6 text-sm font-medium text-[#9caeb8] md:flex">
          <a
            onClick={(event) => {
              event.preventDefault();
              scrollToSection("solutions");
            }}
            className="transition hover:text-white"
            href="#solutions"
          >
            Решения
          </a>
          <a
            onClick={(event) => {
              event.preventDefault();
              scrollToSection("how");
            }}
            className="transition hover:text-white"
            href="#how"
          >
            Как это работает
          </a>
          <a
            onClick={(event) => {
              event.preventDefault();
              scrollToSection("cabinet");
            }}
            className="transition hover:text-white"
            href="#cabinet"
          >
            Кабинет
          </a>
          <a
            onClick={(event) => {
              event.preventDefault();
              scrollToSection("tariffs");
            }}
            className="transition hover:text-white"
            href="#tariffs"
          >
            Тарифы
          </a>
          <a
            onClick={(event) => {
              event.preventDefault();
              scrollToSection("faq");
            }}
            className="transition hover:text-white"
            href="#faq"
          >
            Вопросы
          </a>
        </div>
        <div className="hidden items-center gap-3 md:flex">
          <button
            onClick={() => scrollToSection("cabinet")}
            className="rounded-xl px-5 py-2.5 text-sm font-semibold text-[#ebf2f5]"
          >
            Войти
          </button>
          <button
            onClick={() => scrollToSection("tariffs")}
            className="rounded-xl bg-[#245da8] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-[#2b71cc]"
          >
            Начать бесплатно
          </button>
        </div>
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="grid size-10 place-items-center rounded-xl border border-white/20 text-xl md:hidden"
          aria-label="Открыть меню"
        >
          ☰
        </button>
        {menuOpen && (
          <div className="absolute left-6 right-6 top-20 rounded-xl border border-white/10 bg-[#162338] p-5 shadow-xl md:hidden">
            <div className="flex flex-col gap-4 text-sm font-semibold">
              <a onClick={() => scrollToSection("solutions")} href="#solutions">
                Решения
              </a>
              <a onClick={() => scrollToSection("how")} href="#how">
                Как это работает
              </a>
              <a onClick={() => scrollToSection("cabinet")} href="#cabinet">
                Кабинет
              </a>
              <a onClick={() => scrollToSection("tariffs")} href="#tariffs">
                Тарифы
              </a>
              <a onClick={() => scrollToSection("faq")} href="#faq">
                Вопросы
              </a>
              <button
                onClick={() => scrollToSection("tariffs")}
                className="rounded-xl bg-[#245da8] px-5 py-3 text-white"
              >
                Начать бесплатно
              </button>
            </div>
          </div>
        )}
      </nav>

      <section
        id="top"
        className="relative mx-auto max-w-[1320px] px-6 pb-16 pt-12 lg:px-10 lg:pb-28 lg:pt-20"
      >
        {/* <div className="absolute -right-24 top-8 size-[430px] rounded-full bg-blue-200/55 blur-[110px]" /> */}
        <div className="relative grid items-center gap-14 lg:grid-cols-[1.05fr_.95fr]">
          <div>
            <h1 className="max-w-3xl text-5xl font-semibold leading-[.98] tracking-[-.055em] sm:text-6xl lg:text-7xl">
              Автоматический сервис обработки{" "}
              <span className="text-[#3385f0]">депозитов в криптовалюте</span>
            </h1>
            <p className="mt-7 max-w-xl text-lg leading-relaxed text-[#9caeb8]">
              Единая платформа обработки депозитов в криптовалюте. Быстрое
              подключение, лёгкое масштабирование, простое управление.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <button
                onClick={() =>
                  window.open(
                    "https://admin-crypto-invoices.leverageindo.group",
                    "_blank",
                    "noopener,noreferrer",
                  )
                }
                className="flex items-center gap-3 rounded-xl bg-[#245da8] px-6 py-4 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-[#2b71cc]"
              >
                Создать аккаунт <Arrow />
              </button>
              <a
                className="rounded-xl border border-white/15 bg-[#162338] px-6 py-4 text-sm font-semibold transition hover:border-[#3385f0]"
                onClick={(event) => {
                  event.preventDefault();
                  scrollToSection("solutions");
                }}
              >
                Посмотреть возможности
              </a>
            </div>
            <div className="mt-11 flex items-center gap-8 text-sm text-[#9caeb8]">
              <div>
                <b className="block text-xl text-[#ebf2f5]">USDT TRC20</b>
              </div>
              <div className="h-9 w-px bg-white/15" />
              <div>
                <b className="block text-xl text-[#ebf2f5]">USDT ERC20</b>
              </div>
              <div className="h-9 w-px bg-white/15" />
              <div>
                <b className="block text-xl text-[#ebf2f5]">USDT BEP20</b>
              </div>
            </div>
          </div>
          <div className="relative mx-auto w-full max-w-[520px]">
            <div className="absolute -inset-7 rounded-[2rem] bg-gradient-to-br from-[#007047]/50 via-[#018ec5]/50 to-[#05397e]/50 blur-2xl" />
            <div className="relative rounded-2xl border border-white/[.12] bg-[#162338] p-5 shadow-2xl sm:p-7">
              <div className="flex items-center justify-between border-b border-white/10 pb-5 text-sm text-[#9caeb8]">
                <span className="flex items-center gap-2">
                  <i className="size-2 rounded-full bg-[#3385f0]" />
                  Обзор депозитов
                </span>
              </div>
              <div className="py-8">
                <p className="text-sm text-[#9caeb8]">Баланс проекта</p>
                <p className="mt-1 text-4xl font-semibold tracking-tight text-[#ebf2f5]">
                  $ 28,450.32
                </p>
                <p className="mt-2 text-sm text-[#35b084]">
                  ↗ +18.4% за этот месяц
                </p>
              </div>
              <div className="rounded-xl border border-white/[.1] bg-[#1a2840] p-5 text-[#ebf2f5]">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs text-[#9caeb8]">Последняя операция</p>
                    <p className="mt-1 font-semibold">Invoice #84291</p>
                  </div>
                  <span className="rounded-md bg-[#05573a] px-3 py-1 text-xs font-bold text-[#bbE4d5]">
                    Успешно
                  </span>
                </div>
                <div className="mt-5 flex items-end gap-2">
                  {[38, 54, 43, 70, 61, 91, 78, 106, 92, 123].map(
                    (height, i) => (
                      <span
                        key={i}
                        style={{ height }}
                        className="w-full rounded-sm bg-gradient-to-t from-[#3385f0] to-[#7db1f5]"
                      />
                    ),
                  )}
                </div>
              </div>
              <div className="mt-5 grid grid-cols-3 gap-3 text-center text-xs text-[#9caeb8]">
                <div className="rounded-lg bg-[#1a2840] py-3">USDT</div>
                <div className="rounded-lg bg-[#1a2840] py-3">BTC</div>
                <div className="rounded-lg bg-[#1a2840] py-3">ETH</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="solutions"
        className="border-y border-white/[.08] bg-[#080c17] px-6 py-20 lg:px-10 lg:py-28"
      >
        <div className="mx-auto max-w-[1240px]">
          <p className="text-sm font-semibold uppercase tracking-[.16em] text-[#589bf3]">
            Всё необходимое
          </p>
          <div className="mt-5 flex flex-col justify-between gap-6 md:flex-row">
            <h2 className="max-w-3xl text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
              Автоматическая обработка депозитов без лишней сложности
            </h2>
            <p className="max-w-sm text-[#9caeb8] italic">
              Инструмент для автоматического приёма депозитов
            </p>
          </div>
          <div className="mt-14 grid gap-4 md:grid-cols-3">
            {features.map((item) => (
              <article
                key={item.title}
                className="group rounded-xl border border-white/[.1] bg-[#162338] p-7 transition hover:-translate-y-1 hover:border-[#3385f0] hover:bg-[#1a2840]"
              >
                <span className="flex size-12 items-center justify-center rounded-lg bg-[#20304d] text-2xl leading-none text-[#7db1f5]">
                  {item.icon}
                </span>
                <h3 className="mt-14 text-xl font-semibold">{item.title}</h3>
                <p className="mt-3 leading-relaxed text-[#9caeb8]">
                  {item.text}
                </p>
                <button className="mt-7 flex items-center gap-2 text-sm font-semibold text-[#589bf3]">
                  Узнать больше <Arrow />
                </button>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="how" className="px-6 py-20 lg:px-10 lg:py-28">
        <div className="mx-auto max-w-[1240px]">
          <div className="grid gap-8 lg:grid-cols-2">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[.16em] text-[#589bf3]">
                Три шага
              </p>
              <h2 className="mt-5 max-w-lg text-4xl font-semibold tracking-tight sm:text-5xl">
                От регистрации до первого депозита
              </h2>
            </div>
            <p className="self-end italic max-w-md text-lg leading-relaxed text-[#9caeb8]">
              Понятный процесс для команд любого размера. Никаких сложных
              настроек и долгого ожидания.
            </p>
          </div>
          <div className="mt-14 grid gap-4 md:grid-cols-3">
            {steps.map(([number, title, text]) => (
              <div
                key={number}
                className="rounded-xl border border-white/[.1] bg-[#162338] p-7"
              >
                <span className="text-sm font-bold text-[#589bf3]">
                  {number}
                </span>
                <div className="my-12 h-px bg-white/10" />
                <h3 className="text-xl font-semibold">{title}</h3>
                <p className="mt-3 leading-relaxed text-[#9caeb8]">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-16 lg:px-10 lg:py-24">
        <div className="mx-auto max-w-[1240px] border-y border-white/[.1] py-10 md:py-14">
          <p className="mb-5 text-sm font-semibold uppercase tracking-[.16em] text-[#589bf3]">
            Как это работает
          </p>
          <div>
            <h2 className="text-4xl max-w-4xl font-semibold leading-[1.08] tracking-tight sm:text-5xl">
              Подключите систему один раз
            </h2>
            <p className="mt-6  text-lg leading-relaxed text-[#9caeb8]">
              Создайте проект, добавьте удобный способ интеграции и сформируйте
              счёт. Клиент оплачивает его в выбранной валюте, а вы сразу видите
              статус операции и поступление средств в личном кабинете. API и
              Webhook передают обновления в вашу систему автоматически.
            </p>
          </div>
          <div className="mt-10 overflow-hidden rounded-xl border border-white/[.1] bg-[#0b1120] shadow-[0_24px_70px_rgba(0,0,0,.28)] md:mt-14">
            <img
              src={API_IMAGE}
              alt="Интерфейс подключения API и Webhook"
              className="h-auto w-full"
            />
          </div>
        </div>
      </section>

      <section
        id="cabinet"
        className="border-y border-white/[.08] bg-[#080c17] px-6 py-20 lg:px-10 lg:py-28"
      >
        <div className="mx-auto max-w-[1240px]">
          <div className="grid gap-10 lg:grid-cols-[.8fr_1.2fr]">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[.16em] text-[#589bf3]">
                Личный кабинет
              </p>
              <h2 className="mt-5 text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
                Управляйте всеми депозитами из одного окна
              </h2>
              <p className="mt-6 max-w-md text-lg leading-relaxed text-[#9caeb8]">
                Панель CryptoCloud объединяет депозиты, балансы и технические
                настройки в одном эко-системе.
              </p>
              <a
                href="#top"
                className="mt-8 inline-flex rounded-xl border border-white/15 bg-[#162338] px-5 py-3 text-sm font-semibold transition hover:border-[#3385f0]"
              >
                Посмотреть демо кабинета
              </a>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {dashboardTools.map(([number, title, text]) => (
                <article
                  key={number}
                  className="rounded-xl border border-white/[.1] bg-[#162338] p-6 transition hover:border-[#3385f0] hover:bg-[#1a2840]"
                >
                  <span className="text-sm font-bold text-[#589bf3]">
                    {number}
                  </span>
                  <h3 className="mt-8 text-lg font-semibold">{title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-[#9caeb8]">
                    {text}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="tariffs" className="px-6 py-20 lg:px-10 lg:py-28">
        <div className="mx-auto max-w-[1240px]">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[.16em] text-[#589bf3]">
                Тарифы
              </p>
              <h2 className="mt-5 text-4xl font-semibold tracking-tight sm:text-5xl">
                Выберите удобный формат сотрудничества
              </h2>
            </div>
            <p className="max-w-sm text-[#9caeb8] italic">
              Начните бесплатно и переходите на следующий тариф вместе с ростом
              вашего бизнеса.
            </p>
          </div>
          <div className="mt-14 grid gap-4 lg:grid-cols-3">
            {tariffs.items
              .filter((item) => item.plan_type !== "free")
              .map((tariff, index) => {
                const version = tariff.active_version;
                const isFree = tariff.plan_type === "free";
                const visual = tariffAccents[index % tariffAccents.length];
                const period = `${version.periods.count} ${version.periods.unit === "month" ? "месяц" : version.periods.unit}`;

                return (
                  <article
                    key={tariff.id}
                    className="relative flex min-h-[420px] flex-col justify-between overflow-hidden rounded-2xl border border-white/[.1] bg-[#162338] p-7"
                  >
                    <div
                      className="pointer-events-none absolute -right-20 -top-20 size-56 rounded-full blur-2xl"
                      style={{ background: visual.glow }}
                    />
                    <div className="relative">
                      <div className="flex items-start justify-between">
                        <span
                          className="rounded-lg border border-white/10 px-3 py-1 text-xs font-semibold text-white"
                          style={{ background: visual.accent }}
                        >
                          {isFree
                            ? "Free"
                            : tariff.purchase_mode === "repeatable"
                              ? "Recurring"
                              : "One-time"}
                        </span>
                        <span className="text-xl text-white/45">↗</span>
                      </div>
                      <h3 className="mt-6 text-2xl font-bold">{tariff.name}</h3>
                      <p className="mt-2 min-h-11 text-sm leading-relaxed text-white/55">
                        {tariff.description}
                      </p>
                      <div className="mt-7 flex items-baseline gap-2">
                        <strong className="text-4xl font-bold leading-none tracking-[-.04em]">
                          {version.price_amount} {version.currency}
                        </strong>
                        <span className="text-sm text-white/50">
                          / {period}
                        </span>
                      </div>
                      <ul className="mt-7 space-y-3 rounded-xl border border-white/[.06] bg-[#0b111e]/35 p-4 text-sm text-white/80">
                        <li className="flex items-center gap-3">
                          <span
                            className="grid size-[18px] place-items-center rounded-full border border-white/10 text-xs"
                            style={{ background: visual.accent }}
                          >
                            ✓
                          </span>
                          {version.tokens_per_period} токенов на период
                        </li>
                        {/* <li className="flex items-center gap-3">
                          <span
                            className="grid size-[18px] place-items-center rounded-full border border-white/10 text-xs"
                            style={{ background: visual.accent }}
                          >
                            ✓
                          </span>
                          {tariff.purchase_mode === "repeatable"
                            ? "Повторная покупка"
                            : "Разовая покупка"}
                        </li> */}
                        <li className="flex items-center gap-3">
                          <span
                            className="grid size-[18px] place-items-center rounded-full border border-white/10 text-xs"
                            style={{ background: visual.accent }}
                          >
                            ✓
                          </span>
                          {period}
                        </li>
                      </ul>
                    </div>
                    <button className="relative mt-8 flex w-full items-center justify-center gap-2 rounded-xl bg-[#245da8] px-5 py-3 text-sm font-bold text-white transition hover:bg-[#2b71cc]">
                      {isFree
                        ? "Попробовать бесплатно"
                        : `Купить ${version.price_amount} ${version.currency}`}{" "}
                      <Arrow />
                    </button>
                  </article>
                );
              })}
          </div>
          <div className="relative mt-8 overflow-hidden rounded-2xl  bg-gradient-to-r from-[#007047] via-[#018ec5] to-[#05397e] px-6 py-5 text-center shadow-[0_16px_45px_rgba(47,150,221,.3)]">
            <div className="pointer-events-none absolute -left-8 top-1/2 size-28 -translate-y-1/2 rounded-full bg-white/25 blur-3xl" />
            <div className="pointer-events-none absolute -right-8 top-1/2 size-28 -translate-y-1/2 rounded-full bg-[#057bb9]/20 blur-3xl" />
            <p className="relative flex flex-wrap items-center justify-center gap-x-2 gap-y-1 text-base font-semibold text-[#eeeeee] sm:text-lg">
              Зарегистрируйтесь и получите
              <span className="font-extrabold text-[#e6e6e6]">200 токенов</span>
              на тестирование в подарок
            </p>
          </div>
        </div>
      </section>

      <section className="border-y border-white/[.08] bg-[#080c17] px-6 py-20 lg:px-10 lg:py-28">
        <div className="mx-auto max-w-[1240px]">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[.16em] text-[#589bf3]">
              Прозрачные условия
            </p>
            <h2 className="mt-5 text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
              Принцип работы и стоимость
            </h2>
          </div>

          <div className="mt-12 grid gap-4 lg:grid-cols-2">
            <article className="rounded-2xl border border-white/[.1] bg-[#162338] p-7 sm:p-8">
              <span className="grid size-12 place-items-center rounded-xl bg-[#203d65] text-xl text-[#7db1f5]">
                %
              </span>
              <h3 className="mt-8 text-2xl font-semibold">
                Стоимость приема депозитов
              </h3>
              <p className="mt-4 text-xl font-semibold text-[#7db1f5]">
                Комиссия за прием депозитов — 0%.
              </p>
              <p className="mt-4 leading-relaxed text-[#9caeb8]">
                Вы платите только за API-токены.
              </p>
            </article>

            <article className="rounded-2xl border border-white/[.1] bg-[#162338] p-7 sm:p-8">
              <span className="grid size-12 place-items-center rounded-xl bg-[#203d65] text-xl text-[#7db1f5]">
                ◈
              </span>
              <h3 className="mt-8 text-2xl font-semibold">
                Прямой доступ к кошелькам и аккумуляции
              </h3>
              <p className="mt-4 leading-relaxed text-[#9caeb8]">
                Мы не храним ваши средства у себя — у вас всегда остается прямой
                доступ к кошелькам. Вы можете подключить свой кошелек к любому
                крипто приложению и управлять своими депозитами.
              </p>
            </article>
          </div>

          <div className="mt-16 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[.16em] text-[#589bf3]">
                Как происходит прием депозита
              </p>
            </div>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {[
              [
                "01",
                "Создание запроса",
                "Вы создаете запрос для приема депозита.",
                "10 токенов",
              ],
              [
                "02",
                "Поступление депозита",
                "Депозит поступает на один из ваших кошельков.",
                "0 токенов",
              ],
              [
                "03",
                "AML-проверка",
                "Транзакция проходит AML-проверку.",
                "4 токена",
              ],
              [
                "04",
                "Аккумуляция средств",
                "Если AML-проверка пройдена успешно, средства автоматически аккумулируются на одном из  ваших свип-кошельков.",
                "6 токенов",
              ],
            ].map(([number, title, text, tokens]) => (
              <article
                key={number}
                className="relative min-h-64 overflow-hidden rounded-2xl border border-white/[.1] bg-[#162338] p-6"
              >
                <div className="flex justify-between">
                  <span className="text-sm font-bold text-[#7db1f5]">
                    {number}
                  </span>
                  <span className="text-sm font-bold text-[#7db1f5]">
                    {tokens}
                  </span>
                </div>
                <div className="my-10 h-px bg-white/10" />
                <h4 className="text-xl font-semibold">{title}</h4>
                <p className="mt-3 text-sm leading-relaxed text-[#9caeb8]">
                  {text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="faq" className="px-6 pb-20 lg:px-10 lg:pb-28">
        <div className="mx-auto max-w-[1240px] rounded-2xl border border-white/[.12] bg-[#1a2840] px-6 py-14 sm:px-10 lg:p-16">
          <div className="grid gap-12 lg:grid-cols-[.78fr_1.22fr]">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[.16em] text-[#589bf3]">
                FAQ
              </p>
              <h2 className="mt-5 text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
                Остались вопросы?
              </h2>
              <p className="mt-5 max-w-sm text-lg text-[#9caeb8]">
                Здесь собрали главное о запуске и работе с платформой.
              </p>
              <button className="mt-8 rounded-xl bg-[#245da8] px-5 py-3 text-sm font-semibold text-white hover:bg-[#2b71cc]">
                Написать в поддержку
              </button>
            </div>
            <div className="divide-y divide-white/10">
              {faqs.map(([q, a], i) => (
                <div key={q} className="py-5 first:pt-0">
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    className="flex w-full items-center justify-between gap-5 text-left text-lg font-semibold"
                  >
                    <span>{q}</span>
                    <div className="flex size-8 shrink-0 justify-center text-center leading-6.5 rounded-md border border-[#589bf3] text-xl text-[#589bf3]">
                      {openFaq === i ? "−" : "+"}
                    </div>
                  </button>
                  {openFaq === i && (
                    <p className="max-w-xl whitespace-pre-line pt-4 leading-relaxed text-[#9caeb8]">
                      {a}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/[.08] bg-[#080c17] px-6 py-9 lg:px-10">
        <div className="mx-auto flex max-w-[1240px] flex-col items-center justify-between gap-5 text-sm text-[#9caeb8] md:flex-row">
          <a
            className="aurora-logo flex items-center gap-2 text-lg font-medium tracking-[-.5px]"
            href="#top"
          >
            <img src="/aurora.svg" className="h-8 w-8" alt="CryptoCloud" />
            <span className="aurora-word">CryptoCloud</span>
          </a>
          <p>© 2026 CryptoCloud. Digital payments made simple.</p>
          <div className="flex gap-5">
            <a href="#top">Privacy</a>
            <a href="#top">Terms</a>
          </div>
        </div>
      </footer>
    </main>
  );
}

export default App;
