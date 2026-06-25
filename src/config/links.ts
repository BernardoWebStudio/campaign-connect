// Configuração simples — edite aqui para alterar nome, frase e links.
export const profile = {
  name: "Nome do Pré-Candidato",
  tagline: "Juntos podemos construir um futuro melhor para nossa comunidade.",
  ctaTitle: "Faça Parte da Nossa Caminhada",
  ctaSubtitle:
    "Sua participação é fundamental para construirmos uma cidade mais justa, desenvolvida e cheia de oportunidades para todos.",
};

export type LinkItem = {
  label: string;
  href: string;
  icon: "youtube" | "instagram" | "facebook" | "whatsapp" | "handshake";
};

export const links: LinkItem[] = [
  { label: "YouTube", href: "https://youtube.com/", icon: "youtube" },
  { label: "Instagram", href: "https://instagram.com/", icon: "instagram" },
  { label: "Facebook", href: "https://facebook.com/", icon: "facebook" },
  { label: "WhatsApp", href: "https://wa.me/", icon: "whatsapp" },
  {
    label: "Faça Parte da Nossa Caminhada",
    href: "#", // substituir pelo link do formulário de apoiadores
    icon: "handshake",
  },
];
