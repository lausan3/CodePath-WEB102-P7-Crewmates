import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ReactDOM from 'react-dom/client'
import './index.css'

import App from './App.tsx'
import Layout from './routes/Layout.tsx'
import RouteNotFound from './routes/RouteNotFound.tsx'
import CreateAgent from './routes/CreateAgent.tsx'
import ListAgent from './routes/ListAgent.tsx'
import AgentDetail from './routes/AgentDetail.tsx'


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index={true} element={<App/>} />
          <Route index={false} path='/create' element={<CreateAgent/>} />
          <Route index={false} path='/list' element={<ListAgent/>}>
            <Route path='/list/:id' element={<AgentDetail/>} />
          </Route>
        </Route>
        <Route path='*' element={<RouteNotFound/>} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
