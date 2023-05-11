import React from "react";
import GlobalStyle from './styles/global.js';
import RoutesApp from "./routes/index.js";
import { AuthProvider } from "./contexts/auth.js";
import { Provider } from 'react-redux';
import  store  from './store';

const App = () => {
  return (
    <AuthProvider>
      <Provider store={store}>
      <RoutesApp />
      <GlobalStyle />
    </Provider>
    </AuthProvider>
  );
};

export default App;
