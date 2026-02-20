// Data for the portfolio

const technologies = [
  { id: 1, name: "HTML", icon: "code" },
  { id: 2, name: "CSS", icon: "palette" },
  { id: 3, name: "JavaScript", icon: "code" },
  { id: 4, name: "React", icon: "atom" },
  { id: 5, name: "Git & GitHub", icon: "git" },
];

const softSkills = [
  { skill: "Comunicação", level: 85 },
  { skill: "Trabalho em equipe", level: 90 },
  { skill: "Pensamento crítico", level: 80 },
  { skill: "Organização", level: 95 },
  { skill: "Proatividade", level: 88 },
  { skill: "Determinação", level: 92 },
];

const erpFeatures = [
  {
    title: "Sistemas ERP",
    description:
      "Experiência prática com Enterprise Resource Planning, entendendo processos empresariais integrados e gestão de recursos.",
    icon: "workflow",
  },
  {
    title: "Fluig - Automação",
    description:
      "Plataforma de automação de processos que facilita workflows, gestão documental e colaboração empresarial de forma eficiente.",
    icon: "zap",
  },
  {
    title: "Parametrizações",
    description:
      "Configuração e personalização de sistemas para atender necessidades específicas de cada empresa e processo.",
    icon: "settings",
  },
  {
    title: "Suporte Técnico",
    description:
      "Atendimento e resolução de incidentes, garantindo o funcionamento contínuo dos sistemas empresariais.",
    icon: "headphones",
  },
];

// ===== PROJETOS =====
const projects = [
  {
    id: 1,
    title: "Music Discovery API",
    description:
      "Aplicação interativa que identifica músicas em tempo real consumindo APIs externas.",
    // Conteúdo detalhado da página independente
    content: `
      <p>Este projeto foi desenvolvido com o objetivo de criar uma experiência imersiva de descoberta musical. A aplicação permite que o usuário ouça trechos de áudio e identifique informações como nome da música, artista e álbum, realizando requisições dinâmicas para uma <strong>API REST</strong></p>
      
    `,
    technologies: ["CSS3", "JavaScript", "HTML"],
    image: "img/qual_a_musica.png",
    status: "Concluído",
    ano: "2026",
    desafios:
      "O maior desafio técnico foi o gerenciamento do estado assíncrono durante o consumo da API, garantindo que a interface não travasse enquanto aguardava a resposta do servidor.",
  },
  {
    id: 2,
    title: "Interface de entrada e cadastro de usuários",
    description: "Interface de app desktop.",
    content: `
      <p>Desenvolvimento de uma interface para <strong>Entrada</strong> e <strong>Cadastro</strong> de usuários utilizando React</p>
      <p>A interface foi contsruida primeiro com um layout no figma e depois realizai a estrutura através do React e Mongo DB</p>
    `,
    technologies: ["React", "Bibliotecas", "CSS3", "Mongo DB", "rotas HTTP"],
    image: "img/ProjProduty.png",
    status: "Em manutenção",
    ano: "2026- Em manutenção",
    desafios:
      "Tratar os erros de CORS e outros erros relacionados as rotas das páginas que apareceram ao logo do projeto foram os meus maiores desafios.",
  },
  {
    id: 3,
    title: "Cadastro de usuários",
    description:
      "Este projeto foi desenvolvido acompanhando as aulas do Rodolfo Mori , com o objetivo de aprender na prática como criar uma aplicação Full Stack.",
    content: `
      <p>Este projeto foi desenvolvido acompanhando as aulas do Rodolfo Mori , com o objetivo de aprender na prática como criar uma aplicação Full Stack  com front-end em React e back-end com Node.js, Express, Prisma e MongoDB.</p>
      <p>Durante o desenvolvimento, aprendi a conectar o front com o back , criar uma API funcional e trabalhar com requisições HTTP utilizando o Axios.</p>
    `,
    technologies: [
      "Node.js",
      "MongoDB",
      "Axios",
      "React (Vite)",
      "CSS3",
      "rotas HTTP",
    ],
    image: "img/cadasUsuarios.png",
    status: "Concluído",
    ano: "2024",
    desafios:
      "Um dos pontos mais questionados foi o erro de CORS , que me fez pesquisar bastante até entender o que realmente estava acontecendo.",
  },
  {
    id: 4, // ID corrigido para 4
    title: "Clone do Spotify",
    description:
      "Este repositório contém um projeto de clone da interface do Spotify , desenvolvido com o objetivo de praticar e aprimorar meus conhecimentos em HTML , CSS e JavaScript",
    content: `
      <p>Este repositório contém um projeto de clone da interface do Spotify , desenvolvido com o objetivo de praticar e aprimorar meus conhecimentos em HTML , CSS e JavaScript . A ideia foi reproduzir visualmente a página principal do Spotify, simulando o layout, os estilos e parte da interatividade.</p>
    `,
    technologies: [, "JavaScript", "HTML5", "CSS3"],
    image: "img/spotifyProj.png",
    status: "Finalizado",
    ano: "2025",
    desafios:
      "Durante o desenvolvimento, senti mais dificuldade na parte de JavaScript , principalmente para entender como manipular corretamente os elementos da página e aplicar as imagens dinamicamente. Essa etapa foi importante para que eu ganhasse mais familiaridade com o DOM, matrizes e funções básicas.",
  },
  {
    id: 5, // ID corrigido para 4
    title: "Desafio Python",
    description:
      "Este repositório contém o projeto desenvolvido durante o Bootcamp Suzano Python Developer, promovido pela DIO",
    content: `
      <p>O desafio do bootcamp é programar um sistema bancário utilizando Python com o objetivo de implementar três operações essenciais: depósito, saque e extrato. O sistema será desenvolvido para um banco que busca monetizar suas operações. . A ideia foi reproduzir visualmente a página principal do Spotify, simulando o layout, os estilos e parte da interatividade.</p>
    `,
    technologies: ["Python"],
    image: "img/desafioPyton.png",
    status: "Finalizado",
    ano: "2025",
    desafios:
      "Durante o desenvolvimento, senti mais dificuldade com POO em Python e em alguns pontos de laços de repetição",
  },
];


