import React, { useEffect, useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Moon,
  Sun,
  Instagram,
  Linkedin,
  Dribbble,
  Github,
  Mail,
  Phone,
  MapPin,
  ArrowRight,
  Filter,
  Palette,
  PenTool,
  Layers,
  PenSquare,
} from "lucide-react";

// ————————————————————————————————————————————
// ⚡ Single-file React portfolio for a Graphic Designer
// TailwindCSS utility classes are used for styling.
// Replace the content below (name, bio, projects, links) with yours.
// ————————————————————————————————————————————

const DESIGNER = {
  name: "Il tuo nome",
  role: "Graphic Designer",
  tagline:
    "Branding, poster, packaging e visual design con un tocco pulito e memorabile.",
  location: "Italia",
  email: "tuaemail@example.com",
  phone: "+39 333 000 0000",
  socials: {
    instagram: "https://instagram.com/",
    dribbble: "https://dribbble.com/",
    linkedin: "https://linkedin.com/",
    github: "https://github.com/",
  },
};

const PROJECTS = [
  {
    id: "p1",
    title: "Museo Minimal Brand",
    description:
      "Identità visiva completa: logotipo, palette, tipografia e sistema di layout modulare.",
    year: 2025,
    tags: ["Branding", "Identity"],
    color: "from-pink-200/80 to-rose-100/80 dark:from-pink-400/20 dark:to-rose-400/10",
    link: "#",
  },
  {
    id: "p2",
    title: "Poster Series — Urban Rhythms",
    description:
      "Serie di poster tipografici ispirati ai pattern urbani: griglie, segnali, flussi.",
    year: 2024,
    tags: ["Poster", "Typography"],
    color:
      "from-indigo-200/80 to-blue-100/80 dark:from-indigo-400/20 dark:to-blue-400/10",
    link: "#",
  },
  {
    id: "p3",
    title: "Packaging — Caffè Selva",
    description:
      "Linea packaging sostenibile con illustrazioni monocromatiche e carta riciclata.",
    year: 2025,
    tags: ["Packaging", "Illustration"],
    color:
      "from-emerald-200/80 to-lime-100/80 dark:from-emerald-400/20 dark:to-lime-400/10",
    link: "#",
  },
  {
    id: "p4",
    title: "Landing Page — Studio Shape",
    description:
      "Interfaccia pulita e motion micro-interactions per studio di architettura.",
    year: 2023,
    tags: ["Web", "UI/UX"],
    color:
      "from-amber-200/80 to-yellow-100/80 dark:from-amber-400/20 dark:to-yellow-400/10",
    link: "#",
  },
  {
    id: "p5",
    title: "Editorial — RIVISTA NORD",
    description:
      "Impaginazione magazine: griglie flessibili, gerarchie chiare, fotografia bold.",
    year: 2024,
    tags: ["Editorial", "Layout"],
    color:
      "from-fuchsia-200/80 to-purple-100/80 dark:from-fuchsia-400/20 dark:to-purple-400/10",
    link: "#",
  },
  {
    id: "p6",
    title: "Icon Set — MonoGlyph",
    description:
      "Set di 120 icone monolinea ottimizzate per pixel grid e accessibility.",
    year: 2025,
    tags: ["Icon", "System"],
    color:
      "from-slate-200/80 to-zinc-100/80 dark:from-slate-400/20 dark:to-zinc-400/10",
    link: "#",
  },
];

const SERVICES = [
  {
    icon: Palette,
    title: "Brand Identity",
    text: "Naming, logo, palette, tipografia e design system scalabile.",
  },
  {
    icon: PenTool,
    title: "Poster & Editorial",
    text: "Poster tipografici, impaginati editoriali e visual per eventi.",
  },
  {
    icon: Layers,
    title: "Packaging",
    text: "Strutture, mockup e arte finale pronti per la stampa.",
  },
  {
    icon: PenSquare,
    title: "Web & UI",
    text: "Landing, portfolio, micro-interactions e componenti UI.",
  },
];

function useDarkMode() {
  const [dark, setDark] = useState(true);
  useEffect(() => {
    const root = document.documentElement;
    if (dark) root.classList.add("dark");
    else root.classList.remove("dark");
  }, [dark]);
  return { dark, setDark };
}

