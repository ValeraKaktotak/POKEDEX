import ReactDOM from 'react-dom/client'
import { QueryClient, QueryClientProvider } from 'react-query'

import App from './App.tsx'

import './index.css'

const queryClient = new QueryClient()

const container = document.getElementById('root') as HTMLElement

if (container !== null && container !== undefined) {
  ReactDOM.createRoot(container).render(
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  )
}
