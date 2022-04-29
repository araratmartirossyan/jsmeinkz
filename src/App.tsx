import React from 'react'
import { Route, Routes } from 'react-router-dom'
import './index.css'
import { QueryClient, QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      refetchOnWindowFocus: false,
    },
  },
})

const pages = import.meta.globEager('./pages/index.ts')

const routes = Object.keys(pages['./pages/index.ts']).map((path) => {
  return {
    path: path === 'Home' ? '/' : `/${path.toLowerCase()}`,
    component: pages['./pages/index.ts'][path],
  }
})

export function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <Routes>
        {routes.map(({ path, component: RouteComp }) => {
          return <Route key={path} element={<RouteComp />} path={path} />
        })}
      </Routes>
    </QueryClientProvider>
  )
}
