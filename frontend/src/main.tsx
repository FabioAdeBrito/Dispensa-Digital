import React from 'react'
import ReactDOM from 'react-dom/client'
import MyApp from './App.tsx'
import { Theme  } from '@radix-ui/themes'
import '@radix-ui/themes/styles.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Theme>
      <MyApp />
    </Theme>
  </React.StrictMode>,
)
