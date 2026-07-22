import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
  MessageCircle,
  Instagram,
  Shield,
  Users,
  Compass,
  ArrowRight,
  Clock,
  CheckCircle2,
} from "lucide-react";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Attorney",
          name: "Dr. Lucas Morais",
          description:
            "Advogado especialista em Direito de Família, com foco em divórcio, guarda, pensão e partilha de bens.",
          areaServed: "BR",
          telephone: "+5562995500330",
          sameAs: ["https://instagram.com/lucasmorais.advogado"],
        }),
      },
    ],
  }),
});

const WHATSAPP_URL =
  "https://wa.me/5562995500330?text=" +
  encodeURIComponent("Olá, Dr. Lucas. Gostaria de conversar sobre o meu caso.");

const fadeUp = {
  initial: { opacity: 0, y: 24, filter: "blur(6px)" },
  whileInView: { opacity: 1, y: 0, filter: "blur(0px)" },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.7, ease: "easeOut" as const },
};

function Index() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[#111111] text-white">
      <BackgroundAura />
      <Nav />
      <main className="relative">
        <Hero />
        <Pains />
        <Services />
        <About />
        <FinalCTA />
        <Footer />
      </main>
    </div>
  );
}

function BackgroundAura() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      <div className="absolute -top-40 left-1/2 h-[720px] w-[720px] -translate-x-1/2 rounded-full bg-[#3B5B8C]/[0.18] blur-3xl" />
      <div className="absolute top-[40%] -left-40 h-[520px] w-[520px] rounded-full bg-[#3B5B8C]/[0.10] blur-3xl" />
      <div className="absolute bottom-0 right-0 h-[520px] w-[520px] rounded-full bg-white/[0.04] blur-3xl" />
      <div
        className="absolute inset-0 opacity-[0.15]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.08) 1px, transparent 0)",
          backgroundSize: "40px 40px",
        }}
      />
    </div>
  );
}

