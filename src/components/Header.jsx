import { View, Text, StyleSheet, Pressable } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Feather } from '@expo/vector-icons';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { COLORS, FONTS, GRADIENTS, METRICS } from '../theme';

// Fora do componente: recriar a cada render faria o RN reenviar a atualizacao.
const GRADIENT_START = { x: 0, y: 0 };
const GRADIENT_END = { x: 0, y: 1 };

// Faixa azul do topo das telas Detalhes e Agendar.
export function Header({ title, action }) {
  const insets = useSafeAreaInsets();
  const navigation = useNavigation();

  return (
    <LinearGradient
      colors={GRADIENTS.header}
      start={GRADIENT_START}
      end={GRADIENT_END}
      style={[styles.container, { paddingTop: insets.top, height: METRICS.headerHeight + insets.top }]}
    >
      <Pressable onPress={() => navigation.goBack()} hitSlop={16} style={styles.side}>
        <Feather name="arrow-left" size={24} color={COLORS.heading} />
      </Pressable>

      <Text style={styles.title}>{title}</Text>

      <View style={[styles.side, styles.right]}>{action}</View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: METRICS.screenPadding,
  },
  // Larguras iguais mantem o titulo centrado mesmo sem acao a direita (Agendar).
  side: {
    width: 32,
    justifyContent: 'center',
  },
  right: {
    alignItems: 'flex-end',
  },
  title: {
    flex: 1,
    textAlign: 'center',
    fontFamily: FONTS.title700,
    fontSize: 20,
    color: COLORS.heading,
  },
});
