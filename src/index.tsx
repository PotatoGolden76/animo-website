import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
  Routes,
  Route,
  HashRouter
} from 'react-router-dom';

import NotFound from './routes/notfound';
import About from './routes/about';
import Team from './routes/team';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <HashRouter>
    <Routes>
      
      <Route path="/" element={<App />} />
      <Route path="/about" element={<About />} />
      <Route path="/team" element={<Team />} />
      <Route path="/articles" element={<App />} />
      <Route path="/contact" element={<App />} />
      <Route path="/testimonials" element={<App />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </HashRouter>
);

reportWebVitals();
