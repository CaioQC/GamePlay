import { Text, StyleSheet, Pressable, Image, View } from 'react-native';
import { COLORS, FONTS, METRICS } from '../theme';

const DISCORD = require('../../assets/game/discord.png');

// Botao primario vermelho; com `icon` ganha o logo do Discord a esquerda.
export function Button({ title, icon = false, onPress, style }) {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [styles.container, pressed && styles.pressed, style]}
    >
      {icon && (
        <View style={styles.iconBox}>
          <Image source={DISCORD} style={styles.icon} resizeMode="contain" />
        </View>
      )}
      <Text style={styles.title}>{title}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    height: METRICS.buttonHeight,
    borderRadius: METRICS.radius,
    backgroundColor: COLORS.primary,
    flexDirection: 'row',
    alignItems: 'center',
    overflow: 'hidden',
  },
  pressed: {
    opacity: 0.8,
  },
  // Separada do rotulo pela linha vertical mais escura, como no prototipo.
  iconBox: {
    width: METRICS.buttonHeight,
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    borderRightWidth: 1,
    borderRightColor: COLORS.primaryDark,
  },
  icon: {
    width: 24,
    height: 18,
  },
  // O flex centraliza no espaco a direita do icone, e na largura toda sem ele.
  title: {
    flex: 1,
    textAlign: 'center',
    fontFamily: FONTS.text400,
    fontSize: 15,
    color: COLORS.heading,
  },
});
