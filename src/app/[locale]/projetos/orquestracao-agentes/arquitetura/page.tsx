"use client";

import Link from "next/link";
import { useLocale } from "next-intl";

/* ---------------------------------------------------------------------------
   Agent Orchestration — system design page.
   Both languages inline so the page stays a single file.
--------------------------------------------------------------------------- */

type Decision = { title: string; chose: string; over: string; because: string; price: string };
type Break = { title: string; body: string };
type Attack = { attack: string; stop: string };

const COPY = {
  pt: {
    back: "← Voltar ao início",
    kicker: "Arquitetura",
    title: "Agent Orchestration",
    subtitle:
      "Workspace auto-hospedado onde pessoas e agentes de IA trabalham juntos, com limite duro no que o agente consegue ver, gastar e fazer.",
    codeLabel: "Código no GitHub",

    problemHeading: "1. O problema",
    problem: [
      "Você quer que agentes de IA façam trabalho de verdade: gastar dinheiro em chamada de modelo, rodar código, executar ação. Três coisas dão errado, e nenhuma delas é o modelo responder mal.",
      "A chave da API vaza, porque foi parar no ambiente de um serviço que não precisava dela. O orçamento estoura, porque ninguém sabe o custo de uma chamada antes de ela terminar. E o agente executa uma ação irreversível que ninguém autorizou, porque o texto que a pessoa leu antes de aprovar foi escrito pelo próprio modelo.",
      "O problema de engenharia não é fazer o agente funcionar. É garantir que ele não consiga fazer essas três coisas, mesmo que o modelo seja conduzido por texto injetado e mesmo que um dos serviços seja comprometido.",
    ],

    numbersHeading: "2. Os números",
    numbersNote:
      "Contados no repositório. A suíte de ataques e os testes rodam no CI a cada push.",
    numbers: [
      ["20.152", "linhas de Rust em 6 crates: gateway 6.950, server 6.448, engine 3.711, bench 1.558, sandbox 1.197, protocol 288"],
      ["135", "testes em Rust"],
      ["7", "ataques nomeados, cada um com teste que precisa passar"],
      ["18", "triggers de auditoria escritos no banco"],
      ["13", "migrations"],
      ["3", "papéis do Postgres, um por serviço. O sandbox não tem nenhum"],
      ["3", "níveis de limite de gasto: workspace por mês, agente por mês e tarefa"],
      ["127.0.0.1", "endereço onde todos os serviços escutam"],
    ],

    designHeading: "3. O desenho",
    designIntro:
      "O desenho é sobre fronteira de confiança: onde a chave vive, quem nunca a recebe, e o que o modelo não tem permissão de escrever.",
    designAfter:
      "A chave do provedor cruza a fronteira externa em um único ponto, saindo do gateway. Engine, sandbox e web nunca a recebem, e se recusam a iniciar se encontrarem uma no próprio ambiente. O sandbox é o serviço com menos privilégio do sistema: sem rede e sem papel no banco.",

    attacksHeading: "Os sete ataques, e o que barra cada um",
    attacksIntro:
      "O THREAT_MODEL.md descreve o modelo. O ATTACKS.md nomeia cada ataque, e todo ataque nomeado tem um teste que precisa passar antes do merge.",
    attackCol: "Ataque",
    stopCol: "O que barra",
    attacks: [
      {
        attack: "Ler a chave do provedor",
        stop: "A chave vive cifrada no cofre do gateway. Engine, sandbox e web nunca recebem chave nenhuma, e se recusam a iniciar se acharem uma no ambiente.",
      },
      {
        attack: "Gastar mais do que o permitido",
        stop: "Cada chamada reserva o custo máximo antes de começar. Sem saldo reservado, a chamada não acontece.",
      },
      {
        attack: "Sair da pasta permitida",
        stop: "O sandbox roda em container somente leitura, sem capabilities, com limite de memória, CPU, processos e tempo.",
      },
      {
        attack: "Alcançar endereços não permitidos",
        stop: "O sandbox não tem rede.",
      },
      {
        attack: "Agir sem permissão, ou ser conduzido por texto injetado",
        stop: "Ferramenta marcada como irreversível para a tarefa e espera uma pessoa. O texto que explica o que vai acontecer é escrito pelo desenvolvedor na definição da ferramenta, nunca pelo modelo.",
      },
      {
        attack: "Se passar por alguém ou roubar uma sessão",
        stop: "Cookies __Host- com Secure, HttpOnly e SameSite Strict, verificados pelo servidor em Rust a cada requisição, sob CSP estrita com nonce por requisição.",
      },
      {
        attack: "Adulterar registros",
        stop: "Log append-only encadeado por hash, escrito por trigger do banco. Alterar ou apagar quebra a cadeia.",
      },
    ] as Attack[],

    decisionsHeading: "4. As decisões",
    decisionsIntro:
      "Toda decisão tem preço. Abaixo está o que escolhi, o que descartei, por quê, e o que isso custa.",
    choseLabel: "Escolhi",
    overLabel: "Em vez de",
    becauseLabel: "Porque",
    priceLabel: "Preço que pago",

    decisions: [
      {
        title: "Reservar o custo máximo antes da chamada",
        chose:
          "Cada chamada de modelo reserva o custo máximo possível antes de começar. Tarefa sem saldo para reservar para e espera um administrador.",
        over: "Medir o gasto depois que a resposta volta.",
        because:
          "O custo de uma chamada só é conhecido quando ela termina, e aí o dinheiro já saiu. Medir depois detecta o estouro, não impede. Reservando o máximo antes, estourar o limite deixa de ser possível por construção, não por vigilância.",
        price:
          "O orçamento fica subutilizado. Uma tarefa pode ser interrompida com saldo real sobrando, porque a reserva assumiu o pior caso e a resposta real custou menos.",
      },
      {
        title: "O texto da aprovação é escrito pelo desenvolvedor, nunca pelo modelo",
        chose:
          "O que vai acontecer está na definição da ferramenta, escrito à mão por quem a implementou. A pessoa aprova lendo esse texto.",
        over: "Deixar o modelo explicar o que está prestes a fazer.",
        because:
          "Se o modelo escreve a explicação, um modelo conduzido por texto injetado escreve uma explicação tranquilizadora. A pessoa aprova uma mentira e a culpa cai nela. Tirar essa caneta do modelo é o que faz a aprovação humana valer alguma coisa.",
        price:
          "Toda ferramenta nova precisa do texto escrito à mão, e o agente não consegue criar ferramenta por conta própria. A flexibilidade some de propósito.",
      },
      {
        title: "Auditoria por trigger do banco, não pelo código",
        chose: "18 triggers escrevem toda mudança no log, independente de quem fez a escrita.",
        over: "Registrar o evento no código do serviço.",
        because:
          "Log em nível de aplicação é contornável: um bug, uma conexão direta no banco, um serviço futuro que esqueça de chamar. O trigger dispara de qualquer jeito. A garantia deixa de depender de disciplina.",
        price:
          "Lógica em SQL, mais difícil de testar e de mudar, e migrations mais pesadas. Toda tabela nova precisa do trigger junto, senão o buraco é silencioso.",
      },
      {
        title: "Log append-only encadeado por hash",
        chose: "Cada registro carrega o hash do anterior. Nada é atualizado nem apagado.",
        over: "Uma tabela normal com carimbo de tempo.",
        because:
          "Tabela comum pode ser editada por qualquer um com permissão de escrita, e depois não dá para provar que não foi. Encadeando, qualquer edição ou remoção quebra a cadeia e fica detectável.",
        price:
          "Não dá para apagar nada, inclusive o que entrou por engano. Pedido de remoção de dado pessoal deixa de ser uma consulta e vira um problema de projeto.",
      },
      {
        title: "Serviço se recusa a iniciar se achar chave de provedor no ambiente",
        chose:
          "Engine, sandbox e web verificam o próprio ambiente no boot e falham se encontrarem uma chave.",
        over: "Simplesmente não ler a variável.",
        because:
          "O caso perigoso não é código que lê a chave. É um deploy que passa a chave para todo mundo sem querer. Falhar fechado transforma uma configuração errada silenciosa em erro barulhento de inicialização.",
        price:
          "Ambiente compartilhado legítimo quebra, e o desenvolvimento local exige cuidado para não derrubar o próprio serviço sem entender o motivo.",
      },
      {
        title: "Um papel do Postgres por serviço, com os grants que o código usa",
        chose:
          "ao_gateway, ao_server e ao_engine, cada um com suas permissões, verificadas por teste. O sandbox não tem papel nenhum.",
        over: "Uma string de conexão para todos os serviços.",
        because:
          "Se o sandbox for comprometido, ele não pode ler a tabela de contas. Como ele nem conexão tem, essa classe de ataque some em vez de ser mitigada.",
        price:
          "Migration tem que manter os grants. Uma consulta nova falha em teste até o grant ser adicionado, o que é exatamente o objetivo, mas atrasa o trabalho.",
      },
      {
        title: "Provedor falso e banco descartável para o teste de ponta a ponta",
        chose:
          "Um provedor mock e um banco separado, para a pilha inteira subir e ser testada sem custo e sem tocar no banco de desenvolvimento.",
        over: "Testar de ponta a ponta contra o provedor real.",
        because:
          "Teste de ponta a ponta contra provedor real custa dinheiro a cada execução e não é determinístico, então ninguém roda com a frequência necessária. Teste que ninguém roda não protege nada.",
        price:
          "O mock não entende texto. O teste prova encanamento, permissão e fluxo de aprovação, e não prova nada sobre comportamento do modelo.",
      },
    ] as Decision[],

    breaksHeading: "5. O que quebra",
    breaksIntro:
      "Incluindo o que está mal resolvido hoje. O próprio README diz que o sistema ainda não está pronto para produção.",
    breaks: [
      {
        title: "A reserva é uma estimativa de pior caso",
        body: "Ela depende de uma tabela de custo máximo por modelo. Se o provedor muda preço, ou entra um modelo com custo de token diferente, a reserva fica errada nos dois sentidos: ou segura orçamento demais e para tarefa à toa, ou segura de menos e a garantia deixa de valer. Hoje nada verifica se a tabela ainda bate com a realidade.",
      },
      {
        title: "Tarefa parada por orçamento espera para sempre",
        body: "Ela aguarda um administrador. Se ninguém estiver olhando, ela simplesmente fica ali. Não existe prazo, escalonamento, nem comportamento padrão depois de um tempo.",
      },
      {
        title: "Aprovação tem o mesmo problema, e é pior",
        body: "Uma ação irreversível aguardando decisão segura a execução inteira, e a execução parada continua com orçamento reservado. Quanto mais tempo ninguém decide, mais saldo fica preso sem nada acontecer.",
      },
      {
        title: "A cadeia de hash prova adulteração, mas ninguém confere",
        body: "O encadeamento torna qualquer edição detectável. Detectável não é detectada: nada verifica a cadeia de forma contínua. Uma quebra só aparece quando alguém resolve olhar, que normalmente é tarde demais.",
      },
      {
        title: "Sandbox sem rede fecha a fuga e fecha o uso",
        body: "Não ter rede elimina a principal via de escape, e também impede qualquer tarefa legítima que precise da internet. Essa tensão não está resolvida: hoje a escolha é segurança total com capacidade reduzida.",
      },
      {
        title: "Tudo em 127.0.0.1",
        body: "É a decisão certa para uso auto-hospedado numa máquina, e deixa em aberto como um time em máquinas diferentes usaria isso. A história de implantação para mais de uma pessoa ainda não foi desenhada.",
      },
    ] as Break[],

    scaleHeading: "6. O que eu mudaria em 100x",
    scaleIntro:
      "Cenário: 100 agentes rodando ao mesmo tempo, milhares de tarefas por dia e vários workspaces na mesma instalação.",
    scaleSurvives: "O que sobrevive sem mudar nada",
    scaleSurvivesBody:
      "As fronteiras de confiança. A chave continua saindo apenas do gateway, os papéis por serviço continuam valendo e o sandbox continua sem rede e sem banco, independente do volume. Segurança desenhada por fronteira não se degrada com escala.",
    scaleBreaks: "O que quebra primeiro",
    scaleBreaksBody:
      "O worker único do engine, que processa pedidos em sequência. Com 100 agentes, a fila cresce mais rápido do que ele consome, e tudo passa a esperar por um processo só.",
    scaleChanges: "Na ordem em que eu mudaria",
    scaleList: [
      "Vários workers pegando tarefa com SELECT FOR UPDATE SKIP LOCKED. O desenho de fila em Postgres já permite isso, então é mudança no laço do worker e não no modelo de dados.",
      "Resolver a disputa na reserva de orçamento. Toda chamada do mesmo workspace tranca a mesma linha, e com 100 agentes isso vira o novo gargalo. Reserva por agente em linhas separadas, com consolidação periódica, tira a disputa do caminho quente.",
      "Particionar o log de auditoria. Dezoito triggers em cada escrita multiplicam a gravação, e em volume o log vira a tabela mais pesada do banco. Partição por mês, com as antigas movidas para fora, mantendo o hash da cadeia.",
      "Dar política para as aprovações: prazo, escalonamento e comportamento padrão ao expirar. Sem isso, cada ação irreversível esquecida é uma execução parada segurando orçamento reservado, e em escala isso trava o sistema inteiro sem nenhum erro aparecer.",
    ],

    footnote:
      "Esta página descreve o sistema como ele está hoje, incluindo o que ainda não está resolvido. As fases 1 a 4 estão concluídas e o projeto não está pronto para produção.",
  },

  en: {
    back: "← Back to home",
    kicker: "Architecture",
    title: "Agent Orchestration",
    subtitle:
      "A self-hosted workspace where people and AI agents work together, with hard limits on what an agent can see, spend and do.",
    codeLabel: "Code on GitHub",

    problemHeading: "1. The problem",
    problem: [
      "You want AI agents to do real work: spend money on model calls, run code, take actions. Three things go wrong, and none of them is the model answering badly.",
      "The API key leaks, because it ended up in the environment of a service that never needed it. The budget overruns, because nobody knows what a call costs until it finishes. And the agent takes an irreversible action nobody authorised, because the text the person read before approving was written by the model itself.",
      "The engineering problem is not making the agent work. It is making sure it cannot do those three things, even when the model is steered by injected text and even when one of the services is compromised.",
    ],

    numbersHeading: "2. The numbers",
    numbersNote:
      "Counted in the repository. The attack suite and the tests run in CI on every push.",
    numbers: [
      ["20,152", "lines of Rust across 6 crates: gateway 6,950, server 6,448, engine 3,711, bench 1,558, sandbox 1,197, protocol 288"],
      ["135", "Rust tests"],
      ["7", "named attacks, each with a test that has to pass"],
      ["18", "audit triggers written in the database"],
      ["13", "migrations"],
      ["3", "PostgreSQL roles, one per service. The sandbox has none"],
      ["3", "spending limit levels: workspace per month, agent per month, and task"],
      ["127.0.0.1", "address every service listens on"],
    ],

    designHeading: "3. The design",
    designIntro:
      "The design is about trust boundaries: where the key lives, who never receives it, and what the model is not allowed to write.",
    designAfter:
      "The provider key crosses the external boundary at exactly one point, leaving the gateway. The engine, the sandbox and the web server never receive it, and refuse to start if they find one in their own environment. The sandbox is the least privileged service in the system: no network and no database role.",

    attacksHeading: "The seven attacks, and what stops each one",
    attacksIntro:
      "THREAT_MODEL.md describes the model. ATTACKS.md names each attack, and every named attack has a test that must pass before a merge.",
    attackCol: "Attack",
    stopCol: "What stops it",
    attacks: [
      {
        attack: "Read the provider key",
        stop: "The key lives encrypted in the gateway's vault. The engine, the sandbox and the web server never receive any key, and refuse to start if they find one in their environment.",
      },
      {
        attack: "Spend more than allowed",
        stop: "Every call reserves its maximum cost before it begins. With no reserved balance, the call does not happen.",
      },
      {
        attack: "Leave the allowed folder",
        stop: "The sandbox runs in a read-only container with no capabilities and limits on memory, CPU, processes and time.",
      },
      {
        attack: "Reach addresses that are not allowed",
        stop: "The sandbox has no network.",
      },
      {
        attack: "Act without permission, or be steered by injected text",
        stop: "A tool marked irreversible stops the task and waits for a person. The text explaining what will happen is written by the developer in the tool definition, never by the model.",
      },
      {
        attack: "Impersonate someone or steal a session",
        stop: "__Host- cookies with Secure, HttpOnly and SameSite Strict, checked by the Rust server on every request, under a strict CSP with a per-request nonce.",
      },
      {
        attack: "Tamper with records",
        stop: "An append-only, hash-chained log written by database triggers. Editing or deleting breaks the chain.",
      },
    ] as Attack[],

    decisionsHeading: "4. The decisions",
    decisionsIntro:
      "Every decision has a price. Below is what I chose, what I rejected, why, and what it costs.",
    choseLabel: "Chose",
    overLabel: "Over",
    becauseLabel: "Because",
    priceLabel: "Price I pay",

    decisions: [
      {
        title: "Reserve the maximum cost before the call",
        chose:
          "Every model call reserves the highest possible cost before it starts. A task with nothing left to reserve stops and waits for an administrator.",
        over: "Metering spend after the response comes back.",
        because:
          "A call's cost is only known once it finishes, and by then the money is gone. Metering afterwards detects an overrun, it does not prevent one. Reserving the maximum up front makes passing the limit structurally impossible rather than a matter of vigilance.",
        price:
          "The budget is under-used. A task can be stopped with real balance left, because the reservation assumed the worst case and the actual response cost less.",
      },
      {
        title: "The approval text is written by the developer, never by the model",
        chose:
          "What will happen lives in the tool definition, written by hand by whoever implemented it. The person approves by reading that text.",
        over: "Letting the model explain what it is about to do.",
        because:
          "If the model writes the explanation, a model steered by injected text writes a reassuring one. The person approves a lie and carries the blame. Taking that pen away from the model is what makes human approval worth anything.",
        price:
          "Every new tool needs its text written by hand, and the agent cannot create tools on its own. The flexibility is removed on purpose.",
      },
      {
        title: "Audit through database triggers, not application code",
        chose: "18 triggers write every change to the log, regardless of who performed the write.",
        over: "Logging the event from the service code.",
        because:
          "Application-level logging can be bypassed: a bug, a direct database connection, a future service that forgets to call it. A trigger fires anyway. The guarantee stops depending on discipline.",
        price:
          "Logic lives in SQL, which is harder to test and to change, and migrations get heavier. Every new table needs its trigger alongside it, or the gap is silent.",
      },
      {
        title: "Append-only, hash-chained log",
        chose: "Each record carries the hash of the previous one. Nothing is updated and nothing is deleted.",
        over: "A normal table with timestamps.",
        because:
          "A plain table can be edited by anyone with write access, and afterwards you cannot prove it was not. Chaining makes any edit or deletion break the chain and become detectable.",
        price:
          "Nothing can be deleted, including what went in by mistake. A personal-data erasure request stops being a query and becomes a design problem.",
      },
      {
        title: "A service refuses to start if it finds a provider key in its environment",
        chose:
          "The engine, the sandbox and the web server check their own environment at boot and fail if they find a key.",
        over: "Simply not reading the variable.",
        because:
          "The dangerous case is not code that reads the key. It is a deploy that passes the key to everything by accident. Failing closed turns a silent misconfiguration into a loud startup failure.",
        price:
          "A legitimate shared environment breaks, and local development needs care to avoid killing your own service without understanding why.",
      },
      {
        title: "One PostgreSQL role per service, with only the grants its code uses",
        chose:
          "ao_gateway, ao_server and ao_engine, each with its own grants, checked by tests. The sandbox has no role at all.",
        over: "One connection string for every service.",
        because:
          "If the sandbox is compromised, it must not be able to read the accounts table. Since it has no connection at all, that class of attack disappears rather than being mitigated.",
        price:
          "Migrations have to maintain the grants. A new query fails in tests until the grant is added, which is exactly the point, and it slows the work down.",
      },
      {
        title: "A mock provider and a throwaway database for end-to-end tests",
        chose:
          "A mock provider and a separate database, so the whole stack can be brought up and exercised at no cost and without touching the development database.",
        over: "Running end-to-end tests against the real provider.",
        because:
          "End-to-end against a real provider costs money on every run and is not deterministic, so nobody runs it as often as they should. A test nobody runs protects nothing.",
        price:
          "The mock does not understand text. The test proves plumbing, permissions and the approval flow, and proves nothing about model behaviour.",
      },
    ] as Decision[],

    breaksHeading: "5. What breaks",
    breaksIntro:
      "Including what is unresolved today. The README itself says the system is not ready for production.",
    breaks: [
      {
        title: "The reservation is a worst-case estimate",
        body: "It depends on a maximum-cost table per model. If a provider changes pricing, or a model with different token economics is added, the reservation is wrong in both directions: either it holds too much budget and stops tasks for no reason, or it holds too little and the guarantee stops being true. Nothing currently checks whether that table still matches reality.",
      },
      {
        title: "A task stopped by budget waits forever",
        body: "It waits for an administrator. If nobody is watching, it simply sits there. There is no deadline, no escalation and no default behaviour after a period of time.",
      },
      {
        title: "Approvals have the same problem, and worse",
        body: "An irreversible action waiting for a decision holds the whole run, and a held run keeps its budget reserved. The longer nobody decides, the more balance is locked up with nothing happening.",
      },
      {
        title: "The hash chain proves tampering, but nobody checks it",
        body: "Chaining makes any edit detectable. Detectable is not detected: nothing verifies the chain continuously. A break only surfaces when someone decides to look, which is usually too late.",
      },
      {
        title: "A sandbox with no network closes the escape and closes the use case",
        body: "Having no network removes the main escape route, and also blocks any legitimate task that needs the internet. That tension is unresolved: today the choice is full safety with reduced capability.",
      },
      {
        title: "Everything on 127.0.0.1",
        body: "It is the right decision for self-hosted use on one machine, and it leaves open how a team on different machines would use this. The deployment story for more than one person has not been designed.",
      },
    ] as Break[],

    scaleHeading: "6. What I would change at 100x",
    scaleIntro:
      "Scenario: 100 agents running at once, thousands of tasks a day, and several workspaces in the same installation.",
    scaleSurvives: "What survives unchanged",
    scaleSurvivesBody:
      "The trust boundaries. The key still leaves only through the gateway, the per-service roles still hold, and the sandbox still has no network and no database, whatever the volume. Security designed as a boundary does not degrade with scale.",
    scaleBreaks: "What breaks first",
    scaleBreaksBody:
      "The single engine worker, which processes requests in sequence. With 100 agents the queue grows faster than it drains, and everything ends up waiting on one process.",
    scaleChanges: "In the order I would change them",
    scaleList: [
      "Several workers claiming tasks with SELECT FOR UPDATE SKIP LOCKED. The Postgres-as-a-queue design already allows it, so this is a change in the worker loop rather than in the data model.",
      "Fix the contention on budget reservation. Every call in the same workspace locks the same row, and with 100 agents that becomes the next bottleneck. Per-agent reservation rows with periodic rollup take the contention out of the hot path.",
      "Partition the audit log. Eighteen triggers on every write amplify writes, and at volume the log becomes the heaviest table in the database. Partition by month, move old partitions out, keep the chain hash.",
      "Give approvals a policy: a deadline, escalation and a default on expiry. Without that, every forgotten irreversible action is a held run sitting on a budget reservation, and at scale that locks the system up without a single error appearing.",
    ],

    footnote:
      "This page describes the system as it stands today, including what is still unresolved. Phases 1 to 4 are complete and the project is not ready for production use.",
  },
} as const;

