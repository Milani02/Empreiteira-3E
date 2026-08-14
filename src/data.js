import { HardHat, Zap, Droplets, Wrench, ShieldCheck, Users, Wallet, Clock } from "lucide-react";

export const WHATSAPP_NUMBER = "5511988884433"; // TODO: trocar pelo número real da 3E
export const waLink = (msg) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`;

export const IMG = {
  hero: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=1600&auto=format&fit=crop",
  sobre:
    "https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=1200&auto=format&fit=crop",
  construcao:
    "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=1200&auto=format&fit=crop",
  eletrica:
    "https://images.unsplash.com/photo-1621905251918-48416bd8575a?q=80&w=1200&auto=format&fit=crop",
  hidraulica:
    "https://images.unsplash.com/photo-1620626011761-996317b8d101?q=80&w=1200&auto=format&fit=crop",
  reparos:
    "https://images.unsplash.com/photo-1581147036324-c17ac41dfa6c?q=80&w=1200&auto=format&fit=crop",
  ctaFinal:
    "https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=1600&auto=format&fit=crop",
};

export const NAV_LINKS = [
  { href: "#sobre", label: "O Problema" },
  { href: "#servicos", label: "Serviços" },
  { href: "#diferenciais", label: "Diferenciais" },
  { href: "#depoimentos", label: "Depoimentos" },
  { href: "#faq", label: "FAQ" },
];

export const STATS = [
  { value: 180, suffix: "+", label: "Obras entregues" },
  { value: 12, suffix: "", label: "Anos de estrada" },
  { value: 24, suffix: "h", label: "Tempo de resposta" },
  { value: 100, suffix: "%", label: "Garantia em contrato" },
];

export const TICKER_ITEMS = [
  "ORÇAMENTO GRÁTIS",
  "EQUIPE PRÓPRIA",
  "GARANTIA EM CONTRATO",
  "ATENDIMENTO EM 24H",
  "PREÇO FECHADO",
  "PRAZO CUMPRIDO",
];

export const SERVICES = [
  {
    code: "SRV-01",
    icon: HardHat,
    title: "Construção & Reforma",
    desc: "Da fundação ao acabamento. Construção nova, ampliação ou reforma completa — equipe própria, do contrapiso ao reboco.",
    items: [
      "Fundação e alvenaria",
      "Reformas completas",
      "Ampliações e puxadinhos",
      "Acabamento e pintura",
    ],
    img: IMG.construcao,
  },
  {
    code: "SRV-02",
    icon: Zap,
    title: "Instalações Elétricas",
    desc: "Rede elétrica nova, troca de padrão, quadro de disjuntores ou aquele curto que ninguém encontra — dentro da norma.",
    items: [
      "Instalação e reforma elétrica",
      "Padrão de entrada e quadro",
      "Iluminação e automação",
      "Laudo técnico",
    ],
    img: IMG.eletrica,
  },
  {
    code: "SRV-03",
    icon: Droplets,
    title: "Instalações Hidráulicas",
    desc: "Vazamento, cano estourado, entupimento ou tubulação nova — atuamos rápido pra sua casa não virar piscina.",
    items: [
      "Reparo de vazamentos",
      "Tubulação nova e reforma",
      "Caixa d'água e bombas",
      "Desentupimento",
    ],
    img: IMG.hidraulica,
  },
  {
    code: "SRV-04",
    icon: Wrench,
    title: "Reparos Rápidos",
    desc: "Aquele serviço pequeno que ninguém quer fazer — furar, pendurar, trocar, ajustar. Sem obra mínima, sem enrolação.",
    items: [
      "Montagem e pequenos reparos",
      "Pintura pontual",
      "Manutenção preventiva",
      "Serviços avulsos",
    ],
    img: IMG.reparos,
  },
];

export const DIFFERENTIALS = [
  {
    icon: ShieldCheck,
    title: "Garantia por escrito",
    desc: "Todo serviço sai com garantia em contrato. Problema depois da entrega? A gente volta e resolve, sem custo.",
  },
  {
    icon: Users,
    title: "Equipe própria",
    desc: "Nada de terceirizar seu problema. Profissionais treinados e supervisionados pela 3E do início ao fim.",
  },
  {
    icon: Wallet,
    title: "Preço fechado",
    desc: "Orçamento detalhado antes de começar. O valor combinado é o valor que você paga — sem “adicional de última hora”.",
  },
  {
    icon: Clock,
    title: "Prazo cumprido",
    desc: "Cronograma definido em contrato e acompanhamento diário. Sua obra termina quando prometemos.",
  },
];

export const TESTIMONIALS = [
  {
    name: "Marina Salgado",
    role: "Reforma de cozinha · Zona Sul",
    quote:
      "Contratei a 3E depois que outro pedreiro sumiu com o dinheiro do sinal. Foi a melhor decisão — terminaram a reforma da cozinha em 18 dias, exatamente como no contrato.",
    img: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=300&auto=format&fit=crop",
  },
  {
    name: "Roberto Andrade",
    role: "Instalação elétrica · Alto da Boa Vista",
    quote:
      "Troca completa do padrão elétrico da casa em um dia só, sem bagunça e com laudo técnico ao final. Profissionais que realmente entendem do assunto.",
    img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=300&auto=format&fit=crop",
  },
  {
    name: "Juliana Prado",
    role: "Reparo hidráulico · Barra da Tijuca",
    quote:
      "Vazamento que três outras empresas não conseguiram achar. A equipe da 3E resolveu numa visita só. Recomendo de olhos fechados.",
    img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=300&auto=format&fit=crop",
  },
];

export const FAQS = [
  {
    q: "Como funciona o orçamento?",
    a: "Você manda a descrição (ou fotos/vídeo) pelo WhatsApp, agendamos uma visita técnica gratuita e em até 48h você recebe um orçamento detalhado, sem compromisso.",
  },
  {
    q: "Vocês atendem em qualquer bairro?",
    a: "Atendemos toda a região metropolitana. Confirme sua localização direto no WhatsApp que te dizemos o prazo de atendimento.",
  },
  {
    q: "Preciso de um reparo pequeno, vocês atendem também?",
    a: "Sim. Da troca de uma torneira até uma reforma completa — não existe serviço pequeno demais para o time de manutenção da 3E.",
  },
  {
    q: "O material está incluso no orçamento?",
    a: "Você escolhe: orçamos com material incluso (com nossa curadoria de fornecedores) ou só a mão de obra, se preferir comprar por conta própria.",
  },
  {
    q: "Qual o prazo de garantia?",
    a: "Todo serviço sai com garantia por escrito, com prazo que varia conforme o tipo de obra — de 90 dias a 5 anos para itens estruturais.",
  },
  {
    q: "Como faço para agendar uma visita?",
    a: "É só clicar em um dos botões desta página e chamar no WhatsApp. Nosso time responde em horário comercial, geralmente em minutos.",
  },
];
