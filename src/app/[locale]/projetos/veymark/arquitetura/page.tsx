"use client";

import Link from "next/link";
import { useLocale } from "next-intl";

/* ---------------------------------------------------------------------------
   Veymark — system design page.
   Both languages inline so the page stays a single file.
--------------------------------------------------------------------------- */

type Decision = { title: string; chose: string; over: string; because: string; price: string };
type Break = { title: string; body: string };

const COPY = {
  pt: {
    back: "← Voltar ao início",
    kicker: "Arquitetura",
    title: "Veymark",
    subtitle:
      "Prova física que não pode ser copiada. Um chip criptográfico em cada peça, mais um passaporte digital mintado por unidade na Solana.",
    liveLabel: "Ver o site",

    problemHeading: "1. O problema",
    problem: [
      "Toda medida antifalsificação em uso comum hoje, QR code, número de série, holograma, é derrotada com uma câmera e uma impressora. Fotografa a etiqueta, reimprime, cola na peça falsa. A verificação passa porque o código é idêntico.",
      "Produto falsificado responde por 467 bilhões de dólares do comércio mundial. Só em autopeças, a Europa perde mais de 4 bilhões de euros por ano, e os itens mais falsificados são lâmpada, rolamento e amortecedor: componente de segurança, onde a falha custa mais do que margem.",
      "O que o sistema promete, e o limite que ele declara: não afirmamos que isso é impossível de falsificar, e nunca vamos afirmar. Qualquer tela de verificação pode ser clonada, inclusive a nossa. O que o Veymark tira é o ataque fácil. O que sobra é montar um ecossistema falso paralelo, com etiqueta própria, site próprio e distribuição própria, que é caro, rastreável e processável.",
    ],

    numbersHeading: "2. Os números",
    numbersNote:
      "Contados no repositório. A maior parte dos testes são casos de rejeição, não de caminho feliz.",
    numbers: [
      ["61", "testes, a maioria casos de rejeição"],
      ["14", "testes só da criptografia SUN do chip"],
      ["17", "testes de conjunto lacrado"],
      ["12", "testes de declaração de slot no catálogo"],
      ["11", "testes do programa on-chain em Anchor"],
      ["7", "testes de validação da posição do selo"],
      ["10", "migrations"],
      ["3", "provas independentes, cada uma falhando sozinha"],
      ["3", "estados de verificação, e o segundo é decisão de produto"],
      ["AES-128", "mais CMAC truncado, por toque, com contador de leitura"],
    ],

    addressesHeading: "Implantação em devnet",
    addressesNote:
      "O Solscan não indexa NFT comprimido em devnet. Para inspecionar os passaportes é preciso usar a DAS API ou um explorador com suporte a DAS.",
    addresses: [
      ["Programa", "9tCeoRVp4MRZTM6hxtJp2Nd797i1Mf2JbwLgXE6JFZcp"],
      ["Árvore Merkle", "3uvL6ntvFq1iqBoNnEjPymcD6TQP1suTqjQFy7sam9hk"],
      ["Primeiro passaporte", "E3FMgTHkTQQCPpswhxZ712o7Sr5T6H1g41ypvJvTrK8d"],
    ],

    designHeading: "3. O desenho",
    designIntro:
      "Três provas independentes. Nenhuma delas sozinha é a defesa, e cada uma falha por conta própria, sem derrubar as outras.",
    designAfter:
      "A primeira prova nem chega ao servidor: a assinatura de fábrica do chip NXP é verificada no próprio telefone. A segunda é criptografia real no backend, com rejeição de repetição pelo contador. A terceira é a única que não depende da nossa infraestrutura: o passaporte está na Solana e qualquer pessoa confere contra a carteira pública do fabricante.",
    designNote:
      "A verificação não pede aplicativo, carteira nem conta. A etiqueta abre uma URL no navegador e a resposta aparece.",

    sealHeading: "O caso difícil: peça lacrada",
    sealBody: [
      "Uma etiqueta numa bateria prova a carcaça. Ela não diz nada sobre as células lá dentro, então uma oficina consegue abrir, trocar o miolo e fechar de novo com a etiqueta ainda respondendo como autêntica.",
      "Duas coisas respondem a isso. A etiqueta é aplicada atravessando a abertura, então abrir a carcaça rasga a antena e a peça para de responder. A posição é registrada, porque uma peça lacrada atravessando a abertura mas registrada como etiqueta de superfície diria ao comprador que uma antena rasgada não prova nada. Posição não reconhecida é recusada em vez de assumida.",
      "E os componentes de dentro carregam etiqueta própria, registrada como pertencente àquela carcaça. Um produto declara o que pertence a ele e qual produto preenche cada slot, então acoplar a peça errada é recusado em vez de registrado. Um slot não pode ser removido depois que peças reais foram registradas nele: isso apagaria o registro do que existe dentro de carcaças já enviadas.",
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
        title: "Três provas independentes em vez de uma verificação forte",
        chose:
          "Prova de silício no telefone, prova de toque com criptografia no backend, e prova aberta na blockchain. Cada uma falha sozinha.",
        over: "Uma única verificação bem feita.",
        because:
          "Defesa que depende de um mecanismo cai inteira quando esse mecanismo cai. Com três camadas independentes, derrubar uma não entrega o sistema, e o atacante precisa resolver três problemas de natureza diferente ao mesmo tempo.",
        price:
          "Três sistemas para manter, três superfícies de falha, e mais coisa para explicar a quem só quer saber se a peça é original.",
      },
      {
        title: "NFT comprimido na Solana, e é por isso que é Solana",
        chose: "Um passaporte por unidade, mintado como NFT comprimido com Metaplex Bubblegum.",
        over: "Registro só em banco, NFT comum, ou outra rede.",
        because:
          "Passaporte por unidade individual só fecha a conta onde mintar custa perto de nada. Na maior parte das redes, o custo de emissão sozinho restringe isso a produto de luxo. A escolha da rede aqui não é preferência, é o que torna o modelo possível.",
        price:
          "NFT comprimido precisa da DAS API para ser lido, e o Solscan nem indexa em devnet. A promessa de que qualquer um confere depende de ferramenta que nem todo mundo tem.",
      },
      {
        title: "O segundo estado é \"não foi possível verificar\", nunca \"falsificado\"",
        chose: "Três estados: autêntico, não foi possível verificar, e padrão incomum.",
        over: "Dois estados, autêntico ou falso.",
        because:
          "Etiqueta danificada e etiqueta falsa são indistinguíveis para software. Acusar um comprador legítimo é uma falha pior do que admitir incerteza, porque destrói a confiança no sistema inteiro e cria um problema que a empresa não consegue desfazer.",
        price:
          "A resposta que a pessoa mais quer, se a peça é falsa, é justamente a que o produto se recusa a dar.",
      },
      {
        title: "Posição do selo não reconhecida é recusada, não assumida",
        chose: "Se a posição registrada não for reconhecida, a peça não entra no sistema.",
        over: "Assumir um valor padrão razoável.",
        because:
          "Uma peça lacrada atravessando a abertura mas registrada como superfície diria ao comprador que uma antena rasgada não prova nada. Um padrão errado aqui não gera erro visível, gera resposta confiante e errada, que é o pior resultado possível.",
        price:
          "O provisionamento falha mais vezes, e quem aplica a etiqueta precisa registrar a posição certa ou a peça simplesmente não entra.",
      },
      {
        title: "Slot não pode ser removido depois que peças reais foram registradas",
        chose: "O catálogo aceita adicionar, e recusa remover slot que já tem peça real dentro.",
        over: "Deixar o catálogo ser editado livremente.",
        because:
          "Remover apagaria o registro do que existe dentro de carcaças já enviadas, que estão no mundo e não podem ser corrigidas. O catálogo aqui não descreve uma ideia, descreve objeto físico que já saiu da fábrica.",
        price:
          "O catálogo acumula slot que pode ficar obsoleto, e um erro de modelagem vira permanente.",
      },
      {
        title: "Chave de etiqueta cifrada em repouso",
        chose:
          "As chaves são cifradas com uma chave mestra de 32 bytes, então um dump do banco sozinho não forja toque.",
        over: "Guardar a chave da etiqueta direto na tabela.",
        because:
          "Vazamento de banco é o incidente mais comum que existe. Se a chave estiver em claro, quem levou o dump passa a emitir toques válidos para sempre, e nenhuma das outras camadas percebe.",
        price:
          "A chave mestra vira ponto único de falha. Perder ela significa que nenhuma etiqueta existente pode mais ser verificada.",
      },
      {
        title: "Simulador de etiqueta em vez de esperar o hardware, com o limite declarado",
        chose:
          "Um simulador gera os mesmos payloads que uma etiqueta real emite: mesmo AES-128, mesmo layout de PICCData, mesmo contador incremental. O backend faz validação criptográfica real, verificação de CMAC real e rejeição de repetição real.",
        over: "Ou responder com mock, ou travar o projeto até as etiquetas chegarem.",
        because:
          "A criptografia pode ser construída e provada correta antes de existir silício. Mock de resposta não provaria nada: só o simulador do lado da geração permite exercitar o caminho real de verificação.",
        price:
          "O layout de bytes não foi validado contra chip físico. A implementação segue a nota de aplicação AN12196 da NXP, e o teste prova que geração e verificação concordam entre si, não que qualquer uma das duas bate com um chip real. Quando o hardware entrar, só o lado da geração é substituído.",
      },
    ] as Decision[],

    breaksHeading: "5. O que quebra",
    breaksIntro:
      "O próprio README declara que nada foi lançado e que as etiquetas são simuladas. O que segue é o que ainda não está resolvido.",
    breaks: [
      {
        title: "O layout de bytes não foi conferido contra silício real",
        body: "Esse é o maior buraco e está declarado no README. A suíte prova que geração e verificação concordam uma com a outra, e prova que chave errada, assinatura forjada e payload adulterado são rejeitados. Não prova que o formato bate com o que um NTAG 424 DNA realmente emite. Só a primeira etiqueta física responde isso.",
      },
      {
        title: "A tela de verificação pode ser clonada",
        body: "Uma etiqueta falsa apontando para um site falso mostra autêntico. A única defesa é o registro on-chain, que não depende da infraestrutura do Veymark, e ela só funciona se o comprador realmente for conferir. A maioria não vai.",
      },
      {
        title: "A chave mestra é ponto único de falha",
        body: "Ela protege contra dump de banco, e concentra todo o risco em um lugar. Não existe rotação, não existe custódia dividida, e perder a chave invalida a verificação de toda etiqueta já emitida.",
      },
      {
        title: "Padrão incomum precisa de volume para existir",
        body: "Detectar a mesma peça aparecendo em lugares distantes com minutos de diferença depende de haver leitura suficiente. No começo, com poucas leituras, esse sinal simplesmente não existe, e o estado de padrão incomum fica inerte justamente no período em que o sistema é mais frágil.",
      },
      {
        title: "A posição do selo depende de quem aplica",
        body: "O sistema recusa posição não reconhecida, e não tem como detectar uma etiqueta registrada como atravessando a abertura que na prática foi colada na superfície. A garantia da peça lacrada depende de um processo humano na linha de produção.",
      },
      {
        title: "A leitura on-chain depende da DAS",
        body: "NFT comprimido não é lido por explorador comum. Se o provedor de DAS cair ou mudar, o caminho do confira você mesmo quebra para a maior parte das pessoas, e sobra só a palavra do Veymark, que é exatamente o que o projeto existe para não exigir.",
      },
    ] as Break[],

    scaleHeading: "6. O que eu mudaria em 100x",
    scaleIntro:
      "Cenário: milhões de peças etiquetadas, vários fabricantes na mesma instalação e pico de milhares de leituras por segundo.",
    scaleSurvives: "O que sobrevive sem mudar nada",
    scaleSurvivesBody:
      "As três provas. A verificação de silício acontece no telefone e não encosta no servidor, então ela escala sozinha. E o passaporte por unidade continua viável porque mintar comprimido já foi escolhido pensando em custo, não em volume pequeno.",
    scaleBreaks: "O que quebra primeiro",
    scaleBreaksBody:
      "A emissão. Um NFT por unidade significa que uma linha produzindo 10 mil peças por hora precisa de 10 mil mints por hora, e uma árvore Merkle tem profundidade fixa. A capacidade da árvore acaba antes de qualquer outra coisa dar problema.",
    scaleChanges: "Na ordem em que eu mudaria",
    scaleList: [
      "Emissão em lote e várias árvores Merkle, uma por fabricante ou por lote de produção, para a capacidade ser planejada em vez de descoberta no dia em que a árvore enche.",
      "Separar o caminho quente da leitura. Cada toque escreve o contador, então escrita por etiqueta é inevitável, mas ela fragmenta naturalmente por identificador de etiqueta. A leitura do passaporte passa a sair de uma cópia indexada, com a blockchain continuando como fonte da verdade e como caminho do confira você mesmo.",
      "Tirar a DAS do caminho comum e deixar ela só no caminho de auditoria. Quem quer conferir sozinho continua indo na origem; quem só quer a resposta recebe da cópia, com o registro on-chain exibido junto para quem quiser seguir.",
      "Tratar padrão incomum como problema de fluxo, não de consulta. A mesma peça aparecendo em lugares distantes em minutos exige janela de tempo e espaço sobre milhões de leituras, o que não é consulta que se roda a cada requisição. Isso vira processamento contínuo, com o resultado gravado antes de alguém perguntar.",
    ],

    footnote:
      "Esta página descreve o sistema como ele está hoje. Nada foi lançado, tudo roda em devnet e as etiquetas são simuladas. As etiquetas físicas foram localizadas e nenhuma foi encomendada.",
  },

  en: {
    back: "← Back to home",
    kicker: "Architecture",
    title: "Veymark",
    subtitle:
      "Physical proof that cannot be copied. A cryptographic chip on each part, plus a digital passport minted per unit on Solana.",
    liveLabel: "Visit the site",

    problemHeading: "1. The problem",
    problem: [
      "Every anti-counterfeit measure in common use today, QR codes, serial numbers, holograms, is defeated with a camera and a printer. Photograph the label, reprint it, apply it to the counterfeit. Verification passes because the code is identical.",
      "Counterfeit goods account for USD 467 billion of world trade. In auto parts alone, Europe loses over EUR 4 billion a year, and the most counterfeited items are bulbs, bearings and shock absorbers: safety components, where a failure costs more than a margin.",
      "What the system promises, and the limit it states: we do not claim this is impossible to fake, and we never will. Any verification screen can be cloned, including ours. What Veymark removes is the easy attack. What remains is building a parallel fake ecosystem, with its own tags, its own site and its own distribution, which is expensive, traceable and prosecutable.",
    ],

    numbersHeading: "2. The numbers",
    numbersNote:
      "Counted in the repository. Most of the tests are rejection cases, not happy paths.",
    numbers: [
      ["61", "tests, most of them rejection cases"],
      ["14", "tests for the SUN tag cryptography alone"],
      ["17", "tests for sealed assemblies"],
      ["12", "tests for catalog slot declarations"],
      ["11", "tests for the on-chain Anchor program"],
      ["7", "tests for seal position validation"],
      ["10", "migrations"],
      ["3", "independent proofs, each failing on its own"],
      ["3", "verification states, and the second one is a product decision"],
      ["AES-128", "plus a truncated CMAC, per tap, with a read counter"],
    ],

    addressesHeading: "Devnet deployment",
    addressesNote:
      "Solscan does not index compressed NFTs on devnet. Inspecting passports requires the DAS API or an explorer with DAS support.",
    addresses: [
      ["Program", "9tCeoRVp4MRZTM6hxtJp2Nd797i1Mf2JbwLgXE6JFZcp"],
      ["Merkle tree", "3uvL6ntvFq1iqBoNnEjPymcD6TQP1suTqjQFy7sam9hk"],
      ["First passport", "E3FMgTHkTQQCPpswhxZ712o7Sr5T6H1g41ypvJvTrK8d"],
    ],

    designHeading: "3. The design",
    designIntro:
      "Three independent proofs. None of them is the defence on its own, and each one fails independently without taking the others down.",
    designAfter:
      "The first proof never reaches the server: the NXP chip's factory signature is verified on the phone itself. The second is real cryptography in the backend, with replay rejected by the counter. The third is the only one that does not depend on our infrastructure: the passport is on Solana and anyone can check it against the manufacturer's public wallet.",
    designNote:
      "Verification needs no app, no wallet and no account. The tag opens a URL in the browser and the answer appears.",

    sealHeading: "The hard case: sealed parts",
    sealBody: [
      "A tag on a battery proves the case. It says nothing about the cells inside, so a workshop can open it, swap the internals and close it again with the tag still reading as authentic.",
      "Two things answer that. The tag is applied across the opening, so opening the case tears the antenna and the part stops answering. The position is recorded, because a part sealed across the opening but recorded as a surface tag would tell the buyer that a torn antenna proves nothing. An unrecognised position is refused rather than assumed.",
      "And the components inside carry their own tags, recorded as belonging to that case. A product declares what belongs inside it and which product fills each slot, so attaching the wrong part is refused rather than recorded. A slot cannot be removed once real parts are recorded in it: that would erase the record of what is inside cases already shipped.",
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
        title: "Three independent proofs instead of one strong check",
        chose:
          "Proof of silicon on the phone, proof of touch with cryptography in the backend, and proof in the open on-chain. Each one fails on its own.",
        over: "A single well-built verification.",
        because:
          "A defence that depends on one mechanism falls entirely when that mechanism falls. With three independent layers, breaking one does not hand over the system, and an attacker has to solve three problems of different natures at once.",
        price:
          "Three systems to maintain, three failure surfaces, and more to explain to someone who only wants to know whether the part is genuine.",
      },
      {
        title: "Compressed NFTs on Solana, and that is why it is Solana",
        chose: "One passport per unit, minted as a compressed NFT with Metaplex Bubblegum.",
        over: "A database record, a regular NFT, or another network.",
        because:
          "A passport per individual unit only adds up where minting costs close to nothing. On most networks the issuance cost alone restricts this to luxury goods. The choice of network here is not a preference, it is what makes the model possible at all.",
        price:
          "Compressed NFTs need the DAS API to be read, and Solscan does not even index them on devnet. The promise that anyone can check depends on tooling not everyone has.",
      },
      {
        title: 'The second state is "could not verify", never "counterfeit"',
        chose: "Three states: authentic, could not verify, and unusual pattern.",
        over: "Two states, genuine or fake.",
        because:
          "A damaged tag and a fake tag are indistinguishable to software. Accusing a legitimate buyer is a worse failure than admitting uncertainty, because it destroys trust in the whole system and creates a problem the company cannot undo.",
        price:
          "The answer people most want, whether the part is fake, is exactly the one the product refuses to give.",
      },
      {
        title: "An unrecognised seal position is refused, not assumed",
        chose: "If the recorded position is not recognised, the part does not enter the system.",
        over: "Falling back to a sensible default.",
        because:
          "A part sealed across the opening but recorded as a surface tag would tell the buyer that a torn antenna proves nothing. A wrong default here does not produce a visible error, it produces a confident wrong answer, which is the worst possible outcome.",
        price:
          "Provisioning fails more often, and whoever applies the tag has to record the right position or the part simply does not enter.",
      },
      {
        title: "A slot cannot be removed once real parts are recorded in it",
        chose: "The catalog accepts additions and refuses to remove a slot that already holds a real part.",
        over: "Letting the catalog be edited freely.",
        because:
          "Removing it would erase the record of what is inside cases already shipped, which are out in the world and cannot be corrected. The catalog here does not describe an idea, it describes physical objects that already left the factory.",
        price:
          "The catalog accumulates slots that may become obsolete, and a modelling mistake becomes permanent.",
      },
      {
        title: "Tag keys encrypted at rest",
        chose:
          "Keys are encrypted with a 32-byte master key, so a database dump alone cannot forge taps.",
        over: "Storing the tag key directly in the table.",
        because:
          "A database leak is the most common incident there is. With the key in the clear, whoever took the dump can issue valid taps forever, and none of the other layers would notice.",
        price:
          "The master key becomes a single point of failure. Losing it means no existing tag can be verified again.",
      },
      {
        title: "A tag simulator instead of waiting for hardware, with the limit stated",
        chose:
          "A simulator generates the same payloads a real tag emits: same AES-128, same PICCData layout, same incrementing counter. The backend performs real cryptographic validation, real CMAC verification and real replay rejection.",
        over: "Either returning a mock response, or blocking the project until tags arrive.",
        because:
          "The cryptography can be built and proven correct before any silicon exists. A mocked response would prove nothing: only simulating the generation side exercises the real verification path.",
        price:
          "The byte layout has not been validated against physical silicon. The implementation follows NXP application note AN12196, and the tests prove that generation and verification agree with each other, not that either matches a real chip. When hardware arrives, only the generation side is replaced.",
      },
    ] as Decision[],

    breaksHeading: "5. What breaks",
    breaksIntro:
      "The README itself states that nothing has shipped and that tags are simulated. What follows is what is still unresolved.",
    breaks: [
      {
        title: "The byte layout has not been checked against real silicon",
        body: "This is the biggest gap and it is stated in the README. The suite proves that generation and verification agree with each other, and proves that wrong keys, forged signatures and tampered payloads are rejected. It does not prove the format matches what an NTAG 424 DNA actually emits. Only the first physical tag answers that.",
      },
      {
        title: "The verification screen can be cloned",
        body: "A fake tag pointing at a fake site will show authentic. The only defence is the on-chain record, which does not depend on Veymark's infrastructure, and it only works if the buyer actually goes and checks. Most will not.",
      },
      {
        title: "The master key is a single point of failure",
        body: "It protects against a database dump, and it concentrates all the risk in one place. There is no rotation, no split custody, and losing the key invalidates verification for every tag ever issued.",
      },
      {
        title: "Unusual pattern needs volume to exist at all",
        body: "Detecting the same part appearing in distant places minutes apart depends on there being enough taps. Early on, with few reads, that signal simply does not exist, and the unusual-pattern state is inert precisely when the system is most fragile.",
      },
      {
        title: "Seal position depends on whoever applies the tag",
        body: "The system refuses an unrecognised position, and has no way to detect a tag recorded as crossing the opening that was in practice stuck on the surface. The sealed-part guarantee rests on a human process on the production line.",
      },
      {
        title: "Reading on-chain depends on DAS",
        body: "Compressed NFTs are not readable by ordinary explorers. If the DAS provider goes down or changes, the check-it-yourself path breaks for most people, and all that is left is Veymark's word, which is exactly what the project exists to avoid requiring.",
      },
    ] as Break[],

    scaleHeading: "6. What I would change at 100x",
    scaleIntro:
      "Scenario: millions of tagged parts, several manufacturers in the same installation, and peaks of thousands of taps per second.",
    scaleSurvives: "What survives unchanged",
    scaleSurvivesBody:
      "The three proofs. Silicon verification happens on the phone and never touches the server, so it scales on its own. And one passport per unit stays viable because compressed minting was chosen for cost in the first place, not for small volume.",
    scaleBreaks: "What breaks first",
    scaleBreaksBody:
      "Issuance. One NFT per unit means a line producing 10,000 parts an hour needs 10,000 mints an hour, and a Merkle tree has a fixed depth. Tree capacity runs out before anything else goes wrong.",
    scaleChanges: "In the order I would change them",
    scaleList: [
      "Batch minting and multiple Merkle trees, one per manufacturer or per production batch, so capacity is planned rather than discovered on the day a tree fills up.",
      "Split the hot read path. Every tap writes the counter, so a write per tag is unavoidable, but it shards naturally by tag identifier. Passport reads move to an indexed copy, with the chain still the source of truth and still the check-it-yourself path.",
      "Take DAS out of the common path and keep it for the audit path. Anyone who wants to verify independently still goes to the source; anyone who just wants the answer gets it from the copy, with the on-chain record shown alongside for whoever wants to follow it.",
      "Treat unusual pattern as a stream problem, not a query. The same part appearing in distant places within minutes needs time and space windowing over millions of reads, which is not something you run per request. That becomes continuous processing, with the result written before anyone asks.",
    ],

    footnote:
      "This page describes the system as it stands today. Nothing has shipped, everything runs on devnet and the tags are simulated. The physical tags have been sourced and none have been ordered.",
  },
} as const;

