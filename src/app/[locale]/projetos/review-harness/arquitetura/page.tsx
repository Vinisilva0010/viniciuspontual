"use client";

import Link from "next/link";
import { useLocale } from "next-intl";

/* ---------------------------------------------------------------------------
   review-harness — system design page.
   Both languages inline so the page stays a single file.
--------------------------------------------------------------------------- */

type Decision = { title: string; chose: string; over: string; because: string; price: string };
type Break = { title: string; body: string };

const COPY = {
  pt: {
    back: "← Voltar ao início",
    kicker: "Arquitetura",
    title: "review-harness",
    subtitle:
      "Revisão automática de pull request. Verificações grátis primeiro, IA só onde o risco justifica o custo, e a IA nunca pode aprovar nada.",
    codeLabel: "Código no GitHub",

    problemHeading: "1. O problema",
    problem: [
      "Agente de IA escreve mais código do que uma pessoa consegue ler linha por linha. Ler tudo não escala. Não ler nada é inseguro.",
      "A solução óbvia, jogar um modelo em cima de todo pull request, tem dois problemas. O primeiro é dinheiro: custa a cada PR, e a maior parte dos PRs não precisa disso. O segundo é mais sério: coloca o componente menos confiável do sistema na posição de decidir o que entra na base de código.",
      "O problema de engenharia é este: decidir quais PRs merecem atenção humana, gastar dinheiro só onde o risco justifica, e garantir que a IA nunca possa aprovar coisa nenhuma.",
      "A base é o processo descrito no artigo da Anthropic sobre como o time do Claude Code faz revisão de código, de outubro de 2026, adaptado para orçamento pequeno.",
    ],

    numbersHeading: "2. Os números",
    numbersNote: "Contados no próprio funcionamento da ferramenta.",
    numbers: [
      ["5", "etapas em ordem fixa: testes, risco, segurança, IA e decisão"],
      ["3", "dessas etapas não custam nada: testes, risco e segurança"],
      ["1", "etapa custa dinheiro, e vem desligada por padrão"],
      ["3", "resultados possíveis: passou, precisa de humano, falhou"],
      ["3", "rodadas no máximo por PR na etapa de IA"],
      ["0", "arquivos completos lidos pela IA. Só as linhas alteradas"],
      ["0", "chaves entregues a PR vindo de fork"],
      ["2", "permissões no GitHub: ler o código e comentar no PR. Nada mais"],
    ],

    designHeading: "3. O desenho",
    designIntro:
      "É um funil ordenado por custo. Cada etapa grátis reduz quanto trabalho sobra para a etapa cara, e a etapa cara só recebe o que as grátis já disseram que tem risco.",
    designAfter:
      "A configuração entra pela lateral de propósito: ela é lida sempre da branch principal, nunca do PR em revisão. Se o PR pudesse trazer as próprias regras, a primeira coisa que um PR ruim faria era marcar os próprios arquivos como de baixo risco e desligar as verificações.",

    resultsHeading: "Os três resultados",
    resultsIntro:
      "O resultado do meio é decisão de produto, não falta de certeza do sistema.",
    results: [
      ["Passou", "Testes passaram, nenhum problema de segurança, e só arquivos de baixo risco mudaram.", "Pode mesclar."],
      ["Precisa de humano", "Tudo passou, mas o PR toca arquivo sensível.", "Leia com atenção antes de mesclar."],
      ["Falhou", "Teste quebrou ou apareceu problema de segurança.", "Corrija. O merge continua bloqueado."],
    ],

    decisionsHeading: "4. As decisões",
    decisionsIntro:
      "Toda decisão tem preço. Abaixo está o que escolhi, o que descartei, por quê, e o que isso custa.",
    choseLabel: "Escolhi",
    overLabel: "Em vez de",
    becauseLabel: "Porque",
    priceLabel: "Preço que pago",

    decisions: [
      {
        title: "Verificação grátis primeiro, IA por último e desligada por padrão",
        chose:
          "Testes, lista de arquivos alterados e varredura de segurança rodam antes. Só PR de risco médio ou alto chega na IA, e a IA vem desligada.",
        over: "Mandar todo pull request para um modelo.",
        because:
          "A maior parte dos PRs não precisa de IA para ser julgada. Teste quebrado e lista de arquivo alterado respondem quase tudo sem custo. Colocar a etapa paga por último significa pagar só onde as etapas grátis já apontaram risco.",
        price:
          "A IA nunca vê PR de baixo risco. Um bug sutil num arquivo que ninguém marcou como sensível não vai ser pego por ela.",
      },
      {
        title: "A IA pode apontar problema e nunca pode aprovar",
        chose: "A etapa de IA só reporta. A aprovação é decidida pelas etapas determinísticas.",
        over: "Deixar o modelo dar o veredicto.",
        because:
          "Aprovar é a única decisão que importa, e um modelo que pode ser conduzido pelo conteúdo que está lendo não pode ter essa caneta. Um PR malicioso que escrevesse instruções no próprio diff estaria instruindo o revisor a aprová-lo.",
        price:
          "Um PR que está realmente correto ainda carrega o que a IA apontou, e alguém precisa descartar manualmente.",
      },
      {
        title: "Achado que aponta para linha fora do PR é descartado",
        chose: "Se o modelo comenta uma linha que não está no diff, o achado é jogado fora.",
        over: "Mostrar tudo que o modelo falou.",
        because:
          "Modelo lendo diff comenta com confiança sobre código que ele deduziu, não leu. Achado que não ancora em linha alterada é achado que ninguém consegue conferir, e ruído em ferramenta de revisão é o que faz a ferramenta ser desligada em duas semanas.",
        price:
          "Problema real causado pelo PR mas visível só numa linha não alterada é descartado em silêncio.",
      },
      {
        title: "A configuração é lida da branch principal, nunca do PR",
        chose: "O arquivo .review-harness.toml sempre vem da main, independente do que o PR traz.",
        over: "Ler a configuração da branch em revisão.",
        because:
          "Se o PR trouxesse as próprias regras, bastava ele se declarar de baixo risco para escapar de tudo. Regra precisa morar em lugar que o PR não alcança, senão ela não é regra.",
        price:
          "Mudar as regras exige um PR próprio para a main, revisado sob as regras antigas. Apertar a configuração é mais lento do que parece.",
      },
      {
        title: 'O terceiro resultado é "precisa de humano", não um segundo tipo de falha',
        chose: "Três resultados em vez de dois.",
        over: "Só passou ou falhou.",
        because:
          "Um PR pode estar inteiramente correto e ainda merecer leitura cuidadosa, por causa de onde ele mexe e não do que ele faz. Transformar isso em falha ensina o time a mesclar por cima de falha, e transformar em passou esconde o caso.",
        price:
          "Alguém precisa realmente ler esses. A ferramenta move o trabalho de lugar, ela não elimina o trabalho.",
      },
      {
        title: "Duas permissões: ler o código e comentar",
        chose: "A ferramenta não consegue alterar nada no repositório.",
        over: "Dar acesso de escrita para ela corrigir ou mesclar sozinha.",
        because:
          "Ferramenta de revisão com acesso de escrita é uma porta nova para dentro do repositório, e ela roda em todo PR, inclusive nos que vêm de desconhecidos. Quem aplica a regra é a proteção de branch do GitHub, não a ferramenta.",
        price:
          "A ferramenta não consegue se impor. Sem o ruleset configurado, tudo que ela diz é opinião e pode ser ignorado, inclusive por um agente fazendo push direto na main.",
      },
      {
        title: "Action fixada em commit, credencial não persistida, nenhuma chave para fork",
        chose:
          "O checkout é fixado pelo hash do commit em vez da tag, com persist-credentials desligado, e PR vindo de fork nunca recebe a chave de API.",
        over: "Usar a tag da action e as configurações padrão.",
        because:
          "Tag pode ser movida. Uma action referenciada por tag pode ser trocada por baixo de você, e ela roda dentro de um job que tem token. E PR de fork é escrito por gente que você não conhece: chave entregue a um fork é chave entregue.",
        price:
          "Hash fixado precisa ser atualizado na mão, e um hash desatualizado é um problema de segurança por conta própria.",
      },
    ] as Decision[],

    breaksHeading: "5. O que quebra",
    breaksIntro: "O que está mal resolvido, incluindo o que o próprio README declara.",
    breaks: [
      {
        title: "A ferramenta não consegue se impor",
        body: "Proteger a branch é passo manual nas configurações do GitHub, e o README diz isso com todas as letras: sem o ruleset, qualquer um, inclusive um agente de IA, faz push direto na main e pula a revisão inteira. A parte mais importante do sistema é a única que ele não controla.",
      },
      {
        title: "A lista de risco é escrita à mão",
        body: "Caminho sensível que ninguém listou é caminho de baixo risco. A qualidade da ferramenta inteira depende de uma lista que alguém precisa lembrar de manter atualizada, e lista desatualizada não reclama.",
      },
      {
        title: "As varreduras pegam o que já é conhecido",
        body: "O gitleaks acha padrão de segredo conhecido e o cargo-audit acha vulnerabilidade já publicada. Formato de segredo novo e vulnerabilidade ainda não divulgada passam, e o resultado verde não distingue entre não ter problema e não ter encontrado.",
      },
      {
        title: "O descarte de achado não deixa rastro",
        body: "Jogar fora achado que aponta para linha fora do PR é o padrão certo e descarta coisa real junto. Como não existe registro do que foi descartado, não dá para saber com que frequência isso acontece nem se o critério está calibrado.",
      },
      {
        title: "O cargo-audit só serve para Rust",
        body: "Num projeto que não é Rust, essa etapa não faz nada, e a ferramenta não avisa. O relatório fica com aparência de completo sendo que uma das verificações não rodou de verdade.",
      },
      {
        title: "PR grande recebe revisão parcial com cara de completa",
        body: "A etapa de IA tem limite de token e três rodadas. Um PR grande bate no limite, e o comentário final não distingue entre revisão que cobriu tudo e revisão que parou no meio.",
      },
      {
        title: 'Nada garante que o "precisa de humano" foi lido',
        body: "O resultado do meio só funciona se alguém de fato ler com atenção. A ferramenta não tem como saber se isso aconteceu, e time sob pressão mescla o amarelo do mesmo jeito que mescla o verde.",
      },
    ] as Break[],

    scaleHeading: "6. O que eu mudaria em 100x",
    scaleIntro:
      "Cenário: 100 repositórios, centenas de pull requests por dia e vários times usando a mesma instalação.",
    scaleSurvives: "O que sobrevive sem mudar nada",
    scaleSurvivesBody:
      "A ordem das etapas e a proibição da IA aprovar. As duas são regras, não infraestrutura: valem igual com um repositório ou com cem, e são exatamente a parte que impede a conta de explodir e o sistema de ser enganado.",
    scaleBreaks: "O que quebra primeiro",
    scaleBreaksBody:
      "A lista de risco escrita à mão. Com 100 repositórios são 100 listas, cada uma mantida por quem lembrar, e todas envelhecendo em ritmos diferentes. A ferramenta continua funcionando e passa a julgar errado sem avisar.",
    scaleChanges: "Na ordem em que eu mudaria",
    scaleList: [
      "Deduzir o risco em vez de declarar. Caminho que já apareceu em incidente, ou do qual muito código depende, é de alto risco esteja ou não escrito na lista. A lista declarada vira exceção, não fonte.",
      "Centralizar a configuração com exceção por repositório, para uma regra de segurança ser mudada em um lugar em vez de em cem pull requests.",
      "Orçar a etapa de IA no nível da organização, não por PR. Três rodadas por PR é limite razoável para um repositório e não significa nada em centenas: o controle real é teto de gasto, com a revisão cara indo primeiro para os PRs mais arriscados.",
      "Medir o que a ferramenta deixa passar. Hoje não existe retorno nenhum: bug que chegou em produção depois de um resultado verde não deixa marca na ferramenta. Ligar o incidente de volta ao PR que o causou é o que transforma a lista de risco de chute em dado.",
    ],

    footnote:
      "Esta página descreve o sistema como ele está hoje, incluindo o que ainda não está resolvido. A ferramenta lê o código e comenta no pull request, e não consegue alterar nada no repositório.",
  },

  en: {
    back: "← Back to home",
    kicker: "Architecture",
    title: "review-harness",
    subtitle:
      "Automatic pull request review. Free checks first, AI only where the risk justifies the cost, and the AI can never approve anything.",
    codeLabel: "Code on GitHub",

    problemHeading: "1. The problem",
    problem: [
      "AI agents write more code than a person can read line by line. Reading everything does not scale. Reading nothing is unsafe.",
      "The obvious fix, running a model over every pull request, has two problems. The first is money: it costs on every PR, and most PRs do not need it. The second is more serious: it puts the least trustworthy component in the system in the position of deciding what enters the codebase.",
      "The engineering problem is this: decide which PRs deserve human attention, spend money only where the risk justifies it, and make sure the AI can never approve anything.",
      "The basis is the process described in Anthropic's October 2026 article on how the Claude Code team does code review, adapted for a small budget.",
    ],

    numbersHeading: "2. The numbers",
    numbersNote: "Counted from how the tool actually operates.",
    numbers: [
      ["5", "steps in a fixed order: tests, risk, security, AI and decision"],
      ["3", "of those steps cost nothing: tests, risk and security"],
      ["1", "step costs money, and it ships turned off"],
      ["3", "possible results: pass, needs human, fail"],
      ["3", "rounds maximum per PR in the AI step"],
      ["0", "whole files read by the AI. Only the changed lines"],
      ["0", "keys handed to a PR coming from a fork"],
      ["2", "GitHub permissions: read the code and comment on the PR. Nothing else"],
    ],

    designHeading: "3. The design",
    designIntro:
      "It is a funnel ordered by cost. Each free step reduces how much work is left for the expensive one, and the expensive one only receives what the free steps already flagged as risky.",
    designAfter:
      "The configuration enters from the side on purpose: it is always read from the main branch, never from the PR under review. If a PR could bring its own rules, the first thing a bad PR would do is mark its own files as low risk and switch the checks off.",

    resultsHeading: "The three results",
    resultsIntro:
      "The middle result is a product decision, not the system being unsure.",
    results: [
      ["Pass", "Tests passed, no security problems, and only low-risk files changed.", "Merge it."],
      ["Needs human", "Everything passed, but the PR touches sensitive files.", "Read it carefully before merging."],
      ["Fail", "Tests failed or a security problem was found.", "Fix it. Merging stays blocked."],
    ],

    decisionsHeading: "4. The decisions",
    decisionsIntro:
      "Every decision has a price. Below is what I chose, what I rejected, why, and what it costs.",
    choseLabel: "Chose",
    overLabel: "Over",
    becauseLabel: "Because",
    priceLabel: "Price I pay",

    decisions: [
      {
        title: "Free checks first, AI last and off by default",
        chose:
          "Tests, the changed-file list and the security scan run first. Only medium- and high-risk PRs reach the AI, and the AI ships turned off.",
        over: "Sending every pull request to a model.",
        because:
          "Most PRs do not need an AI to be judged. A failing test and a list of changed files answer nearly everything for free. Putting the paid step last means paying only where the free steps already pointed at risk.",
        price:
          "The AI never sees a low-risk PR. A subtle bug in a file nobody marked sensitive will not be caught by it.",
      },
      {
        title: "The AI can report problems and can never approve",
        chose: "The AI step only reports. Approval is decided by the deterministic steps.",
        over: "Letting the model give the verdict.",
        because:
          "Approval is the only decision that matters, and a model that can be steered by the content it is reading must not hold that pen. A malicious PR writing instructions into its own diff would be instructing the reviewer to approve it.",
        price:
          "A PR that is genuinely fine still carries whatever the AI flagged, and someone has to dismiss it by hand.",
      },
      {
        title: "A finding pointing at a line outside the PR is discarded",
        chose: "If the model comments on a line that is not in the diff, the finding is thrown away.",
        over: "Showing everything the model said.",
        because:
          "A model reading a diff will confidently comment on code it inferred rather than read. A finding that does not anchor to a changed line is a finding nobody can verify, and noise in a review tool is what gets the tool switched off within two weeks.",
        price:
          "A real problem caused by the PR but visible only in an unchanged line is dropped silently.",
      },
      {
        title: "The configuration is read from main, never from the PR",
        chose: "The .review-harness.toml file always comes from main, whatever the PR carries.",
        over: "Reading the configuration from the branch under review.",
        because:
          "If a PR could bring its own rules, it would only need to declare itself low risk to escape everything. A rule has to live somewhere the PR cannot reach, otherwise it is not a rule.",
        price:
          "Changing the rules needs its own PR to main, reviewed under the old rules. Tightening the config is slower than it looks.",
      },
      {
        title: 'The third result is "needs human", not a second kind of failure',
        chose: "Three results instead of two.",
        over: "Pass or fail only.",
        because:
          "A PR can be entirely correct and still deserve a careful read, because of where it lands rather than what it does. Collapsing that into fail teaches the team to merge over failures, and collapsing it into pass hides the case.",
        price:
          "Someone has to actually read those. The tool moves the work, it does not remove it.",
      },
      {
        title: "Two permissions: read the code and comment",
        chose: "The tool cannot change anything in the repository.",
        over: "Giving it write access so it could fix things or merge on its own.",
        because:
          "A review tool with write access is a new door into the repository, and it runs on every PR, including ones from strangers. Enforcement belongs to GitHub's branch protection, not to the tool.",
        price:
          "The tool cannot enforce itself. Without the ruleset configured, everything it says is advisory and can be ignored, including by an agent pushing straight to main.",
      },
      {
        title: "Action pinned to a commit, credentials not persisted, no key to forks",
        chose:
          "The checkout is pinned by commit hash rather than tag, with persist-credentials off, and a PR from a fork never receives the API key.",
        over: "Using the action's tag and the default settings.",
        because:
          "A tag can be moved. An action referenced by tag can be swapped under you, and it runs inside a job that holds a token. And a fork PR is written by someone you do not know: a key handed to a fork is a key given away.",
        price:
          "A pinned hash has to be updated by hand, and an outdated pin is a security problem of its own.",
      },
    ] as Decision[],

    breaksHeading: "5. What breaks",
    breaksIntro: "What is unresolved, including what the README states itself.",
    breaks: [
      {
        title: "The tool cannot enforce itself",
        body: "Protecting the branch is a manual step in GitHub's settings, and the README says so plainly: without the ruleset, anyone, including an AI agent, pushes straight to main and skips the whole review. The most important part of the system is the one part it does not control.",
      },
      {
        title: "The risk list is written by hand",
        body: "A sensitive path nobody listed is a low-risk path. The quality of the entire tool rests on a list someone has to remember to maintain, and an outdated list does not complain.",
      },
      {
        title: "The scans catch what is already known",
        body: "gitleaks finds known secret patterns and cargo-audit finds already-published vulnerabilities. A new secret format and an undisclosed vulnerability both pass, and a green result does not distinguish between having no problem and having found none.",
      },
      {
        title: "Discarded findings leave no trace",
        body: "Throwing away findings that point outside the PR is the right default and it drops real ones along with the noise. With no record of what was discarded, there is no way to know how often it happens or whether the rule is calibrated.",
      },
      {
        title: "cargo-audit only works for Rust",
        body: "In a project that is not Rust, that step does nothing and the tool does not say so. The report looks complete while one of the checks never really ran.",
      },
      {
        title: "A large PR gets a partial review that looks complete",
        body: "The AI step has a token limit and three rounds. A large PR hits the limit, and the final comment does not distinguish between a review that covered everything and one that stopped halfway.",
      },
      {
        title: 'Nothing guarantees the "needs human" was read',
        body: "The middle result only works if someone actually reads carefully. The tool has no way of knowing whether that happened, and a team under pressure merges the yellow the same way it merges the green.",
      },
    ] as Break[],

    scaleHeading: "6. What I would change at 100x",
    scaleIntro:
      "Scenario: 100 repositories, hundreds of pull requests a day, and several teams on the same installation.",
    scaleSurvives: "What survives unchanged",
    scaleSurvivesBody:
      "The order of the steps and the ban on the AI approving. Both are rules rather than infrastructure: they hold the same with one repository or a hundred, and they are exactly the parts that stop the bill exploding and stop the system being fooled.",
    scaleBreaks: "What breaks first",
    scaleBreaksBody:
      "The hand-written risk list. With 100 repositories there are 100 lists, each maintained by whoever remembers, all ageing at different rates. The tool keeps working and starts judging wrongly without saying so.",
    scaleChanges: "In the order I would change them",
    scaleList: [
      "Derive risk instead of declaring it. A path that has shown up in a past incident, or that a lot of code depends on, is high risk whether or not it is written in a list. The declared list becomes the exception, not the source.",
      "Centralise the configuration with per-repository overrides, so a security rule can be changed in one place rather than across a hundred pull requests.",
      "Budget the AI step at organisation level, not per PR. Three rounds per PR is a reasonable limit for one repository and means nothing across hundreds: the real control is a spending ceiling, with the expensive review going to the riskiest PRs first.",
      "Measure what the tool misses. Today there is no feedback at all: a bug that reached production after a green result leaves no mark on the tool. Linking an incident back to the PR that caused it is what turns the risk list from a guess into data.",
    ],

    footnote:
      "This page describes the system as it stands today, including what is still unresolved. The tool reads the code and comments on the pull request, and cannot change anything in the repository.",
  },
} as const;

