import { View, Text, Image, StyleSheet, Pressable } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { COLORS, FONTS, METRICS, TEXT } from '../theme';
import { categoryTitle } from '../data';

// Respiro entre a capa do jogo e o texto.
const CONTENT_GAP = 20;

// Soma o padding da tela porque o separador e desenhado fora do item.
export const APPOINTMENT_DIVIDER_INSET =
  METRICS.screenPadding + METRICS.guildIcon + CONTENT_GAP;

// Item da lista "Partidas agendadas".
export function Appointment({ data, onPress }) {
  const isOwner = data.owner;

  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [styles.container, pressed && styles.pressed]}
    >
      <Image source={data.guild.icon} style={styles.cover} resizeMode="cover" />

      <View style={styles.content}>
        <View style={styles.row}>
          <Text style={[TEXT.title18, styles.title]} numberOfLines={1}>
            {data.guild.name}
          </Text>
          <Text style={TEXT.meta13}>{categoryTitle(data.categoryId)}</Text>
        </View>

        <View style={styles.row}>
          <View style={styles.inline}>
            <Feather name="calendar" size={13} color={COLORS.primary} />
            <Text style={TEXT.meta13}>{data.date}</Text>
          </View>

          <View style={styles.inline}>
            <Feather name="user" size={13} color={isOwner ? COLORS.primary : COLORS.on} />
            <Text style={[styles.role, { color: isOwner ? COLORS.primary : COLORS.on }]}>
              {isOwner ? 'Anfitrião' : 'Visitante'}
            </Text>
          </View>
        </View>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: METRICS.screenPadding,
  },
  pressed: {
    opacity: 0.7,
  },
  cover: {
    width: METRICS.guildIcon,
    height: METRICS.guildIcon,
    borderRadius: METRICS.radius,
    borderWidth: 1,
    borderColor: COLORS.stroke,
  },
  // Duas linhas, nao tres colunas: categoria alinha com o titulo, papel com a data.
  content: {
    flex: 1,
    marginLeft: CONTENT_GAP,
    gap: 10,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  inline: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  title: {
    flexShrink: 1,
  },
  role: {
    fontFamily: FONTS.text500,
    fontSize: 13,
  },
});