/* -------------------------------------------------------------------------- */

function Diagram({ locale }: { locale: "pt" | "en" }) {
  const t =
    locale === "pt"
      ? {
          tag: "Etiqueta NTAG 424 DNA",
          tagSub: "toque",
          phone: "Navegador no celular",
          phoneSub: "sem app, sem carteira, sem conta",
          p1: "1. Prova de silício",
          p1Sub: "assinatura de fábrica NXP\nverificada no telefone, sem servidor",
          p2: "2. Prova de toque",
          p2Sub: "SUN: UID e contador, AES-128\nCMAC truncado, repetição rejeitada",
          p3: "3. Prova em aberto",
          p3Sub: "passaporte cNFT na Solana\nconferível sem confiar em nós",
          s1: "Autêntico",
          s1Sub: "criptografia validada",
          s2: "Não foi possível verificar",
          s2Sub: "nunca \"falsificado\"",
          s3: "Padrão incomum",
          s3Sub: "criptografia passou,\ncomportamento não",
        }
      : {
          tag: "NTAG 424 DNA tag",
          tagSub: "tap",
          phone: "Browser on the phone",
          phoneSub: "no app, no wallet, no account",
          p1: "1. Proof of silicon",
          p1Sub: "NXP factory signature\nverified on the phone, no server",
          p2: "2. Proof of touch",
          p2Sub: "SUN: UID and counter, AES-128\ntruncated CMAC, replay rejected",
          p3: "3. Proof in the open",
          p3Sub: "cNFT passport on Solana\ncheckable without trusting us",
          s1: "Authentic",
          s1Sub: "cryptography validated",
          s2: "Could not verify",
          s2Sub: 'never "counterfeit"',
          s3: "Unusual pattern",
          s3Sub: "cryptography passed,\nbehaviour did not",
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
          y={lines.length ? y + 26 : y + h / 2 + 5}
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
            y={y + 46 + i * 14}
            textAnchor="middle"
            fontSize={11}
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
    <line x1={x1} y1={y1} x2={x2} y2={y2} stroke="#000000" strokeWidth={3} markerEnd="url(#vm)" />
  );

  return (
    <div className="overflow-x-auto border-4 border-black bg-white">
      <svg viewBox="0 0 900 570" className="block min-w-[880px] w-full h-auto" role="img">
        <defs>
          <marker id="vm" markerWidth="10" markerHeight="10" refX="9" refY="5" orient="auto">
            <path d="M0,0 L10,5 L0,10 z" fill="#000000" />
          </marker>
        </defs>

        <Box x={330} y={24} w={240} h={54} label={t.tag} sub={t.tagSub} />
        <A x1={450} y1={80} x2={450} y2={116} />
        <Box x={300} y={120} w={300} h={66} label={t.phone} sub={t.phoneSub} />

        <line x1={450} y1={188} x2={450} y2={212} stroke="#000000" strokeWidth={3} />
        <line x1={160} y1={212} x2={740} y2={212} stroke="#000000" strokeWidth={3} />
        <A x1={160} y1={212} x2={160} y2={246} />
        <A x1={450} y1={212} x2={450} y2={246} />
        <A x1={740} y1={212} x2={740} y2={246} />

        <Box x={24} y={250} w={272} h={92} label={t.p1} sub={t.p1Sub} />
        <Box x={314} y={250} w={272} h={92} label={t.p2} sub={t.p2Sub} />
        <Box x={604} y={250} w={272} h={92} label={t.p3} sub={t.p3Sub} />

        <line x1={160} y1={344} x2={160} y2={386} stroke="#000000" strokeWidth={3} />
        <line x1={450} y1={344} x2={450} y2={386} stroke="#000000" strokeWidth={3} />
        <line x1={740} y1={344} x2={740} y2={386} stroke="#000000" strokeWidth={3} />
        <line x1={160} y1={386} x2={740} y2={386} stroke="#000000" strokeWidth={3} />
        <A x1={160} y1={386} x2={160} y2={430} />
        <A x1={450} y1={386} x2={450} y2={430} />
        <A x1={740} y1={386} x2={740} y2={430} />

        <Box x={24} y={434} w={272} h={84} label={t.s1} sub={t.s1Sub} />
        <Box x={314} y={434} w={272} h={84} label={t.s2} sub={t.s2Sub} thick={6} />
        <Box x={604} y={434} w={272} h={84} label={t.s3} sub={t.s3Sub} />
      </svg>
    </div>
  );
}

