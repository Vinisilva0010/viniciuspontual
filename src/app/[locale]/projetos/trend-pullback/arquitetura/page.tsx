"use client";

import Link from "next/link";
import { useLocale } from "next-intl";

/* ---------------------------------------------------------------------------
   trend-pullback — system design page.
   Both languages inline so the page stays a single file.
--------------------------------------------------------------------------- */

type Decision = { title: string; chose: string; over: string; because: string; price: string };
type Break = { title: string; body: string };

const COPY = {
  pt: {
    back: "← Voltar ao início",
    kicker: "Arquitetura",
    title: "trend-pullback",
    subtitle:
      "Ferramenta de pesquisa e alerta de trade. Nenhum setup pode alertar antes de ser testado em anos de histórico e provar que ganhou da base.",

    problemHeading: "1. O problema",
    problem: [
      "Qualquer pessoa escreve um backtest que dá lucro. O problema é que backtest lucrativo não prova quase nada, e existem dois jeitos de se enganar que matam qualquer ferramenta de trade.",
      "O primeiro é ajustar o setup até o histórico ficar bonito. O resultado descreve o passado e não sobrevive ao primeiro mês de mercado real.",
      "O segundo é mais difícil de enxergar: o setup dá lucro, mas entrar em qualquer candle com o mesmo stop e o mesmo alvo daria o mesmo lucro. Nesse caso a vantagem está no gerenciamento de risco, não no sinal, e você passou meses construindo um gatilho que não serve para nada.",
      "O problema de engenharia é este: construir um sistema desenhado para recusar o próprio setup, e deixar chegar no celular só o que passou.",
    ],

    numbersHeading: "2. Os números",
    numbersNote:
      "Todos os resultados vêm dos testes de histórico, com custo cobrado em cada operação. R é o risco da operação: ganhar 0,15R por trade significa ganhar 15% do que seria perdido se o stop fosse acionado.",
    numbers: [
      ["84", "ações e ETFs americanos que podem gerar operação"],
      ["146", "ações e ETFs no universo completo dos estudos"],
      ["62", "ativos brasileiros testados. Nenhum ganhou da base, nenhum envia sinal"],
      ["2", "períodos de teste: desenvolvimento até outubro de 2024, final de novembro de 2024 em diante"],
      ["+0,15R", "do trap diário a favor da tendência, nos dois períodos. A base fez +0,07R e depois -0,06R"],
      ["+0,27R / +0,19R", "do trap semanal. A base fez +0,24R e +0,12R: ganhou por margem pequena"],
      ["3,6", "sinais por semana no total, menos de um por dia de pregão"],
      ["US$ 2.200", "saldo inicial de cada book de papel, com 2% de risco por operação"],
      ["4", "estágios de alerta, cada um enviado no máximo uma vez"],
      ["0", "chaves de corretora e ordens reais. Tudo é operação de papel"],
    ],

    designHeading: "3. O desenho",
    designIntro:
      "São dois caminhos que compartilham o mesmo código de regras, com um portão entre eles. O estudo decide o que tem permissão de existir. O alerta só roda o que o estudo aprovou.",
    designAfter:
      "O tp-core guarda os indicadores e as regras, e é chamado pelos dois lados. Isso é o que faz o teste valer alguma coisa: se o backtest rodasse um código e o alerta rodasse outro, o teste não provaria nada sobre o que realmente dispara no seu celular.",

    verdictHeading: "Os quatro veredictos possíveis",
    verdictIntro:
      "Cada linha de resultado dos estudos termina com um veredicto. Só o primeiro libera o setup para alertar.",
    verdicts: [
      ["Ganhou nos dois períodos e ganhou da base", "Libera o alerta. É o único veredicto que passa."],
      ["Positivo sem prova", "Ficou acima da base, mas sem operações suficientes para sustentar. Alerta marcado em observação, ou só painel."],
      ["Não ganhou da base", "O lucro veio do stop e do alvo, não do sinal. Vai para o painel sem sinal."],
      ["Perdeu", "Fica desligado. Continua no código e não envia nada."],
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
        title: "O setup tem que ganhar da base, não só dar lucro",
        chose:
          "Todo setup é comparado com entrar em qualquer candle usando o mesmo stop e o mesmo alvo. Se não ganhar dessa base, não alerta.",
        over: "Aceitar qualquer setup com resultado positivo.",
        because:
          "Resultado positivo pode vir inteiro do stop e do alvo, sem o sinal contribuir com nada. Comparar contra entrada em candle qualquer isola o que o gatilho realmente acrescenta. Sem essa comparação, você entrega gerenciamento de risco vestido de estratégia e acha que descobriu alguma coisa.",
        price:
          "Setup que funciona de verdade por margem pequena é recusado junto com o ruído. O trap semanal ganhou da base por pouco e passou raspando.",
      },
      {
        title: "Dois períodos, e o segundo nunca é usado para ajustar",
        chose:
          "Desenvolvimento até outubro de 2024. Teste final de novembro de 2024 em diante, sem nenhum ajuste feito olhando para ele.",
        over: "Um backtest único sobre todo o histórico disponível.",
        because:
          "Qualquer coisa ajustada sobre o mesmo dado em que é testada vai parecer boa. Separar um período que nunca foi olhado durante o desenvolvimento é a defesa mais barata que existe contra ajustar o passado.",
        price:
          "Menos dado para desenvolver, e o período final encolhe sozinho conforme vira presente. Uma hora ele precisa ser aposentado e um novo período precisa ser separado.",
      },
      {
        title: "O mesmo código roda o estudo e o alerta ao vivo",
        chose:
          "O tp-core tem os indicadores e as regras, e é chamado tanto pelo backtest quanto pelo alerta.",
        over: "Um script de pesquisa e uma implementação separada para produção.",
        because:
          "Se o backtest roda um código e o alerta roda outro, o backtest não diz nada sobre o que dispara de verdade. Essa é a forma mais comum de uma ferramenta de trade mentir para o próprio dono sem ninguém perceber.",
        price:
          "Mudar o tp-core muda o passado e o presente ao mesmo tempo. Toda alteração invalida os resultados publicados e obriga a rodar os estudos de novo.",
      },
      {
        title: "A maior parte dos setups foi testada e desligada",
        chose:
          "Smart Money mecânico em todo gráfico, toda venda em ação e todo setup de day trade em 15 minutos e 1 hora perderam nos testes e não enviam nada. Ações brasileiras não ganharam da base e aparecem no painel sem sinal.",
        over: "Publicar tudo que foi construído.",
        because:
          "Ferramenta que alerta sobre tudo ensina a pessoa a ignorar alerta. Depois que você aprende a deslizar a notificação para o lado, o sinal bom morre junto com o ruído.",
        price:
          "Muito trabalho construído não produz alerta nenhum. O que o projeto mostra por fora é bem menor do que o código que existe por trás.",
      },
      {
        title: "Estágio enviado fica registrado, mensagem nunca repete",
        chose:
          "Os quatro estágios, sinal, entrou, saiu e venceu, são gravados quando enviados. Na primeira execução com um book novo, operações já abertas são marcadas como vistas sem mensagem.",
        over: "Recalcular e enviar a cada execução.",
        because:
          "O alerta roda de hora em hora sobre as mesmas posições abertas. Sem registrar o que já saiu, o mesmo sinal chega toda hora até vencer, e alerta repetido é alerta ignorado.",
        price:
          "Estado em arquivo que precisa sobreviver entre execuções. E posição que já estava correndo antes do book existir não gera histórico no feed.",
      },
      {
        title: "O alerta informa quanto custa entrar atrasado",
        chose:
          "Durante o pregão americano, quando o preço passa o gatilho, o alerta diz quantas ações inteiras comprar e quanto a entrada mais cara muda a relação entre retorno e risco.",
        over: "Assumir o preenchimento do backtest.",
        because:
          "O teste compra exatamente no gatilho. No pregão real, com corretora que só aceita ordem a mercado e limitada, você compra depois e mais caro. Mostrar a nova relação no momento do alerta mantém a diferença entre teste e realidade visível, em vez de escondida dentro de um número bonito.",
        price:
          "É cálculo a mais no caminho crítico, e informa algo desconfortável justamente no segundo em que a pessoa ia agir.",
      },
      {
        title: "Nenhuma chave de corretora, nenhuma ordem, só book de papel",
        chose: "O sistema não executa nada. Toda operação registrada é de papel.",
        over: "Automatizar a execução.",
        because:
          "Os setups ainda estão sendo provados. Ligar uma chave em um sistema cuja vantagem não está estabelecida transforma erro de pesquisa em perda de dinheiro, e faz isso mais rápido do que dá para perceber.",
        price:
          "Toda operação precisa ser colocada na mão, e o book registra o que a regra diz, não o que foi realmente executado.",
      },
    ] as Decision[],

    breaksHeading: "5. O que quebra",
    breaksIntro: "O que está mal resolvido hoje, incluindo o que falha em silêncio.",
    breaks: [
      {
        title: "Tudo depende de um computador pessoal estar ligado",
        body: "As duas rotinas rodam no Windows através do WSL, disparadas pelo Agendador de Tarefas. Se a máquina dormir ou desligar, não acontece erro: simplesmente não aparecem linhas novas no log. A falha é silenciosa e só é descoberta por alguém que vá conferir o arquivo, o que ninguém faz todo dia.",
      },
      {
        title: "O código de saída 124 é rotina, não exceção",
        body: "Significa que a execução foi cortada pelo limite de tempo, nove minutos para os alertas e dez para os mercados, normalmente por rede lenta. A execução seguinte continua do estado salvo e nada é perdido, mas rede cronicamente lenta significa um sistema permanentemente atrasado, sem que isso apareça como problema em lugar nenhum.",
      },
      {
        title: "Os preços vêm de fonte pública, sem contrato",
        body: "Ação e ETF saem do gráfico público do Yahoo Finance, com cerca de quinze minutos de atraso, e cripto sai do dado público da Binance. Nenhum dos dois é uma API contratada: podem mudar o formato ou parar sem aviso, e não existe segunda fonte para comparar nem para assumir o lugar.",
      },
      {
        title: "Os books são CSV sem trava",
        body: "Os arquivos em data/live/ guardam os registros financeiros, e a instrução é não editar à mão enquanto uma execução está rodando. Não existe nada que impeça isso. Duas execuções sobrepostas, ou uma edição na hora errada, corrompem o histórico das operações sem aviso.",
      },
      {
        title: "Alertar em observação é um problema não resolvido",
        body: "O trap em BTC, ETH e SOL ficou acima da base nos dois períodos, mas sem operações suficientes para provar. Marcar como em observação é honesto, e ainda assim o sistema está enviando sinal que ele mesmo não consegue justificar.",
      },
      {
        title: "O período final está sendo consumido",
        body: "Ele começou em novembro de 2024 e cresce todo dia. Quanto mais tempo passa com os setups rodando e sendo observados nele, menos ele é um período separado e mais vira só mais um pedaço do dado em que as decisões foram tomadas.",
      },
      {
        title: "O book e o alerta não medem a mesma coisa",
        body: "O book registra entrada e saída por candle fechado, e o alerta intradiário dispara em preço ao vivo. Os dois não vão bater exatamente, e hoje essa diferença não é medida em lugar nenhum.",
      },
    ] as Break[],

    scaleHeading: "6. O que eu mudaria em 100x",
    scaleIntro:
      "Cenário: mil ativos em vez de 84, mais de uma pessoa usando, e estudos rodando a cada mudança em vez de na mão.",
    scaleSurvives: "O que sobrevive sem mudar nada",
    scaleSurvivesBody:
      "A disciplina. A comparação com a base e a separação em dois períodos não dependem de volume nem de infraestrutura: são regras. Elas valem igual com 84 ativos ou com mil, e são a parte do projeto que realmente importa.",
    scaleBreaks: "O que quebra primeiro",
    scaleBreaksBody:
      "A execução de hora em hora num computador só. Com mil ativos, baixar os dados e avaliar os setups não termina dentro da janela de nove minutos, e o código 124 deixa de ser exceção para virar o comportamento normal.",
    scaleChanges: "Na ordem em que eu mudaria",
    scaleList: [
      "Tirar o agendamento da máquina pessoal. Hoje o sistema inteiro para em silêncio quando um notebook dorme, e isso é um problema maior do que capacidade: falha silenciosa é pior do que falha lenta.",
      "Separar baixar dados de avaliar setup. Hoje uma execução faz as duas coisas dentro do mesmo limite de tempo. Com uma camada que baixa continuamente e um avaliador que lê o que já está local, a rede sai do caminho crítico.",
      "Trocar os CSV por banco, principalmente pela trava. Os books são registro financeiro sem nenhuma proteção de concorrência, e em qualquer volume duas execuções acabam se encontrando.",
      "Rodar os estudos automaticamente a cada mudança no tp-core. Hoje mexer numa regra compartilhada invalida em silêncio todo resultado publicado, e a única coisa que pega isso é alguém lembrar de rodar de novo.",
    ],

    footnote:
      "Esta página descreve o sistema como ele está hoje. Nenhuma ordem é executada, não existe chave de corretora, e toda operação registrada é de papel. Resultado de teste histórico não é promessa de resultado futuro.",
  },

  en: {
    back: "← Back to home",
    kicker: "Architecture",
    title: "trend-pullback",
    subtitle:
      "A trading research and alert tool. No setup can send an alert before it is tested on years of history and proves it beat the base.",

    problemHeading: "1. The problem",
    problem: [
      "Anyone can write a backtest that makes money. The problem is that a profitable backtest proves almost nothing, and there are two ways of fooling yourself that kill any trading tool.",
      "The first is tuning the setup until the history looks good. The result describes the past and does not survive the first month of real market.",
      "The second is harder to see: the setup makes money, but entering on any candle with the same stop and the same target would have made the same money. In that case the edge is in the risk management, not in the signal, and you spent months building a trigger that contributes nothing.",
      "The engineering problem is this: build a system designed to refuse its own setups, and let only what passes reach the phone.",
    ],

    numbersHeading: "2. The numbers",
    numbersNote:
      "All results come from the history tests, with costs charged on every trade. R is the risk of a trade: making 0.15R per trade means making 15% of what would have been lost if the stop had been hit.",
    numbers: [
      ["84", "US stocks and ETFs that can produce a trade"],
      ["146", "stocks and ETFs in the full study universe"],
      ["62", "Brazilian assets tested. None beat the base, none sends a signal"],
      ["2", "test periods: development until October 2024, final from November 2024 onwards"],
      ["+0.15R", "for the daily trap with the trend, in both periods. The base made +0.07R and then -0.06R"],
      ["+0.27R / +0.19R", "for the weekly trap. The base made +0.24R and +0.12R: it beat the base by a small margin"],
      ["3.6", "signals a week in total, less than one per trading day"],
      ["$2,200", "starting balance of each paper book, risking 2% per trade"],
      ["4", "alert stages, each sent at most once"],
      ["0", "exchange keys and real orders. Every trade is a paper trade"],
    ],

    designHeading: "3. The design",
    designIntro:
      "Two paths sharing the same rule code, with a gate between them. The study decides what is allowed to exist. The live alert only runs what the study approved.",
    designAfter:
      "tp-core holds the indicators and the rules, and both sides call it. That is what makes the test worth anything: if the backtest ran one piece of code and the alert ran another, the test would prove nothing about what actually fires on your phone.",

    verdictHeading: "The four possible verdicts",
    verdictIntro:
      "Every result line from the studies ends in a verdict. Only the first one lets a setup send alerts.",
    verdicts: [
      ["Won in both periods and beat the base", "Alerts are allowed. It is the only verdict that passes."],
      ["Positive without proof", "Above the base, but without enough trades to support it. Alerts marked as under observation, or dashboard only."],
      ["Did not beat the base", "The profit came from the stop and the target, not from the signal. Dashboard without signals."],
      ["Lost", "Stays off. It remains in the code and sends nothing."],
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
        title: "A setup has to beat the base, not just make money",
        chose:
          "Every setup is compared against entering on any candle with the same stop and the same target. If it does not beat that base, it does not alert.",
        over: "Accepting any setup with a positive result.",
        because:
          "A positive result can come entirely from the stop and the target, with the signal contributing nothing. Comparing against an arbitrary entry isolates what the trigger actually adds. Without that comparison you ship risk management dressed as a strategy and believe you found something.",
        price:
          "A setup that genuinely works by a small margin gets refused along with the noise. The weekly trap beat the base narrowly and only just survived.",
      },
      {
        title: "Two periods, and the second is never used for tuning",
        chose:
          "Development until October 2024. Final test from November 2024 onwards, with no tuning done while looking at it.",
        over: "A single backtest over all available history.",
        because:
          "Anything tuned on the same data it is tested on will look good. Holding back a period that was never looked at during development is the cheapest defence there is against fitting the past.",
        price:
          "Less data to develop on, and the final period shrinks on its own as it becomes the present. Eventually it has to be retired and a new one held back.",
      },
      {
        title: "The same code runs the study and the live alert",
        chose: "tp-core holds the indicators and the rules, and is called by both the backtest and the alert.",
        over: "A research script and a separate production implementation.",
        because:
          "If the backtest runs one piece of code and the alert runs another, the backtest says nothing about what actually fires. That is the most common way a trading tool lies to its own owner without anyone noticing.",
        price:
          "Changing tp-core changes the past and the present at the same time. Every edit invalidates published results and forces the studies to be re-run.",
      },
      {
        title: "Most setups were tested and turned off",
        chose:
          "Mechanical Smart Money on every chart, every sell on stocks and every day-trade setup on 15-minute and 1-hour charts lost in the tests and send nothing. Brazilian stocks did not beat the base and appear on the dashboard without signals.",
        over: "Shipping everything that was built.",
        because:
          "A tool that alerts on everything teaches you to ignore alerts. Once you learn to swipe the notification away, the good signal dies alongside the noise.",
        price:
          "A lot of built work produces no alerts at all. What the project shows on the outside is far smaller than the code behind it.",
      },
      {
        title: "Sent stages are recorded, so a message never repeats",
        chose:
          "The four stages, signal, entered, exited and expired, are recorded when sent. On the first run with a new book, trades already open are marked as seen with no message.",
        over: "Recomputing and sending on every run.",
        because:
          "The alert runs hourly over the same open positions. Without recording what has already gone out, the same signal arrives every hour until it expires, and a repeated alert is an ignored alert.",
        price:
          "State in files that has to survive between runs. And a position that was already running before the book existed produces no history in the feed.",
      },
      {
        title: "The alert reports what entering late costs",
        chose:
          "During the US session, when the price passes the trigger, the alert says how many whole shares to buy and how much the later entry changes the reward-to-risk ratio.",
        over: "Assuming the backtest fill.",
        because:
          "The test buys exactly at the trigger. In a real session, with a broker that only takes market and limit orders, you buy later and worse. Showing the new ratio at the moment of the alert keeps the gap between test and reality visible instead of hidden inside a nice number.",
        price:
          "It is extra work on the critical path, and it tells the person something uncomfortable at exactly the second they were about to act.",
      },
      {
        title: "No exchange keys, no orders, paper books only",
        chose: "The system executes nothing. Every recorded trade is a paper trade.",
        over: "Automating execution.",
        because:
          "The setups are still being proven. Connecting a key to a system whose edge is not established turns a research mistake into a money loss, and does it faster than you can notice.",
        price:
          "Every trade has to be placed by hand, and the book records what the rule says rather than what was actually filled.",
      },
    ] as Decision[],

    breaksHeading: "5. What breaks",
    breaksIntro: "What is unresolved today, including what fails silently.",
    breaks: [
      {
        title: "Everything depends on a personal computer being awake",
        body: "Both routines run on Windows through WSL, started by the Task Scheduler. If the machine sleeps or shuts down, no error happens: new lines simply stop appearing in the log. The failure is silent and is only found by someone who goes and checks the file, which nobody does every day.",
      },
      {
        title: "Exit code 124 is routine, not an exception",
        body: "It means the run was cut by the time limit, nine minutes for alerts and ten for markets, usually a slow network. The next run continues from saved state and nothing is lost, but a chronically slow network means a permanently late system, without that showing up as a problem anywhere.",
      },
      {
        title: "Prices come from public sources with no contract",
        body: "Stocks and ETFs come from Yahoo Finance's public chart data, about fifteen minutes delayed, and crypto comes from Binance's public data. Neither is a contracted API: they can change shape or stop without notice, and there is no second source to compare against or to take over.",
      },
      {
        title: "The books are CSV files with no lock",
        body: "The files in data/live/ hold the financial records, and the instruction is not to edit them by hand while a run is going. Nothing enforces it. Two overlapping runs, or an edit at the wrong moment, corrupt the trade history with no warning.",
      },
      {
        title: "Alerting under observation is an unresolved problem",
        body: "The trap on BTC, ETH and SOL stayed above the base in both periods, but without enough trades to prove it. Marking it as under observation is honest, and the system is still sending a signal it cannot itself justify.",
      },
      {
        title: "The held-out period is being consumed",
        body: "It began in November 2024 and grows every day. The longer the setups run and are watched inside it, the less it is a separate period and the more it becomes just another part of the data the decisions were made on.",
      },
      {
        title: "The book and the alert do not measure the same thing",
        body: "The book records entries and exits from closed candles, and the intraday alert fires on a live price. The two will not match exactly, and that difference is not measured anywhere today.",
      },
    ] as Break[],

    scaleHeading: "6. What I would change at 100x",
    scaleIntro:
      "Scenario: a thousand assets instead of 84, more than one person using it, and studies running on every change rather than by hand.",
    scaleSurvives: "What survives unchanged",
    scaleSurvivesBody:
      "The discipline. The base comparison and the split into two periods depend on neither volume nor infrastructure: they are rules. They hold the same with 84 assets or with a thousand, and they are the part of the project that actually matters.",
    scaleBreaks: "What breaks first",
    scaleBreaksBody:
      "The hourly run on a single computer. With a thousand assets, downloading the data and evaluating the setups does not finish inside the nine-minute window, and exit code 124 stops being an exception and becomes the normal behaviour.",
    scaleChanges: "In the order I would change them",
    scaleList: [
      "Get the schedule off the personal machine. Today the whole system stops silently when a laptop sleeps, and that is a bigger problem than capacity: a silent failure is worse than a slow one.",
      "Separate downloading data from evaluating setups. Today one run does both inside the same time limit. With a layer that downloads continuously and an evaluator that reads what is already local, the network leaves the critical path.",
      "Replace the CSV files with a database, mainly for the lock. The books are financial records with no concurrency protection, and at any volume two runs will eventually meet.",
      "Run the studies automatically on every change to tp-core. Today touching a shared rule silently invalidates every published result, and the only thing that catches it is someone remembering to re-run them.",
    ],

    footnote:
      "This page describes the system as it stands today. No orders are executed, there are no exchange keys, and every recorded trade is a paper trade. A historical test result is not a promise of future results.",
  },
} as const;

