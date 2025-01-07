// src/app/layout.tsx
'use client';

import { Provider } from 'react-redux';
import './globals.css';
import store, { persistor } from '@/redux/store';
import { ReactNode } from 'react';
import { Toaster } from '@/components/ui/toaster';
import { PersistGate } from 'redux-persist/integration/react';

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <html lang="en">
        <head>
          <title>My App</title>
          <meta name="description" content="My App description" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        </head>
        <body>
          <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
              <main>{children}</main>
            </PersistGate>
            <Toaster />
          </Provider>
        </body>
      </html>
    </>
  );
}