function Nav() {
  return (
    <header className="relative z-20">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6">
        <a href="#top" className="flex items-center gap-2">
          <div className="leading-tight">
            <div className="text-sm font-medium tracking-tight">Lucas Morais</div>
            <div className="text-[10px] uppercase tracking-[0.18em] text-secondary-soft">
              OAB | GO 77.021
            </div>
          </div>
        </a>
        <nav className="hidden items-center gap-8 text-sm text-secondary-soft md:flex">
          <a href="#dores" className="transition-colors hover:text-white">
            Vantagens
          </a>
          <a href="#atuacao" className="transition-colors hover:text-white">
            Requisitos
          </a>
          <a href="#sobre" className="transition-colors hover:text-white">
            Sobre
          </a>
        </nav>
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener"
          className="group inline-flex items-center gap-2 rounded-full bg-whatsapp shadow-whatsapp px-4 py-2 text-sm font-medium text-white transition-all hover:-translate-y-0.5 hover:shadow-whatsapp-lg"
        >
          <MessageCircle className="h-4 w-4" />
          <span className="hidden sm:inline">WhatsApp</span>
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative z-10">
      <div className="absolute bottom-0 left-1/2 w-[200px] -translate-x-1/2 divider-glow" />
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-12 px-6 pb-24 pt-12 md:pt-20 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
        <motion.div
          initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.9, ease: "easeOut" as const }}
          className="flex flex-col justify-center"
        >
          <div className="mb-6 inline-flex w-fit items-center gap-2 rounded-full glass px-3 py-1 text-xs text-secondary-soft">
            <span className="h-1.5 w-1.5 rounded-full bg-[#6B8FC7]" />
            Divórcio em cartório · OAB | GO 77.021
          </div>
          <h1 className="text-5xl leading-[1.02] tracking-tight sm:text-6xl md:text-7xl">
            Divórcio sem estresse. <br className="hidden sm:block" />
            Em cartório, <span className="italic text-secondary-soft">rápido</span> e com{" "}
            <span className="italic text-secondary-soft">proteção total</span>.{" "}
            <br className="hidden sm:block" />
            Presencial e online.
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-secondary-soft">
            Quando há consenso e nenhum filho menor ou incapaz, seu divórcio pode ser concluído em
            cartório — com menos burocracia, custo reduzido e proteção total dos seus direitos.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-3">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener"
              className="group inline-flex items-center gap-2 rounded-full bg-whatsapp shadow-whatsapp px-6 py-3.5 text-sm font-medium text-white transition-all hover:shadow-whatsapp-lg hover:-translate-y-0.5"
            >
              <MessageCircle className="h-4 w-4" />
              Descobrir se meu caso serve
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
            <a
              href="#sobre"
              className="inline-flex items-center gap-2 rounded-full glass px-6 py-3.5 text-sm font-medium text-white transition-all hover:bg-white/[0.1]"
            >
              Como funciona
            </a>
          </div>
          <div className="mt-10 flex items-center gap-6 text-xs text-secondary-soft">
            <div className="flex items-center gap-2">
              <Shield className="h-4 w-4" /> Lei 11.441/07
            </div>
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4" /> Conclusão em dias
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96, filter: "blur(10px)" }}
          animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
          transition={{ duration: 1.1, ease: "easeOut" as const, delay: 0.15 }}
          className="relative"
        >
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-3xl glass-strong">
            <img
              src="/foto1.png"
              alt="Divórcio direto no cartório"
              className="h-full w-full object-cover"
              loading="eager"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-[#111111]/20 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <div className="glass rounded-2xl p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-sm font-medium">Dr. Lucas Morais</div>
                    <div className="text-xs text-secondary-soft">Advogado · Direito de Família</div>
                  </div>
                  <a
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noopener"
                    aria-label="Falar no WhatsApp"
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-whatsapp shadow-whatsapp text-white transition-transform hover:scale-105"
                  >
                    <MessageCircle className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

const pains = [
  {
    icon: Clock,
    title: "Rápido",
    text: "Sem fila de processo judicial. Concluído em dias, não em meses ou anos.",
  },
  {
    icon: Compass,
    title: "Simples",
    text: "Menos burocracia. Um único ato notarial resolve o divórcio e a partilha.",
  },
  {
    icon: Shield,
    title: "Custo reduzido",
    text: "Bem mais econômico que a via judicial, sem abrir mão de segurança jurídica.",
  },
];

function Pains() {
  return (
    <section id="dores" className="relative z-10 section-light py-24">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/2 h-[400px] w-[600px] -translate-x-1/2 rounded-full bg-[#6B8FC7]/[0.04] blur-3xl" />
        <div className="absolute bottom-0 right-0 h-[300px] w-[400px] rounded-full bg-gray-200/40 blur-3xl" />
      </div>
      <div className="relative mx-auto max-w-6xl px-6">
        <div className="absolute top-0 left-1/2 w-[200px] -translate-x-1/2 divider-glow" />
        <motion.div {...fadeUp} className="mb-14 max-w-2xl">
          <div className="mb-4 text-xs uppercase tracking-[0.2em] text-brand">
            Por que em cartório
          </div>
          <h2 className="text-4xl leading-tight tracking-tight sm:text-5xl text-gray-900">
            Quando há consenso, <span className="italic text-brand">tudo fica mais leve.</span>
          </h2>
        </motion.div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {pains.map((p, i) => (
            <motion.a
              key={p.title}
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener"
              initial={{ opacity: 0, y: 20, filter: "blur(6px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.05, ease: "easeOut" as const }}
              className="group relative overflow-hidden rounded-2xl card-premium-light p-6 transition-all duration-300 hover:card-premium-light-hover hover:-translate-y-1"
            >
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl icon-tile transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
                <p.icon className="h-5 w-5 text-white" strokeWidth={1.75} />
              </div>
              <h3
                className="mb-2 text-lg font-medium tracking-tight text-gray-900"
                style={{ fontFamily: "Inter" }}
              >
                {p.title}
              </h3>
              <p className="text-sm leading-relaxed text-gray-600">{p.text}</p>
              <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-[#6B8FC7]/12 blur-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}

const services = [
  {
    t: "Consenso entre as partes",
    d: "Ambos os cônjuges precisam estar de acordo com o divórcio e seus termos.",
  },
  {
    t: "Sem filhos menores ou incapazes",
    d: "Havendo filhos menores ou incapazes, o caminho é necessariamente judicial.",
  },
  {
    t: "Partilha de bens definida",
    d: "A divisão do patrimônio entra no próprio ato notarial, com cláusula clara.",
  },
  {
    t: "Assistência de advogado",
    d: "A presença do advogado é obrigatória por lei — inclusive para os dois.",
  },
];

function Services() {
  return (
    <section id="atuacao" className="relative z-10 py-24">
      <div className="absolute top-0 left-1/2 w-[200px] -translate-x-1/2 divider-glow" />
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          {...fadeUp}
          className="mb-14 flex flex-col justify-between gap-6 md:flex-row md:items-end"
        >
          <div className="max-w-2xl">
            <div className="mb-4 text-xs uppercase tracking-[0.2em] text-secondary-soft">
              Requisitos · Lei 11.441/07
            </div>
            <h2 className="text-4xl leading-tight tracking-tight sm:text-5xl">
              Seu caso serve para o <span className="italic text-secondary-soft">cartório?</span>
            </h2>
          </div>
          <p className="max-w-sm text-sm text-secondary-soft">
            Em poucos minutos de conversa eu confirmo se seu divórcio pode ser feito diretamente em
            cartório — ou se o caminho precisa ser judicial.
          </p>
        </motion.div>

        <div className="grid gap-3 sm:grid-cols-2">
          {services.map((s, i) => (
            <motion.a
              key={s.t}
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.05 }}
              className="group relative overflow-hidden rounded-2xl card-premium p-6 transition-all duration-300 hover:card-premium-hover hover:-translate-y-1"
            >
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl icon-tile transition-transform duration-300 group-hover:scale-110">
                  <CheckCircle2 className="h-5 w-5 text-white" strokeWidth={1.75} />
                </div>
                <div className="flex-1">
                  <div className="flex items-start justify-between gap-3">
                    <h3
                      className="text-lg font-medium tracking-tight"
                      style={{ fontFamily: "Inter" }}
                    >
                      {s.t}
                    </h3>
                    <ArrowRight className="mt-1 h-4 w-4 shrink-0 text-secondary-soft transition-transform group-hover:translate-x-1 group-hover:text-white" />
                  </div>
                  <p className="mt-2 text-sm leading-relaxed text-secondary-soft">{s.d}</p>
                </div>
              </div>
              <div className="pointer-events-none absolute -right-20 -bottom-20 h-40 w-40 rounded-full bg-[#6B8FC7]/12 blur-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="sobre" className="relative z-10 section-light-alt py-24">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/2 w-[200px] -translate-x-1/2 divider-glow" />
        <div className="absolute bottom-20 -left-20 h-[400px] w-[500px] rounded-full bg-[#6B8FC7]/[0.04] blur-3xl" />
        <div className="absolute top-20 right-0 h-[300px] w-[400px] rounded-full bg-gray-200/30 blur-3xl" />
      </div>
      <div className="relative mx-auto grid max-w-6xl grid-cols-1 gap-12 px-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <motion.div {...fadeUp} className="relative">
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-3xl glass-light">
            <img
              src="/foto2.jpeg"
              alt="Dr. Lucas Morais"
              className="h-full w-full object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-200/50 via-transparent to-transparent" />
          </div>
        </motion.div>

        <motion.div {...fadeUp}>
          <div className="mb-4 text-xs uppercase tracking-[0.2em] text-brand">
            Sobre · OAB | GO 77.021
          </div>
          <h2 className="text-4xl leading-tight tracking-tight sm:text-5xl text-gray-900">
            Dr. Lucas Morais
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-gray-600">
            Advogado dedicado ao Direito de Família, com foco em divórcios extrajudiciais. Cuido de
            cada passo — do acordo entre as partes à lavratura da escritura em cartório — para que
            tudo seja concluído com rapidez, segurança e sem exposição.
          </p>
          <p className="mt-4 text-lg leading-relaxed text-gray-600">
            Reúno a documentação, redigo a minuta, agendo o cartório e acompanho vocês no ato. Você
            não fala com estagiário — você fala comigo, do primeiro contato até a assinatura.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener"
              className="inline-flex items-center gap-2 rounded-full bg-whatsapp shadow-whatsapp px-5 py-3 text-sm font-medium text-white transition-all hover:-translate-y-0.5 hover:shadow-whatsapp-lg"
            >
              <MessageCircle className="h-4 w-4" /> Conversar no WhatsApp
            </a>
            <a
              href="https://instagram.com/lucasmorais.advogado"
              target="_blank"
              rel="noopener"
              className="inline-flex items-center gap-2 rounded-full glass-light px-5 py-3 text-sm font-medium text-gray-700 transition-all hover:bg-gray-100"
            >
              <Instagram className="h-4 w-4" /> @lucasmorais.advogado
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function FinalCTA() {
  return (
    <section className="relative z-10 py-24">
      <div className="absolute top-0 left-1/2 w-[200px] -translate-x-1/2 divider-glow" />
      <div className="mx-auto max-w-4xl px-6">
        <motion.div
          {...fadeUp}
          className="relative overflow-hidden rounded-3xl glass-strong px-8 py-16 text-center sm:px-16 sm:py-20"
        >
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute -top-24 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-[#3B5B8C]/25 blur-3xl" />
          </div>
          <div className="relative">
            <div className="mx-auto mb-6 inline-flex items-center gap-2 rounded-full glass px-3 py-1 text-xs text-secondary-soft">
              <CheckCircle2 className="h-3.5 w-3.5" /> Análise gratuita · Sigilo absoluto
            </div>
            <h2 className="mx-auto max-w-2xl text-4xl leading-[1.05] tracking-tight sm:text-5xl md:text-6xl">
              Descubra em minutos se dá para{" "}
              <span className="italic text-secondary-soft">resolver no cartório.</span>
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg text-secondary-soft">
              Me conta rapidamente sua situação pelo WhatsApp. Se o seu caso se enquadrar na Lei
              11.441/07, começamos hoje mesmo.
            </p>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener"
                className="group inline-flex items-center gap-2 rounded-full bg-whatsapp shadow-whatsapp px-7 py-4 text-base font-medium text-white transition-all hover:-translate-y-0.5 hover:shadow-whatsapp-lg"
              >
                <MessageCircle className="h-5 w-5" />
                Falar pelo WhatsApp
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </a>
              <a
                href="tel:+5562995500330"
                className="text-sm text-secondary-soft transition-colors hover:text-white"
              >
                (62) 99550-0330
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="relative z-10 border-t border-white/[0.08]">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 px-6 py-10 sm:flex-row sm:items-center">
        <div>
          <div className="text-sm font-medium">Dr. Lucas Morais</div>
          <div className="text-xs text-secondary-soft">Direito de Família · OAB | GO 77.021</div>
        </div>
        <div className="flex items-center gap-6 text-xs text-secondary-soft">
          <a href={WHATSAPP_URL} target="_blank" rel="noopener" className="hover:text-white">
            (62) 99550-0330
          </a>
          <a
            href="https://instagram.com/lucasmorais.advogado"
            target="_blank"
            rel="noopener"
            className="hover:text-white"
          >
            @lucasmorais.advogado
          </a>
        </div>
        <div className="text-xs text-secondary-soft">
          © {new Date().getFullYear()} Todos os direitos reservados
        </div>
      </div>
    </footer>
  );
}
