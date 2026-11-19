import type { SoulieAction, SoulieInitialIntents, SoulieInteraction, SoulieIntent } from './soulie.types'

const disclaimer = 'Demonstração com respostas prontas e dados simulados.'

const resetAction = { kind: 'panel', label: 'Voltar às opções', command: 'reset' } as const
const closeAction = { kind: 'panel', label: 'Agora não', command: 'close' } as const

type InteractionCopy = {
  greeting: string
  summary: string
  mood: SoulieInteraction['mood']
  intents: SoulieInitialIntents
  reason: string
}

function intent(id: string, label: string, response: string, mood: SoulieIntent['mood'], action?: SoulieAction): SoulieIntent {
  return { id, label, response, mood, action }
}

function interaction(copy: InteractionCopy): SoulieInteraction {
  return {
    greeting: copy.greeting,
    summary: copy.summary,
    mood: copy.mood,
    hasActionableRecommendation: true,
    intents: copy.intents,
    reasonIntent: intent('recommendation-reason', 'Por que esta sugestão?', copy.reason, 'thinking'),
    resetAction,
    closeAction,
    disclaimer,
  }
}

export function feedAllMissionsInteraction(input: {
  points: number
  streakDays: number
  communityName?: string
  communityPath?: string
}) {
  const communityAction: SoulieAction = input.communityPath
    ? { kind: 'navigate', label: `Visitar ${input.communityName}`, to: input.communityPath }
    : { kind: 'navigate', label: 'Descobrir comunidades', to: '/jornada/comunidades' }

  return interaction({
    greeting: 'Você completou todas as missões disponíveis nesta demonstração.',
    summary: `${input.points} pontos acumulados e ${input.streakDays} dias de ofensiva. Agora uma ação coletiva pode manter o ritmo.`,
    mood: 'celebrating',
    intents: [
      intent('join-collective-action', 'Participar em comunidade', input.communityName
        ? `${input.communityName} é o próximo espaço disponível para transformar seu progresso em participação.`
        : 'Ainda não há uma comunidade escolhida. Posso mostrar espaços para continuar sua jornada.', 'happy', communityAction),
      intent('view-completed-progress', 'Ver meu progresso', `Seu saldo está em ${input.points} pontos e todas as missões locais estão concluídas.`, 'happy', {
        kind: 'navigate', label: 'Ver todas as missões', to: '/jornada/missoes',
      }),
    ],
    reason: 'As missões locais já foram concluídas. Por isso, a sugestão muda de uma conquista individual para uma participação em comunidade.',
  })
}

export function feedStartedMissionInteraction(input: {
  missionTitle: string
  missionPath: string
  points: number
}) {
  return interaction({
    greeting: `Você já começou “${input.missionTitle}”.`,
    summary: 'Retomar de onde parou é o caminho mais curto para avançar sem começar outra coisa.',
    mood: 'thinking',
    intents: [
      intent('resume-mission', 'Continuar minha missão', `A missão “${input.missionTitle}” continua disponível e não concedeu pontos ainda.`, 'happy', {
        kind: 'navigate', label: 'Retomar missão', to: input.missionPath,
      }),
      intent('view-current-progress', 'Ver meu progresso', `Você tem ${input.points} pontos. A missão iniciada permanece pendente até a confirmação da conclusão.`, 'curious', {
        kind: 'navigate', label: 'Ver todas as missões', to: '/jornada/missoes',
      }),
    ],
    reason: 'A demonstração registra esta missão como iniciada e ainda não concluída. Nenhum horário ou comportamento externo foi usado.',
  })
}

export function feedWithoutCommunityInteraction(input: { personalized: boolean; recommendedCommunityName?: string }) {
  return interaction({
    greeting: 'Sua jornada ainda não tem uma comunidade escolhida.',
    summary: input.personalized && input.recommendedCommunityName
      ? `${input.recommendedCommunityName} aparece primeiro porque combina com interesses marcados no onboarding.`
      : 'Posso mostrar espaços acolhedores para você escolher sem pressão.',
    mood: 'curious',
    intents: [
      intent('discover-communities', 'Encontrar uma comunidade', 'Você verá opções disponíveis e poderá entrar, deixar para depois ou continuar explorando.', 'happy', {
        kind: 'navigate', label: 'Descobrir comunidades', to: '/jornada/comunidades',
      }),
      intent('understand-community-fit', 'Como você escolheu?', input.personalized && input.recommendedCommunityName
        ? `Usei apenas os interesses salvos nesta sessão para priorizar ${input.recommendedCommunityName}.`
        : 'Como não há interesses salvos, a ordem é genérica e usa somente as opções desta demonstração.', 'thinking', {
        kind: 'navigate', label: 'Ver recomendações', to: '/jornada/comunidades',
      }),
    ],
    reason: input.personalized
      ? 'A sugestão usa somente os interesses escolhidos no onboarding e as comunidades ainda não selecionadas.'
      : 'Nenhuma personalização foi alegada: sem interesses salvos, a recomendação é explicitamente genérica.',
  })
}

