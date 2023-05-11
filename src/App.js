import React from "react";
import GlobalStyle from "./styles/global.js";
import RoutesApp from "./routes/index.js";
import { AuthProvider } from "./contexts/auth.js";

const App = () => {
  return (
    <AuthProvider>
      <RoutesApp />
      <GlobalStyle />
    </AuthProvider>
  );
};

export default App;
