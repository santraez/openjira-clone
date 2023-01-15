import { CssBaseline, ThemeProvider } from '@mui/material';
import { UIProvider } from '../context/ui';
import { EntriesProvider } from '../context/entries';
import { lightTheme, darkTheme } from '../themes';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import '../styles/globals.css';

const App = ({ Component, pageProps }) => {
  return (
    <EntriesProvider>
      <UIProvider>
        <ThemeProvider theme={darkTheme}>
          <CssBaseline />
          <Component {...pageProps} />
        </ThemeProvider>
      </UIProvider>
    </EntriesProvider>
  );
};

export default App;
