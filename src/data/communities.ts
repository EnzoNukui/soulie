export type Community = {
  id: string
  name: string
  description: string
  tags: string[]
  members: number
  activity: string
  initials: string
  tone: 'violet' | 'blue' | 'mint' | 'amber'
}

export const communities: Community[] = [
  {
    id: 'eco-em-acao',
    name: 'Eco em Ação',
    description: 'Pequenas escolhas, desafios coletivos e impacto que dá para acompanhar.',
    tags: ['sustentabilidade', 'impacto-social'],
    members: 1240,
    activity: '32 pessoas ativas agora',
    initials: 'EA',
    tone: 'mint',
  },
  {
    id: 'futuro-em-codigo',
    name: 'Futuro em Código',
    description: 'Trocas sobre tecnologia, carreira e projetos que transformam ideias em realidade.',
    tags: ['tecnologia', 'empreendedorismo'],
    members: 2860,
    activity: '18 novas conversas hoje',
    initials: 'FC',
    tone: 'blue',
  },
  {
    id: 'mente-em-movimento',
    name: 'Mente em Movimento',
    description: 'Hábitos possíveis, apoio mútuo e uma rotina com mais equilíbrio.',
    tags: ['bem-estar'],
    members: 980,
    activity: 'Desafio semanal em andamento',
    initials: 'MM',
    tone: 'amber',
  },
  {
    id: 'criadores-soul',
    name: 'Criadores Soul',
    description: 'Um espaço para compartilhar processos, referências e projetos autorais.',
    tags: ['arte-cultura', 'empreendedorismo'],
    members: 1740,
    activity: '46 publicações nesta semana',
    initials: 'CS',
    tone: 'violet',
  },
]

export function getRecommendedCommunities(selectedInterests: string[]) {
  return [...communities].sort((a, b) => {
    const scoreA = a.tags.filter((tag) => selectedInterests.includes(tag)).length
    const scoreB = b.tags.filter((tag) => selectedInterests.includes(tag)).length
    return scoreB - scoreA
  })
}

export function getRecommendationReason(community: Community, selectedInterests: string[]) {
  const matchingTag = community.tags.find((tag) => selectedInterests.includes(tag))
  if (!matchingTag) return 'Uma comunidade acolhedora e ativa para começar sua jornada.'

  const label = interestsLabel[matchingTag] ?? matchingTag
  return `Recomendada porque você demonstrou interesse em ${label.toLowerCase()}.`
}

const interestsLabel: Record<string, string> = {
  sustentabilidade: 'Sustentabilidade',
  tecnologia: 'Tecnologia',
  empreendedorismo: 'Empreendedorismo',
  'bem-estar': 'Bem-estar',
  'arte-cultura': 'Arte e cultura',
  'impacto-social': 'Impacto social',
}

