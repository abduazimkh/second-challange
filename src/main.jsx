import './index.css';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Suspense, lazy } from 'react';

const App = lazy(() => import('./App.jsx'));

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Suspense fallback={<p>Loading...</p>}>
      <App />
    </Suspense>
  </BrowserRouter>,
)
