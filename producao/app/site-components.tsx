"use client";

import Link from "next/link";
import { FormEvent, useState } from "react";
import { products, type Product } from "./site-data";

function Icon({
  name,
  size = 24,
}: {
  name: string;
  size?: number;
}) {
  const common = {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.8,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": true,
  };

  const paths: Record<string, React.ReactNode> = {
    crm: <><path d="M4 4h16v16H4z"/><path d="M8 8h8M8 12h5M8 16h3"/></>,
    sales: <><path d="M7 3h10v18H7z"/><path d="M10 6h4M10 17h4"/><path d="m10 13 2-2 2 1 2-3"/></>,
    assist: <><path d="M12 3a5 5 0 0 0-5 5v2l-3 3v2h16v-2l-3-3V8a5 5 0 0 0-5-5Z"/><path d="M9 19h6"/></>,
    conversas: <><path d="M4 5h16v11H8l-4 4z"/><path d="M8 9h8M8 12h5"/></>,
    one: <><circle cx="12" cy="12" r="9"/><path d="M10 9h2v7M10 16h5"/></>,
    spark: <><path d="m12 3 1.5 5.5L19 10l-5.5 1.5L12 17l-1.5-5.5L5 10l5.5-1.5z"/><path d="m19 17 .7 2.3L22 20l-2.3.7L19 23l-.7-2.3L16 20l2.3-.7z"/></>,
    columns: <><rect x="3" y="4" width="5" height="16" rx="1"/><rect x="10" y="4" width="5" height="11" rx="1"/><rect x="17" y="4" width="4" height="7" rx="1"/></>,
    flow: <><circle cx="5" cy="5" r="2"/><circle cx="19" cy="12" r="2"/><circle cx="5" cy="19" r="2"/><path d="M7 5h3a4 4 0 0 1 4 4v0a3 3 0 0 0 3 3M7 19h3a4 4 0 0 0 4-4v0"/></>,
    catalog: <><path d="M4 5a2 2 0 0 1 2-2h14v16H6a2 2 0 0 0-2 2z"/><path d="M4 5v16M8 7h8M8 11h6"/></>,
    check: <><path d="M4 12 9 17 20 6"/></>,
    offline: <><path d="M2 8.8A15 15 0 0 1 22 9M5 12.2a10 10 0 0 1 12.5-.9M8.5 15.5a5 5 0 0 1 4.8-.8"/><path d="m3 3 18 18"/></>,
    phonecheck: <><rect x="7" y="2" width="10" height="20" rx="2"/><path d="m9.5 12 1.8 1.8 3.5-4M10 18h4"/></>,
    route: <><circle cx="5" cy="5" r="2"/><circle cx="19" cy="19" r="2"/><path d="M7 5h5a3 3 0 0 1 3 3v0a3 3 0 0 1-3 3H9a3 3 0 0 0-3 3v0a3 3 0 0 0 3 3h8"/></>,
    map: <><path d="m3 6 5-3 8 3 5-3v15l-5 3-8-3-5 3z"/><path d="M8 3v15M16 6v15"/><circle cx="12" cy="10" r="2"/></>,
    calendar: <><rect x="3" y="5" width="18" height="16" rx="2"/><path d="M8 3v4M16 3v4M3 10h18M8 14h3M8 17h6"/></>,
    inbox: <><path d="M4 4h16v15H4z"/><path d="M4 14h5l2 2h2l2-2h5"/></>,
    send: <><path d="m21 3-8 18-3-8-8-3z"/><path d="m10 13 11-10"/></>,
    link: <><path d="M10 13a5 5 0 0 0 7.5.5l2-2a5 5 0 0 0-7-7l-1.2 1.2"/><path d="M14 11a5 5 0 0 0-7.5-.5l-2 2a5 5 0 0 0 7 7l1.2-1.2"/></>,
    sync: <><path d="M20 7h-6V1"/><path d="M4 17h6v6"/><path d="M5.5 9a8 8 0 0 1 13.8-3L20 7M4 17l.7 1a8 8 0 0 0 13.8-3"/></>,
    shield: <><path d="M12 3 5 6v5c0 5 3 8 7 10 4-2 7-5 7-10V6z"/><path d="m9 12 2 2 4-5"/></>,
    database: <><ellipse cx="12" cy="5" rx="8" ry="3"/><path d="M4 5v7c0 1.7 3.6 3 8 3s8-1.3 8-3V5M4 12v7c0 1.7 3.6 3 8 3s8-1.3 8-3v-7"/></>,
    arrow: <><path d="M5 12h14M14 7l5 5-5 5"/></>,
    menu: <><path d="M4 7h16M4 12h16M4 17h16"/></>,
    close: <><path d="m6 6 12 12M18 6 6 18"/></>,
  };
  return <svg {...common}>{paths[name] ?? paths.crm}</svg>;
}

function Logo() {
  return (
    <Link className="brand" href="/" aria-label="DWU — página inicial">
      <span className="brand-mark"><span>d</span><span>w</span><span>u</span></span>
      <span className="brand-copy"><strong>DWU</strong><small>IT SOLUTIONS</small></span>
    </Link>
  );
}

function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="header-inner">
        <Logo />
        <button
          className="mobile-menu"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          <Icon name={open ? "close" : "menu"} />
        </button>
        <nav className={open ? "main-nav is-open" : "main-nav"} aria-label="Navegação principal">
          <details className="solutions-menu">
            <summary>Soluções <span>⌄</span></summary>
            <div className="solutions-dropdown">
              {products.map((product) => (
                <Link
                  href={`/${product.slug}`}
                  key={product.slug}
                  onClick={() => setOpen(false)}
                >
                  <span
                    className="nav-icon"
                    style={{ color: product.color, background: product.tint }}
                  >
                    <Icon name={product.icon} size={19} />
                  </span>
                  <span><strong>{product.shortName}</strong><small>{product.cardText}</small></span>
                </Link>
              ))}
            </div>
          </details>
          <a href="#sobre" onClick={() => setOpen(false)}>Sobre a DWU</a>
          <a href="#clientes" onClick={() => setOpen(false)}>Clientes</a>
          <a className="button button-small" href="#demonstracao" onClick={() => setOpen(false)}>
            Agendar demonstração
          </a>
        </nav>
      </div>
    </header>
  );
}

function Footer() {
  return (
    <footer className="site-footer" id="sobre">
      <div className="footer-main">
        <div className="footer-brand">
          <Logo />
          <p>Soluções de software para operações de vendas e serviços B2B.</p>
          <div className="sap-seal"><span>SAP</span> Partner</div>
        </div>
        <div>
          <h3>Soluções</h3>
          {products.map((product) => (
            <Link key={product.slug} href={`/${product.slug}`}>{product.shortName}</Link>
          ))}
        </div>
        <div>
          <h3>DWU</h3>
          <a href="#sobre">Sobre a DWU</a>
          <a href="#clientes">Clientes</a>
          <a href="#demonstracao">Fale com a equipe</a>
          <p className="address">Porto Alegre/RS</p>
        </div>
        <div>
          <h3>Acompanhe</h3>
          <a href="https://www.linkedin.com/company/dwu-it-solutions/" target="_blank" rel="noreferrer">LinkedIn</a>
          <a href="https://www.instagram.com/dwuitsolutions/" target="_blank" rel="noreferrer">Instagram</a>
          <a href="https://www.youtube.com/@DWUITSolutions" target="_blank" rel="noreferrer">YouTube</a>
        </div>
      </div>
      <div className="footer-bottom">
        <span>© 2026 DWU IT Solutions</span>
        <span>Privacidade · Termos de uso</span>
      </div>
    </footer>
  );
}

