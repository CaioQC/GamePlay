import { Image, StyleSheet, View } from 'react-native';
import { COLORS, METRICS } from '../theme';

// Borda vermelha no usuario logado (Home) e azul nos jogadores (Detalhes).
export function Avatar({ source, borderColor = COLORS.primary }) {
  return (
    <View style={[styles.border, { borderColor }]}>
      <Image source={source} style={styles.image} resizeMode="cover" />
    </View>
  );
}

const styles = StyleSheet.create({
  border: {
    width: METRICS.avatar,
    height: METRICS.avatar,
    borderWidth: 2,
    borderRadius: METRICS.radius,
    overflow: 'hidden',
    backgroundColor: COLORS.surfaceDark,
  },
  image: {
    flex: 1,
  },
});
