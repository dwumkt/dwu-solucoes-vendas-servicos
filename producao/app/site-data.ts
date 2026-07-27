export type ProductSlug =
  | "dwu-crm"
  | "dwu-sales"
  | "dwu-assist"
  | "dwu-conversas"
  | "crm-one";

export type Product = {
  slug: ProductSlug;
  shortName: string;
  eyebrow: string;
  title: string;
  description: string;
  cardText: string;
  color: string;
  tint: string;
  icon: "crm" | "sales" | "assist" | "conversas" | "one";
  visual: "kanban" | "phone" | "map" | "inbox" | "sap";
  highlights: { title: string; text: string; icon: string }[];
  workflow: { number: string; title: string; text: string }[];
  proofTitle: string;
  proofText: string;
};

export const products: Product[] = [
  {
    slug: "dwu-crm",
    shortName: "DWU CRM",
    eyebrow: "Gestão comercial B2B",
    title: "O CRM Inteligente que seu time comercial vai amar usar",
    description:
      "Organize oportunidades, automatize tarefas e use inteligência artificial para revisar negociações e orientar os próximos passos.",
    cardText: "Gestão comercial B2B com inteligência artificial",
    color: "#1676d2",
    tint: "#eaf4ff",
    icon: "crm",
    visual: "kanban",
    highlights: [
      {
        title: "IA que atua como treinador comercial",
        text: "Analisa o histórico da negociação e ajuda o vendedor a preparar abordagens, registrar informações e definir o próximo passo.",
        icon: "spark",
      },
      {
        title: "Pipeline visual e funis personalizados",
        text: "Cada oportunidade fica ligada à etapa, ao responsável, ao valor, à previsão e à atividade que precisa acontecer.",
        icon: "columns",
      },
      {
        title: "Automações para tarefas recorrentes",
        text: "Distribua leads, atualize etapas e programe atividades a partir de regras definidas pela gestão.",
        icon: "flow",
      },
    ],
    workflow: [
      {
        number: "01",
        title: "O lead entra no funil certo",
        text: "Formulários, campanhas e canais de contato alimentam a base comercial.",
      },
      {
        number: "02",
        title: "A equipe trabalha a oportunidade",
        text: "Histórico, tarefas e documentos ficam reunidos na mesma negociação.",
      },
      {
        number: "03",
        title: "A gestão acompanha o que avança",
        text: "Pipeline e previsão ajudam a revisar prioridades sem depender de planilhas.",
      },
    ],
    proofTitle: "Conecte o CRM às ferramentas que já fazem parte da operação",
    proofText:
      "Integre dados dos principais ERPs do mercado, campanhas da Dinamize e outros sistemas por API.",
  },
  {
    slug: "dwu-sales",
    shortName: "DWU Sales",
    eyebrow: "Força de vendas em campo",
    title: "Venda em campo com a autonomia que seu time precisa",
    description:
      "O vendedor consulta catálogo, preços, estoque e histórico, registra visitas e envia pedidos pelo aplicativo, inclusive sem internet.",
    cardText: "Força de vendas móvel e offline",
    color: "#f47721",
    tint: "#fff2e8",
    icon: "sales",
    visual: "phone",
    highlights: [
      {
        title: "Catálogo e preços sempre na mão",
        text: "Produtos, tabelas de preço, estoque e histórico do cliente ficam disponíveis no aplicativo durante a visita.",
        icon: "catalog",
      },
      {
        title: "Pedido sem redigitação",
        text: "O pedido registrado em campo segue para o fluxo da empresa, reduzindo a digitação ao voltar para o escritório.",
        icon: "check",
      },
      {
        title: "Venda offline",
        text: "O aplicativo mantém os dados necessários para o vendedor trabalhar em locais com sinal instável e sincroniza depois.",
        icon: "offline",
      },
    ],
    workflow: [
      {
        number: "01",
        title: "A carteira é preparada",
        text: "O vendedor acessa clientes, produtos e condições necessárias para a rota.",
      },
      {
        number: "02",
        title: "A visita vira pedido",
        text: "O atendimento é registrado no celular, com ou sem conexão disponível.",
      },
      {
        number: "03",
        title: "O gestor acompanha o campo",
        text: "Pedidos finalizados e locais de venda podem ser consultados no portal.",
      },
    ],
    proofTitle: "Menos etapas entre a visita e o pedido",
    proofText:
      "O DWU Sales liga a rotina do vendedor aos dados comerciais que a empresa já mantém no ERP.",
  },
  {
    slug: "dwu-assist",
    shortName: "DWU Assist",
    eyebrow: "Field Service e assistência técnica",
    title: "Domine sua operação de campo, do chamado à conclusão do serviço",
    description:
      "Centralize chamados, agenda, ordens de serviço, checklists, fotos, materiais e assinaturas. Sua equipe executa pelo aplicativo, mesmo sem internet.",
    cardText: "Gestão de Field Service e assistência técnica",
    color: "#820ad1",
    tint: "#f4eafd",
    icon: "assist",
    visual: "map",
    highlights: [
      {
        title: "Execução completa no celular",
        text: "Checklist, fotos, materiais utilizados e assinatura do cliente ficam vinculados à ordem de serviço.",
        icon: "phonecheck",
      },
      {
        title: "Agenda organizada por local e equipe",
        text: "Quem agenda visualiza técnicos, horários, localização e status antes de distribuir os atendimentos.",
        icon: "route",
      },
      {
        title: "Preventivas sem planilhas",
        text: "Planos de manutenção geram os chamados previstos e ajudam a manter a frequência contratada.",
        icon: "calendar",
      },
    ],
    workflow: [
      {
        number: "01",
        title: "O chamado é qualificado",
        text: "Cliente, equipamento, tipo de serviço e prioridade orientam o agendamento.",
      },
      {
        number: "02",
        title: "O técnico executa em campo",
        text: "A ordem de serviço segue no aplicativo e pode continuar disponível offline.",
      },
      {
        number: "03",
        title: "O atendimento volta documentado",
        text: "Evidências, consumo de materiais e assinatura formam o histórico do serviço.",
      },
    ],
    proofTitle: "A operação técnica inteira fala a mesma língua",
    proofText:
      "O histórico acompanha o cliente e o equipamento, desde a abertura até a conclusão da ordem de serviço.",
  },
  {
    slug: "dwu-conversas",
    shortName: "DWU Conversas",
    eyebrow: "Atendimento conectado às vendas",
    title: "Transforme conversas em oportunidades de venda",
    description:
      "Reúna WhatsApp e Instagram em filas de atendimento, distribua contatos entre vendedores e mantenha cada conversa ligada ao histórico comercial.",
    cardText: "Centralize o atendimento omnichannel no fluxo de vendas",
    color: "#00a884",
    tint: "#e8f8f3",
    icon: "conversas",
    visual: "inbox",
    highlights: [
      {
        title: "Caixas de fila organizadas",
        text: "Distribua contatos por equipe, assunto ou unidade e identifique quem está atendendo cada conversa.",
        icon: "inbox",
      },
      {
        title: "Campanhas segmentadas",
        text: "Use listas definidas para enviar comunicações e registrar as respostas no histórico do contato.",
        icon: "send",
      },
      {
        title: "Conexão oficial com a Meta",
        text: "A operação usa os canais oficiais para manter o atendimento empresarial organizado.",
        icon: "link",
      },
    ],
    workflow: [
      {
        number: "01",
        title: "A mensagem chega na fila",
        text: "O contato entra no canal e na equipe definidos para aquele atendimento.",
      },
      {
        number: "02",
        title: "O vendedor assume a conversa",
        text: "O histórico fica identificado e pode seguir para uma oportunidade comercial.",
      },
      {
        number: "03",
        title: "A gestão acompanha a operação",
        text: "Filas e responsáveis mostram onde estão as conversas em andamento.",
      },
    ],
    proofTitle: "A conversa deixa de ficar presa no celular",
    proofText:
      "Atendimento, contato e negociação passam a compartilhar o mesmo contexto comercial.",
  },
  {
    slug: "crm-one",
    shortName: "CRM One",
    eyebrow: "CRM certificado para SAP Business One",
    title: "O único CRM 100% nativo e certificado pela SAP para o SAP Business One",
    description:
      "O CRM One trabalha diretamente com os dados e as regras do SAP Business One. Comercial e ERP operam na mesma base, sem replicação por nuvens ou APIs externas.",
    cardText: "O único CRM certificado para SAP Business One",
    color: "#820ad1",
    tint: "#f4eafd",
    icon: "one",
    visual: "sap",
    highlights: [
      {
        title: "Dados em tempo real",
        text: "Clientes, itens, preços, estoque e documentos comerciais usam a mesma informação registrada no SAP Business One.",
        icon: "sync",
      },
      {
        title: "Governança comercial mantida",
        text: "Regras, permissões e cadastros definidos no ERP continuam orientando a operação do CRM.",
        icon: "shield",
      },
      {
        title: "Dados dentro do seu ambiente",
        text: "A informação comercial permanece na estrutura já administrada pela empresa.",
        icon: "database",
      },
    ],
    workflow: [
      {
        number: "01",
        title: "O SAP Business One mantém a base",
        text: "Cadastros, regras comerciais e documentos seguem sob a gestão do ERP.",
      },
      {
        number: "02",
        title: "O CRM One organiza a venda",
        text: "O time trabalha atividades, oportunidades, cotações e pedidos sobre os mesmos dados.",
      },
      {
        number: "03",
        title: "A informação retorna sem replicação",
        text: "O processo comercial permanece conectado ao banco de dados do SAP Business One.",
      },
    ],
    proofTitle: "Amplie a operação com aplicativos companheiros",
    proofText:
      "Conecte o CRM One ao DWU Sales para vendedores em campo e ao DWU Assist para a equipe técnica.",
  },
];

export const productBySlug = Object.fromEntries(
  products.map((product) => [product.slug, product]),
) as Record<ProductSlug, Product>;