export function feedAfterCompletedMissionInteraction(input: {
  completedMissionTitle: string
  nextTrailTitle: string
  nextTrailPath: string
}) {
  return interaction({
    greeting: `“${input.completedMissionTitle}” já faz parte do seu progresso.`,
    summary: `A próxima oportunidade está na trilha ${input.nextTrailTitle}, sem repetir a celebração da conclusão.`,
    mood: 'happy',
    intents: [
      intent('open-next-trail', 'O que faço agora?', `A trilha ${input.nextTrailTitle} ainda tem conquistas pendentes e pode continuar seu ritmo.`, 'happy', {
        kind: 'navigate', label: 'Abrir próxima trilha', to: input.nextTrailPath,
      }),
      intent('view-mission-center', 'Ver outras missões', 'Você pode comparar todas as trilhas antes de escolher a próxima conquista.', 'curious', {
        kind: 'navigate', label: 'Ver todas as missões', to: '/jornada/missoes',
      }),
    ],
    reason: 'A última missão concluída serve apenas como contexto. A ação recomendada aponta para uma trilha que ainda possui missões incompletas.',
  })
}

export function feedDefaultInteraction(input: { trailTitle: string; trailPath: string; alreadyStarted: boolean }) {
  return interaction({
    greeting: input.alreadyStarted ? `A trilha ${input.trailTitle} está esperando por você.` : 'Encontrei uma trilha curta para começar.',
    summary: input.alreadyStarted
      ? 'Ela já foi aberta nesta sessão e ainda possui conquistas disponíveis.'
      : `${input.trailTitle} divide uma meta maior em pequenas conquistas.`,
    mood: 'happy',
    intents: [
      intent('open-recommended-trail', 'O que faço agora?', `Abra ${input.trailTitle} e escolha a próxima conquista no seu ritmo.`, 'happy', {
        kind: 'navigate', label: input.alreadyStarted ? 'Continuar trilha' : 'Abrir trilha', to: input.trailPath,
      }),
      intent('browse-mission-trails', 'Ver todas as trilhas', 'Você pode comparar duração, pontos e progresso antes de decidir.', 'curious', {
        kind: 'navigate', label: 'Ver todas as missões', to: '/jornada/missoes',
      }),
    ],
    reason: input.alreadyStarted
      ? 'A trilha já foi iniciada e ainda contém missões pendentes, então ela vem antes de uma opção nova.'
      : 'Esta é a primeira trilha disponível com missões ainda não concluídas nos dados locais da demonstração.',
  })
}

export function selectorAllJoinedInteraction(input: { communityName: string; communityPath: string }) {
  return interaction({
    greeting: 'Você já entrou em todas as comunidades desta demonstração.',
    summary: `${input.communityName} é um dos espaços que você pode visitar agora.`,
    mood: 'celebrating',
    intents: [
      intent('visit-joined-community', 'Visitar uma comunidade', `Vamos abrir ${input.communityName} e ver o desafio coletivo disponível.`, 'happy', {
        kind: 'navigate', label: `Abrir ${input.communityName}`, to: input.communityPath,
      }),
      intent('acknowledge-complete-network', 'E agora?', 'Não há novos espaços para sugerir nesta versão. Você pode visitar uma comunidade ou fechar esta ajuda.', 'curious'),
    ],
    reason: 'Todos os identificadores de comunidade disponíveis estão na sua lista. Por isso, a Soulie não promete uma descoberta inexistente.',
  })
}

export function selectorWithJoinedInteraction(input: { communityName: string; communityPath: string }) {
  return interaction({
    greeting: `Você já faz parte de ${input.communityName}.`,
    summary: 'Posso levar você para esse espaço ou mostrar somente comunidades que ainda não foram escolhidas.',
    mood: 'happy',
    intents: [
      intent('visit-current-community', 'Entrar em uma das minhas', `${input.communityName} está disponível na sua lista de comunidades.`, 'happy', {
        kind: 'navigate', label: `Abrir ${input.communityName}`, to: input.communityPath,
      }),
      intent('discover-another-community', 'Descobrir outra', 'A descoberta removerá da lista as comunidades em que você já entrou.', 'curious', {
        kind: 'navigate', label: 'Explorar novos espaços', to: '/jornada/comunidades?origem=minhas',
      }),
    ],
    reason: 'A primeira comunidade válida da sua lista oferece um destino seguro; a descoberta mantém os espaços já escolhidos fora das novas sugestões.',
  })
}

