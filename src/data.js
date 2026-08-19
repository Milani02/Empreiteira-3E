import { HardHat, Zap, Droplets, Wrench, ShieldCheck, Users, Wallet, Clock, HeartHandshake } from "lucide-react";

export const BRAND = "3M";
export const BRAND_FULL = "3M Empreiteira";

export const WHATSAPP_NUMBER = "5511988884433"; // TODO: trocar pelo número real da 3M
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
  historia:
    "https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=1200&auto=format&fit=crop",
  ctaFinal:
    "https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=1600&auto=format&fit=crop",
  caseBefore:
    "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=1200&auto=format&fit=crop",
  caseAfter:
    "https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=1200&auto=format&fit=crop",
};

export const NAV_LINKS = [
  { href: "#sobre", label: "O Problema" },
  { href: "#servicos", label: "Serviços" },
  { href: "#historia", label: "Nossa História" },
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

// Mini-caso usado na abertura da seção "O Problema" — especificidade em vez
// de generalidade genérica ("somos os melhores").
export const STORY = {
  eyebrow: "Uma história real (e comum demais)",
  lead: "Em maio, a Fernanda contratou um pedreiro indicado pelo síndico pra reformar o banheiro.",
  detail:
    "Prometeram 20 dias. Em agosto, a obra ainda tava parada, o pó tinha tomado a sala e o telefone do 'responsável' já nem tocava mais. Ela fechou com a 3M em setembro. Entregamos em 16 dias — pelo valor combinado no contrato, sem um centavo a mais.",
  tag: "Reforma de banheiro · 16 dias · Zero surpresa",
};

export const SERVICES = [
  {
    code: "SRV-01",
    icon: HardHat,
    title: "Construção & Reforma",
    desc: "Da fundação ao acabamento, sem trocar de empreiteira no meio do caminho. Uma equipe só, do contrapiso ao reboco, com prazo em contrato.",
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
    desc: "Rede nova, troca de padrão, quadro de disjuntores ou aquele curto que ninguém acha. Tudo dentro da norma, com laudo técnico ao final.",
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
    desc: "Vazamento, cano estourado, entupimento ou tubulação nova. Resposta rápida pra sua casa não virar poça — literalmente.",
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

// Timeline da "Nossa História" — humaniza a marca, ponto de storytelling #2.
export const HISTORIA = {
  eyebrow: "Nossa história",
  title: "COMEÇOU COM UM ELETRICISTA CANSADO DE VER GENTE SE FERRAR",
  intro:
    "A 3M não nasceu num plano de negócios. Nasceu do Marcos Miguel Menezes — eletricista havia 9 anos — atendendo clientes que já tinham sido enganados por dois ou três 'empreiteiros' antes dele. Em 2014 ele decidiu montar uma equipe própria pra nunca mais deixar isso acontecer com quem confiava no trabalho dele.",
  milestones: [
    {
      year: "2014",
      title: "O começo",
      desc: "Marcos formaliza a empresa com uma dupla de confiança: ele na parte elétrica, um amigo pedreiro na estrutura. Primeiro contrato por escrito, primeira garantia dada de próprio punho.",
    },
    {
      year: "2016",
      title: "Primeira equipe fixa",
      desc: "Contratação dos primeiros profissionais de carteira assinada. Nasce o padrão 3M: orçamento fechado antes do primeiro martelada, sempre por escrito.",
    },
    {
      year: "2019",
      title: "100 obras entregues",
      desc: "Marca de 100 reformas e construções concluídas dentro do prazo contratado — sem um único processo por descumprimento.",
    },
    {
      year: "2022",
      title: "Garantia em contrato pra tudo",
      desc: "A política de garantia por escrito, que começou informal, vira cláusula padrão em todo serviço — de um reparo pequeno a uma obra inteira.",
    },
    {
      year: "2026",
      title: "3M hoje",
      desc: "Equipe própria multidisciplinar, mais de 180 obras entregues e atendimento em toda a região metropolitana — com o mesmo compromisso do primeiro contrato.",
    },
  ],
};

// Passo a passo do "Como Funciona" — remove a fricção de "o que acontece
// depois que eu chamo no WhatsApp".
export const PROCESSO = {
  eyebrow: "Do primeiro contato à entrega",
  title: "COMO FUNCIONA, DO ZAP AO ÚLTIMO PARAFUSO",
  steps: [
    {
      n: "01",
      title: "Chama no WhatsApp",
      desc: "Manda a descrição do problema — fotos ou vídeo ajudam, mas não são obrigatórios.",
    },
    {
      n: "02",
      title: "Visita técnica gratuita",
      desc: "Agendamos em até 48h. Sem custo, sem compromisso, sem letra miúda.",
    },
    {
      n: "03",
      title: "Orçamento fechado",
      desc: "Você recebe o valor final por escrito, com prazo definido em contrato.",
    },
    {
      n: "04",
      title: "Execução com equipe própria",
      desc: "Acompanhamento diário até a entrega — você sabe exatamente em que pé a obra está.",
    },
    {
      n: "05",
      title: "Garantia ativa",
      desc: "Entrega com garantia por escrito e uma ligação nossa depois, pra saber se ficou tudo certo.",
    },
  ],
};

export const DIFFERENTIALS = [
  {
    icon: ShieldCheck,
    title: "Garantia por escrito",
    desc: "Todo serviço sai com garantia em contrato. Problema depois da entrega? A gente volta e resolve, sem custo.",
    big: true,
  },
  {
    icon: Users,
    title: "Equipe própria",
    desc: "Nada de terceirizar seu problema. Profissionais treinados e supervisionados pela 3M do início ao fim.",
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
  {
    icon: HeartHandshake,
    title: "Suporte pós-obra",
    desc: "Depois que a obra termina, a gente liga pra saber se ficou tudo certo. Não desaparecemos no dia do último pagamento.",
  },
];

export const CASE_DESTAQUE = {
  eyebrow: "Um caso, em detalhe",
  title: "ARRASTE E VEJA A DIFERENÇA",
  desc: "Reforma completa entregue em 21 dias, do contrapiso ao acabamento — dentro do orçamento fechado com o cliente.",
  before: IMG.caseBefore,
  after: IMG.caseAfter,
  beforeLabel: "Antes",
  afterLabel: "Depois — 21 dias",
};

export const TESTIMONIALS = [
  {
    name: "Marina Salgado",
    role: "Reforma de cozinha · Zona Sul",
    quote:
      "Contratei a 3M depois que outro pedreiro sumiu com o dinheiro do sinal. Foi a melhor decisão — terminaram a reforma da cozinha em 18 dias, exatamente como no contrato.",
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
      "Vazamento que três outras empresas não conseguiram achar. A equipe da 3M resolveu numa visita só. Recomendo de olhos fechados.",
    img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=300&auto=format&fit=crop",
  },
  {
    name: "Carlos Herrera",
    role: "Construção de laje · Grajaú",
    quote:
      "Orçado em 45 dias, entregue em 43. Nunca tinha visto uma obra terminar antes do prazo. A 3M cumpre o que fala.",
    img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=300&auto=format&fit=crop",
  },
  {
    name: "Patrícia Lemos",
    role: "Reparos rápidos · Copacabana",
    quote:
      "Liguei pra trocar um chuveiro e aproveitei pra resolver mais quatro coisas pequenas que viviam adiadas. Vieram, resolveram tudo, sem enrolação.",
    img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=300&auto=format&fit=crop",
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
    a: "Sim. Da troca de uma torneira até uma reforma completa — não existe serviço pequeno demais para o time de manutenção da 3M.",
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
