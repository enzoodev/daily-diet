import { ActivityIndicator } from 'react-native';
import { ThemeProvider } from 'styled-components/native';
import theme from './src/theme';
import { useFonts, NunitoSans_400Regular, NunitoSans_700Bold } from '@expo-google-fonts/nunito-sans';

import Home from '@screens/Home';

const App = () => {
  const [ fontsLoaded ] = useFonts({ NunitoSans_400Regular, NunitoSans_700Bold });

  return (
    <ThemeProvider theme={theme}>
      { fontsLoaded ? <Home /> : <ActivityIndicator /> }
    </ThemeProvider>
  )
}

export default App;