/* -------------------------------------------------------------------------- */

function Diagram({ locale }: { locale: "pt" | "en" }) {
  const t =
    locale === "pt"
      ? {
          boundary: "127.0.0.1 — tudo local",
          web: "Web",
          webSub: "Next.js",
          server: "Server",
          serverSub: "contas, sessões, papéis",
          engine: "Engine",
          engineSub: "execuções, ferramentas, aprovações",
          sandbox: "Sandbox",
          sandboxSub: "sem rede · sem banco",
          gateway: "Gateway",
          gatewaySub: "cofre: a chave vive só aqui",
          db: "PostgreSQL",
          dbSub: "3 papéis, um por serviço · 18 triggers de auditoria",
          providers: "Provedores",
          providersSub: "Anthropic · OpenAI · Gemini",
          noKey: "pedido sem chave",
          withKey: "com a chave",
          runPy: "run_python",
        }
      : {
          boundary: "127.0.0.1 — everything local",
          web: "Web",
          webSub: "Next.js",
          server: "Server",
          serverSub: "accounts, sessions, roles",
          engine: "Engine",
          engineSub: "runs, tools, approvals",
          sandbox: "Sandbox",
          sandboxSub: "no network · no database",
          gateway: "Gateway",
          gatewaySub: "vault: the key lives only here",
          db: "PostgreSQL",
          dbSub: "3 roles, one per service · 18 audit triggers",
          providers: "Providers",
          providersSub: "Anthropic · OpenAI · Gemini",
          noKey: "request, no key",
          withKey: "with the key",
          runPy: "run_python",
        };

  const Box = ({
    x,
    y,
    w,
    h,
    label,
    sub,
    thick = 3,
  }: {
    x: number;
    y: number;
    w: number;
    h: number;
    label: string;
    sub?: string;
    thick?: number;
  }) => (
    <g>
      <rect x={x} y={y} width={w} height={h} fill="#ffffff" stroke="#000000" strokeWidth={thick} />
      <text
        x={x + w / 2}
        y={sub ? y + h / 2 - 3 : y + h / 2 + 5}
        textAnchor="middle"
        fontSize={16}
        fontWeight={900}
        fill="#000000"
      >
        {label}
      </text>
      {sub && (
        <text
          x={x + w / 2}
          y={y + h / 2 + 16}
          textAnchor="middle"
          fontSize={11}
          fontWeight={700}
          fill="#000000"
        >
          {sub}
        </text>
      )}
    </g>
  );

  const A = ({ x1, y1, x2, y2 }: { x1: number; y1: number; x2: number; y2: number }) => (
    <line x1={x1} y1={y1} x2={x2} y2={y2} stroke="#000000" strokeWidth={3} markerEnd="url(#ao)" />
  );

  return (
    <div className="overflow-x-auto border-4 border-black bg-white">
      <svg viewBox="0 0 900 540" className="block min-w-[880px] w-full h-auto" role="img">
        <defs>
          <marker id="ao" markerWidth="10" markerHeight="10" refX="9" refY="5" orient="auto">
            <path d="M0,0 L10,5 L0,10 z" fill="#000000" />
          </marker>
        </defs>

        <rect
          x={20}
          y={36}
          width={640}
          height={470}
          fill="none"
          stroke="#000000"
          strokeWidth={2}
          strokeDasharray="9 7"
        />
        <text x={30} y={496} fontSize={12} fontWeight={800} fill="#000000">
          {t.boundary}
        </text>

        <Box x={40} y={64} w={170} h={54} label={t.web} sub={t.webSub} />
        <A x1={125} y1={120} x2={125} y2={164} />

        <Box x={40} y={168} w={170} h={54} label={t.server} sub={t.serverSub} />
        <Box x={250} y={168} w={170} h={54} label={t.engine} sub={t.engineSub} />
        <Box x={460} y={168} w={170} h={54} label={t.sandbox} sub={t.sandboxSub} thick={6} />

        <A x1={422} y1={195} x2={456} y2={195} />
        <text x={439} y={158} textAnchor="middle" fontSize={11} fontWeight={700} fill="#000000">
          {t.runPy}
        </text>

        <A x1={380} y1={224} x2={380} y2={286} />
        <text x={392} y={262} fontSize={11} fontWeight={700} fill="#000000">
          {t.noKey}
        </text>

        <Box x={310} y={290} w={240} h={80} label={t.gateway} sub={t.gatewaySub} thick={6} />

        <A x1={125} y1={224} x2={125} y2={416} />
        <A x1={270} y1={224} x2={270} y2={416} />

        <Box x={40} y={420} w={380} h={64} label={t.db} sub={t.dbSub} />

        <A x1={552} y1={330} x2={694} y2={330} />
        <text x={623} y={318} textAnchor="middle" fontSize={11} fontWeight={800} fill="#000000">
          {t.withKey}
        </text>

        <Box x={700} y={300} w={170} h={60} label={t.providers} sub={t.providersSub} />
      </svg>
    </div>
  );
}

