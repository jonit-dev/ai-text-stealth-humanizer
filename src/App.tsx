import React from 'react';
import { Layout } from './components/layout/Layout';
import { Home } from './pages/Home';
import { AppPage } from './pages/App';

function App() {
  const path = window.location.pathname;

  return (
    <Layout>
      {path === '/' && <Home />}
      {path === '/app' && <AppPage />}
    </Layout>
  );
}

export default App;