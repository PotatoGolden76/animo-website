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
import Articles from './routes/articles';
import Simona from './routes/members/simona';
import Ioana from './routes/members/ioana';
import Monica from './routes/members/monica';
import Augustina from './routes/members/augustina';
import Maria from './routes/members/maria';
import Iuliana from './routes/members/iuliana';
import Vera from './routes/members/vera';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <HashRouter>
    <Routes>
      
      <Route path="/" element={<App />} />
      <Route path="/about" element={<About />} />
      <Route path="/team" element={<Team />} />
      <Route path="/articles" element={<Articles />} />
      <Route path="/contact" element={<App />} />
      <Route path="/testimonials" element={<NotFound />} />

      <Route path="/members/simona" element={<Simona />} />
      <Route path="/members/ioana" element={<Ioana />} />
      <Route path="/members/monica" element={<Monica />} />
      <Route path="/members/augustina" element={<Augustina />} />
      <Route path="/members/maria" element={<Maria />} />
      <Route path="/members/iuliana" element={<Iuliana />} />
      <Route path="/members/vera" element={<Vera />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </HashRouter>
);

reportWebVitals();