/* -------------------------------------------------------------------------- */

function Diagram({ locale }: { locale: "pt" | "en" }) {
  const t =
    locale === "pt"
      ? {
          laneStudy: "ESTUDO — RODADO À MÃO, DECIDE O QUE PODE EXISTIR",
          laneLive: "AO VIVO — DE HORA EM HORA, RODA SÓ O QUE PASSOU",
          history: "Histórico",
          historySub: "arquivos Binance, Yahoo",
          backtest: "Backtest",
          backtestSub: "dois períodos separados",
          base: "Comparação com a base",
          baseSub: "mesma entrada qualquer,\nmesmo stop e alvo",
          verdict: "Veredicto",
          verdictSub: "quatro resultados possíveis",
          core: "tp-core",
          coreSub: "indicadores e regras — o mesmo código nos dois lados",
          gate: "PORTÃO: só alerta o setup que ganhou nos dois períodos e ganhou da base",
          price: "Preço atual",
          priceSub: "Yahoo (15 min) · Binance",
          eval: "Avaliação",
          evalSub: "chama o tp-core",
          stages: "Estágios",
          stagesSub: "sinal · entrou · saiu · venceu\ncada um uma vez só",
          out: "Telegram, painel",
          outSub: "e book de papel",
        }
      : {
          laneStudy: "STUDY — RUN BY HAND, DECIDES WHAT MAY EXIST",
          laneLive: "LIVE — HOURLY, RUNS ONLY WHAT PASSED",
          history: "History",
          historySub: "Binance archives, Yahoo",
          backtest: "Backtest",
          backtestSub: "two separate periods",
          base: "Base comparison",
          baseSub: "any entry at all,\nsame stop and target",
          verdict: "Verdict",
          verdictSub: "four possible results",
          core: "tp-core",
          coreSub: "indicators and rules — the same code on both sides",
          gate: "GATE: only a setup that won in both periods and beat the base can alert",
          price: "Live price",
          priceSub: "Yahoo (15 min) · Binance",
          eval: "Evaluation",
          evalSub: "calls tp-core",
          stages: "Stages",
          stagesSub: "signal · entered · exited · expired\neach one only once",
          out: "Telegram, dashboard",
          outSub: "and paper book",
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
            y={y + 43 + i * 13}
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
    <line x1={x1} y1={y1} x2={x2} y2={y2} stroke="#000000" strokeWidth={3} markerEnd="url(#tp)" />
  );

  return (
    <div className="overflow-x-auto border-4 border-black bg-white">
      <svg viewBox="0 0 900 540" className="block min-w-[880px] w-full h-auto" role="img">
        <defs>
          <marker id="tp" markerWidth="10" markerHeight="10" refX="9" refY="5" orient="auto">
            <path d="M0,0 L10,5 L0,10 z" fill="#000000" />
          </marker>
        </defs>

        <text x={24} y={28} fontSize={12} fontWeight={900} fill="#000000" letterSpacing="1.2">
          {t.laneStudy}
        </text>
        <Box x={24} y={42} w={190} h={72} label={t.history} sub={t.historySub} />
        <A x1={216} y1={78} x2={244} y2={78} />
        <Box x={248} y={42} w={190} h={72} label={t.backtest} sub={t.backtestSub} />
        <A x1={440} y1={78} x2={468} y2={78} />
        <Box x={472} y={42} w={190} h={72} label={t.base} sub={t.baseSub} />
        <A x1={664} y1={78} x2={692} y2={78} />
        <Box x={696} y={42} w={180} h={72} label={t.verdict} sub={t.verdictSub} />

        <Box x={250} y={166} w={400} h={70} label={t.core} sub={t.coreSub} thick={6} />
        <line x1={450} y1={116} x2={450} y2={162} stroke="#000000" strokeWidth={2} strokeDasharray="7 5" />
        <line x1={450} y1={238} x2={450} y2={286} stroke="#000000" strokeWidth={2} strokeDasharray="7 5" />

        <line x1={786} y1={116} x2={786} y2={286} stroke="#000000" strokeWidth={3} />
        <A x1={786} y1={286} x2={786} y2={292} />

        <rect x={24} y={292} width={852} height={50} fill="#ffffff" stroke="#000000" strokeWidth={6} />
        <text x={450} y={322} textAnchor="middle" fontSize={14} fontWeight={900} fill="#000000">
          {t.gate}
        </text>

        <text x={24} y={378} fontSize={12} fontWeight={900} fill="#000000" letterSpacing="1.2">
          {t.laneLive}
        </text>
        <Box x={24} y={392} w={190} h={72} label={t.price} sub={t.priceSub} />
        <A x1={216} y1={428} x2={244} y2={428} />
        <Box x={248} y={392} w={190} h={72} label={t.eval} sub={t.evalSub} />
        <A x1={440} y1={428} x2={468} y2={428} />
        <Box x={472} y={392} w={190} h={72} label={t.stages} sub={t.stagesSub} />
        <A x1={664} y1={428} x2={692} y2={428} />
        <Box x={696} y={392} w={180} h={72} label={t.out} sub={t.outSub} />
      </svg>
    </div>
  );
}

/* -------------------------------------------------------------------------- */

export default function TrendPullbackArchitecturePage() {
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
          {c.verdictHeading}
        </h3>
        <p className="mt-3 text-base font-semibold leading-relaxed text-black">{c.verdictIntro}</p>
        <div className="mt-5 border-4 border-black">
          {c.verdicts.map(([verdict, meaning], i) => (
            <div
              key={i}
              className="grid grid-cols-1 border-b-4 border-black last:border-b-0 sm:grid-cols-[1fr_1.4fr]"
            >
              <div
                className={`border-b-4 border-black p-4 sm:border-b-0 sm:border-r-4 ${
                  i === 0 ? "border-l-[12px]" : ""
                }`}
              >
                <p className="text-base font-black leading-tight text-black">{verdict}</p>
              </div>
              <div className="p-4">
                <p className="text-base font-semibold leading-relaxed text-black">{meaning}</p>
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