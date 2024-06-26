import ReactDOM from 'react-dom/client'
import { QueryClient, QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'

import { StoreProvider } from './utils/context/store/index.ts'
import App from './App.tsx'

import './assets/css/global.css'

const queryClient = new QueryClient()

const container = document.getElementById('root') as HTMLElement

if (container !== null && container !== undefined) {
  ReactDOM.createRoot(container).render(
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <StoreProvider>
        <App />
      </StoreProvider>
    </QueryClientProvider>
  )
}
