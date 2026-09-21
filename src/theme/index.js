/**
 * Tokens de design do GamePlay.
 *
 * Cores e medidas foram amostradas dos PNGs em /design (iPhone X @3x,
 * 1125x2436). Cada token aparece repetido em mais de uma tela, o que
 * confirma que sao tokens do design system e nao cores pontuais.
 * As medidas em pt sao o valor em pixels dividido por 3.
 */

export const COLORS = {
  // Acao / marca. Botoes, icone de calendario, borda do avatar,
  // icone de compartilhar, status "Ocupado" e rotulo "Anfitriao".
  primary: '#E51C44',
  // Divisor vertical dentro do botao vermelho (Login / Detalhes).
  primaryDark: '#991F36',

  // Status positivo: dot "Disponivel" e rotulo "Visitante".
  on: '#32BD50',

  // Fundo das telas. Preto puro, nao um cinza escuro.
  background: '#000000',

  // Superficies azuis. O card de categoria e o header sao gradientes
  // que vao do tom escuro (topo/esquerda) ao mais claro (base/direita).
  surfaceDark: '#161E52',
  surfaceLight: '#1C2664',
  // Campos preenchidos (dia/mes, hora/minuto, descricao, caixa do
  // servidor) e a linha divisoria das listas.
  field: '#1D2766',
  line: '#1D2766',
  // Borda do checkbox nos cards de categoria da tela Agendar.
  stroke: '#243189',

  // Texto.
  heading: '#DDE3F0',
  text: '#ABB1CC',
};

/** Gradientes de superficie. */
export const GRADIENTS = {
  header: [COLORS.surfaceDark, COLORS.surfaceLight],
  card: [COLORS.surfaceDark, COLORS.surfaceLight],
};

/**
 * Familias tipograficas. Rajdhani (condensada) em titulos e rotulos,
 * Inter no texto corrido. Os nomes batem com os exports de
 * @expo-google-fonts e sao registrados em app/_layout.jsx.
 */
export const FONTS = {
  title700: 'Rajdhani_700Bold',
  title600: 'Rajdhani_600SemiBold',
  title500: 'Rajdhani_500Medium',
  text400: 'Inter_400Regular',
  text500: 'Inter_500Medium',
};

/** Medidas tiradas do prototipo (px @3x / 3). */
export const METRICS = {
  screenPadding: 24,   // margem lateral: cards comecam em 72px
  headerHeight: 66,    // faixa azul abaixo da status bar
  buttonHeight: 56,    // 168px
  radius: 8,
  avatar: 48,          // 144px - avatar e botao "+"
  guildIcon: 64,       // 192px - capa do jogo na lista
  category: { width: 104, height: 120 },  // 312x360, gap de 8pt
  smallInput: 48,      // 144px - dia/mes e hora/minuto
  textAreaHeight: 95,  // 285px
  bannerHeight: 228,   // 685px
};

export default { COLORS, GRADIENTS, FONTS, METRICS };