const blogPosts = [
  {
    id: 1,
    title: "Minha Jornada na Tecnologia",
    excerpt:
      "Como comecei na área tech e os desafios que enfrentei no caminho.",
    // ALIMENTE O CONTEÚDO ABAIXO
    content: `
      
    `,
    date: "2025-01-15",
    category: "Carreira",
    image:
      "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=1200&h=600&fit=crop",
  },
  {
    id: 2,
    title: "O que aprendi com Sistemas ERP",
    excerpt:
      "Insights e aprendizados trabalhando com Fluig e sistemas empresariais.",
    // ALIMENTE O CONTEÚDO ABAIXO
    content: `
      <p>Trabalhar com ERP me deu uma visão sistêmica das empresas. O <strong>Fluig</strong>, em particular, me ensinou muito sobre automação de processos (BPMN).</p>
      <p>Entender que um sistema não é apenas código, mas uma solução para pessoas reais, mudou minha forma de desenvolver interfaces.</p>
      <p>Aprendi a importância de uma parametrização bem feita para evitar erros em escala em grandes corporações.</p>
    `,
    date: "2025-01-10",
    category: "Experiência",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=600&fit=crop",
  },
  {
    id: 3,
    title: "User Stories",
    excerpt: "Minha experiência escrevendo histórias de usuários.",
    // ALIMENTE O CONTEÚDO ABAIXO
    content: `
      <p> As User Stories, ao meu ver, são um complemento essencial para o mapa do time de desenvolvimento. Elas detalham os requisitos de forma clara e objetiva, descrevendo funcionalidades sob a perspectiva do usuário final.</p>
      <p> Nelas, abordamos os mínimos detalhes relacionados ao software, transformando necessidades em pequenas entregas de valor. Em alguns momentos, ao escrevê-las, certas descrições podem parecer óbvias. No entanto, são justamente esses “detalhes óbvios” que ajudam a evitar falhas futuras, retrabalho e desalinhamentos entre o time.</p>
      <p> Vejo como um grande desafio a tentativa de prever possíveis erros ou cenários inesperados. Não conseguimos antecipar tudo o que pode dar errado, mas a construção cuidadosa das User Stories nos permite reduzir riscos, esclarecer expectativas e desenvolver com mais segurança.</p>
      <p> No fim, não se trata de prever todos os problemas, mas de estruturar o pensamento de forma estratégica para minimizar incertezas e melhorar a qualidade do software.</p>
    `,
    date: "2025-01-05",
    category: "Experiência",
    image:
      "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=1200&h=600&fit=crop",
  },
];


