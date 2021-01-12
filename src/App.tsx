import React from 'react';

import GlobalStyle from './styles/global';
import Planilha from './pages/Planilha';
// import LandingPage from './pages/LandingPage';

const App: React.FC = () => (
  <>
    <Planilha />
    <GlobalStyle />
  </>
);

export default App;
