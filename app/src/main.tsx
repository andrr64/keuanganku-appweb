import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';
import store, { persistor } from './redux/store';
import { Provider } from 'react-redux';
import { AlertProvider } from './views/alert/AlertContext.tsx';
import { PersistGate } from 'redux-persist/integration/react';

createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <AlertProvider>
        <App />
      </AlertProvider>
    </PersistGate>
  </Provider>
);