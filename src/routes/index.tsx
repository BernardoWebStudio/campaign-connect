import { createFileRoute } from "@tanstack/react-router";
import { Youtube, Instagram, Facebook, MessageCircle, Handshake, ArrowUpRight } from "lucide-react";

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

        {/* Banner */}
        <div
          className="w-full overflow-hidden rounded-2xl shadow-[var(--shadow-soft)]"
          style={{ animation: "fadeUp 0.7s ease-out both" }}
        >
          <img
            src="/ulissis-banner.png"
            alt="Ulissis Lima - Cantor Católico"
            className="w-full object-contain"
          />
        </div>


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
