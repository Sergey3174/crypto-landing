import { useState } from "react";
import { tariffs } from "./mocks/tariffs";
import API_IMAGE from "./assets/api.png";
import BG from "./assets/BG.png";
import TRC from "./assets/TRC-20.svg";
import BEP from "./assets/BEP-20.svg";
import ERC from "./assets/ERC-20.svg";
import { MaterialSymbol } from "react-material-symbol-icons";

const Arrow = () => (
  <span aria-hidden="true" className="text-lg leading-none">
    <MaterialSymbol icon="call_made" size={18} filled />
  </span>
);

const features = [
  {
    icon: (
      <MaterialSymbol
        icon="filter_tilt_shift"
        size={32}
        color="#2196f3"
        filled
      />
    ),
    title: "Instant deposits",
    text: "Accept deposits from anywhere in the world — funds arrive instantly.",
  },
  {
    icon: (
      <MaterialSymbol
        icon="keyboard_command_key"
        size={32}
        color="#2196f3"
        filled
      />
    ),
    title: "Simple integration",
    text: "Ready-made modules, API, and clear documentation to get started in minutes.",
  },
  {
    icon: (
      <MaterialSymbol
        icon="data_exploration"
        size={32}
        color="#2196f3"
        filled
      />
    ),
    title: "Clear analytics",
    text: "Track transactions, balances, deposit statuses, and AML check results in one dashboard.",
  },
];

const steps = [
  ["01", "Create an account", "Sign up and add your project."],
  ["02", "Choose a plan", "Choose the plan that suits your needs."],
  [
    "03",
    "Accept deposits",
    "Receive notifications and manage your finances in the dashboard.",
  ],
];

