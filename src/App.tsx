import { useState } from "react";

const Arrow = () => (
  <span aria-hidden="true" className="text-lg leading-none">
    ↗
  </span>
);

const features = [
  {
    icon: "◌",
    title: "Мгновенные платежи",
    text: "Принимайте оплату из любой точки мира — средства поступают без ожидания банковских дней.",
  },
  {
    icon: "⌘",
    title: "Простая интеграция",
    text: "Готовые модули, API и понятная документация для запуска за несколько минут.",
  },
  {
    icon: "⌁",
    title: "Прозрачная аналитика",
    text: "Следите за операциями, балансом и статусами платежей в одном кабинете.",
  },
];

const steps = [
  ["01", "Создайте аккаунт", "Зарегистрируйтесь и добавьте свой проект."],
  [
    "02",
    "Подключите оплату",
    "Выберите API, ссылку на оплату или готовый модуль.",
  ],
  [
    "03",
    "Принимайте платежи",
    "Получайте уведомления и управляйте финансами в кабинете.",
  ],
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
    "Подключение и создание аккаунта бесплатны. Условия обработки платежей зависят от выбранного тарифа.",
  ],
];

function App() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main className="min-h-screen overflow-hidden bg-[#0b111e] text-[#ebf2f5] selection:bg-[#3385f0]">
      <nav className="relative z-30 mx-auto flex max-w-[1320px] items-center justify-between border-b border-white/[.08] bg-[#080c17] px-6 py-4 lg:px-10">
        <a
          className="aurora-logo flex items-center gap-2 text-[22px] font-medium tracking-[-.8px]"
          href="#top"
        >
          <img src="/aurora.svg" className="h-10 w-10" alt="CryptoCloud" />
          <span className="aurora-word">CryptoCloud</span>
        </a>
        <div className="hidden items-center gap-8 text-sm font-medium text-[#9caeb8] md:flex">
          <a className="transition hover:text-white" href="#solutions">
            Решения
          </a>
          <a className="transition hover:text-white" href="#how">
            Как это работает
          </a>
          <a className="transition hover:text-white" href="#faq">
            Вопросы
          </a>
        </div>
        <div className="hidden items-center gap-3 md:flex">
          <button className="rounded-xl px-5 py-2.5 text-sm font-semibold text-[#ebf2f5]">
            Войти
          </button>
          <button className="rounded-xl bg-[#245da8] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-[#2b71cc]">
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
              <a href="#solutions">Решения</a>
              <a href="#how">Как это работает</a>
              <a href="#faq">Вопросы</a>
              <button className="rounded-xl bg-[#245da8] px-5 py-3 text-white">
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
              Платежи, которые <span className="text-[#3385f0]">двигают</span>{" "}
              бизнес вперёд
            </h1>
            <p className="mt-7 max-w-xl text-lg leading-relaxed text-[#9caeb8]">
              Единая платформа для приёма цифровых платежей. Быстро
              подключается, легко масштабируется, просто управляется.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <button className="flex items-center gap-3 rounded-xl bg-[#245da8] px-6 py-4 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-[#2b71cc]">
                Создать аккаунт <Arrow />
              </button>
              <a
                href="#solutions"
                className="rounded-xl border border-white/15 bg-[#162338] px-6 py-4 text-sm font-semibold transition hover:border-[#3385f0]"
              >
                Посмотреть возможности
              </a>
            </div>
            <div className="mt-11 flex items-center gap-8 text-sm text-[#9caeb8]">
              <div>
                <b className="block text-xl text-[#ebf2f5]">99.9%</b>доступность
              </div>
              <div className="h-9 w-px bg-white/15" />
              <div>
                <b className="block text-xl text-[#ebf2f5]">24/7</b>поддержка
              </div>
              <div className="h-9 w-px bg-white/15" />
              <div>
                <b className="block text-xl text-[#ebf2f5]">10+</b>активов
              </div>
            </div>
          </div>
          <div className="relative mx-auto w-full max-w-[520px]">
            <div className="absolute -inset-7 rounded-[2rem] bg-gradient-to-br from-[#007047]/50 via-[#018ec5]/50 to-[#05397e]/50 blur-2xl" />
            <div className="relative rounded-2xl border border-white/[.12] bg-[#162338] p-5 shadow-2xl sm:p-7">
              <div className="flex items-center justify-between border-b border-white/10 pb-5 text-sm text-[#9caeb8]">
                <span className="flex items-center gap-2">
                  <i className="size-2 rounded-full bg-[#3385f0]" />
                  Обзор платежей
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
            <h2 className="max-w-2xl text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
              Приём платежей без лишней сложности
            </h2>
            <p className="max-w-sm text-[#9caeb8]">
              Инструменты для онлайн-магазинов, сервисов и цифровых продуктов.
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
                От регистрации до первого платежа
              </h2>
            </div>
            <p className="self-end max-w-md text-lg leading-relaxed text-[#9caeb8]">
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
                    <p className="max-w-xl pt-4 leading-relaxed text-[#9caeb8]">
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
