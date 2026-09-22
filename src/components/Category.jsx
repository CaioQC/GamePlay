import { View, Text, Image, StyleSheet, Pressable, ScrollView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { CATEGORIES } from '../data';
import { COLORS, FONTS, GRADIENTS, METRICS } from '../theme';

// Fora do componente: recriar a cada render faria o RN reenviar a atualizacao.
const GRADIENT_START = { x: 0, y: 0 };
const GRADIENT_END = { x: 1, y: 1 };

// PROVISORIO: visual do estado marcado inferido, falta o print do Figma.
function Category({ data, checked, hasCheckBox, onPress }) {
  return (
    <Pressable onPress={onPress}>
      <LinearGradient
        colors={GRADIENTS.card}
        start={GRADIENT_START}
        end={GRADIENT_END}
        style={styles.card}
      >
        <View style={[styles.content, hasCheckBox && !checked && styles.dimmed]}>
          {hasCheckBox && <View style={[styles.checkbox, checked && styles.checked]} />}
          <Image source={data.icon} style={styles.icon} resizeMode="contain" />
          <Text style={styles.title}>{data.title}</Text>
        </View>
      </LinearGradient>
    </Pressable>
  );
}

// ScrollView e nao FlatList: 3 itens fixos, virtualizar so daria trabalho.
export function CategoryList({ selected, onSelect, hasCheckBox = false }) {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.strip}
      style={styles.stripOuter}
    >
      {CATEGORIES.map((item) => (
        <Category
          key={item.id}
          data={item}
          hasCheckBox={hasCheckBox}
          checked={item.id === selected}
          // Selecao mora na tela; clicar no que ja esta marcado desmarca.
          onPress={onSelect ? () => onSelect(item.id === selected ? null : item.id) : undefined}
        />
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  stripOuter: {
    flexGrow: 0,
  },
  strip: {
    paddingHorizontal: METRICS.screenPadding,
    gap: 8,
  },
  card: {
    width: METRICS.category.width,
    height: METRICS.category.height,
    borderRadius: METRICS.radius,
    overflow: 'hidden',
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 12,
  },
  // Na Home nao ha selecao, entao nenhum card fica apagado.
  dimmed: {
    opacity: 0.5,
  },
  checkbox: {
    position: 'absolute',
    top: 7,
    right: 7,
    width: 10,
    height: 10,
    borderRadius: 2,
    borderWidth: 1,
    borderColor: COLORS.stroke,
  },
  checked: {
    backgroundColor: COLORS.primary,
    borderColor: COLORS.primary,
  },
  // Proporcao do asset (252x240) para os 12pt de respiro valerem 12pt.
  icon: {
    width: 48,
    aspectRatio: 252 / 240,
    marginBottom: 12,
  },
  title: {
    fontFamily: FONTS.title700,
    fontSize: 15,
    color: COLORS.heading,
  },
});
