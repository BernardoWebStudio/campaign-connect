import { createFileRoute } from "@tanstack/react-router";
import { Youtube, Instagram, Facebook, MessageCircle, Handshake, ArrowUpRight } from "lucide-react";
import heroImage from "@/assets/candidate-hero.jpg";
import { profile, links, type LinkItem } from "@/config/links";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: `${profile.name} — Link Bio Oficial` },
      { name: "description", content: profile.tagline },
      { property: "og:title", content: `${profile.name} — Link Bio Oficial` },
      { property: "og:description", content: profile.tagline },
      { property: "og:type", content: "website" },
    ],
  }),
  component: LinkBio,
});

const iconMap = {
  youtube: Youtube,
  instagram: Instagram,
  facebook: Facebook,
  whatsapp: MessageCircle,
  handshake: Handshake,
} as const;

function LinkButton({ item, index }: { item: LinkItem; index: number }) {
  const Icon = iconMap[item.icon];
  return (
    <a
      href={item.href}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative flex w-full items-center gap-4 overflow-hidden rounded-2xl border border-border bg-card px-5 py-4 shadow-[var(--shadow-soft)] transition-all duration-300 hover:-translate-y-0.5 hover:border-gold hover:shadow-[var(--shadow-gold)] focus:outline-none focus:ring-2 focus:ring-ring"
      style={{ animation: `fadeUp 0.6s ease-out ${0.2 + index * 0.08}s both` }}
    >
      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary text-primary-foreground transition-colors group-hover:bg-gold group-hover:text-gold-foreground">
        <Icon className="h-5 w-5" />
      </span>
      <span className="min-w-0 flex-1 truncate text-left text-base font-semibold text-foreground">
        {item.label}
      </span>
      <ArrowUpRight className="h-5 w-5 shrink-0 text-muted-foreground transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-primary" />
    </a>
  );
}

function LinkBio() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-background">
      {/* Decorative background */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-[520px] bg-gradient-to-b from-primary/10 via-gold/5 to-transparent"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -top-32 left-1/2 h-[480px] w-[480px] -translate-x-1/2 rounded-full bg-gold/20 blur-3xl"
      />

      <div className="relative mx-auto flex min-h-screen max-w-xl flex-col items-center px-5 py-10 sm:py-14">
        {/* Hero image */}
        <div
          className="relative w-full overflow-hidden rounded-3xl border-4 border-card shadow-[var(--shadow-soft)]"
          style={{ animation: "fadeUp 0.7s ease-out both" }}
        >
          <div className="absolute inset-0 ring-1 ring-inset ring-gold/40" />
          <img
            src={heroImage}
            alt={`Arte de campanha de ${profile.name}`}
            width={1024}
            height={1024}
            className="aspect-square w-full object-cover"
          />
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-primary/70 to-transparent" />
        </div>

        {/* Name + tagline */}
        <section
          className="mt-7 text-center"
          style={{ animation: "fadeUp 0.7s ease-out 0.1s both" }}
        >
          <div className="mx-auto mb-3 inline-flex items-center gap-2 rounded-full border border-gold/40 bg-gold/10 px-3 py-1 text-xs font-semibold tracking-wide text-primary uppercase">
            <span className="h-1.5 w-1.5 rounded-full bg-gold" />
            Pré-Candidato
          </div>
          <h1 className="text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
            {profile.name}
          </h1>
          <p className="mx-auto mt-3 max-w-md text-balance text-base leading-relaxed text-muted-foreground">
            "{profile.tagline}"
          </p>
        </section>

        {/* CTA copy */}
        <section
          className="mt-8 w-full rounded-2xl border border-border bg-gradient-to-br from-primary to-[oklch(0.32_0.13_250)] p-6 text-center text-primary-foreground shadow-[var(--shadow-soft)]"
          style={{ animation: "fadeUp 0.7s ease-out 0.15s both" }}
        >
          <h2 className="text-xl font-bold sm:text-2xl">
            <span className="text-gold">★</span> {profile.ctaTitle}
          </h2>
          <p className="mx-auto mt-2 max-w-md text-sm leading-relaxed text-primary-foreground/85">
            {profile.ctaSubtitle}
          </p>
        </section>

        {/* Links */}
        <section className="mt-6 flex w-full flex-col gap-3">
          {links.map((item, i) => (
            <LinkButton key={item.label} item={item} index={i} />
          ))}
        </section>

        <footer className="mt-10 text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} {profile.name}. Todos os direitos reservados.
        </footer>
      </div>

      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(12px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </main>
  );
}
