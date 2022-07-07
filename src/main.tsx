import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import { Home } from './pages/Home'
import Admin from './pages/Admin'
import { Job } from './pages/Job'
import { JobForm } from './pages/JobForm'

import './index.css'
import { QueryClient, QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'

import { Footer } from './components/Footer/Footer'

import { Login } from './pages/Login'
import { SignUp } from './pages/SignUp'


const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      refetchOnWindowFocus: false,
    },
  },
})

ReactDOM.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <Router>
        <div className="min-h-screen flex flex-col justify-between">
        <Routes>
          <Route path="/login" element={<Login />}/>
          <Route path="/signUp" element={<SignUp />}/>
          <Route path="/admin" element={<Admin />} />
          <Route path="/job/create" element={<JobForm />} />

            <Route path="/job/:id" element={<Job />} />

            <Route path="/" element={<Home />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </QueryClientProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
