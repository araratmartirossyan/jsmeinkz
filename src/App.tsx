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

const pages = import.meta.globEager('./pages/*.tsx')

const routes = Object.keys(pages).map((path) => {
  // @ts-ignore
  const name = path.match(/\.\/pages\/(.*)\.tsx$/)[1]
  return {
    name,
    path: name === 'Home' ? '/' : `/${name.toLowerCase()}`,
    component: pages[path].default,
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
