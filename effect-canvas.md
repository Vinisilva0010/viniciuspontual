Quero criar uma animação visual premium para uma seção do meu site usando Canvas 2D nativo, sem imagens, sem SVG externo, sem vídeo, sem Lottie e sem Three.js.

Tecnologia do projeto:
- Next.js com App Router
- TypeScript
- Tailwind CSS

Objetivo visual:
- Criar: [DESCREVA O OBJETO/SÍMBOLO/ILUSTRAÇÃO]
- Estilo: [ex.: crypto futurista, minimalista, doodle, vidro, neon, escuro, elegante]
- Cores: [CORES]
- Fundo: [DESCREVA O FUNDO]
- Deve parecer 3D, mas ser um falso 3D leve feito com Canvas 2D.
- Não use modelos 3D, WebGL, Three.js, imagens externas, SVG externo, vídeos ou bibliotecas de animação.

Interações:
- O elemento começa [pequeno / deslocado / invisível] e muda conforme o scroll.
- Conforme a seção entra na tela, ele deve [crescer / girar / centralizar / mudar de posição].
- Deve possuir uma flutuação sutil contínua.
- No desktop, o ponteiro deve inclinar o objeto levemente, criando sensação de profundidade.
- No celular, o efeito deve continuar funcionando sem precisar de hover.
- A animação deve ser suave, profissional e discreta; não pode parecer efeito genérico exagerado.

Regras técnicas obrigatórias:
- Crie um componente reutilizável em:
  components/[NOME-DO-COMPONENTE].tsx
- O arquivo deve começar com "use client".
- Use <canvas> e useRef.
- Use useEffect para inicializar e limpar tudo.
- Use requestAnimationFrame para o loop de animação.
- Cancele corretamente o requestAnimationFrame no cleanup do useEffect.
- Use addEventListener com { passive: true } no scroll e remova os listeners no cleanup.
- Respeite devicePixelRatio, limitado a 2, para ficar nítido em telas retina sem gastar demais.
- Deixe o canvas responsivo usando ResizeObserver ou cálculo baseado no tamanho do container.
- Pause ou reduza a animação quando document.visibilityState for "hidden".
- Respeite prefers-reduced-motion: se o usuário tiver animações reduzidas ativadas, mantenha o objeto parado ou com animação mínima.
- Não use setInterval.
- Evite redesenhar dados desnecessários a cada frame.
- Use poucas formas e gradientes simples para manter alto desempenho.
- Desenhe o objeto apenas por código com CanvasRenderingContext2D:
  arc(), lineTo(), bezierCurveTo(), fill(), stroke(), fillRect(), roundRect(), gradients e transform().
- Para criar profundidade, desenhe camadas do mesmo objeto com pequenos offsets em tons mais escuros.
- Para criar brilho, use gradiente linear/radial com alpha baixo.
- Para criar sombra, use radialGradient ou uma elipse com baixa opacidade.
- Para efeito 3D falso, use ctx.translate(), ctx.rotate(), ctx.scale() e ctx.transform().
- Para o recorte interno do desenho, use Path2D, ctx.clip() ou ctx.fill(path, "evenodd") quando necessário.
- Use TypeScript sem any.
- Não invente dependências nem peça para instalar bibliotecas.

Integração:
- Mostre exatamente como importar o componente no app/page.tsx.
- O componente deve aceitar:
  className?: string
  e opcionalmente variantes simples como color, label ou intensidade.
- Ele deve se encaixar bem dentro de uma hero ou section com Tailwind.

Formato da resposta:
1. Explique em no máximo 5 linhas como a animação será construída.
2. Entregue o arquivo completo components/[NOME-DO-COMPONENTE].tsx.
3. Entregue o trecho completo para usar no app/page.tsx.
4. Diga em uma linha quais valores editar para mudar cor, tamanho, velocidade, profundidade e comportamento do scroll.
5. Não entregue código incompleto, pseudocódigo, explicação longa ou várias alternativas. Quero código pronto para copiar e colar.