export default function Portfolio() {
  const { dark, setDark } = useDarkMode();
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("Tutti");
  const [sort, setSort] = useState("Recenti");

  const categories = useMemo(() => {
    const c = new Set();
    PROJECTS.forEach((p) => p.tags.forEach((t) => c.add(t)));
    return ["Tutti", ...Array.from(c)];
  }, []);

  const filtered = useMemo(() => {
    let items = PROJECTS.filter((p) => {
      const matchQuery =
        !query ||
        p.title.toLowerCase().includes(query.toLowerCase()) ||
        p.description.toLowerCase().includes(query.toLowerCase());
      const matchCat = category === "Tutti" || p.tags.includes(category);
      return matchQuery && matchCat;
    });
    if (sort === "A-Z") items.sort((a, b) => a.title.localeCompare(b.title));
    else items.sort((a, b) => b.year - a.year);
    return items;
  }, [query, category, sort]);

  return (
    <div className="min-h-screen bg-white text-slate-800 dark:bg-slate-950 dark:text-slate-100">
      {/* NAVBAR */}
      <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-white/60 dark:supports-[backdrop-filter]:bg-slate-950/60 border-b border-slate-200/60 dark:border-slate-800/60">
        <nav className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
          <div className="flex items-center gap-3">
            <div className="h-8 w-8 rounded-xl bg-gradient-to-br from-slate-900 to-slate-600 dark:from-slate-100 dark:to-slate-400" />
            <span className="font-semibold tracking-tight">{DESIGNER.name}</span>
            <span className="hidden sm:inline text-slate-500 dark:text-slate-400">· {DESIGNER.role}</span>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={() => setDark((v) => !v)}
              className="rounded-2xl border border-slate-200 dark:border-slate-800 px-3 py-1.5 text-sm hover:bg-slate-100 dark:hover:bg-slate-900 transition"
              aria-label="Toggle dark mode"
            >
              <div className="flex items-center gap-2">
                {dark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
                <span className="hidden sm:inline">{dark ? "Light" : "Dark"}</span>
              </div>
            </button>
            <a
              href="#contact"
              className="rounded-2xl bg-slate-900 text-white dark:bg-white dark:text-slate-900 px-4 py-2 text-sm font-medium shadow-sm hover:opacity-90"
            >
              Contattami
            </a>
          </div>
        </nav>
      </header>

      {/* HERO */}
      <section className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 pt-14 pb-12">
        <div className="grid md:grid-cols-2 items-center gap-10">
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="text-3xl sm:text-5xl font-bold leading-tight tracking-tight"
            >
              {DESIGNER.role} che crea <span className="underline decoration-2 underline-offset-4">identità</span> chiare e memorabili
            </motion.h1>
            <p className="mt-4 text-slate-600 dark:text-slate-300 max-w-xl">
              {DESIGNER.tagline}
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 rounded-2xl border border-slate-200 dark:border-slate-800 px-4 py-2 text-sm hover:bg-slate-50 dark:hover:bg-slate-900"
              >
                Guarda i progetti <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="#services"
                className="inline-flex items-center gap-2 rounded-2xl px-4 py-2 text-sm bg-slate-900 text-white dark:bg-white dark:text-slate-900 shadow-sm hover:opacity-90"
              >
                Servizi
              </a>
            </div>
            <div className="mt-8 flex flex-wrap items-center gap-4 text-sm text-slate-500 dark:text-slate-400">
              <span className="inline-flex items-center gap-2"><MapPin className="h-4 w-4" />{DESIGNER.location}</span>
              <a className="inline-flex items-center gap-2 hover:underline" href={`mailto:${DESIGNER.email}`}><Mail className="h-4 w-4" />{DESIGNER.email}</a>
              <a className="inline-flex items-center gap-2 hover:underline" href={`tel:${DESIGNER.phone}`}><Phone className="h-4 w-4" />{DESIGNER.phone}</a>
            </div>
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <div className="aspect-[4/3] rounded-3xl bg-gradient-to-br from-slate-200 to-slate-100 dark:from-slate-800 dark:to-slate-700 shadow-xl" />
            <div className="absolute -bottom-4 -left-4 w-24 h-24 rounded-2xl bg-gradient-to-tr from-slate-900/10 to-slate-500/10 dark:from-white/10 dark:to-slate-300/10 backdrop-blur" />
            <div className="absolute -top-6 -right-6 w-28 h-28 rounded-full bg-gradient-to-br from-slate-900/10 to-slate-500/10 dark:from-white/10 dark:to-slate-300/10 backdrop-blur" />
          </motion.div>
        </div>
      </section>

      {/* CONTROLS */}
      <section className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8" id="projects">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 pb-4">
          <div>
            <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">Progetti selezionati</h2>
            <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">Filtra per categoria, cerca per titolo, ordina a piacere.</p>
          </div>
          <div className="flex flex-wrap items-center gap-2">
            <div className="flex items-center gap-2 rounded-2xl border border-slate-200 dark:border-slate-800 px-3 py-2">
              <Filter className="h-4 w-4" />
              <select
                className="bg-transparent outline-none text-sm"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              >
                {categories.map((c) => (
                  <option key={c} value={c}>
                    {c}
                  </option>
                ))}
              </select>
            </div>
            <div className="flex items-center gap-2 rounded-2xl border border-slate-200 dark:border-slate-800 px-3 py-2">
              <span className="text-sm">Ordina</span>
              <select
                className="bg-transparent outline-none text-sm"
                value={sort}
                onChange={(e) => setSort(e.target.value)}
              >
                <option>Recenti</option>
                <option>A-Z</option>
              </select>
            </div>
            <input
              type="search"
              placeholder="Cerca progetto…"
              className="w-full md:w-60 rounded-2xl border border-slate-200 dark:border-slate-800 px-4 py-2 text-sm bg-transparent"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
          </div>
        </div>

        {/* GRID */}
        <AnimatePresence mode="popLayout">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((p) => (
              <motion.a
                layout
                key={p.id}
                href={p.link}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.25 }}
                className="group rounded-3xl border border-slate-200 dark:border-slate-800 overflow-hidden hover:shadow-xl focus:shadow-xl transition"
              >
                <div
                  className={`aspect-[4/3] bg-gradient-to-br ${p.color}`}
                />
                <div className="p-5">
                  <div className="flex items-center justify-between">
                    <h3 className="font-semibold tracking-tight group-hover:underline underline-offset-4">
                      {p.title}
                    </h3>
                    <span className="text-xs text-slate-500 dark:text-slate-400">{p.year}</span>
                  </div>
                  <p className="mt-1 text-sm text-slate-600 dark:text-slate-300 line-clamp-2">
                    {p.description}
                  </p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {p.tags.map((t) => (
                      <span
                        key={t}
                        className="text-xs px-2 py-1 rounded-full border border-slate-200 dark:border-slate-800"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.a>
            ))}
          </div>
        </AnimatePresence>
      </section>

      {/* SERVICES */}
      <section id="services" className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 mt-16">
        <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">Servizi</h2>
        <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES.map((s) => (
            <div
              key={s.title}
              className="rounded-3xl border border-slate-200 dark:border-slate-800 p-5 hover:shadow-lg transition"
            >
              <s.icon className="h-6 w-6" />
              <h3 className="mt-3 font-semibold tracking-tight">{s.title}</h3>
              <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">{s.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 mt-16">
        <div className="grid md:grid-cols-3 gap-8 items-start">
          <div className="md:col-span-2">
            <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">Su di me</h2>
            <p className="mt-3 text-slate-600 dark:text-slate-300">
              Ciao! Sono {DESIGNER.name}, {DESIGNER.role}. Lavoro con brand, studi creativi e PMI
              per creare identità visive chiare, flessibili e riconoscibili. Credo nelle griglie,
              nelle scelte tipografiche consapevoli e nei dettagli che fanno la differenza.
            </p>
            <ul className="mt-4 grid sm:grid-cols-2 gap-3 text-sm">
              <li className="rounded-2xl border border-slate-200 dark:border-slate-800 px-4 py-3">Adobe CC (Ai, Ps, Id)</li>
              <li className="rounded-2xl border border-slate-200 dark:border-slate-800 px-4 py-3">Figma / UI Libraries</li>
              <li className="rounded-2xl border border-slate-200 dark:border-slate-800 px-4 py-3">Tipografia & Griglie</li>
              <li className="rounded-2xl border border-slate-200 dark:border-slate-800 px-4 py-3">Pre-press & Colormanagement</li>
            </ul>
          </div>
          <div className="rounded-3xl border border-slate-200 dark:border-slate-800 p-5">
            <h3 className="font-semibold tracking-tight">Disponibilità</h3>
            <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">Aperto a progetti freelance, consulenze e collaborazioni continuative.</p>
            <div className="mt-4 space-y-2 text-sm">
              <div className="flex items-center gap-2"><Mail className="h-4 w-4" /><a className="hover:underline" href={`mailto:${DESIGNER.email}`}>{DESIGNER.email}</a></div>
              <div className="flex items-center gap-2"><Phone className="h-4 w-4" /><a className="hover:underline" href={`tel:${DESIGNER.phone}`}>{DESIGNER.phone}</a></div>
              <div className="flex items-center gap-2"><MapPin className="h-4 w-4" />{DESIGNER.location}</div>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 mt-16">
        <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">Dicono di me</h2>
        <div className="mt-6 grid md:grid-cols-3 gap-6">
          {[
            {
              quote:
                "Ha trasformato un brief confuso in un'identità cristallina. Puntuale e attento ai dettagli.",
              author: "Luca B., Studio Architettura",
            },
            {
              quote:
                "Poster bellissimi, tipografia impeccabile. Lavoro di alta qualità e consegna rapida.",
              author: "Sara M., Eventi Urbani",
            },
            {
              quote:
                "Packaging sostenibile e coerente con i nostri valori. Consigliatissimo!",
              author: "Marco R., Caffè Selva",
            },
          ].map((t, i) => (
            <div
              key={i}
              className="rounded-3xl border border-slate-200 dark:border-slate-800 p-5"
            >
              <p className="text-sm text-slate-700 dark:text-slate-200">“{t.quote}”</p>
              <p className="mt-3 text-xs text-slate-500 dark:text-slate-400">{t.author}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 mt-16 pb-20">
        <div className="grid md:grid-cols-2 gap-8 items-start">
          <div>
            <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">Parliamo del tuo progetto</h2>
            <p className="mt-2 text-slate-600 dark:text-slate-300 max-w-prose">
              Raccontami obiettivi, tempi e budget: risponderò con una proposta chiara e senza sorprese.
            </p>
            <div className="mt-6 flex gap-4">
              <a
                href={DESIGNER.socials.instagram}
                className="rounded-2xl border border-slate-200 dark:border-slate-800 p-3 hover:bg-slate-50 dark:hover:bg-slate-900"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href={DESIGNER.socials.dribbble}
                className="rounded-2xl border border-slate-200 dark:border-slate-800 p-3 hover:bg-slate-50 dark:hover:bg-slate-900"
                aria-label="Dribbble"
              >
                <Dribbble className="h-5 w-5" />
              </a>
              <a
                href={DESIGNER.socials.linkedin}
                className="rounded-2xl border border-slate-200 dark:border-slate-800 p-3 hover:bg-slate-50 dark:hover:bg-slate-900"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href={DESIGNER.socials.github}
                className="rounded-2xl border border-slate-200 dark:border-slate-800 p-3 hover:bg-slate-50 dark:hover:bg-slate-900"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </a>
            </div>
          </div>
          <ContactForm />
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-slate-200 dark:border-slate-800">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between text-sm">
          <span>© {new Date().getFullYear()} {DESIGNER.name}. Tutti i diritti riservati.</span>
          <a href="#top" className="hover:underline">Torna su</a>
        </div>
      </footer>
    </div>
  );
}

function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    const subject = encodeURIComponent("Nuovo progetto — " + name);
    const body = encodeURIComponent(message + "\n\n" + name + " — " + email);
    window.location.href = `mailto:${DESIGNER.email}?subject=${subject}&body=${body}`;
  }

  return (
    <form onSubmit={handleSubmit} className="rounded-3xl border border-slate-200 dark:border-slate-800 p-5">
      <div className="grid gap-4">
        <label className="text-sm">
          Nome
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="mt-1 w-full rounded-2xl border border-slate-200 dark:border-slate-800 bg-transparent px-4 py-2"
          />
        </label>
        <label className="text-sm">
          Email
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="mt-1 w-full rounded-2xl border border-slate-200 dark:border-slate-800 bg-transparent px-4 py-2"
          />
        </label>
        <label className="text-sm">
          Messaggio
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            rows={5}
            required
            className="mt-1 w-full rounded-2xl border border-slate-200 dark:border-slate-800 bg-transparent px-4 py-2"
          />
        </label>
        <button
          type="submit"
          className="rounded-2xl bg-slate-900 text-white dark:bg-white dark:text-slate-900 px-4 py-2 text-sm font-medium shadow-sm hover:opacity-90"
        >
          Invia richiesta
        </button>
      </div>
    </form>
  );
}
