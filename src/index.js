import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { MoralisProvider } from "react-moralis";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <MoralisProvider
      appId="n1CzwpppspIBO2BjqGuIyz82jmYdNomolssGtJif"
      serverUrl="https://zqbso7qvufd9.usemoralis.com:2053/server"
      >
       <App />
    </MoralisProvider>

  </React.StrictMode>
);

