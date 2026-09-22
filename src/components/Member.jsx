import { View, Text, StyleSheet } from 'react-native';
import { Avatar } from './Avatar';
import { COLORS, METRICS, TEXT } from '../theme';

// Respiro entre o avatar e o texto.
const CONTENT_GAP = 20;

// Mesma regra de APPOINTMENT_DIVIDER_INSET.
export const MEMBER_DIVIDER_INSET =
  METRICS.screenPadding + METRICS.avatar + CONTENT_GAP;

// Item da lista "Jogadores" da tela de Detalhes.
export function Member({ data }) {
  const isOnline = data.status === 'online';
  // Dot e rotulo mudam juntos: verde/Disponivel, vermelho/Ocupado.
  const statusColor = isOnline ? COLORS.on : COLORS.primary;

  return (
    <View style={styles.container}>
      <Avatar source={data.avatar} borderColor={COLORS.stroke} />

      <View style={styles.content}>
        <Text style={TEXT.title18}>{data.username}</Text>

        <View style={styles.status}>
          <View style={[styles.dot, { backgroundColor: statusColor }]} />
          <Text style={TEXT.meta13}>{isOnline ? 'Disponível' : 'Ocupado'}</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: METRICS.screenPadding,
  },
  content: {
    marginLeft: CONTENT_GAP,
    gap: 6,
  },
  status: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
  },
});
