"use client";

import Link from "next/link";
import { useLocale } from "next-intl";

/* ---------------------------------------------------------------------------
   Parity — system design page.
   Content is kept inline in both languages so the whole page is one file.
--------------------------------------------------------------------------- */

type Decision = {
  title: string;
  chose: string;
  over: string;
  because: string;
  price: string;
};

type Break = { title: string; body: string };

const COPY = {
  pt: {
    back: "← Voltar ao início",
    kicker: "Arquitetura",
    title: "Parity",
    subtitle:
      "Verificação de ações tokenizadas na Solana. Como o sistema responde sem fazer uma única chamada externa no momento da visita.",
    liveLabel: "Ver ao vivo",
    codeLabel: "Código no GitHub",

    problemHeading: "1. O problema",
    problem: [
      "A mesma ação americana existe na Solana como vários tokens, de emissores diferentes, e eles não são intercambiáveis. Negociam em pools separados, carregam poderes de emissor diferentes, e alguns não podem ser vendidos de jeito nenhum.",
      "Toda interface mostra um preço e um botão de compra. Nenhuma mostra se o emissor pode congelar aquele saldo, se ele pode tirar o token da carteira sem assinatura do dono, ou quanto custa de verdade sair da posição.",
      "O problema de engenharia é este: responder essas três perguntas para qualquer ticker, em menos de um segundo, sem carteira conectada, sem gastar chamada de API por visita, e sem nunca mostrar poder de custódia desatualizado.",
    ],

    numbersHeading: "2. Os números",
    numbersNote:
      "Tudo abaixo foi medido contra a mainnet da Solana. Os scripts que produziram esses números estão no repositório e a saída bruta é commitada em data/.",
    numbers: [
      ["32", "tokens no registro verificado"],
      ["96", "cotações ao Jupiter por rodada de coleta (32 tokens × 3 tamanhos)"],
      ["15 min", "intervalo entre coletas"],
      ["1,5 s", "espera proposta entre cada chamada ao agregador"],
      ["0", "chamadas externas numa visita normal ao site"],
      ["77", "testes, nenhum deles precisa de rede"],
      ["30 de 32", "tokens podem ser congelados pelo emissor"],
      ["16 de 32", "têm delegado permanente, o emissor move sem assinatura do dono"],
      ["13 de 32", "não retornaram rota nenhuma: aparecem com preço e não podem ser negociados"],
      ["US$ 132", "custo real de entrada numa ordem de US$ 1.000 em AMDx"],
    ],

    designHeading: "3. O desenho",
    designIntro:
      "São três caminhos independentes. O que importa é que o caminho da direita, o da visita, não cruza nenhuma fronteira externa.",
    designAfter:
      "Separar os três é o que permite que um pico de tráfego não encoste no RPC nem no agregador. Quem visita o site lê HTML que já existia antes da visita acontecer.",

    decisionsHeading: "4. As decisões",
    decisionsIntro:
      "Toda decisão tem preço. Abaixo está o que escolhi, o que descartei, por quê, e o que isso custa.",
    choseLabel: "Escolhi",
    overLabel: "Em vez de",
    becauseLabel: "Porque",
    priceLabel: "Preço que pago",

    decisions: [
      {
        title: "O git é o banco de dados",
        chose:
          "Cada rodada de coleta acrescenta linhas a um arquivo JSONL do dia e faz um commit no próprio repositório.",
        over: "Postgres, ou qualquer banco hospedado.",
        because:
          "O dado é append-only, é pequeno, e o valor dele depende de ser verificável por terceiro. O git dá carimbo de tempo que eu não controlo, hospedagem de graça e trilha de auditoria sem eu escrever uma linha para isso. Qualquer número publicado no site pode ser conferido contra o commit que o gerou.",
        price:
          "Não existe consulta. Para responder como a liquidez do AMDx se moveu em três semanas, eu leio e parseio arquivos. Não há índice. A partir de certo volume isso deixa de funcionar.",
      },
      {
        title: "Nenhuma chamada externa no caminho de leitura",
        chose:
          "Uma página por entrada do registro, gerada antes. Ticker desconhecido é recusado sem sair para a rede.",
        over: "Buscar cotação ao vivo a cada visita.",
        because:
          "RPC de camada gratuita e o tier público do Jupiter têm limite de requisição. Um pico de tráfego ou custaria dinheiro ou falharia exatamente quando mais gente está olhando. Página de 15 minutos atrás é melhor que página que não carrega.",
        price:
          "O dado é tão fresco quanto o último build. E token fora do registro não tem resposta, o que também é proteção, mas continua sendo limitação.",
      },
      {
        title: "Duas políticas de frescor na mesma tela",
        chose:
          "Liquidez vem dos snapshots commitados. Custódia é lida do nó RPC pelo adapter.",
        over: "Uma política de cache única para tudo.",
        because:
          "Os dois dados falham de formas diferentes. Liquidez muda o tempo todo, e mostrar um número de 15 minutos atrás é aceitável desde que rotulado. Custódia quase nunca muda, mas quando um emissor ativa autoridade de congelamento, mostrar o valor antigo é o pior erro possível do produto, porque é exatamente o aviso que a pessoa veio buscar.",
        price:
          "A página mistura dois carimbos de tempo. Isso precisa ser exibido ao usuário, senão engana.",
      },
      {
        title: "Núcleo puro, entrada e saída só nas bordas",
        chose:
          "Toda lógica financeira em src/core como função pura, sem I/O. Rede apenas em src/adapters, passando dado simples para dentro.",
        over: "Funções que buscam e calculam no mesmo lugar.",
        because:
          "Caminho que mexe com dinheiro precisa de teste de propriedade. Função que faz chamada de rede não pode ser executada dez mil vezes com entrada gerada. Com a separação, os 77 testes rodam sem rede nenhuma.",
        price: "Mais arquivos, e uma camada de mapeamento entre o dado do adapter e o tipo do núcleo.",
      },
      {
        title: "Limite de requisição autoimposto, 1,5 segundo",
        chose: "Uma espera fixa de 1.500 ms entre cada cotação, dentro do job.",
        over: "Requisições em paralelo, ou tentar de novo quando levar 429.",
        because:
          "O job tem 15 minutos de janela e precisa de uns 3. Gastar tempo é de graça. Levar bloqueio no tier público do Jupiter não é. Lento e certo ganha de rápido e bloqueado.",
        price:
          "A rodada leva minutos em vez de segundos. Se o registro crescer para 300 tokens, são 900 cotações vezes 1,5 s, ou seja 22 minutos, e estoura a janela. Essa decisão tem validade conhecida.",
      },
      {
        title: "Concorrência resolvida pelo git, não por trava",
        chose:
          "Grupo de concorrência no Actions com cancel-in-progress falso, rebase com autostash antes do push, e saída sem commit quando não há dado novo.",
        over: "Uma tabela de lock ou uma fila.",
        because:
          "Existe exatamente um escritor e o dado é append-only por dia. O tratamento de conflito do próprio git cobre a única corrida real, que é outro commit entrar entre o checkout e o push.",
        price:
          "Se uma rodada passar de 15 minutos, as execuções enfileiram em vez de rodar junto, e o espaçamento da série começa a derivar.",
      },
    ] as Decision[],

    breaksHeading: "5. O que quebra",
    breaksIntro:
      "Incluindo o que está mal resolvido hoje. Página de arquitetura que só lista acerto não serve para nada.",
    breaks: [
      {
        title: "O agendamento do GitHub não é pontual",
        body: "A documentação do GitHub avisa que execução agendada pode atrasar ou ser descartada em horário de pico. Isso deixa a série com espaçamento irregular e com buracos. Importa porque o site apresenta a série como prova. A parte honesta é que cada registro carrega o próprio carimbo de captura, então o buraco fica visível em vez de escondido. A parte não resolvida é que nada avisa quando acontece.",
      },
      {
        title: "Falha do coletor é silenciosa",
        body: "Se o job falhar, porque o Jupiter mudou o formato da resposta, porque o runner levou bloqueio, ou porque o push foi recusado, o site continua servindo o último build sem nenhum sinal de que a série parou. Hoje o único aviso é a notificação do GitHub, que depende de alguém ler.",
      },
      {
        title: "Build com RPC fora do ar",
        body: "Custódia é lida ao vivo no build. Se o nó estiver indisponível naquele momento, o comportamento correto é o build falhar, e não publicar dado de custódia de idade desconhecida. É o tipo de falha que só aparece no dia em que acontece.",
      },
      {
        title: "Deriva do registro",
        body: "Mint adicionado ao registro entra sem histórico. E se um emissor mudar um poder entre dois builds, o site mostra o valor antigo até o próximo build, que é exatamente o caso que o produto existe para evitar.",
      },
      {
        title: "O Jupiter é fonte única",
        body: "O custo de saída é o que o agregador responde. Se o roteamento dele mudar ou errar, o Parity publica isso como fato. Não existe segunda fonte para cruzar.",
      },
    ] as Break[],

    scaleHeading: "6. O que eu mudaria em 100x",
    scaleIntro:
      "Cenário: 10 mil tokens monitorados em vez de 32, e 50 mil visitas por dia com pico de 500 por segundo.",
    scaleSurvives: "O que sobrevive sem mudar nada",
    scaleSurvivesBody:
      "O caminho de leitura. Página estática em CDN não liga para 50 mil visitantes nem para o pico. Esse lado já está resolvido pelo desenho atual.",
    scaleBreaks: "O que quebra primeiro",
    scaleBreaksBody:
      "O coletor. Dez mil tokens vezes 3 tamanhos vezes 1,5 segundos dá 12 horas e meia por passada. A cadência de 15 minutos vira impossível antes de qualquer outra coisa dar problema.",
    scaleChanges: "Na ordem em que eu mudaria",
    scaleList: [
      "Acabar com a cadência única. Token não é tudo igual: um mint sem rota e sem volume não precisa de cotação a cada 15 minutos, um líquido precisa. Cadência por faixa, com os quentes a cada 15 minutos e a cauda longa uma vez por dia.",
      "Tirar a espera fixa e ir para um tier pago com limite declarado e concorrência controlada, para a passada ser limitada pelo limite de requisição e não por sleep.",
      "Tirar o volume do git. Dez mil tokens em 96 rodadas por dia faz o repositório crescer centenas de MB por semana e torna o clone inviável. Snapshot vai para armazenamento de objeto, endereçado por conteúdo, e só o hash do resumo diário continua commitado. A propriedade de auditoria se mantém, o peso sai.",
      "Parar de reconstruir todas as páginas a cada commit de dado. Com 10 mil páginas isso deixa de fechar. Liquidez passa a regeneração incremental por página, custódia continua no build.",
    ],

    footnote:
      "Esta página descreve o sistema como ele está hoje, incluindo o que ainda não está resolvido. Os números vêm de medição na mainnet e se movem com o tempo.",
  },

  en: {
    back: "← Back to home",
    kicker: "Architecture",
    title: "Parity",
    subtitle:
      "Tokenized stock verification on Solana. How the system answers without making a single external call at visit time.",
    liveLabel: "See it live",
    codeLabel: "Code on GitHub",

    problemHeading: "1. The problem",
    problem: [
      "The same US share exists on Solana as several tokens, from different issuers, and they are not interchangeable. They trade in separate pools, carry different issuer powers, and some of them cannot be sold at all.",
      "Every interface shows a price and a buy button. None of them shows whether the issuer can freeze that balance, whether they can move the token out of a wallet without the holder's signature, or what exiting the position actually costs.",
      "The engineering problem is this: answer those three questions for any ticker, in under a second, with no wallet connected, without spending an API call per visit, and without ever showing stale custody data.",
    ],

    numbersHeading: "2. The numbers",
    numbersNote:
      "Everything below was measured against Solana mainnet. The scripts that produced these figures are in the repository and the raw output is committed under data/.",
    numbers: [
      ["32", "tokens in the verified registry"],
      ["96", "Jupiter quotes per collection run (32 tokens × 3 sizes)"],
      ["15 min", "interval between collection runs"],
      ["1.5 s", "deliberate wait between each aggregator call"],
      ["0", "external calls on a normal visit to the site"],
      ["77", "tests, none of which require network"],
      ["30 of 32", "tokens can be frozen by their issuer"],
      ["16 of 32", "carry a permanent delegate: the issuer moves tokens without the holder's signature"],
      ["13 of 32", "returned no route at all: they show a price and cannot be traded"],
      ["$132", "real entry cost on a $1,000 order in AMDx"],
    ],

    designHeading: "3. The design",
    designIntro:
      "Three independent paths. What matters is that the one on the right, the visit, crosses no external boundary.",
    designAfter:
      "Keeping the three apart is what stops a traffic spike from ever touching the RPC node or the aggregator. A visitor reads HTML that already existed before the visit happened.",

    decisionsHeading: "4. The decisions",
    decisionsIntro:
      "Every decision has a price. Below is what I chose, what I rejected, why, and what it costs.",
    choseLabel: "Chose",
    overLabel: "Over",
    becauseLabel: "Because",
    priceLabel: "Price I pay",

    decisions: [
      {
        title: "Git is the database",
        chose:
          "Each collection run appends lines to that day's JSONL file and commits it to the repository.",
        over: "Postgres, or any hosted database.",
        because:
          "The data is append-only, it is small, and its value depends on being verifiable by a third party. Git gives timestamps I do not control, free hosting, and an audit trail without writing one. Any figure published on the site can be checked against the commit that produced it.",
        price:
          "There are no queries. To answer how AMDx liquidity moved over three weeks I read and parse files. There are no indexes. Past a certain volume this stops working.",
      },
      {
        title: "No external calls on the read path",
        chose:
          "One page per registry entry, generated ahead of time. Unknown tickers are rejected before anything reaches the network.",
        over: "Fetching live quotes on every visit.",
        because:
          "Free-tier RPC and the public Jupiter tier both have rate limits. A traffic spike would either cost money or fail exactly when the most people are looking. A page that is fifteen minutes old beats a page that will not load.",
        price:
          "Data is only as fresh as the last build. And a token outside the registry has no answer, which is also a safety property, but it is still a limitation.",
      },
      {
        title: "Two freshness policies in one view",
        chose:
          "Liquidity comes from committed snapshots. Custody is read from the RPC node through the adapter.",
        over: "One uniform cache policy for everything.",
        because:
          "The two data types fail differently. Liquidity moves constantly, and a fifteen-minute-old number is acceptable as long as it is labelled. Custody almost never changes, but when an issuer enables a freeze authority, showing the old value is the worst error this product can make, because that is precisely the warning the user came for.",
        price:
          "The page mixes two timestamps. That has to be shown to the user, or it misleads.",
      },
      {
        title: "Pure core, I/O only at the edges",
        chose:
          "All financial logic lives in src/core as pure functions with no I/O. Network calls happen only in src/adapters and pass plain data inward.",
        over: "Functions that fetch and compute in the same place.",
        because:
          "Money-touching paths need property tests. A function that makes a network call cannot be run ten thousand times against generated input. With the split, all 77 tests run with no network at all.",
        price: "More files, and a mapping layer between adapter data and core types.",
      },
      {
        title: "Self-imposed rate limiting at 1.5 seconds",
        chose: "A fixed 1,500 ms sleep between every quote, inside the job.",
        over: "Parallel requests, or retrying on 429.",
        because:
          "The job has a fifteen-minute window and needs about three. Spending time is free. Getting blocked on Jupiter's public tier is not. Slow and certain beats fast and rate-limited.",
        price:
          "A run takes minutes instead of seconds. If the registry grows to 300 tokens, that is 900 quotes at 1.5 s, or 22 minutes, which overruns the window. This decision has a known expiry date.",
      },
      {
        title: "Concurrency handled by git, not by a lock",
        chose:
          "An Actions concurrency group with cancel-in-progress false, a rebase with autostash before pushing, and an early exit when there is no new data.",
        over: "A lock table or a queue.",
        because:
          "There is exactly one writer and the data is append-only per day. Git's own conflict handling covers the only real race, which is another commit landing between checkout and push.",
        price:
          "If a run ever exceeds fifteen minutes, runs queue instead of overlapping, and the spacing of the series starts to drift.",
      },
    ] as Decision[],

    breaksHeading: "5. What breaks",
    breaksIntro:
      "Including what is unresolved today. An architecture page that only lists what went right is worth nothing.",
    breaks: [
      {
        title: "GitHub's scheduler is not punctual",
        body: "GitHub documents that scheduled workflows can be delayed or dropped during peak load. That leaves the series with irregular spacing and gaps. It matters because the site presents the series as evidence. The honest part is that every record carries its own capture timestamp, so a gap is visible rather than hidden. The unresolved part is that nothing alerts when one happens.",
      },
      {
        title: "Collector failure is silent",
        body: "If the job fails, because Jupiter changes a response shape, because the runner gets blocked, or because the push is rejected, the site keeps serving the last build with no sign that the series stopped. Today the only signal is a GitHub notification, which depends on someone reading it.",
      },
      {
        title: "Building while the RPC node is down",
        body: "Custody is read live at build time. If the node is unavailable at that moment, the correct behaviour is for the build to fail rather than publish custody data of unknown age. This is the kind of failure that only shows up the day it happens.",
      },
      {
        title: "Registry drift",
        body: "A mint added to the registry arrives with no history. And if an issuer changes a power between two builds, the site shows the old value until the next build, which is exactly the case the product exists to prevent.",
      },
      {
        title: "Jupiter is a single source",
        body: "Exit cost is whatever the aggregator answers. If its routing changes or gets something wrong, Parity publishes that as fact. There is no second source to cross-check against.",
      },
    ] as Break[],

    scaleHeading: "6. What I would change at 100x",
    scaleIntro:
      "Scenario: 10,000 tracked tokens instead of 32, and 50,000 visits a day with a peak of 500 per second.",
    scaleSurvives: "What survives unchanged",
    scaleSurvivesBody:
      "The read path. Static pages on a CDN do not care about 50,000 visitors or the peak. That side is already solved by the current design.",
    scaleBreaks: "What breaks first",
    scaleBreaksBody:
      "The collector. Ten thousand tokens times three sizes times 1.5 seconds is twelve and a half hours per pass. The fifteen-minute cadence becomes impossible before anything else goes wrong.",
    scaleChanges: "In the order I would change them",
    scaleList: [
      "Drop the single cadence. Tokens are not equal: a mint with no route and no volume does not need a quote every fifteen minutes, a liquid one does. Tiered cadence, with hot tokens every fifteen minutes and the long tail once a day.",
      "Remove the fixed sleep and move to a paid tier with a declared rate limit and controlled concurrency, so a pass is bounded by the rate limit rather than by sleeping.",
      "Take the bulk out of git. Ten thousand tokens across 96 runs a day grows the repository by hundreds of megabytes a week and makes a clone unusable. Snapshots move to content-addressed object storage, and only the daily digest hash stays committed. The audit property survives, the weight does not.",
      "Stop rebuilding every page on every data commit. At ten thousand pages that stops adding up. Liquidity moves to incremental regeneration per page, custody stays at build time.",
    ],

    footnote:
      "This page describes the system as it stands today, including what is still unresolved. The figures come from mainnet measurement and move over time.",
  },
} as const;