function DemoForm({ compact = false }: { compact?: boolean }) {
  const [sent, setSent] = useState(false);

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSent(true);
  }

  return (
    <form className={compact ? "demo-form compact" : "demo-form"} onSubmit={submit}>
      {sent ? (
        <div className="form-success" role="status">
          <span><Icon name="check" /></span>
          <div><strong>Dados recebidos.</strong><p>A equipe da DWU entrará em contato.</p></div>
        </div>
      ) : (
        <>
          <label>Nome<input name="name" placeholder="Seu nome" required /></label>
          <label>Telefone<input name="phone" type="tel" placeholder="(00) 00000-0000" required /></label>
          <label>E-mail<input name="email" type="email" placeholder="email@empresa.com.br" required /></label>
          <label>Empresa<input name="company" placeholder="Nome da empresa" required /></label>
          <label className="form-wide">Produto de interesse
            <select name="product" required defaultValue="">
              <option value="" disabled>Selecione uma solução</option>
              <option>CRM One</option>
              <option>DWU Assist</option>
              <option>DWU CRM</option>
              <option>DWU Sales</option>
            </select>
          </label>
          <label className="form-consent">
            <input name="lgpd" type="checkbox" required />
            <span>Autorizo a DWU a utilizar meus dados para entrar em contato, conforme a Política de Privacidade.</span>
          </label>
          <button className="button" type="submit">Quero falar com um especialista <Icon name="arrow" size={19} /></button>
        </>
      )}
    </form>
  );
}

function DashboardVisual() {
  return (
    <div className="dashboard-shell" aria-label="Painel ilustrativo de indicadores comerciais e operacionais">
      <div className="dashboard-top">
        <div><span className="dot blue" /><span className="dot purple" /><span className="dot green" /></div>
        <span>Visão da operação</span>
        <button aria-label="Opções do painel">•••</button>
      </div>
      <div className="dashboard-grid">
        <div className="metric-card metric-wide">
          <span className="metric-label">Receita influenciada</span>
          <strong>Em crescimento</strong>
          <div className="chart-line">
            <span/><span/><span/><span/><span/><i/>
          </div>
          <small>Indicador configurável por período</small>
        </div>
        <div className="metric-card">
          <span className="metric-label">Produtividade</span>
          <div className="ring"><span>↑</span></div>
          <small>Atividades concluídas</small>
        </div>
        <div className="metric-card">
          <span className="metric-label">Pipeline</span>
          <div className="mini-bars"><i/><i/><i/><i/></div>
          <small>Negociações por etapa</small>
        </div>
        <div className="metric-card metric-list">
          <span className="metric-label">Operação conectada</span>
          <div><i className="tag crm">CRM</i><span>Negociação atualizada</span><b>agora</b></div>
          <div><i className="tag sales">Sales</i><span>Pedido sincronizado</span><b>campo</b></div>
          <div><i className="tag assist">Assist</i><span>OS concluída</span><b>serviço</b></div>
        </div>
      </div>
      <div className="floating-insight"><span>↗</span><div><small>Ritmo da operação</small><strong>Dados para agir</strong></div></div>
    </div>
  );
}

function ProductCard({ product }: { product: Product }) {
  return (
    <Link className="product-card" href={`/${product.slug}`} style={{ "--product": product.color } as React.CSSProperties}>
      <div className="product-card-top">
        <span className="product-icon" style={{ color: product.color, background: product.tint }}>
          <Icon name={product.icon} size={26} />
        </span>
        <span className="card-arrow"><Icon name="arrow" size={20} /></span>
      </div>
      <h3>{product.shortName}</h3>
      <p>{product.cardText}</p>
      <span className="learn-link">Conhecer a solução</span>
    </Link>
  );
}

function SectionIntro({ eyebrow, title, text }: { eyebrow: string; title: string; text?: string }) {
  return (
    <div className="section-intro">
      <span className="eyebrow">{eyebrow}</span>
      <h2>{title}</h2>
      {text && <p>{text}</p>}
    </div>
  );
}

