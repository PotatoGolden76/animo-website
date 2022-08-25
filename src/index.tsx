import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';


import Expenses from "./routes/expenses";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="expenses" element={<Expenses />} />
      <Route
      path="*"
      element={
        <main style={{ padding: "1rem" }}>
          <p>404: There's nothing here!</p>
        </main>
      }
    />
    </Routes>
  </BrowserRouter>
);

reportWebVitals();
