import ReactDOM from 'react-dom/client'
import { QueryClient, QueryClientProvider } from 'react-query'
import { RouterProvider } from 'react-router-dom'

import { router } from './routes/routesConfig.tsx'

import './index.css'

const queryClient = new QueryClient()
const container = document.getElementById('root') as HTMLElement

if (container !== null && container !== undefined) {
  ReactDOM.createRoot(container).render(
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  )
}
