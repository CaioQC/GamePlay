import { View, Text, FlatList, StyleSheet, Pressable } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Avatar } from '../components/Avatar';
import { CategoryList } from '../components/Category';
import { ListHeader, ListDivider } from '../components/List';
import { Appointment, APPOINTMENT_DIVIDER_INSET } from '../components/Appointment';
import { APPOINTMENTS, CURRENT_USER } from '../data';
import { COLORS, FONTS, METRICS, TEXT } from '../theme';

// Fora do componente para que a FlatList veja sempre o mesmo tipo e
// reconcilie os separadores em vez de remonta-los.
const Separator = () => <ListDivider inset={APPOINTMENT_DIVIDER_INSET} />;

/**
 * Home.
 *
 * A faixa de categorias aqui e somente exibicao: no prototipo nenhuma
 * categoria aparece marcada nesta tela, e o enunciado pede o estado de
 * selecao apenas em Agendar. Para filtrar por categoria bastaria passar
 * `selected`/`onSelect` para CategoryList - o componente ja aceita ambos.
 */
export default function Home({ navigation }) {
  const insets = useSafeAreaInsets();

  return (
    <View style={styles.container}>
      <View style={[styles.header, { paddingTop: insets.top + 16 }]}>
        <Avatar source={CURRENT_USER.avatar} />

        <View style={styles.greeting}>
          <Text style={styles.title}>
            Olá, <Text style={styles.name}>{CURRENT_USER.firstName}</Text>
          </Text>
          <Text style={[TEXT.meta13, styles.subtitle]}>Hoje é dia de vitória</Text>
        </View>

        <Pressable
          onPress={() => navigation.navigate('Agendar')}
          style={({ pressed }) => [styles.addButton, pressed && styles.pressed]}
        >
          <Feather name="plus" size={24} color={COLORS.heading} />
        </Pressable>
      </View>

      <CategoryList />

      <FlatList
        data={APPOINTMENTS}
        keyExtractor={(item) => item.id}
        style={styles.list}
        contentContainerStyle={styles.listContent}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={
          <ListHeader title="Partidas agendadas" subtitle={`Total ${APPOINTMENTS.length}`} />
        }
        ItemSeparatorComponent={Separator}
        renderItem={({ item }) => (
          <Appointment
            data={item}
            onPress={() => navigation.navigate('Detalhes', { id: item.id })}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  // O preto vem do tema do navigator, em App.js.
  container: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: METRICS.screenPadding,
    paddingBottom: 32,
  },
  greeting: {
    flex: 1,
    marginLeft: 16,
  },
  title: {
    fontFamily: FONTS.title500,
    fontSize: 24,
    color: COLORS.heading,
  },
  name: {
    fontFamily: FONTS.title700,
  },
  subtitle: {
    marginTop: 2,
  },
  // botao "+": mesmo tamanho do avatar ao lado, como no prototipo
  addButton: {
    width: METRICS.avatar,
    height: METRICS.avatar,
    borderRadius: METRICS.radius,
    backgroundColor: COLORS.primary,
    alignItems: 'center',
    justifyContent: 'center',
  },
  pressed: {
    opacity: 0.8,
  },
  list: {
    marginTop: 32,
  },
  listContent: {
    paddingBottom: 40,
  },
});
