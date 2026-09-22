/**
 * Dados fixos das telas.
 *
 * O app apenas reproduz o prototipo, entao nada aqui vem de API: sao os
 * mesmos valores que aparecem nos prints. Ficam fora das telas porque cada
 * lista e lida em mais de um lugar - CATEGORIES pelos componentes
 * CategoryList e Appointment, APPOINTMENTS pelas telas Home e Detalhes.
 * Se morassem dentro de uma tela, a outra teria de importar dela.
 */

// Os prints mostram a faixa de categorias com rolagem horizontal e apenas
// tres inteiramente visiveis. Havendo mais no Figma, basta acrescentar o
// item e o icone: nenhuma tela muda.
export const CATEGORIES = [
  { id: '1', title: 'Ranqueada', icon: require('../assets/game/categories/ranqueada.png') },
  { id: '2', title: 'Duelo 1x1', icon: require('../assets/game/categories/duelo.png') },
  { id: '3', title: 'Diversão', icon: require('../assets/game/categories/diversao.png') },
];

/** Titulo da categoria pelo id, usado na lista da Home. */
export function categoryTitle(id) {
  return CATEGORIES.find((c) => c.id === id)?.title ?? '';
}

/**
 * Partidas da Home. Os cinco primeiros sao os que aparecem no print; o
 * cabecalho marca "Total 6" e o sexto fica abaixo do corte da tela, entao
 * ele foi completado aqui para que a contagem exibida saia de
 * APPOINTMENTS.length em vez de um numero escrito no JSX.
 *
 * `owner: true` renderiza "Anfitriao" em vermelho; `false`, "Visitante" em
 * verde.
 */
export const APPOINTMENTS = [
  {
    id: '1',
    guild: { name: 'Lendários', icon: require('../assets/game/games/lol.png') },
    categoryId: '1',
    date: '18/06 às 21:00h',
    description: 'É hoje que vamos chegar ao challenger sem perder uma partida da md10',
    owner: true,
  },
  {
    id: '2',
    guild: { name: 'Yeah, boy', icon: require('../assets/game/games/rdr2.png') },
    categoryId: '3',
    date: '23/06 às 19:00h',
    description: 'Bora explorar o velho oeste sem pressa nenhuma',
    owner: false,
  },
  {
    id: '3',
    guild: { name: 'Rumo ao topo', icon: require('../assets/game/games/csgo.png') },
    categoryId: '2',
    date: '20/06 às 09:00h',
    description: 'Treino de mira antes do campeonato',
    owner: true,
  },
  {
    id: '4',
    guild: { name: 'Bora queimar tudo', icon: require('../assets/game/games/apex.png') },
    categoryId: '1',
    date: '20/06 às 14:20h',
    description: 'Subir de patente hoje, sem desculpa',
    owner: true,
  },
  {
    id: '5',
    guild: { name: 'Valorosos', icon: require('../assets/game/games/valorant.png') },
    categoryId: '3',
    date: '18/06 às 21:00h',
    description: 'Partida casual para fechar a noite',
    owner: true,
  },
  {
    id: '6',
    guild: { name: 'Sem dó', icon: require('../assets/game/games/lol.png') },
    categoryId: '2',
    date: '21/06 às 20:30h',
    description: 'Duelo valendo o orgulho da semana',
    owner: false,
  },
];

/**
 * Jogadores da tela de Detalhes. `status: 'online'` renderiza o dot verde
 * com "Disponivel"; qualquer outro valor, o vermelho com "Ocupado".
 */
export const MEMBERS = [
  {
    id: '1',
    username: 'Tiago Luchtenberg',
    avatar: require('../assets/game/avatars/tiago-full.png'),
    status: 'online',
  },
  {
    id: '2',
    username: 'Rodrigo Gonçalves',
    avatar: require('../assets/game/avatars/rodrigo.png'),
    status: 'offline',
  },
  {
    id: '3',
    username: 'Diego Fernandes',
    avatar: require('../assets/game/avatars/diego.png'),
    status: 'offline',
  },
];

/** Usuario logado, exibido no cabecalho da Home. */
export const CURRENT_USER = {
  firstName: 'Tiago',
  avatar: require('../assets/game/avatars/tiago.png'),
};
