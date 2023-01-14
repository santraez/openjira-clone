import { CssBaseline, ThemeProvider } from '@mui/material';
import { lightTheme, darkTheme } from '../themes';
import { UIProvider } from '../context/ui';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import '../styles/globals.css';

const App = ({ Component, pageProps }) => {
  return (
    <UIProvider>
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </UIProvider>
  );
};

export default App;