const dashboardTools = [
  [
    "01",
    "Balance and transactions",
    "Monitor incoming funds, tokens, and cash flow in real time.",
  ],
  [
    "02",
    "Deals and wallets",
    "Create deals, track statuses, and manage wallet addresses.",
  ],
  [
    "03",
    "API and webhooks",
    "Connect the product to your system and receive event notifications.",
  ],
  [
    "04",
    "Analytics",
    "View key metrics, deposit trends, and customer activity.",
  ],
  [
    "05",
    "AML check",
    "Every deposit is automatically checked for AML compliance before processing.",
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
    "How quickly can I get started?",
    "Setup usually takes just a few minutes: create a project, choose an integration method, and generate your first payment link.",
  ],
  [
    "Which integration methods are available?",
    "You can use the API, ready-made CMS modules, or payment links to start selling quickly without development.",
  ],
  [
    "Is there an integration fee?",
    "Account creation and integration are free. Deposit processing terms depend on your selected plan.",
  ],
  [
    "Which networks do you accept deposits in?",
    "We accept deposits via USDT TRC20, USDT ERC20, and USDT BEP20.",
  ],
  [
    "Can I get direct access to one of my wallets in the dashboard?",
    "Yes, you can retrieve the seed phrase or API key for your selected wallet in the dashboard.",
  ],
  [
    "What happens if a deposit fails the AML check?",
    "1. This wallet will no longer be used to accept deposits.\n2. You will be notified that the deposit failed the AML check. We recommend connecting this wallet to your crypto app and returning the deposit to the sender.",
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
  const handleOpen = () => {
    window.open(
      "https://admin-crypto-invoices.leverageindo.group",
      "_blank",
      "noopener,noreferrer",
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
            Solutions
          </a>
          <a
            onClick={(event) => {
              event.preventDefault();
              scrollToSection("how");
            }}
            className="transition hover:text-white"
            href="#how"
          >
            How it works
          </a>
          <a
            onClick={(event) => {
              event.preventDefault();
              scrollToSection("cabinet");
            }}
            className="transition hover:text-white"
            href="#cabinet"
          >
            Dashboard
          </a>
          <a
            onClick={(event) => {
              event.preventDefault();
              scrollToSection("tariffs");
            }}
            className="transition hover:text-white"
            href="#tariffs"
          >
            Pricing
          </a>
          <a
            onClick={(event) => {
              event.preventDefault();
              scrollToSection("faq");
            }}
            className="transition hover:text-white"
            href="#faq"
          >
            FAQ
          </a>
        </div>
        <div className="hidden items-center gap-3 md:flex">
          <button
            onClick={handleOpen}
            className="rounded-xl px-5 py-2.5 text-sm font-semibold text-[#ebf2f5]"
          >
            Sign in
          </button>
          <button
            onClick={handleOpen}
            className="rounded-xl bg-[#245da8] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-[#2b71cc]"
          >
            Start for free
          </button>
        </div>
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="grid size-10 place-items-center  rounded-xl border border-white/20 text-xl md:hidden"
          aria-label="Open menu"
        >
          <MaterialSymbol icon="menu" size={28} />
        </button>
        {menuOpen && (
          <div className="absolute left-6 right-6 top-20 rounded-xl border border-white/10 bg-[#162338] p-5 shadow-xl md:hidden">
            <div className="flex flex-col gap-4 text-sm font-semibold">
              <a onClick={() => scrollToSection("solutions")} href="#solutions">
                Solutions
              </a>
              <a onClick={() => scrollToSection("how")} href="#how">
                How it works
              </a>
              <a onClick={() => scrollToSection("cabinet")} href="#cabinet">
                Dashboard
              </a>
              <a onClick={() => scrollToSection("tariffs")} href="#tariffs">
                Pricing
              </a>
              <a onClick={() => scrollToSection("faq")} href="#faq">
                FAQ
              </a>
              <button
                onClick={handleOpen}
                className="rounded-xl bg-[#245da8] px-5 py-3 text-white"
              >
                Start for free
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
              Automated service for processing{" "}
              <span className="text-[#3385f0]">crypto deposits</span>
            </h1>
            <p className="mt-7 max-w-xl text-lg leading-relaxed text-[#9caeb8]">
              A single platform for processing crypto deposits. Fast setup,
              effortless scaling, and simple management.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <button
                onClick={handleOpen}
                className="flex items-center gap-3 rounded-xl bg-[#245da8] px-6 py-4 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-[#2b71cc]"
              >
                Create an account <Arrow />
              </button>
              <a
                className="rounded-xl border border-white/15 bg-[#162338] px-6 py-4 text-sm font-semibold transition hover:border-[#3385f0]"
                onClick={(event) => {
                  event.preventDefault();
                  scrollToSection("solutions");
                }}
              >
                Explore features
              </a>
            </div>
            <div className="mt-11 flex flex-wrap items-center gap-4 text-sm text-[#9caeb8] sm:gap-8">
              <div className="flex items-center gap-2.5">
                <img src={TRC} alt="TRC20" className="size-8" />
                <b className="block text-base text-[#ebf2f5] sm:text-xl">
                  USDT TRC20
                </b>
              </div>
              <div className="hidden h-9 w-px bg-white/15 sm:block" />
              <div className="flex items-center gap-2.5">
                <img src={ERC} alt="ERC20" className="size-8" />
                <b className="block text-base text-[#ebf2f5] sm:text-xl">
                  USDT ERC20
                </b>
              </div>
              <div className="hidden h-9 w-px bg-white/15 sm:block" />
              <div className="flex items-center gap-2.5">
                <img src={BEP} alt="BEP20" className="size-8" />
                <b className="block text-base text-[#ebf2f5] sm:text-xl">
                  USDT BEP20
                </b>
              </div>
            </div>
          </div>
          <div className="relative isolate mx-auto w-full max-w-[520px]">
            <div className="relative h-full w-full overflow-hidden">
              <img
                src={BG}
                alt="Crypto deposit platform illustration"
                className="h-auto w-full"
              />
              <div className="pointer-events-none absolute inset-x-0 top-0 h-[22%] bg-gradient-to-b from-[#0b111e] via-[#0b111e]/75 to-transparent" />
              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[22%] bg-gradient-to-t from-[#0b111e] via-[#0b111e]/75 to-transparent" />
              <div className="pointer-events-none absolute inset-y-0 left-0 w-[16%] bg-gradient-to-r from-[#0b111e] via-[#0b111e]/75 to-transparent" />
              <div className="pointer-events-none absolute inset-y-0 right-0 w-[16%] bg-gradient-to-l from-[#0b111e] via-[#0b111e]/75 to-transparent" />
            </div>
            <div className="absolute -inset-7  rounded-full bg-gradient-to-br from-[#007047]/25 via-[#018ec5]/25 to-[#05397e]/25 blur-2xl" />
          </div>
        </div>
      </section>

      <section
        id="solutions"
        className="border-y border-white/[.08] bg-[#080c17] px-6 py-20 lg:px-10 lg:py-28"
      >
        <div className="mx-auto max-w-[1240px]">
          <p className="text-sm font-semibold uppercase tracking-[.16em] text-[#589bf3]">
            Everything you need
          </p>
          <div className="mt-5 flex flex-col justify-between gap-6 md:flex-row">
            <h2 className="max-w-3xl text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
              Automated deposit processing without unnecessary complexity
            </h2>
            <p className="max-w-sm text-[#9caeb8] italic">
              A tool for automated deposit acceptance
            </p>
          </div>
          <div className="mt-14 grid gap-4 md:grid-cols-3">
            {features.map((item) => (
              <article
                key={item.title}
                className="group rounded-xl flex flex-col border border-white/[.1] bg-[#162338] p-7 transition hover:-translate-y-1 hover:border-[#3385f0] hover:bg-[#1a2840]"
              >
                <span className="flex size-12 items-center justify-center rounded-lg bg-[#20304d] text-2xl leading-none text-[#7db1f5]">
                  {item.icon}
                </span>
                <h3 className="mt-14 text-xl font-semibold">{item.title}</h3>
                <p className="mt-3 leading-relaxed text-[#9caeb8]">
                  {item.text}
                </p>
                <div className="mt-auto">
                  <button
                    onClick={handleOpen}
                    className="mt-7 flex items-center gap-2 text-sm font-semibold text-[#589bf3]"
                  >
                    Learn more <Arrow />
                  </button>
                </div>
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
                Three steps
              </p>
              <h2 className="mt-5 max-w-lg text-4xl font-semibold tracking-tight sm:text-5xl">
                From sign-up to your first deposit
              </h2>
            </div>
            <p className="self-end italic max-w-md text-lg leading-relaxed text-[#9caeb8]">
              A clear process for teams of any size. No complicated setup or
              long waits.
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
            How it works
          </p>
          <div>
            <h2 className="text-4xl max-w-4xl font-semibold leading-[1.08] tracking-tight sm:text-5xl">
              Connect your system once
            </h2>
            <p className="mt-6  text-lg leading-relaxed text-[#9caeb8]">
              Create a project, add your preferred integration method, and
              generate an invoice. Your customer pays in their chosen currency,
              while you instantly see the transaction status and incoming funds
              in your dashboard. API and webhooks automatically send updates to
              your system.
            </p>
          </div>
          <div className="mt-10 overflow-hidden rounded-xl border border-white/[.1] bg-[#0b1120] shadow-[0_24px_70px_rgba(0,0,0,.28)] md:mt-14">
            <img
              src={API_IMAGE}
              alt="API and webhook integration interface"
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
                Dashboard
              </p>
              <h2 className="mt-5 text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
                Manage all deposits from one place
              </h2>
              <p className="mt-6 max-w-md text-lg leading-relaxed text-[#9caeb8]">
                The CryptoCloud dashboard brings together deposits, balances,
                and technical settings in one ecosystem.
              </p>
              <button
                onClick={handleOpen}
                className="mt-8 inline-flex rounded-xl border border-white/15 bg-[#162338] px-5 py-3 text-sm font-semibold transition hover:border-[#3385f0]"
              >
                View dashboard demo
              </button>
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
                Pricing
              </p>
              <h2 className="mt-5 text-4xl font-semibold tracking-tight sm:text-5xl">
                Choose the plan that works for you
              </h2>
            </div>
            <p className="max-w-sm text-[#9caeb8] italic">
              Start for free and move to the next plan as your business grows.
            </p>
          </div>
          <div className="mt-14 grid gap-4 lg:grid-cols-3">
            {tariffs.items
              .filter((item) => item.plan_type !== "free")
              .map((tariff, index) => {
                const version = tariff.active_version;
                const isFree = tariff.plan_type === "free";
                const visual = tariffAccents[index % tariffAccents.length];
                const period = `${version.periods.count} ${version.periods.unit === "month" ? "month" : version.periods.unit}`;

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
                          {version.tokens_per_period} tokens per period
                        </li>
                        {/* <li className="flex items-center gap-3">
                          <span
                            className="grid size-[18px] place-items-center rounded-full border border-white/10 text-xs"
                            style={{ background: visual.accent }}
                          >
                            ✓
                          </span>
                          {tariff.purchase_mode === "repeatable"
                            ? "Recurring purchase"
                            : "One-time purchase"}
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
                    <button
                      onClick={handleOpen}
                      className="relative mt-8 flex w-full items-center justify-center gap-2 rounded-xl bg-[#245da8] px-5 py-3 text-sm font-bold text-white transition hover:bg-[#2b71cc]"
                    >
                      {isFree
                        ? "Try for free"
                        : `Buy for ${version.price_amount} ${version.currency}`}{" "}
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
              Sign up and get
              <span className="font-extrabold text-[#e6e6e6]">200 tokens</span>
              for testing as a gift
            </p>
          </div>
        </div>
      </section>

      <section className="border-y border-white/[.08] bg-[#080c17] px-6 py-20 lg:px-10 lg:py-28">
        <div className="mx-auto max-w-[1240px]">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[.16em] text-[#589bf3]">
              Transparent terms
            </p>
            <h2 className="mt-5 text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
              How it works and pricing
            </h2>
          </div>

          <div className="mt-12 grid gap-4 lg:grid-cols-2">
            <article className="rounded-2xl border border-white/[.1] bg-[#162338] p-7 sm:p-8">
              <span className="grid size-12 place-items-center rounded-xl bg-[#203d65] text-xl text-[#7db1f5]">
                %
              </span>
              <h3 className="mt-8 text-2xl font-semibold">
                Deposit acceptance cost
              </h3>
              <p className="mt-4 text-xl font-semibold text-[#7db1f5]">
                The deposit acceptance fee is 0%.
              </p>
              <p className="mt-4 leading-relaxed text-[#9caeb8]">
                You only pay for API tokens.
              </p>
            </article>

            <article className="rounded-2xl border border-white/[.1] bg-[#162338] p-7 sm:p-8">
              <span className="grid size-12 place-items-center rounded-xl bg-[#203d65] text-xl text-[#7db1f5]">
                <MaterialSymbol icon="nearby" size={30} filled />
              </span>
              <h3 className="mt-8 text-2xl font-semibold">
                Direct access to wallets and fund accumulation
              </h3>
              <p className="mt-4 leading-relaxed text-[#9caeb8]">
                We never hold your funds — you always retain direct access to
                your wallets. You can connect your wallet to any crypto app and
                manage your deposits at any time.
              </p>
            </article>
          </div>

          <div className="mt-16 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[.16em] text-[#589bf3]">
                How deposit acceptance works
              </p>
            </div>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {[
              [
                "01",
                "Create an invoice",
                "You create an invoice to accept a deposit.",
                "10 tokens",
              ],
              [
                "02",
                "Deposit received",
                "The deposit arrives in one of your wallets.",
                "0 tokens",
              ],
              [
                "03",
                "AML check",
                "The transaction undergoes an AML check.",
                "4 tokens",
              ],
              [
                "04",
                "Fund accumulation",
                "If the AML check passes, funds are automatically accumulated in one of your sweep wallets.",
                "6 tokens",
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
                Still have questions?
              </h2>
              <p className="mt-5 max-w-sm text-lg text-[#9caeb8]">
                Here are the essentials about getting started and using the
                platform.
              </p>
              <button className="mt-8 rounded-xl bg-[#245da8] px-5 py-3 text-sm font-semibold text-white hover:bg-[#2b71cc]">
                Contact support
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