/* -------------------------------------------------------------------------- */

function Diagram({ locale }: { locale: "pt" | "en" }) {
  const t =
    locale === "pt"
      ? {
          lane1: "COLETA — A CADA 15 MIN",
          lane2: "BUILD — A CADA COMMIT DE DADO",
          lane3: "LEITURA — A CADA VISITA",
          actions: "GitHub Actions",
          jupiter: "Jupiter",
          jupiterSub: "96 cotações, 1,5 s entre cada",
          jsonl: "JSONL do dia",
          commit: "commit + push",
          vercel: "Build na Vercel",
          reads: "lê registro, snapshots\ne custódia via RPC",
          pages: "1 página por ticker\ngerada antes",
          visitor: "Visitante",
          cdn: "CDN",
          html: "HTML estático",
          zero: "ZERO CHAMADA EXTERNA",
          boundary: "fronteira externa",
        }
      : {
          lane1: "COLLECTION — EVERY 15 MIN",
          lane2: "BUILD — ON EVERY DATA COMMIT",
          lane3: "READ — ON EVERY VISIT",
          actions: "GitHub Actions",
          jupiter: "Jupiter",
          jupiterSub: "96 quotes, 1.5 s apart",
          jsonl: "Daily JSONL",
          commit: "commit + push",
          vercel: "Vercel build",
          reads: "reads registry, snapshots\nand custody via RPC",
          pages: "1 page per ticker\npre-generated",
          visitor: "Visitor",
          cdn: "CDN",
          html: "Static HTML",
          zero: "ZERO EXTERNAL CALLS",
          boundary: "external boundary",
        };

  const Box = ({
    x,
    y,
    w = 160,
    h = 54,
    label,
    sub,
  }: {
    x: number;
    y: number;
    w?: number;
    h?: number;
    label: string;
    sub?: string;
  }) => (
    <g>
      <rect x={x} y={y} width={w} height={h} fill="#ffffff" stroke="#000000" strokeWidth={3} />
      <text
        x={x + w / 2}
        y={sub ? y + h / 2 - 4 : y + h / 2 + 5}
        textAnchor="middle"
        fontSize={15}
        fontWeight={800}
        fill="#000000"
      >
        {label}
      </text>
      {sub &&
        sub.split("\n").map((line, i) => (
          <text
            key={i}
            x={x + w / 2}
            y={y + h / 2 + 14 + i * 13}
            textAnchor="middle"
            fontSize={11}
            fontWeight={600}
            fill="#000000"
          >
            {line}
          </text>
        ))}
    </g>
  );

  const Arrow = ({ x1, y1, x2, y2 }: { x1: number; y1: number; x2: number; y2: number }) => (
    <line x1={x1} y1={y1} x2={x2} y2={y2} stroke="#000000" strokeWidth={3} markerEnd="url(#ah)" />
  );

  return (
    <div className="overflow-x-auto border-4 border-black bg-white">
      <svg viewBox="0 0 900 470" className="block min-w-[880px] w-full h-auto" role="img">
        <defs>
          <marker id="ah" markerWidth="10" markerHeight="10" refX="9" refY="5" orient="auto">
            <path d="M0,0 L10,5 L0,10 z" fill="#000000" />
          </marker>
        </defs>

        {/* lane 1 */}
        <text x={24} y={34} fontSize={13} fontWeight={900} fill="#000000" letterSpacing="1.5">
          {t.lane1}
        </text>
        <Box x={24} y={48} label={t.actions} />
        <Arrow x1={184} y1={75} x2={236} y2={75} />
        <Box x={240} y={48} label={t.jupiter} sub={t.jupiterSub} />
        <Arrow x1={400} y1={75} x2={452} y2={75} />
        <Box x={456} y={48} label={t.jsonl} />
        <Arrow x1={616} y1={75} x2={668} y2={75} />
        <Box x={672} y={48} label={t.commit} />

        {/* lane 2 */}
        <line x1={752} y1={102} x2={752} y2={150} stroke="#000000" strokeWidth={3} markerEnd="url(#ah)" />
        <text x={24} y={180} fontSize={13} fontWeight={900} fill="#000000" letterSpacing="1.5">
          {t.lane2}
        </text>
        <Box x={456} y={194} w={296} h={64} label={t.vercel} sub={t.reads} />
        <Arrow x1={452} y1={226} x2={400} y2={226} />
        <Box x={168} y={194} w={228} h={64} label={t.pages} />

        {/* lane 3 */}
        <line x1={282} y1={262} x2={282} y2={312} stroke="#000000" strokeWidth={3} markerEnd="url(#ah)" />
        <text x={24} y={342} fontSize={13} fontWeight={900} fill="#000000" letterSpacing="1.5">
          {t.lane3}
        </text>
        <Box x={24} y={356} label={t.visitor} />
        <Arrow x1={184} y1={383} x2={236} y2={383} />
        <Box x={240} y={356} label={t.cdn} />
        <Arrow x1={400} y1={383} x2={452} y2={383} />
        <Box x={456} y={356} label={t.html} />

                <rect x={636} y={352} width={240} height={62} fill="#ffffff" stroke="#000000" strokeWidth={5} />
        <text x={756} y={379} textAnchor="middle" fontSize={14} fontWeight={900} fill="#000000">
          {t.zero}
        </text>
        <text x={756} y={398} textAnchor="middle" fontSize={11} fontWeight={700} fill="#000000">
          RPC · Jupiter · DB
        </text>

        {/* external boundary */}
        <line
          x1={430}
          y1={440}
          x2={876}
          y2={440}
          stroke="#000000"
          strokeWidth={2}
          strokeDasharray="8 6"
        />
        <text x={430} y={458} fontSize={11} fontWeight={700} fill="#000000">
          {t.boundary}
        </text>
      </svg>
    </div>
  );
}

