import { TextInput, StyleSheet } from 'react-native';
import { COLORS, FONTS, METRICS, TEXT } from '../theme';

// Campo do formulario: com `multiline` e a descricao; sem ele, o quadrado de 2 digitos.
export function Input({ multiline = false, maxLength }) {
  return (
    <TextInput
      style={[styles.base, multiline ? styles.area : styles.small]}
      selectionColor={COLORS.primary}
      multiline={multiline}
      maxLength={multiline ? maxLength : 2}
      keyboardType={multiline ? 'default' : 'number-pad'}
      textAlignVertical={multiline ? 'top' : 'center'}
    />
  );
}

const styles = StyleSheet.create({
  // O que as duas variantes tem em comum.
  base: {
    backgroundColor: COLORS.field,
    borderRadius: METRICS.radius,
    color: COLORS.heading,
  },
  small: {
    ...TEXT.title18,
    width: METRICS.smallInput,
    height: METRICS.smallInput,
    textAlign: 'center',
  },
  area: {
    height: METRICS.textAreaHeight,
    padding: 16,
    fontFamily: FONTS.text400,
    fontSize: 13,
  },
});
