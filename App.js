import { useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as SplashScreen from 'expo-splash-screen';
import { useFonts, Rajdhani_500Medium, Rajdhani_700Bold } from '@expo-google-fonts/rajdhani';
import { Inter_400Regular, Inter_500Medium } from '@expo-google-fonts/inter';

import Login from './src/screens/Login';
import Home from './src/screens/Home';
import Detalhes from './src/screens/Detalhes';
import Agendar from './src/screens/Agendar';
import { COLORS } from './src/theme';

// Segura a splash ate as fontes estarem prontas. Sem isso a primeira
// renderizacao usa a fonte do sistema e "pula" para Rajdhani/Inter depois.
SplashScreen.preventAutoHideAsync();

const Stack = createNativeStackNavigator();

// O tema padrao do React Navigation pinta o fundo de branco, o que aparece
// como um flash claro durante a transicao entre telas. Aqui ele passa a ser
// o mesmo preto do resto do app.
const navigationTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: COLORS.background,
  },
};

export default function App() {
  const [loaded, error] = useFonts({
    Rajdhani_500Medium,
    Rajdhani_700Bold,
    Inter_400Regular,
    Inter_500Medium,
  });

  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  // Em caso de erro no carregamento seguimos assim mesmo, com a fonte do
  // sistema: uma fonte trocada e melhor que uma tela branca permanente.
  if (!loaded && !error) {
    return null;
  }

  return (
    <SafeAreaProvider>
      <StatusBar style="light" />

      <NavigationContainer theme={navigationTheme}>
        <Stack.Navigator
          initialRouteName="Login"
          // cada tela desenha seu proprio Header; o fundo vem do tema acima
          screenOptions={{ headerShown: false }}
        >
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Detalhes" component={Detalhes} />
          <Stack.Screen name="Agendar" component={Agendar} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