export function HomePage() {
  const homeProducts = products.filter((product) =>
    ["dwu-crm", "dwu-assist", "crm-one", "dwu-sales"].includes(product.slug),
  );
  const homeProductCopy: Record<string, string> = {
    "dwu-crm": "Organize clientes, oportunidades e conversas do WhatsApp para conduzir cada negociação com mais clareza.",
    "dwu-assist": "Planeje atendimentos técnicos, acompanhe equipes em campo e registre cada serviço com mais precisão.",
    "crm-one": "Conecte vendas e relacionamento ao SAP Business One com um CRM certificado, nativo e pronto para sua operação.",
    "dwu-sales": "Leve clientes, catálogo, preços e pedidos para o celular e venda com mais autonomia dentro ou fora do escritório.",
  };
  const featureGroups = [
    {
      name: "DWU CRM",
      color: "#1676d2",
      href: "/dwu-crm",
      items: [
        ["Conversas integradas ao WhatsApp", "Mantenha contatos e negociações organizados para responder com agilidade e preservar todo o histórico."],
        ["Funil comercial inteligente", "Visualize cada oportunidade e direcione a equipe para as negociações com maior potencial de avanço."],
        ["Visão completa do cliente", "Reúna contatos, propostas e interações para conduzir relacionamentos mais próximos e produtivos."],
      ],
    },
    {
      name: "DWU Assist",
      color: "#820ad1",
      href: "/dwu-assist",
      items: [
        ["Agenda técnica organizada", "Distribua atendimentos conforme disponibilidade e localização para aproveitar melhor o tempo da equipe."],
        ["Ordem de serviço digital", "Registre fotos, checklists e assinaturas para manter cada atendimento documentado."],
        ["Acompanhamento em campo", "Veja o andamento dos serviços e compartilhe informações atualizadas com a gestão."],
      ],
    },
    {
      name: "CRM One",
      color: "#6046c8",
      href: "/crm-one",
      items: [
        ["CRM nativo para SAP", "Acesse dados comerciais dentro do ecossistema SAP Business One e trabalhe com informações sempre alinhadas."],
        ["Carteira e histórico comercial", "Consulte clientes, pedidos e negociações para abordar cada oportunidade com mais contexto."],
        ["Indicadores para decisões", "Acompanhe vendas e atividades em painéis que facilitam a gestão comercial."],
      ],
    },
    {
      name: "DWU Sales",
      color: "#f47721",
      href: "/dwu-sales",
      items: [
        ["Pedidos pelo celular", "Crie cotações e pedidos durante a visita para dar mais velocidade ao fechamento."],
        ["Vendas mesmo sem internet", "Continue atendendo em campo e sincronize as informações quando a conexão estiver disponível."],
        ["Clientes e rotas no mapa", "Localize clientes próximos e planeje visitas para aproveitar melhor cada deslocamento."],
      ],
    },
  ];

  return (
    <>
      <Header />
      <main>
        <section className="home-hero">
          <div className="hero-orb orb-one" /><div className="hero-orb orb-two" />
          <div className="container home-hero-grid">
            <div className="home-hero-copy">
              <span className="eyebrow eyebrow-light"><i /> Tecnologia para operações B2B</span>
              <h1>Gestão inteligente para <span>vendas</span> e <span>serviços</span></h1>
              <p>Transforme sua rotina comercial e de serviços com soluções que dão mais velocidade ao time, mais controle para a gestão e uma experiência melhor para o cliente.</p>
              <div className="hero-actions">
                <a className="button button-light" href="#demonstracao">Impulsionar minha gestão <Icon name="arrow" size={19} /></a>
              </div>
              <div className="hero-trust">
                <span><b>10+</b> anos de mercado</span>
                <span><b>12 mil+</b> usuários</span>
                <span><b>SAP</b> CRM certificado</span>
              </div>
            </div>
            <DashboardVisual />
          </div>
        </section>

        <section className="products-section" id="solucoes">
          <div className="container">
            <SectionIntro
              eyebrow="Soluções DWU"
              title="Soluções para vender e atender melhor"
              text="Escolha a solução que combina com sua operação e dê mais autonomia ao time sem perder o controle da gestão."
            />
            <div className="approved-products-grid">
              {homeProducts.map((product) => (
                <Link className="approved-product-card" href={`/${product.slug}`} key={product.slug} style={{ "--product": product.color } as React.CSSProperties}>
                  <span className="product-icon" style={{ color: product.color, background: product.tint }}><Icon name={product.icon} size={27} /></span>
                  <h3>{product.shortName}</h3>
                  <p>{homeProductCopy[product.slug]}</p>
                  <span className="learn-link">Conhecer {product.shortName} <Icon name="arrow" size={17} /></span>
                </Link>
              ))}
            </div>
            <div className="section-action"><a className="button button-outline" href="#funcionalidades">Comparar todas as soluções</a></div>
          </div>
        </section>

        <section className="social-proof-section" id="clientes">
          <div className="container">
            <SectionIntro eyebrow="Confiança que cresce" title="+12 mil usuários confiam na DWU" text="Empresas usam nossas soluções para ganhar eficiência em vendas e serviços." />
            <div className="logo-marquee" aria-label="Clientes DWU">
              <div className="marquee-track">
                {["ATLANTA MOTO PEÇAS", "ALPINA EQUIPAMENTOS", "MASTER TRANSPORT", "ATLANTA MOTO PEÇAS", "ALPINA EQUIPAMENTOS", "MASTER TRANSPORT"].map((name, index) => <span key={`${name}-${index}`}>{name}</span>)}
              </div>
            </div>
            <div className="section-action"><a className="text-link" href="#videos">Ver histórias de clientes <Icon name="arrow" size={18} /></a></div>
          </div>
        </section>

        <section className="value-section">
          <div className="container value-panel">
            <span className="eyebrow eyebrow-light">Uma gestão mais conectada</span>
            <h2>Informação que acompanha sua operação</h2>
            <p>A DWU aproxima equipes, clientes e sistemas para que as informações avancem com agilidade e apoiem decisões mais seguras.</p>
            <a className="button button-light" href="#demonstracao">Descobrir a solução ideal <Icon name="arrow" size={18} /></a>
          </div>
        </section>

        <section className="segments-section">
          <div className="container">
            <SectionIntro eyebrow="Segmentos atendidos" title="Soluções para diferentes operações" text="Tecnologia aplicada à rotina de empresas que buscam mais produtividade, mobilidade e visão sobre seus resultados." />
            <div className="segments-grid">
              {[
                ["Indústria", "Conecte vendas, pedidos, clientes e gestão para acompanhar a operação com mais precisão."],
                ["Distribuição e atacado", "Consulte carteira, estoque e preços para acelerar pedidos e ampliar oportunidades comerciais."],
                ["Vendas externas", "Dê aos vendedores acesso às informações necessárias para negociar e registrar pedidos em campo."],
                ["Gestão técnica e field service", "Organize agendas, equipes e ordens de serviço para entregar atendimentos consistentes."],
                ["Serviços B2B", "Centralize relacionamentos e atividades para atender cada cliente com mais contexto e continuidade."],
              ].map(([title, text], index) => <article key={title}><span>0{index + 1}</span><h3>{title}</h3><p>{text}</p></article>)}
            </div>
            <div className="section-action"><a className="button button-outline" href="#demonstracao">Encontrar solução para meu segmento</a></div>
          </div>
        </section>

        <section className="integrations-home">
          <div className="container">
            <SectionIntro eyebrow="Integrações" title="Sua operação trabalhando em conjunto" text="Conecte as soluções DWU aos sistemas que sua empresa já utiliza e mantenha as informações alinhadas entre as equipes." />
            <div className="integration-marquee"><div className="marquee-track tools">
              {["SAP", "TOTVS", "Sankhya", "Senior", "Oracle", "Omie", "Bling", "WhatsApp", "Gmail", "Google Calendar", "DocuSign", "Clicksign", "SAP", "TOTVS"].map((name, index) => <span key={`${name}-${index}`}>{name}</span>)}
            </div></div>
            <div className="section-action"><a className="text-link" href="#demonstracao">Ver integrações disponíveis <Icon name="arrow" size={18} /></a></div>
          </div>
        </section>

        <section className="features-home" id="funcionalidades">
          <div className="container">
            <SectionIntro eyebrow="Funcionalidades" title="Recursos para avançar seus resultados" text="Conheça os recursos que apoiam vendas, relacionamento e serviços em cada solução DWU." />
            <div className="feature-products">
              {featureGroups.map((group) => (
                <article className="feature-product" key={group.name} style={{ "--feature": group.color } as React.CSSProperties}>
                  <div className="feature-product-heading"><span /><h3>{group.name}</h3></div>
                  <div className="feature-fan">
                    {group.items.map(([title, text], index) => (
                      <details key={title} open={index === 0}>
                        <summary>{title}<b>+</b></summary>
                        <p>{text}</p>
                      </details>
                    ))}
                  </div>
                  <Link className="text-link" href={group.href}>Explorar {group.name} <Icon name="arrow" size={17} /></Link>
                </article>
              ))}
            </div>
            <div className="section-action"><a className="button button-outline" href="#demonstracao">Escolher minha solução</a></div>
          </div>
        </section>

        <section className="reviews-section">
          <div className="container">
            <SectionIntro eyebrow="Avaliações do Google" title="A experiência de quem escolheu DWU" text="5 estrelas no Google · 43 avaliações" />
            <div className="reviews-grid">
              {[
                ["Master Transport", "A DWU sempre nos atende rápido quando precisamos de suporte. Dá para ver que eles realmente se importam com o cliente."],
                ["Jerry Sasso", "Ótima empresa, ótimo atendimento aos clientes."],
                ["Jean Sasso", "Muito bom, ótimo atendimento, excelentes profissionais."],
                ["Diego Schreiber", "O que mais gostei foi a praticidade. Consigo acessar os dados dos clientes direto pelo celular, sem precisar ligar para o escritório toda hora."],
              ].map(([name, text]) => <article key={name}><span className="google-mark">G</span><div className="stars">★★★★★</div><p>“{text}”</p><strong>{name}</strong><small>Avaliação publicada no Google</small></article>)}
            </div>
            <div className="section-action"><a className="text-link" href="https://admin.trustindex.io/api/googleWriteReview?place-id=ChIJFxKnk1yCGZURfLKfrXwFdE4" target="_blank" rel="noreferrer">Ler todas as avaliações <Icon name="arrow" size={18} /></a></div>
          </div>
        </section>

        <section className="videos-section" id="videos">
          <div className="container">
            <SectionIntro eyebrow="Vídeos-case" title="Resultados contados por nossos clientes" text="Veja como empresas utilizam as soluções DWU para ganhar eficiência e apoiar o crescimento de suas operações." />
            <div className="media-grid">
              {[
                ["Atlanta Moto Peças", "d4sLUY-GNhQ"],
                ["Alpina Equipamentos", "UMTRVWcm12c"],
                ["Case de cliente DWU", "4ZDzlTq3jY4"],
              ].map(([title, id]) => <a className="video-card" key={id} href={`https://www.youtube.com/watch?v=${id}`} target="_blank" rel="noreferrer"><div><img src={`https://img.youtube.com/vi/${id}/hqdefault.jpg`} alt={`Vídeo-case ${title}`} /><span>▶</span></div><h3>{title}</h3><p>Assistir ao case</p></a>)}
            </div>
            <div className="section-action"><a className="button button-outline" href="https://www.youtube.com/@DWUITSolutions" target="_blank" rel="noreferrer">Conhecer mais histórias no YouTube</a></div>
          </div>
        </section>

        <section className="posts-section">
          <div className="container">
            <SectionIntro eyebrow="Conteúdos DWU" title="Conteúdo para decisões mais seguras" text="Acesse análises práticas sobre CRM, vendas e integração com SAP Business One." />
            <div className="media-grid">
              {[
                ["CRM One x CRMs globais", "Qual é a melhor escolha para empresas que usam SAP Business One?", "https://dwu.com.br/melhor-opcao-crm-sap-business-one/", "https://dwu.com.br/wp-content/uploads/2025/09/dwu-01-po-1-300x197.jpg.webp"],
                ["CRM para distribuidoras", "Conheça uma opção integrada ao SAP Business One para ampliar a eficiência comercial.", "https://dwu.com.br/melhor-crm-para-distribuidoras-sap-business-one/", "https://dwu.com.br/wp-content/uploads/2025/08/Banner-site-distribuidoras-1-300x169.png.webp"],
                ["CRM para indústrias com SAP", "Veja como uma solução certificada conecta relacionamento, vendas e gestão.", "https://dwu.com.br/melhor-crm-para-sap-business-one/", "https://dwu.com.br/wp-content/uploads/2025/08/Banner-site-industria-1-300x169.png.webp"],
              ].map(([title, text, href, image]) => <a className="post-card" key={title} href={href} target="_blank" rel="noreferrer"><img src={image} alt="" /><div><h3>{title}</h3><p>{text}</p><span>Ler conteúdo <Icon name="arrow" size={16} /></span></div></a>)}
            </div>
            <div className="section-action"><a className="text-link" href="https://dwu.com.br/blog/" target="_blank" rel="noreferrer">Ver mais conteúdos <Icon name="arrow" size={18} /></a></div>
          </div>
        </section>

        <section className="demo-section" id="demonstracao">
          <div className="container demo-grid">
            <div><span className="eyebrow eyebrow-light">Fale com a DWU</span><h2>Encontre sua solução DWU</h2><p>Conte um pouco sobre sua empresa. Um especialista indicará a solução mais adequada para sua operação.</p></div>
            <DemoForm />
          </div>
        </section>

        <section className="faq-home">
          <div className="container faq-layout">
            <div><SectionIntro eyebrow="Perguntas frequentes" title="Respostas sobre a DWU" text="Encontre respostas rápidas e escolha com mais segurança a solução adequada para sua empresa." /><a className="button button-outline" href="#demonstracao">Conversar com um especialista DWU</a></div>
            <div className="faq-list">
              {[
                ["O que a DWU faz?", "A DWU desenvolve soluções para organizar vendas, relacionamento com clientes, serviços técnicos e operações em campo."],
                ["Quais são as soluções da DWU?", "O portfólio inclui DWU CRM, DWU Assist, CRM One e DWU Sales, com recursos para diferentes rotinas comerciais e de serviços."],
                ["As soluções integram com ERP?", "Sim. As soluções podem se conectar a diversos ERPs. O CRM One possui integração nativa e certificada para SAP Business One."],
                ["Para quais empresas a DWU é indicada?", "A DWU atende indústrias, distribuidoras, atacadistas, equipes de vendas externas, operações técnicas e empresas de serviços B2B."],
                ["Como escolher a solução certa?", "Um especialista analisa sua operação e indica o produto mais adequado aos objetivos da sua equipe."],
              ].map(([question, answer], index) => <details key={question} open={index === 0}><summary>{question}<span>+</span></summary><p>{answer}</p></details>)}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

function KanbanVisual({ color }: { color: string }) {
  return (
    <div className="product-screen kanban-screen" style={{ "--accent": color } as React.CSSProperties}>
      <div className="screen-top"><span className="screen-logo">dwu</span><span>Pipeline comercial</span><i>•••</i></div>
      <div className="screen-toolbar"><span>Funil principal</span><div><i /> Buscar oportunidade</div><button>+ Oportunidade</button></div>
      <div className="kanban-columns">
        {[
          ["Novo contato", "Metalúrgica Aliança", "Distribuidora Sul"],
          ["Diagnóstico", "Indústria Horizonte", "Delta Equipamentos"],
          ["Proposta", "Grupo Norte", "Alfa Componentes"],
        ].map((column, index) => (
          <div className="kanban-column" key={column[0]}>
            <h4><i />{column[0]}<b>{column.length - 1}</b></h4>
            {column.slice(1).map((item, itemIndex) => (
              <div className="deal-card" key={item}>
                <span>{item}</span>
                <small>{itemIndex ? "Reunião agendada" : "Próxima atividade hoje"}</small>
                <div><i className="avatar">{item.charAt(0)}</i><b>{index === 2 ? "Proposta enviada" : "Em andamento"}</b></div>
              </div>
            ))}
          </div>
        ))}
      </div>
      <div className="ai-coach"><span>✦</span><div><strong>Próximo passo sugerido</strong><small>Revise os pontos da última reunião antes do contato.</small></div></div>
    </div>
  );
}

function PhoneVisual({ color }: { color: string }) {
  return (
    <div className="phone-scene" style={{ "--accent": color } as React.CSSProperties}>
      <div className="sales-chart-card">
        <span>Tempo até o pedido</span>
        <div><small>Processo manual</small><i className="bar old" /></div>
        <div><small>Com DWU Sales</small><i className="bar new" /></div>
        <strong>Menos etapas depois da visita</strong>
      </div>
      <div className="phone">
        <div className="phone-notch" />
        <div className="phone-header"><span className="screen-logo">dwu</span><i>◉</i></div>
        <p>Olá, Mariana</p><h3>Novo pedido</h3>
        <label>Cliente</label><div className="phone-input">Mercado Central <b>›</b></div>
        <div className="phone-stats"><span><small>Itens</small><strong>08</strong></span><span><small>Status</small><strong>Rascunho</strong></span></div>
        <div className="product-row"><i /><span><strong>Produto selecionado</strong><small>Quantidade e preço</small></span><b>02</b></div>
        <div className="product-row"><i /><span><strong>Outro produto</strong><small>Quantidade e preço</small></span><b>06</b></div>
        <button>Finalizar pedido</button>
        <div className="offline-pill">● Modo offline ativo</div>
      </div>
      <div className="sync-card"><span>✓</span><div><strong>Pronto para sincronizar</strong><small>Dados salvos no dispositivo</small></div></div>
    </div>
  );
}

function MapVisual({ color }: { color: string }) {
  return (
    <div className="map-screen product-screen" style={{ "--accent": color } as React.CSSProperties}>
      <div className="map-sidebar">
        <span className="screen-logo">dwu</span><h3>Agenda técnica</h3>
        <small>Atendimentos de hoje</small>
        {[
          ["08:30", "Manutenção preventiva", "Em execução"],
          ["11:00", "Inspeção de equipamento", "A caminho"],
          ["14:30", "Ordem de serviço", "Agendado"],
        ].map((item, index) => (
          <div className="os-card" key={item[0]}><b>{item[0]}</b><span><strong>{item[1]}</strong><small>{item[2]}</small></span><i className={`status s${index}`} /></div>
        ))}
      </div>
      <div className="map-area">
        <div className="map-roads road-one"/><div className="map-roads road-two"/><div className="map-roads road-three"/>
        <div className="map-block b1"/><div className="map-block b2"/><div className="map-block b3"/><div className="map-block b4"/>
        <div className="route-line"/>
        <span className="pin p1">1</span><span className="pin p2">2</span><span className="pin p3">3</span>
        <div className="technician-card"><span>JT</span><div><strong>João — Técnico</strong><small>Próximo atendimento em rota</small></div></div>
      </div>
    </div>
  );
}

function InboxVisual({ color }: { color: string }) {
  return (
    <div className="inbox-screen product-screen" style={{ "--accent": color } as React.CSSProperties}>
      <aside><span className="screen-logo">dwu</span><small>Canais</small><button className="active">◉ Todos <b>12</b></button><button>◌ WhatsApp <b>8</b></button><button>◎ Instagram <b>4</b></button><small>Filas</small><button>Comercial <b>6</b></button><button>Pós-venda <b>3</b></button></aside>
      <div className="conversation-list">
        <div className="conversation-search">Buscar conversa</div>
        {["Ana Martins", "Carlos — Grupo Ponto", "Fernanda Lima", "Mercado Central"].map((name, index) => (
          <div className={index === 0 ? "conversation active" : "conversation"} key={name}>
            <span>{name.charAt(0)}</span><div><strong>{name}</strong><small>{index === 0 ? "Gostaria de receber uma proposta..." : "Última mensagem do contato"}</small></div><time>{index === 0 ? "agora" : "10:42"}</time>
          </div>
        ))}
      </div>
      <div className="chat-panel">
        <div className="chat-title"><span>A</span><div><strong>Ana Martins</strong><small>WhatsApp · Comercial</small></div><button>⋮</button></div>
        <div className="chat-body"><p>Olá! Preciso organizar os pedidos da equipe externa.</p><p className="out">Posso entender como a equipe trabalha hoje?</p><p>Os vendedores anotam e passam depois para o escritório.</p></div>
        <div className="chat-input">Digite uma mensagem <button>➤</button></div>
        <div className="opportunity-card"><span>↗</span><div><strong>Criar oportunidade</strong><small>Levar esta conversa para o funil</small></div></div>
      </div>
    </div>
  );
}

function SapVisual({ color }: { color: string }) {
  return (
    <div className="sap-orbit" style={{ "--accent": color } as React.CSSProperties}>
      <div className="orbit orbit-one" /><div className="orbit orbit-two" />
      <div className="sap-core"><span>SAP</span><strong>Business One</strong><small>Banco de dados da empresa</small></div>
      <div className="orbit-node node-crm"><Icon name="one" /><span><strong>CRM One</strong><small>Extensão nativa</small></span></div>
      <div className="orbit-node node-sales"><Icon name="sales" /><span><strong>DWU Sales</strong><small>Vendas em campo</small></span></div>
      <div className="orbit-node node-assist"><Icon name="assist" /><span><strong>DWU Assist</strong><small>Serviços em campo</small></span></div>
      <div className="native-badge"><span>✓</span><div><strong>Mesma base de dados</strong><small>Sem nuvem ou API externa para o CRM</small></div></div>
    </div>
  );
}

function ProductVisual({ product }: { product: Product }) {
  if (product.visual === "kanban") return <KanbanVisual color={product.color} />;
  if (product.visual === "phone") return <PhoneVisual color={product.color} />;
  if (product.visual === "map") return <MapVisual color={product.color} />;
  if (product.visual === "inbox") return <InboxVisual color={product.color} />;
  return <SapVisual color={product.color} />;
}

function Integrations({ product }: { product: Product }) {
  const labels = product.slug === "dwu-crm"
    ? ["SAP Business One", "TOTVS", "Oracle", "Dinamize", "API aberta"]
    : product.slug === "crm-one"
      ? ["SAP Business One", "DWU Sales", "DWU Assist"]
      : ["SAP Business One", "Principais ERPs", product.shortName === "DWU Conversas" ? "Meta" : "Operação DWU"];
  return (
    <div className="integration-row">
      {labels.map((label) => <span key={label}>{label}</span>)}
    </div>
  );
}

function AssistLeadForm() {
  const [sent, setSent] = useState(false);

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSent(true);
  }

  return (
    <form className="assist-lead-form" onSubmit={submit}>
      {sent ? (
        <div className="assist-form-success" role="status">
          <span><Icon name="check" /></span>
          <div>
            <strong>Recebemos seus dados.</strong>
            <p>Nossa equipe entrará em contato para entender sua operação e preparar a demonstração.</p>
          </div>
        </div>
      ) : (
        <>
          <div className="assist-form-heading">
            <strong>Agende uma demonstração gratuita</strong>
            <small>Apresentação direcionada à rotina da sua equipe.</small>
          </div>
          <label>
            Nome
            <input name="name" placeholder="Seu nome" required />
          </label>
          <label>
            E-mail corporativo
            <input name="email" type="email" placeholder="email@empresa.com.br" required />
          </label>
          <label>
            Empresa
            <input name="company" placeholder="Nome da empresa" required />
          </label>
          <label>
            Número de técnicos
            <select name="technicians" defaultValue="" required>
              <option value="" disabled>Selecione</option>
              <option>1 a 5</option>
              <option>6 a 15</option>
              <option>16 a 50</option>
              <option>Mais de 50</option>
            </select>
          </label>
          <label className="assist-form-wide">
            O que você precisa organizar?
            <select name="priority" defaultValue="" required>
              <option value="" disabled>Selecione o principal processo</option>
              <option>Chamados e ordens de serviço</option>
              <option>Agenda e equipe técnica</option>
              <option>Manutenções preventivas</option>
              <option>Execução e registros em campo</option>
              <option>Todo o processo de assistência técnica</option>
            </select>
          </label>
          <label className="assist-consent">
            <input type="checkbox" required />
            <span>Autorizo o contato da DWU sobre esta demonstração.</span>
          </label>
          <button className="button assist-form-wide" type="submit">
            Agendar demonstração <Icon name="arrow" size={19} />
          </button>
          <small className="assist-form-note">Sem compromisso. Seus dados serão usados apenas para este contato.</small>
        </>
      )}
    </form>
  );
}

function AssistPage() {
  const painPoints = [
    ["Status espalhado", "O gestor depende de ligações e mensagens para saber onde cada atendimento parou.", "Painel de gestão", "Agenda, responsável e status ficam no mesmo acompanhamento.", "columns"],
    ["OS incompleta", "O técnico retorna sem fotos, assinatura ou dados essenciais para fechar o serviço.", "Ordem de serviço digital", "Checklist, anexos, materiais e aceite ficam vinculados ao atendimento.", "phonecheck"],
    ["Equipe sem sinal", "A execução trava em clientes, plantas e áreas sem conexão estável.", "Aplicativo offline", "O técnico registra o serviço e sincroniza quando a internet retorna.", "offline"],
    ["Preventiva na planilha", "Prazos dependem de controles paralelos e conferências manuais.", "Planos de manutenção", "As frequências cadastradas orientam a programação dos chamados.", "sync"],
    ["Dados redigitados", "A mesma informação volta ao escritório e precisa ser lançada de novo.", "Registros estruturados", "Os dados da execução retornam organizados e podem seguir para o ERP.", "database"],
  ];

  const architecture = [
    {
      title: "Gestão e planejamento",
      text: "Para o gestor distribuir a agenda e acompanhar a execução.",
      rows: [
        ["Agenda técnica", "Organiza horários e responsáveis", "Conflitos de agenda", "Painel de gestão"],
        ["Gestão da equipe", "Distribui atendimentos por técnico", "Sobrecarga e baixa organização", "Painel de gestão"],
        ["Geolocalização", "Exibe os locais dos serviços", "Falta de contexto geográfico", "Painel de gestão"],
        ["Planejamento de rotas", "Organiza a sequência de visitas", "Deslocamentos desnecessários", "Painel de gestão"],
        ["Status das ordens", "Mostra o andamento do serviço", "Cobranças por telefone e WhatsApp", "Painel de gestão"],
        ["Relatórios operacionais", "Consolida dados da execução", "Decisões sem histórico", "Painel de gestão"],
      ],
    },
    {
      title: "Chamados e ordens de serviço",
      text: "Para manter solicitação, execução e comprovação no mesmo registro.",
      rows: [
        ["Gestão de chamados", "Centraliza as solicitações", "Canais espalhados", "Gestão de serviços"],
        ["OS digital", "Reúne dados do atendimento", "Formulários em papel", "Gestão de serviços"],
        ["Histórico do cliente", "Mostra atendimentos anteriores", "Falta de contexto", "Gestão de serviços"],
        ["Histórico do equipamento", "Registra ocorrências e serviços", "Baixa rastreabilidade", "Gestão de serviços"],
        ["Materiais utilizados", "Registra peças e consumo", "Divergência no fechamento", "Gestão de serviços"],
        ["Assinatura do cliente", "Confirma a conclusão no celular", "Comprovantes separados", "Gestão de serviços"],
      ],
    },
    {
      title: "Aplicativo do técnico",
      text: "Uma interface simples para executar a ordem de serviço em campo.",
      rows: [
        ["Execução offline", "Mantém o atendimento sem internet", "Serviço interrompido por falta de sinal", "Aplicativo técnico"],
        ["Checklist digital", "Guia as etapas obrigatórias", "Procedimento executado pela metade", "Aplicativo técnico"],
        ["Fotos e anexos", "Documenta o que foi encontrado", "Evidências fora da OS", "Aplicativo técnico"],
        ["Assinatura digital", "Coleta o aceite do cliente", "Confirmação em papel", "Aplicativo técnico"],
        ["Materiais", "Registra itens usados no local", "Consumo anotado depois", "Aplicativo técnico"],
        ["Sincronização", "Envia os dados ao reconectar", "Redigitação no escritório", "Aplicativo técnico"],
      ],
    },
    {
      title: "Manutenção preventiva",
      text: "Para programar serviços recorrentes sem depender de planilhas.",
      rows: [
        ["Plano de manutenção", "Define serviços e frequências", "Prazos sem controle", "Preventivas"],
        ["Programação de chamados", "Orienta a abertura das visitas", "Lembretes manuais", "Preventivas"],
        ["Histórico de execução", "Registra o que foi realizado", "Falta de comprovação", "Preventivas"],
      ],
    },
  ];

  const segments = [
    ["Assistência técnica", "Chamados, equipamentos, peças, evidências e ordens de serviço."],
    ["Manutenção industrial", "Corretivas e preventivas com histórico por ativo."],
    ["Geradores e energia", "Visitas programadas e registros em locais com conexão instável."],
    ["Facilities", "Agenda, execução e comprovação de serviços recorrentes."],
    ["Instalações", "Checklists e evidências por etapa do trabalho."],
    ["Inspeções", "Fotos, observações e assinatura coletadas no local."],
    ["Serviços contratados", "Frequência, atendimento e histórico vinculados ao cliente."],
  ];

  const integrations = [
    ["SAP Business One", "Compartilha dados definidos no projeto", "Cadastro, equipamentos e atendimento"],
    ["Outros ERPs", "Integra conforme o cenário técnico", "Fluxo validado antes da implantação"],
    ["Estoque", "Pode receber o consumo registrado", "Depende do ERP e do escopo"],
    ["Cadastro de equipamentos", "Mantém o contexto do ativo", "Histórico por equipamento"],
    ["API", "Permite conexões previstas no projeto", "Disponibilidade a confirmar"],
    ["Outra integração", "[Integração a confirmar]", "Validada durante o diagnóstico"],
  ];

  const faqs = [
    ["O aplicativo funciona sem internet?", "Sim. Com os dados previamente sincronizados, o técnico consulta a OS, preenche checklist, registra fotos, materiais e assinatura. Os dados podem ser enviados quando a conexão retornar."],
    ["O DWU Assist substitui meu ERP?", "Não. Ele organiza a operação de serviços e pode se integrar ao SAP Business One e a outros ERPs. O fluxo depende dos sistemas e do escopo contratado."],
    ["Funciona para equipes pequenas?", "Sim. A configuração considera o número de técnicos, os tipos de atendimento e a rotina de gestão. A demonstração ajuda a avaliar a aderência ao seu processo."],
    ["Como funciona a manutenção preventiva?", "A empresa cadastra planos e frequências. Essas definições orientam a programação dos chamados e formam o histórico das execuções."],
    ["O cliente pode assinar a OS no celular?", "Sim. A assinatura é coletada no aplicativo e fica vinculada aos demais registros do atendimento."],
    ["Quanto tempo leva para implementar?", "O prazo varia conforme configuração, integrações e dados necessários. A DWU analisa o cenário antes de apresentar um cronograma."],
  ];

  return (
    <>
      <Header />
      <main className="assist-v2" style={{ "--product": "#820ad1", "--product-tint": "#f4eafd" } as React.CSSProperties}>
        <section className="assist-hero">
          <div className="assist-hero-grid-bg" />
          <div className="assist-glow assist-glow-one" />
          <div className="assist-glow assist-glow-two" />
          <div className="container assist-hero-layout">
            <div className="assist-hero-copy">
              <Link className="assist-back-link" href="/">← Todas as soluções</Link>
              <span className="assist-kicker"><i /> GESTÃO DE EQUIPES E SERVIÇOS EM CAMPO</span>
              <h1>Controle cada atendimento, <span>do chamado à conclusão</span></h1>
              <p>Organize agenda, técnicos, ordens de serviço e preventivas. O técnico executa pelo aplicativo, inclusive offline, enquanto a gestão acompanha prazos, registros e materiais.</p>
              <div className="assist-hero-actions">
                <a className="button assist-primary-button" href="#demonstracao">Agendar demonstração <Icon name="arrow" size={19} /></a>
                <a className="assist-text-link" href="#arquitetura">Ver recursos do produto</a>
              </div>
              <div className="assist-social-proof">
                <strong>12 mil+</strong><span>usuários nas<br />soluções DWU</span><i />
                <span><b>10+ anos</b><br />desenvolvendo software B2B</span>
              </div>
            </div>
            <div className="assist-hero-visual">
              <MapVisual color="#820ad1" />
              <div className="assist-offline-badge"><span><Icon name="offline" size={18} /></span><div><strong>Execução offline</strong><small>O trabalho continua sem sinal</small></div></div>
              <div className="assist-proof-badge"><span><Icon name="check" size={17} /></span><div><strong>OS documentada</strong><small>Checklist, fotos e assinatura</small></div></div>
            </div>
          </div>
        </section>

        <section className="assist-metrics" aria-label="Credibilidade e características do DWU Assist">
          <div className="container assist-metrics-grid">
            <article><strong>10+</strong><span>anos de mercado da DWU</span></article>
            <article><strong>12 mil+</strong><span>usuários nas soluções DWU</span></article>
            <article><strong>Online + offline</strong><span>execução dentro e fora da cobertura</span></article>
            <article><strong>Integração</strong><span>SAP Business One e outros ERPs</span></article>
          </div>
          <p className="container assist-proof-note">Os números são institucionais da DWU. Métricas específicas de desempenho do DWU Assist serão publicadas após validação com clientes.</p>
        </section>

        <section className="assist-transformation">
          <div className="container">
            <div className="assist-section-heading">
              <span>DA OPERAÇÃO MANUAL AO FLUXO DIGITAL</span>
              <h2>Resolva o que atrasa sua equipe todos os dias</h2>
              <p>Cada recurso abaixo responde a um problema operacional concreto.</p>
            </div>
            <div className="assist-pain-grid">
              {painPoints.map((item) => (
                <article key={item[0]}>
                  <span className="assist-pain-icon"><Icon name={item[4]} size={22} /></span>
                  <small>DOR: {item[0]}</small>
                  <p>{item[1]}</p>
                  <strong>{item[2]}</strong>
                  <p>{item[3]}</p>
                </article>
              ))}
            </div>
            <div className="assist-inline-cta">
              <div><strong>Veja como esse fluxo funciona na sua operação</strong><span>A apresentação pode usar chamados, rotinas e integrações semelhantes às da sua equipe.</span></div>
              <a className="button assist-primary-button" href="#demonstracao">Agendar demonstração <Icon name="arrow" size={18} /></a>
            </div>
          </div>
        </section>

        <section className="assist-architecture" id="arquitetura">
          <div className="container">
            <div className="assist-section-heading">
              <span>ARQUITETURA DO PRODUTO</span>
              <h2>Recursos ligados ao trabalho que precisam resolver</h2>
              <p>As tabelas mostram o que cada recurso faz, a dor atendida e onde ele é usado.</p>
            </div>
            <div className="assist-table-groups">
              {architecture.map((group) => (
                <article className="assist-table-group" key={group.title}>
                  <div className="assist-table-heading"><div><h3>{group.title}</h3><p>{group.text}</p></div><span>{group.rows.length} recursos</span></div>
                  <div className="assist-table-wrap">
                    <table>
                      <thead><tr><th>Funcionalidade</th><th>O que faz</th><th>Dor que resolve</th><th>Disponível em</th></tr></thead>
                      <tbody>
                        {group.rows.map((row) => (
                          <tr key={row[0]}>
                            <td data-label="Funcionalidade">{row[0]}</td>
                            <td data-label="O que faz">{row[1]}</td>
                            <td data-label="Dor que resolve">{row[2]}</td>
                            <td data-label="Disponível em">{row[3]}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </article>
              ))}
            </div>
            <p className="assist-plan-note"><Icon name="shield" size={17} /> A disponibilidade por plano não foi informada. Confirme o escopo durante a demonstração.</p>
          </div>
          <div className="container assist-offline-layout assist-offline-feature">
            <div className="assist-section-heading">
              <span>APLICATIVO OFFLINE PARA O TÉCNICO</span>
              <h2>O sinal acaba. A execução continua.</h2>
              <p>O técnico acessa a ordem, preenche checklist, anexa fotos, registra materiais e coleta a assinatura. Ao recuperar a conexão, os dados podem ser sincronizados.</p>
              <div className="assist-offline-note"><Icon name="offline" size={20} /><span><strong>Uso simples e focado na execução</strong>O aplicativo offline é para o técnico. O painel de gestão permanece voltado ao acompanhamento da operação.</span></div>
              <a className="button assist-primary-button" href="#demonstracao">Agendar demonstração <Icon name="arrow" size={18} /></a>
            </div>
            <div className="assist-tech-app" aria-label="Representação do aplicativo offline do técnico">
              <div className="assist-tech-phone">
                <div className="assist-tech-phone-top"><span className="screen-logo">dwu</span><i>● Offline</i></div>
                <div className="assist-tech-os-head"><small>ORDEM DE SERVIÇO</small><strong>Manutenção preventiva</strong><span>Em execução</span></div>
                <div className="assist-tech-client"><i>01</i><span><small>CLIENTE</small><strong>Unidade Industrial</strong><b>Equipamento cadastrado</b></span></div>
                <div className="assist-tech-progress"><span><i style={{ width: "75%" }} /></span><small>3 de 4 etapas concluídas</small></div>
                <div className="assist-tech-task done"><span><Icon name="check" size={13} /></span><div><strong>Checklist técnico</strong><small>Preenchido</small></div></div>
                <div className="assist-tech-task done"><span><Icon name="check" size={13} /></span><div><strong>Fotos do equipamento</strong><small>4 anexos salvos</small></div></div>
                <div className="assist-tech-task"><span>3</span><div><strong>Materiais utilizados</strong><small>Registrar consumo</small></div></div>
                <div className="assist-tech-task"><span>4</span><div><strong>Assinatura do cliente</strong><small>Etapa final</small></div></div>
                <button>Continuar atendimento</button>
              </div>
              <div className="assist-tech-sync"><span><Icon name="offline" size={18} /></span><div><strong>Dados salvos no aparelho</strong><small>Envio ao recuperar a conexão</small></div></div>
              <div className="assist-tech-camera"><span>4</span><div><strong>Fotos anexadas</strong><small>Vinculadas à OS</small></div></div>
            </div>
          </div>
        </section>

        <section className="assist-segments">
          <div className="container assist-segments-layout">
            <div className="assist-section-heading">
              <span>SEGMENTOS ATENDIDOS</span>
              <h2>Para equipes que executam serviços fora da empresa</h2>
              <p>O fluxo se adapta ao tipo de atendimento, aos registros exigidos e à estrutura da equipe.</p>
            </div>
            <div className="assist-segment-list">
              {segments.map((segment, index) => (
                <article key={segment[0]}><span>{String(index + 1).padStart(2, "0")}</span><div><h3>{segment[0]}</h3><p>{segment[1]}</p></div></article>
              ))}
            </div>
          </div>
        </section>

        <section className="assist-cases">
          <div className="container">
            <div className="assist-section-heading">
              <span>HISTÓRIA REAL, RESULTADOS A VALIDAR</span>
              <h2>Energ Geradores: vendas e campo na mesma base</h2>
              <p>A operação comercial utiliza o CRM One e a equipe de campo utiliza o DWU Assist, com o SAP Business One como base. O contexto é real; os resultados quantitativos ainda precisam de autorização.</p>
            </div>
            <div className="assist-real-case">
              <article>
                <small>CONTEXTO CONFIRMADO</small>
                <h3>Da venda ao atendimento técnico</h3>
                <p>O CRM One apoia o processo comercial. O DWU Assist organiza a execução em campo. O SAP Business One mantém a base do processo definida pela empresa.</p>
              </article>
              <div className="assist-case-metrics">
                {["Tempo para fechar a OS", "Preventivas no prazo", "Redução de retrabalho", "Atendimentos por mês"].map((metric) => (
                  <div key={metric}><strong>[resultado a confirmar]</strong><span>{metric}</span></div>
                ))}
              </div>
              <blockquote>“[Depoimento do cliente a inserir após aprovação.]”<footer>[Nome e cargo a confirmar] · Energ Geradores</footer></blockquote>
            </div>
            <div className="assist-proof-channels">
              <article className="assist-video-card"><div className="assist-video-cover"><span>▶</span><small>VÍDEO DE DEMONSTRAÇÃO</small></div><div><h3>Veja a rotina do técnico</h3><p>Espaço para vídeo de OS, checklist, fotos, assinatura e sincronização.</p><a href="#demonstracao">Agendar demonstração <Icon name="arrow" size={16} /></a></div></article>
              <article className="assist-rating-card"><span><Icon name="spark" size={22} /></span><small>AVALIAÇÕES EXTERNAS</small><h3>Capterra e Google Play</h3><p>Notas e avaliações serão exibidas quando houver perfis oficiais validados.</p><div><b>Nota: [a confirmar]</b></div></article>
              <article className="assist-support-card"><span><Icon name="conversas" size={22} /></span><small>SUPORTE À DECISÃO</small><h3>Diagnóstico antes da implantação</h3><p>A equipe avalia processos, volume, estrutura técnica e integrações.</p><a href="#demonstracao">Agendar demonstração</a></article>
            </div>
          </div>
        </section>

        <section className="assist-integration">
          <div className="container">
            <div className="assist-section-heading">
              <span>INTEGRAÇÕES</span>
              <h2>Conecte o campo aos sistemas da empresa</h2>
              <p>O escopo depende do ERP, dos dados disponíveis e das regras definidas para o projeto.</p>
            </div>
            <div className="assist-table-wrap assist-integration-table">
              <table>
                <thead><tr><th>Sistema ou recurso</th><th>Como se conecta</th><th>Observação</th></tr></thead>
                <tbody>
                  {integrations.map((row) => (
                    <tr key={row[0]}><td data-label="Sistema ou recurso">{row[0]}</td><td data-label="Como se conecta">{row[1]}</td><td data-label="Observação">{row[2]}</td></tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="assist-inline-cta assist-inline-cta-light">
              <div><strong>Precisa validar uma integração específica?</strong><span>Leve o nome do sistema e o processo para a demonstração.</span></div>
              <a className="button assist-primary-button" href="#demonstracao">Agendar demonstração <Icon name="arrow" size={18} /></a>
            </div>
          </div>
        </section>

        <section className="assist-faq">
          <div className="container assist-faq-layout">
            <div className="assist-section-heading">
              <span>PERGUNTAS FREQUENTES</span>
              <h2>O que avaliar antes de decidir</h2>
              <p>Respostas diretas sobre uso em campo, integração e implantação.</p>
              <a className="assist-text-link" href="#demonstracao">Agendar demonstração <Icon name="arrow" size={17} /></a>
            </div>
            <div className="assist-faq-list">
              {faqs.map((faq, index) => (
                <details key={faq[0]} open={index === 0}><summary>{faq[0]}<span>+</span></summary><p>{faq[1]}</p></details>
              ))}
            </div>
          </div>
        </section>

        <section className="assist-final-cta" id="demonstracao">
          <div className="assist-final-glow" />
          <div className="container assist-final-layout">
            <div>
              <span>DEMONSTRAÇÃO GRATUITA</span>
              <h2>Coloque sua operação de campo sob controle</h2>
              <p>Veja como organizar chamados, agenda, ordens de serviço, preventivas e execução offline no processo da sua empresa.</p>
              <ul>
                <li><Icon name="check" size={16} /> Apresentação direcionada ao seu cenário</li>
                <li><Icon name="check" size={16} /> Validação de integrações</li>
                <li><Icon name="check" size={16} /> Sem compromisso</li>
              </ul>
            </div>
            <AssistLeadForm />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

export function ProductPage({ product }: { product: Product }) {
  if (product.slug === "dwu-assist") return <AssistPage />;

  return (
    <>
      <Header />
      <main style={{ "--product": product.color, "--product-tint": product.tint } as React.CSSProperties}>
        <section className="product-hero">
          <div className="product-hero-glow"/>
          <div className="container product-hero-grid">
            <div className="product-hero-copy">
              <Link className="back-link" href="/">← Todas as soluções</Link>
              <span className="eyebrow"><i style={{ background: product.color }} /> {product.eyebrow}</span>
              <h1><span>{product.shortName}:</span> {product.title}</h1>
              <p>{product.description}</p>
              <div className="hero-actions">
                <a className="button" href="#demonstracao">Agendar demonstração <Icon name="arrow" size={19} /></a>
                <a className="text-link" href="#como-funciona">Ver como funciona</a>
              </div>
              <div className="product-proof"><span>✓ Demonstração orientada</span><span>✓ Integração com a operação</span></div>
            </div>
            <div className="product-visual-wrap"><ProductVisual product={product} /></div>
          </div>
        </section>

        <section className="highlights-section">
          <div className="container">
            <SectionIntro eyebrow="Na rotina" title="O que muda no trabalho da equipe" />
            <div className="highlights-grid">
              {product.highlights.map((highlight) => (
                <article key={highlight.title}>
                  <span className="highlight-icon"><Icon name={highlight.icon} size={27} /></span>
                  <h3>{highlight.title}</h3>
                  <p>{highlight.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="workflow-section" id="como-funciona">
          <div className="container workflow-layout">
            <SectionIntro
              eyebrow="Como funciona"
              title={product.slug === "crm-one" ? "O CRM trabalha dentro da lógica do SAP Business One" : "Um fluxo claro do início ao acompanhamento"}
              text={product.proofText}
            />
            <div className="workflow-list">
              {product.workflow.map((step) => (
                <article key={step.number}>
                  <span>{step.number}</span><div><h3>{step.title}</h3><p>{step.text}</p></div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="integration-section">
          <div className="container integration-box">
            <span className="eyebrow">Conexões da operação</span>
            <h2>{product.proofTitle}</h2>
            <p>{product.proofText}</p>
            <Integrations product={product} />
          </div>
        </section>

        <section className="demo-section product-demo" id="demonstracao">
          <div className="container demo-grid">
            <div>
              <span className="eyebrow eyebrow-light">Converse com a DWU</span>
              <h2>Veja o {product.shortName} aplicado ao seu processo</h2>
              <p>A demonstração parte da forma como sua equipe trabalha hoje. Assim, fica mais fácil avaliar telas, fluxo e integrações relevantes para a operação.</p>
            </div>
            <DemoForm />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
