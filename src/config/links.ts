// Configuração simples — edite aqui para alterar nome, frase e links.
export const profile = {
  name: "Ulissis Lima",
  tagline: "Juntos podemos construir um futuro melhor para nossa comunidade.",
  ctaTitle: "Faça Parte da Nossa Caminhada",
  ctaSubtitle:
    "Sua participação é fundamental para construirmos uma cidade mais justa, desenvolvida e cheia de oportunidades para todos.",
};

export type LinkItem = {
  label: string;
  href: string;
  icon: "youtube" | "instagram" | "facebook" | "whatsapp" | "handshake" | "tiktok";
};

export const links: LinkItem[] = [
  { label: "WhatsApp", href: "https://chat.whatsapp.com/JddfxdYYq9PDRzIBNagtQV?mode=gi_t", icon: "whatsapp" },
  {
    label: "Faça Parte da Nossa Caminhada",
    href: "https://ulissis-lima.vercel.app",
    icon: "handshake",
  },
  { label: "Instagram", href: "https://www.instagram.com/ulissislima", icon: "instagram" },
  { label: "Facebook", href: "https://www.facebook.com/ulissis.lima/", icon: "facebook" },
  { label: "YouTube", href: "https://www.youtube.com/@UlissisLima", icon: "youtube" },
  { label: "TikTok", href: "https://www.tiktok.com/@ulissislima", icon: "tiktok" },
];