/* -------------------------------------------------------------------------- */

export default function VeymarkArchitecturePage() {
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
            href="https://veymark.xyz"
            target="_blank"
            rel="noopener noreferrer"
            className="text-base font-black uppercase text-black underline decoration-2 hover:opacity-80"
          >
            {c.liveLabel}
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

        <h3 className="mt-8 text-base font-black uppercase tracking-wide text-black">
          {c.addressesHeading}
        </h3>
        <div className="mt-3 border-4 border-black">
          {c.addresses.map(([label, addr], i) => (
            <div key={i} className="border-b-4 border-black p-4 last:border-b-0">
              <p className="text-xs font-black uppercase tracking-widest text-black">{label}</p>
              <p className="mt-1 break-all font-mono text-sm font-bold text-black">{addr}</p>
            </div>
          ))}
        </div>
        <p className="mt-3 text-sm font-semibold leading-relaxed text-black">{c.addressesNote}</p>
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
        <p className="mt-4 border-l-8 border-black pl-5 text-base font-semibold leading-relaxed text-black">
          {c.designNote}
        </p>

        <h3 className="mt-10 text-xl font-black uppercase tracking-wide text-black sm:text-2xl">
          {c.sealHeading}
        </h3>
        <div className="mt-4 space-y-4">
          {c.sealBody.map((p, i) => (
            <p key={i} className="text-base font-semibold leading-relaxed text-black">
              {p}
            </p>
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