/* -------------------------------------------------------------------------- */

export default function ParityArchitecturePage() {
  const rawLocale = useLocale();
  const locale: "pt" | "en" = rawLocale === "pt" ? "pt" : "en";
  const c = COPY[locale];

  return (
    <main className="mx-auto w-full max-w-5xl px-5 py-10 sm:px-8 sm:py-14">
      <Link
        href={`/${rawLocale}`}
        className="text-sm font-black uppercase tracking-wider text-black underline decoration-2 hover:opacity-80"
      >
        {c.back}
      </Link>

      <header className="mt-6 border-4 border-black p-5 sm:p-8">
        <p className="text-xs font-black uppercase tracking-widest text-black sm:text-sm">
          {c.kicker}
        </p>
        <h1 className="mt-2 text-4xl font-black leading-none text-black sm:text-6xl">{c.title}</h1>
        <p className="mt-4 max-w-3xl text-base font-semibold leading-relaxed text-black sm:text-lg">
          {c.subtitle}
        </p>
        <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2">
          <a
            href="https://parity.zanvexis.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-base font-black uppercase text-black underline decoration-2 hover:opacity-80"
          >
            {c.liveLabel}
          </a>
          <a
            href="https://github.com/Vinisilva0010/parity"
            target="_blank"
            rel="noopener noreferrer"
            className="text-base font-black uppercase text-black underline decoration-2 hover:opacity-80"
          >
            {c.codeLabel}
          </a>
        </div>
      </header>

      {/* 1 */}
      <section className="mt-12">
        <h2 className="text-2xl font-black uppercase tracking-wide text-black sm:text-3xl">
          {c.problemHeading}
        </h2>
        <div className="mt-4 space-y-4">
          {c.problem.map((p, i) => (
            <p key={i} className="text-base font-semibold leading-relaxed text-black sm:text-lg">
              {p}
            </p>
          ))}
        </div>
      </section>

      {/* 2 */}
      <section className="mt-12">
        <h2 className="text-2xl font-black uppercase tracking-wide text-black sm:text-3xl">
          {c.numbersHeading}
        </h2>
        <p className="mt-3 text-sm font-semibold leading-relaxed text-black sm:text-base">
          {c.numbersNote}
        </p>
        <dl className="mt-6 grid grid-cols-1 gap-0 border-4 border-black sm:grid-cols-2">
          {c.numbers.map(([value, label], i) => (
            <div key={i} className="border-b-4 border-black p-4 last:border-b-0 sm:odd:border-r-4">
              <dt className="text-2xl font-black leading-none text-black sm:text-3xl">{value}</dt>
              <dd className="mt-2 text-sm font-semibold leading-snug text-black">{label}</dd>
            </div>
          ))}
        </dl>
      </section>

      {/* 3 */}
      <section className="mt-12">
        <h2 className="text-2xl font-black uppercase tracking-wide text-black sm:text-3xl">
          {c.designHeading}
        </h2>
        <p className="mt-3 text-base font-semibold leading-relaxed text-black sm:text-lg">
          {c.designIntro}
        </p>
        <div className="mt-6">
          <Diagram locale={locale} />
        </div>
        <p className="mt-5 text-base font-semibold leading-relaxed text-black sm:text-lg">
          {c.designAfter}
        </p>
      </section>

      {/* 4 */}
      <section className="mt-12">
        <h2 className="text-2xl font-black uppercase tracking-wide text-black sm:text-3xl">
          {c.decisionsHeading}
        </h2>
        <p className="mt-3 text-base font-semibold leading-relaxed text-black sm:text-lg">
          {c.decisionsIntro}
        </p>
        <div className="mt-6 space-y-6">
          {c.decisions.map((d, i) => (
            <article key={i} className="border-4 border-black p-5 sm:p-6">
              <h3 className="text-xl font-black leading-tight text-black sm:text-2xl">
                {String(i + 1).padStart(2, "0")}. {d.title}
              </h3>
              <dl className="mt-4 space-y-3">
                {[
                  [c.choseLabel, d.chose],
                  [c.overLabel, d.over],
                  [c.becauseLabel, d.because],
                  [c.priceLabel, d.price],
                ].map(([label, body], k) => (
                  <div key={k}>
                    <dt className="text-xs font-black uppercase tracking-widest text-black">
                      {label}
                    </dt>
                    <dd className="mt-1 text-base font-semibold leading-relaxed text-black">
                      {body}
                    </dd>
                  </div>
                ))}
              </dl>
            </article>
          ))}
        </div>
      </section>

      {/* 5 */}
      <section className="mt-12">
        <h2 className="text-2xl font-black uppercase tracking-wide text-black sm:text-3xl">
          {c.breaksHeading}
        </h2>
        <p className="mt-3 text-base font-semibold leading-relaxed text-black sm:text-lg">
          {c.breaksIntro}
        </p>
        <div className="mt-6 space-y-5">
          {c.breaks.map((b, i) => (
            <article key={i} className="border-l-8 border-black pl-5">
              <h3 className="text-lg font-black leading-tight text-black sm:text-xl">{b.title}</h3>
              <p className="mt-2 text-base font-semibold leading-relaxed text-black">{b.body}</p>
            </article>
          ))}
        </div>
      </section>

      {/* 6 */}
      <section className="mt-12">
        <h2 className="text-2xl font-black uppercase tracking-wide text-black sm:text-3xl">
          {c.scaleHeading}
        </h2>
        <p className="mt-3 text-base font-semibold leading-relaxed text-black sm:text-lg">
          {c.scaleIntro}
        </p>

        <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2">
          <div className="border-4 border-black p-5">
            <h3 className="text-base font-black uppercase tracking-wide text-black">
              {c.scaleSurvives}
            </h3>
            <p className="mt-3 text-base font-semibold leading-relaxed text-black">
              {c.scaleSurvivesBody}
            </p>
          </div>
                    <div className="border-4 border-l-[12px] border-black p-5">
            <h3 className="text-base font-black uppercase tracking-wide text-black">
              {c.scaleBreaks}
            </h3>
            <p className="mt-3 text-base font-semibold leading-relaxed text-black">
              {c.scaleBreaksBody}
            </p>
          </div>
        </div>

        <h3 className="mt-8 text-base font-black uppercase tracking-wide text-black">
          {c.scaleChanges}
        </h3>
        <ol className="mt-4 space-y-4">
          {c.scaleList.map((s, i) => (
            <li key={i} className="flex gap-4">
              <span className="text-2xl font-black leading-none text-black">{i + 1}</span>
              <p className="text-base font-semibold leading-relaxed text-black">{s}</p>
            </li>
          ))}
        </ol>
      </section>

      <p className="mt-14 border-t-4 border-black pt-5 text-sm font-semibold leading-relaxed text-black">
        {c.footnote}
      </p>
    </main>
  );
}