import { useState } from 'react';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { createTheme } from '@mui/material/styles';
import BusinessList from './components/BusinessList';

const theme = createTheme();

function App() {
  const [location] = useState("Alpharetta");
  const [category] = useState("icecream");

  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <BusinessList
          limit={5}
          location={location}
          category={category}
        />
      </ThemeProvider>
    </div>
  );
}

export default App;
