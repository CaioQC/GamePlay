// Configuracao do bundler.
//
// A partir do SDK 56 o Expo bloqueia importar @react-navigation/* quando o
// expo-router esta instalado, porque os dois nao convivem. Este projeto nao
// usa expo-router - ele foi removido das dependencias e o entry point e o
// index.js da raiz. O pacote continua em node_modules apenas porque o
// proprio @expo/cli depende dele (via @expo/router-server), e a verificacao
// do Expo detecta presenca no node_modules, nao uso real. Dai o falso
// positivo, desligado aqui pela variavel que a propria mensagem de erro
// indica.
process.env.EXPO_ROUTER_DISABLE_RN_NAVIGATION_CHECK = '1';

const { getDefaultConfig } = require('expo/metro-config');

module.exports = getDefaultConfig(__dirname);
