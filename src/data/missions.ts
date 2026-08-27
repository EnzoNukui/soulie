export type Mission = { id: string; title: string; description: string; points: number; duration: string; steps: string[] }
export type MissionTrail = { id: string; title: string; description: string; icon: string; tone: 'violet' | 'blue' | 'coral'; missions: Mission[] }

export const missionTrails: MissionTrail[] = [
  { id: 'energia-consciente', title: 'Energia consciente', icon: '⚡', tone: 'violet', description: 'Transforme pequenas escolhas de consumo em um hábito que cabe na rotina.', missions: [
    { id: 'mapear-consumo', title: 'Mapeie seu consumo', description: 'Observe onde a energia mais aparece no seu dia.', points: 10, duration: '3 min', steps: ['Escolha um cômodo', 'Observe três aparelhos', 'Marque o maior consumo percebido'] },
    { id: 'cacador-desperdicio', title: 'Caça ao desperdício', description: 'Encontre uma fonte de consumo que pode ser evitada.', points: 10, duration: '5 min', steps: ['Percorra o ambiente', 'Encontre um aparelho ocioso', 'Desligue-o com segurança'] },
    { id: 'uma-hora-mais-leve', title: 'Uma hora mais leve', description: 'Passe uma hora reduzindo um consumo desnecessário.', points: 15, duration: '1 h', steps: ['Escolha uma ação', 'Mantenha por uma hora', 'Registre como foi'] },
    { id: 'dica-que-circula', title: 'Dica que circula', description: 'Compartilhe uma descoberta com a comunidade.', points: 15, duration: '4 min', steps: ['Resuma sua descoberta', 'Escreva uma dica simples', 'Compartilhe na comunidade'] },
  ] },
  { id: 'comunidade-em-acao', title: 'Comunidade em ação', icon: '✦', tone: 'blue', description: 'Saia da observação e participe de ações que aproximam pessoas.', missions: [
    { id: 'visite-um-desafio', title: 'Visite um desafio', description: 'Conheça uma ação coletiva em andamento.', points: 5, duration: '2 min', steps: ['Abra sua comunidade', 'Encontre um desafio', 'Leia as regras'] },
    { id: 'apoie-uma-ideia', title: 'Apoie uma ideia', description: 'Mostre que uma contribuição foi útil.', points: 5, duration: '1 min', steps: ['Leia uma publicação', 'Escolha uma reação', 'Deixe seu apoio'] },
    { id: 'publique-uma-acao', title: 'Publique uma ação', description: 'Conte uma pequena atitude que você realizou.', points: 10, duration: '4 min', steps: ['Escolha uma atitude', 'Escreva uma frase', 'Publique no feed'] },
    { id: 'acao-coletiva', title: 'Ação coletiva', description: 'Participe de uma atividade com a comunidade.', points: 20, duration: '10 min', steps: ['Escolha uma ação', 'Confirme participação', 'Registre a contribuição'] },
  ] },
  { id: 'rotina-sustentavel', title: 'Rotina sustentável', icon: '☀', tone: 'coral', description: 'Construa uma sequência curta de hábitos possíveis e consistentes.', missions: [
    { id: 'escolha-um-habito', title: 'Escolha um hábito', description: 'Defina uma mudança pequena para hoje.', points: 5, duration: '2 min', steps: ['Observe sua rotina', 'Escolha uma mudança', 'Defina um horário'] },
    { id: 'primeiro-dia', title: 'Primeiro dia', description: 'Coloque o novo hábito em prática.', points: 10, duration: '5 min', steps: ['Relembre o compromisso', 'Realize a ação', 'Confirme a conclusão'] },
    { id: 'mantenha-o-ritmo', title: 'Mantenha o ritmo', description: 'Repita e fortaleça a escolha.', points: 15, duration: '2 dias', steps: ['Repita amanhã', 'Observe a facilidade', 'Compartilhe o progresso'] },
  ] },
]

export const getTrail = (trailId?: string) => missionTrails.find((trail) => trail.id === trailId)
export const getMission = (missionId?: string) => missionTrails.flatMap((trail) => trail.missions).find((mission) => mission.id === missionId)
export const getTrailPoints = (trail: MissionTrail) => trail.missions.reduce((total, mission) => total + mission.points, 0)
export const getTrailProgress = (trail: MissionTrail, completedIds: string[]) => trail.missions.filter((mission) => completedIds.includes(mission.id)).length

// Compatibilidade com a tela legada; a rota agora aponta para a nova central.
export const firstMission = {
  title: 'Encontre seu lugar na Soul Up',
  description: 'Conheça pessoas com interesses em comum e dê seu primeiro passo na comunidade.',
  totalPoints: 30,
  steps: [
    { id: 'first-meeting', title: 'Conheça a Soulie', description: 'Comece sua jornada acompanhada.', points: 5 },
    { id: 'explore-communities', title: 'Explore sugestões', description: 'Descubra comunidades que combinam com você.', points: 5 },
    { id: 'join-community', title: 'Entre em uma comunidade', description: 'Escolha um espaço para fazer parte.', points: 10 },
    { id: 'first-challenge', title: 'Conheça o primeiro desafio', description: 'Veja como pequenas ações geram progresso.', points: 10 },
  ],
}
