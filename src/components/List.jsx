import { View, Text, StyleSheet } from 'react-native';
import { COLORS, METRICS, TEXT } from '../theme';

// Cabecalho de lista: titulo a esquerda, contagem a direita.
export function ListHeader({ title, subtitle }) {
  return (
    <View style={styles.header}>
      <Text style={TEXT.title18}>{title}</Text>
      <Text style={TEXT.meta13}>{subtitle}</Text>
    </View>
  );
}

// O recuo vem pronto do item; ver APPOINTMENT_DIVIDER_INSET.
export function ListDivider({ inset }) {
  return <View style={[styles.divider, { marginLeft: inset }]} />;
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: METRICS.screenPadding,
    marginBottom: 16,
  },
  divider: {
    height: StyleSheet.hairlineWidth * 2,
    backgroundColor: COLORS.line,
    marginVertical: 16,
  },
});
