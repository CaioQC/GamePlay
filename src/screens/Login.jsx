import { View, Text, Image, StyleSheet } from 'react-native';
import { Button } from '../components/Button';
import { COLORS, FONTS, METRICS } from '../theme';

const HERO = require('../../assets/game/login-hero.png');

/**
 * Tela de Login - rota inicial do Stack.
 *
 * `navigation.replace` em vez de `navigate`: depois de entrar, o botao
 * voltar do Android nao deve trazer o usuario de volta para o login.
 */
export default function Login({ navigation }) {
  return (
    <View style={styles.container}>
      <Image source={HERO} style={styles.hero} resizeMode="cover" />

      <View style={styles.content}>
        <Text style={styles.title}>
          Conecte-se{'\n'}
          e organize suas{'\n'}
          jogatinas
        </Text>

        <Text style={styles.subtitle}>
          Crie grupos para jogar seus games{'\n'}
          favoritos com seus amigos
        </Text>

        <Button
          title="Entrar com Discord"
          icon
          style={styles.button}
          onPress={() => navigation.replace('Home')}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  // O preto vem do tema do navigator, em App.js.
  container: {
    flex: 1,
  },
  hero: {
    width: '100%',
    // proporcao de assets/game/login-hero@3x.png (1125x1050)
    aspectRatio: 1125 / 1050,
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-evenly',
    paddingHorizontal: METRICS.screenPadding,
    paddingBottom: 24,
  },
  title: {
    textAlign: 'center',
    fontFamily: FONTS.title700,
    fontSize: 38,
    lineHeight: 38,
    color: COLORS.heading,
  },
  subtitle: {
    textAlign: 'center',
    fontFamily: FONTS.text400,
    fontSize: 15,
    lineHeight: 25,
    color: COLORS.heading,
  },
  button: {
    alignSelf: 'stretch',
  },
});