/* -------------------------------------------------------------------------- */

export default function AgentOrchestrationArchitecturePage() {
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
        <div className="mt-6">
          <a
            href="https://github.com/Vinisilva0010/Agent-orchestration..git"
            target="_blank"
            rel="noopener noreferrer"
            className="text-base font-black uppercase text-black underline decoration-2 hover:opacity-80"
          >
            {c.codeLabel}
          </a>
        </div>
      </header>

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

        <h3 className="mt-10 text-xl font-black uppercase tracking-wide text-black sm:text-2xl">
          {c.attacksHeading}
        </h3>
        <p className="mt-3 text-base font-semibold leading-relaxed text-black">{c.attacksIntro}</p>
        <div className="mt-5 border-4 border-black">
          {c.attacks.map((a, i) => (
            <div
              key={i}
              className="grid grid-cols-1 border-b-4 border-black last:border-b-0 sm:grid-cols-[1fr_1.6fr]"
            >
              <div className="border-b-4 border-black p-4 sm:border-b-0 sm:border-r-4">
                <p className="text-xs font-black uppercase tracking-widest text-black">
                  {c.attackCol} {String(i + 1).padStart(2, "0")}
                </p>
                <p className="mt-2 text-base font-black leading-tight text-black">{a.attack}</p>
              </div>
              <div className="p-4">
                <p className="text-xs font-black uppercase tracking-widest text-black">
                  {c.stopCol}
                </p>
                <p className="mt-2 text-base font-semibold leading-relaxed text-black">{a.stop}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

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