/* -------------------------------------------------------------------------- */

function Diagram({ locale }: { locale: "pt" | "en" }) {
  const t =
    locale === "pt"
      ? {
          pr: "Pull request aberto",
          s1: "1. Testes",
          s1Sub: "comandos que você configurou",
          s2: "2. Risco",
          s2Sub: "quais arquivos foram alterados",
          s3: "3. Segurança",
          s3Sub: "gitleaks · cargo-audit",
          gate: "SÓ RISCO MÉDIO E ALTO SEGUEM DAQUI",
          s4: "4. Revisão por IA",
          s4Sub: "desligada por padrão · só linhas alteradas · 3 rodadas\nachado fora do PR é descartado · nunca aprova",
          s5: "5. Um comentário no PR",
          s5Sub: "passou · precisa de humano · falhou",
          cfg: ".review-harness.toml",
          cfgSub: "lido da main,\nnunca do PR",
          free: "sem custo",
          paid: "custa",
        }
      : {
          pr: "Pull request opened",
          s1: "1. Tests",
          s1Sub: "the commands you configured",
          s2: "2. Risk",
          s2Sub: "which files changed",
          s3: "3. Security",
          s3Sub: "gitleaks · cargo-audit",
          gate: "ONLY MEDIUM AND HIGH RISK CONTINUE FROM HERE",
          s4: "4. AI review",
          s4Sub: "off by default · changed lines only · 3 rounds\nfindings outside the PR discarded · never approves",
          s5: "5. One comment on the PR",
          s5Sub: "pass · needs human · fail",
          cfg: ".review-harness.toml",
          cfgSub: "read from main,\nnever from the PR",
          free: "free",
          paid: "costs money",
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
  }) => {
    const lines = sub ? sub.split("\n") : [];
    return (
      <g>
        <rect x={x} y={y} width={w} height={h} fill="#ffffff" stroke="#000000" strokeWidth={thick} />
        <text
          x={x + w / 2}
          y={lines.length ? y + 25 : y + h / 2 + 5}
          textAnchor="middle"
          fontSize={15}
          fontWeight={900}
          fill="#000000"
        >
          {label}
        </text>
        {lines.map((line, i) => (
          <text
            key={i}
            x={x + w / 2}
            y={y + 43 + i * 14}
            textAnchor="middle"
            fontSize={10.5}
            fontWeight={700}
            fill="#000000"
          >
            {line}
          </text>
        ))}
      </g>
    );
  };

  const A = ({ x1, y1, x2, y2 }: { x1: number; y1: number; x2: number; y2: number }) => (
    <line x1={x1} y1={y1} x2={x2} y2={y2} stroke="#000000" strokeWidth={3} markerEnd="url(#rh)" />
  );

  const Tag = ({ x, y, label }: { x: number; y: number; label: string }) => (
    <text x={x} y={y} fontSize={11} fontWeight={800} fill="#000000">
      {label}
    </text>
  );

  return (
    <div className="overflow-x-auto border-4 border-black bg-white">
      <svg viewBox="0 0 900 600" className="block min-w-[880px] w-full h-auto" role="img">
        <defs>
          <marker id="rh" markerWidth="10" markerHeight="10" refX="9" refY="5" orient="auto">
            <path d="M0,0 L10,5 L0,10 z" fill="#000000" />
          </marker>
        </defs>

        <Box x={310} y={20} w={280} h={46} label={t.pr} />
        <A x1={450} y1={68} x2={450} y2={94} />

        <Box x={280} y={98} w={340} h={62} label={t.s1} sub={t.s1Sub} />
        <Tag x={636} y={135} label={t.free} />
        <A x1={450} y1={162} x2={450} y2={186} />

        <Box x={280} y={190} w={340} h={62} label={t.s2} sub={t.s2Sub} />
        <Tag x={636} y={227} label={t.free} />
        <A x1={450} y1={254} x2={450} y2={278} />

        <Box x={280} y={282} w={340} h={62} label={t.s3} sub={t.s3Sub} />
        <Tag x={636} y={319} label={t.free} />
        <A x1={450} y1={346} x2={450} y2={370} />

        <Box x={24} y={190} w={200} h={62} label={t.cfg} sub={t.cfgSub} thick={6} />
        <A x1={228} y1={221} x2={276} y2={221} />

        <rect x={160} y={374} width={580} height={44} fill="#ffffff" stroke="#000000" strokeWidth={6} />
        <text x={450} y={402} textAnchor="middle" fontSize={13} fontWeight={900} fill="#000000">
          {t.gate}
        </text>
        <A x1={450} y1={418} x2={450} y2={444} />

        <Box x={210} y={448} w={480} h={76} label={t.s4} sub={t.s4Sub} thick={6} />
        <Tag x={706} y={490} label={t.paid} />
        <A x1={450} y1={526} x2={450} y2={548} />

        <Box x={280} y={552} w={340} h={40} label={t.s5} sub={undefined} />
        <text x={450} y={586} textAnchor="middle" fontSize={10.5} fontWeight={700} fill="#000000">
          {t.s5Sub}
        </text>
      </svg>
    </div>
  );
}

/* -------------------------------------------------------------------------- */

export default function ReviewHarnessArchitecturePage() {
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
            href="https://github.com/Vinisilva0010/review-harness"
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
          {c.resultsHeading}
        </h3>
        <p className="mt-3 text-base font-semibold leading-relaxed text-black">{c.resultsIntro}</p>
        <div className="mt-5 border-4 border-black">
          {c.results.map(([name, meaning, action], i) => (
            <div
              key={i}
              className="grid grid-cols-1 border-b-4 border-black last:border-b-0 sm:grid-cols-[0.7fr_1.6fr_1fr]"
            >
              <div
                className={`border-b-4 border-black p-4 sm:border-b-0 sm:border-r-4 ${
                  i === 1 ? "border-l-[12px]" : ""
                }`}
              >
                <p className="text-base font-black leading-tight text-black">{name}</p>
              </div>
              <div className="border-b-4 border-black p-4 sm:border-b-0 sm:border-r-4">
                <p className="text-base font-semibold leading-relaxed text-black">{meaning}</p>
              </div>
              <div className="p-4">
                <p className="text-base font-semibold leading-relaxed text-black">{action}</p>
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