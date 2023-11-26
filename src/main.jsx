import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  RouterProvider
} from "react-router-dom";
import router from './Routes/Router.jsx';
import { Toaster } from 'react-hot-toast';
import AuthProvider from './Provider/AuthProvider.jsx';
import {HelmetProvider} from 'react-helmet-async'
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')).render(
  <HelmetProvider>
  <AuthProvider>
     <QueryClientProvider client={queryClient}>
     <Toaster />
      <RouterProvider router={router} />
     </QueryClientProvider>
    </AuthProvider>
    </HelmetProvider>
)
