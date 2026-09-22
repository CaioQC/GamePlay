import { useState } from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import { Feather } from '@expo/vector-icons';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Header } from '../components/Header';
import { CategoryList } from '../components/Category';
import { Input } from '../components/Input';
import { Button } from '../components/Button';
import { COLORS, METRICS, TEXT } from '../theme';

const MAX_DESCRIPTION = 100;

/** Rotulo + dois campos de dois digitos, usado por dia/mes e hora/minuto. */
function InputPair({ label, separator }) {
  return (
    <View>
      <Text style={TEXT.title18}>{label}</Text>

      <View style={styles.inputGroup}>
        <Input />
        <Text style={TEXT.title18}>{separator}</Text>
        <Input />
      </View>
    </View>
  );
}

/**
 * Agendar partida.
 *
 * A categoria escolhida e o unico estado da tela: e ela que decide qual
 * card aparece marcado. A CategoryList e controlada - recebe `selected` e
 * devolve a escolha por `onSelect`, sem guardar nada -, o que mantem uma
 * unica fonte de verdade.
 *
 * Os campos de data, hora e descricao nao tem estado: a tela apenas
 * reproduz o prototipo e ninguem le esses valores, entao os TextInput
 * ficam nao-controlados e o proprio campo mostra o que foi digitado.
 *
 * O seletor de servidor esta escrito aqui, e nao como componente, porque
 * existe so nesta tela. O enunciado dispensa o modal com a lista, entao
 * ele fica no estado vazio: a caixa cheia a esquerda e o lugar do icone do
 * servidor, que segue vago enquanto nenhum foi escolhido.
 */
export default function Agendar() {
  const insets = useSafeAreaInsets();
  const [category, setCategory] = useState(null);

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      <Header title="Agendar partida" />

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: insets.bottom + 40 }}
      >
        <Text style={[TEXT.title18, styles.categoryLabel]}>Categoria</Text>

        <CategoryList hasCheckBox selected={category} onSelect={setCategory} />

        <View style={styles.form}>
          <View style={styles.guild}>
            <View style={styles.guildIcon} />
            <Text style={[TEXT.title18, styles.guildLabel]}>Selecione um servidor</Text>
            <Feather
              name="chevron-right"
              size={20}
              color={COLORS.heading}
              style={styles.guildChevron}
            />
          </View>

          <View style={styles.row}>
            <InputPair label="Dia e mês" separator="/" />
            <InputPair label="Hora e minuto" separator=":" />
          </View>

          {/* rotulo e campo agrupados para que o `gap` do formulario
              separe o bloco inteiro, e nao um do outro */}
          <View>
            <View style={styles.descriptionHeader}>
              <Text style={TEXT.title18}>Descrição</Text>
              <Text style={TEXT.meta13}>Max {MAX_DESCRIPTION} caracteres</Text>
            </View>

            <Input multiline maxLength={MAX_DESCRIPTION} />
          </View>

          <Button title="Agendar" />
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  // O preto vem do tema do navigator, em App.js.
  container: {
    flex: 1,
  },
  categoryLabel: {
    paddingHorizontal: METRICS.screenPadding,
    marginTop: 32,
    marginBottom: 16,
  },
  form: {
    paddingHorizontal: METRICS.screenPadding,
    marginTop: 32,
    gap: 32,
  },
  guild: {
    height: 68,
    borderRadius: METRICS.radius,
    borderWidth: 1,
    borderColor: COLORS.line,
    flexDirection: 'row',
    alignItems: 'center',
    overflow: 'hidden',
  },
  guildIcon: {
    width: 64,
    height: '100%',
    backgroundColor: COLORS.field,
  },
  guildLabel: {
    flex: 1,
    textAlign: 'center',
  },
  guildChevron: {
    marginRight: 16,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  inputGroup: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 12,
    gap: 8,
  },
  descriptionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 12,
  },
});
