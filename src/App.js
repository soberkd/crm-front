import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";
import MainApp from "./scenes/global/MainApp";
import Auth from "./scenes/global/Auth";
import { useState, useEffect } from "react";

const dummyToken = "your_dummy_token_here";

function App() {
  const [theme, colorMode] = useMode();
  const [userToken, setUserToken] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const storedToken = localStorage.getItem("userToken");

    if (storedToken) {
      setUserToken(storedToken);
    }

    setLoading(false);
  }, []);

  const handleLogin = async (credentials) => {
    try {
      setLoading(true);
      setUserToken(dummyToken);
      localStorage.setItem("userToken", dummyToken);
    } catch (error) {

    } finally {
      setLoading(false);
    }
  };

  const handleLogout = () => {
    setUserToken(null);
    localStorage.removeItem("userToken");
  };

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {loading ? (
          <div>Loading...</div>
        ) : userToken ? (
          <MainApp onLogout={handleLogout} />
        ) : (
          <Auth onLogin={handleLogin} />
        )}
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
