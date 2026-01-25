import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store';

import './styles/variables.css';
import './styles/layout.css';

import Home from './pages/Home';
import Modules from './pages/Modules/Modules';
import ScrollManager from './components/ScrollManager';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <Router>
        <ScrollManager />
        <div className="portfolio-wrapper">
          <nav className="navbar">
            <div className="container nav-content flex-end">
              <ul className="nav-links">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/modules">Modules</Link></li>
              </ul>
            </div>
          </nav>

          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/modules" element={<Modules />} />
            </Routes>
          </main>

          <footer className="footer container">
            <p>© 2026 Built with React and Vite | Isaac Ong</p>
          </footer>
        </div>
      </Router>
    </Provider>
  );
};

export default App;