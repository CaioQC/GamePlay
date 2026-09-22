import { View, Text, FlatList, ImageBackground, StyleSheet, Pressable } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Feather } from '@expo/vector-icons';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Header } from '../components/Header';
import { ListHeader, ListDivider } from '../components/List';
import { Member, MEMBER_DIVIDER_INSET } from '../components/Member';
import { Button } from '../components/Button';
import { APPOINTMENTS, MEMBERS } from '../data';
import { COLORS, FONTS, METRICS } from '../theme';

const BANNER = require('../../assets/game/banner-lendarios.png');
const BANNER_OVERLAY = ['transparent', 'rgba(0,0,0,0.75)'];

const Separator = () => <ListDivider inset={MEMBER_DIVIDER_INSET} />;

/**
 * Detalhes do servidor.
 *
 * Recebe o `id` da partida por parametro de rota e cai no primeiro item
 * quando aberta sem parametro, para que a tela funcione isolada.
 *
 * O gradiente sobre o banner nao e decoracao: o texto e claro e a arte do
 * jogo tem areas claras, entao sem ele o titulo perderia contraste.
 */
export default function Detalhes({ route }) {
  const insets = useSafeAreaInsets();
  const appointment =
    APPOINTMENTS.find((a) => a.id === route.params?.id) ?? APPOINTMENTS[0];

  return (
    <View style={styles.container}>
      <Header
        title="Detalhes"
        action={
          <Pressable hitSlop={16}>
            <Feather name="share-2" size={22} color={COLORS.primary} />
          </Pressable>
        }
      />

      <ImageBackground source={BANNER} style={styles.banner} resizeMode="cover">
        <LinearGradient colors={BANNER_OVERLAY} style={StyleSheet.absoluteFill} />
        <View style={styles.bannerContent}>
          <Text style={styles.bannerTitle}>{appointment.guild.name}</Text>
          <Text style={styles.bannerSubtitle}>{appointment.description}</Text>
        </View>
      </ImageBackground>

      <FlatList
        data={MEMBERS}
        keyExtractor={(item) => item.id}
        style={styles.list}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={<ListHeader title="Jogadores" subtitle={`Total ${MEMBERS.length}`} />}
        ItemSeparatorComponent={Separator}
        renderItem={({ item }) => <Member data={item} />}
      />

      <View style={[styles.footer, { paddingBottom: insets.bottom + 24 }]}>
        <Button title="Entrar na partida" icon />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  // O preto vem do tema do navigator, em App.js.
  container: {
    flex: 1,
  },
  banner: {
    width: '100%',
    // proporcao de assets/game/banner-lendarios@3x.png (1125x685). Deixar a
    // altura sair da proporcao, e nao de um valor fixo em pt, mantem o
    // enquadramento igual ao do prototipo em telas de qualquer largura.
    aspectRatio: 1125 / 685,
    justifyContent: 'flex-end',
  },
  bannerContent: {
    padding: METRICS.screenPadding,
  },
  bannerTitle: {
    fontFamily: FONTS.title700,
    fontSize: 28,
    color: COLORS.heading,
  },
  bannerSubtitle: {
    marginTop: 8,
    fontFamily: FONTS.text400,
    fontSize: 13,
    lineHeight: 21,
    color: COLORS.heading,
  },
  list: {
    marginTop: 24,
  },
  footer: {
    paddingHorizontal: METRICS.screenPadding,
    paddingTop: 16,
  },
});