export function selectorEmptyInteraction(input: { personalized: boolean; recommendedCommunityName?: string }) {
  return interaction({
    greeting: 'Você ainda não escolheu uma comunidade.',
    summary: input.personalized && input.recommendedCommunityName
      ? `${input.recommendedCommunityName} pode ser um bom primeiro espaço com base nos interesses salvos.`
      : 'A Soulie pode apresentar opções gerais para você explorar.',
    mood: 'curious',
    intents: [
      intent('start-community-discovery', 'Descobrir comunidades', 'Você poderá conhecer cada espaço e decidir se quer entrar.', 'happy', {
        kind: 'navigate', label: 'Ver recomendações', to: '/jornada/comunidades',
      }),
      intent('explain-community-personalization', 'Por que essas opções?', input.personalized && input.recommendedCommunityName
        ? `Os interesses desta sessão colocam ${input.recommendedCommunityName} entre as primeiras recomendações.`
        : 'Sem interesses salvos, as opções são gerais e não fingem uma personalização.', 'thinking', {
        kind: 'navigate', label: 'Conhecer opções', to: '/jornada/comunidades',
      }),
    ],
    reason: input.personalized
      ? 'Somente interesses escolhidos no onboarding e comunidades disponíveis foram considerados.'
      : 'A recomendação é genérica porque o onboarding foi pulado ou não contém interesses.',
  })
}

export function communityPendingInteraction(input: {
  communityName: string
  activity: string
  contributionTitle: string
  points: number
}) {
  return interaction({
    greeting: `${input.communityName} tem um desafio coletivo em andamento.`,
    summary: `${input.contributionTitle} leva poucos passos e vale +${input.points} pontos simulados.`,
    mood: 'thinking',
    intents: [
      intent('show-community-contribution', 'Como posso ajudar?', 'Vou revelar os passos da contribuição nesta mesma página. Os pontos só serão concedidos após a confirmação existente.', 'happy', {
        kind: 'page-event', label: 'Mostrar como ajudar', event: 'show-community-contribution',
      }),
      intent('focus-collective-challenge', 'Ver o desafio', `O contexto exibido pela comunidade é “${input.activity}”. Você pode conferir a meta antes de participar.`, 'curious', {
        kind: 'page-event', label: 'Ver desafio coletivo', event: 'focus-community-challenge',
      }),
    ],
    reason: 'A contribuição ainda não foi registrada e o desafio é exibido como ativo nos dados simulados da página. Nenhuma atividade em tempo real foi consultada.',
  })
}

export function communityCompletedInteraction(input: {
  communityName: string
  progress: number
  points: number
}) {
  return interaction({
    greeting: `Sua contribuição em ${input.communityName} já foi registrada.`,
    summary: `Ela levou o progresso demonstrativo a ${input.progress}% e os +${input.points} pontos já foram concedidos uma única vez.`,
    mood: 'celebrating',
    intents: [
      intent('review-community-result', 'Ver o resultado', 'Vou destacar o desafio para você conferir como a contribuição apareceu na meta coletiva.', 'happy', {
        kind: 'page-event', label: 'Focar desafio', event: 'focus-community-challenge',
      }),
      intent('acknowledge-community-result', 'O que mudou?', `A meta simulada avançou para ${input.progress}%. Reabrir esta ajuda não altera pontos nem registra outra contribuição.`, 'curious'),
    ],
    reason: 'O identificador desta contribuição já está no estado da sessão. Por isso, a Soulie reconhece o resultado sem oferecer uma nova pontuação.',
  })
}

export function communityFallbackInteraction() {
  return interaction({
    greeting: 'Não encontrei esta comunidade entre as opções da demonstração.',
    summary: 'Posso levar você de volta à sua lista para escolher um destino válido.',
    mood: 'curious',
    intents: [
      intent('return-community-selector', 'Ver minhas comunidades', 'A lista mostra somente os espaços que já foram escolhidos nesta sessão.', 'happy', {
        kind: 'navigate', label: 'Abrir minhas comunidades', to: '/jornada/comunidade',
      }),
      intent('discover-valid-community', 'Descobrir comunidades', 'A tela de descoberta apresenta apenas os espaços disponíveis nos dados locais.', 'curious', {
        kind: 'navigate', label: 'Abrir descoberta', to: '/jornada/comunidades',
      }),
    ],
    reason: 'O identificador recebido não corresponde a uma comunidade conhecida. O fallback evita inventar conteúdo ou um destino inválido.',
  })
}
