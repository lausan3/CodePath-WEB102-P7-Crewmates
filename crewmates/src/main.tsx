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
import EditAgent from './routes/EditAgent.tsx'


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index={true} element={<App/>} />
          <Route path='/create' element={<CreateAgent/>} />
          <Route path='/list/*' element={<ListAgent/>} />
            <Route path='/list/:id' element={<AgentDetail/>} />
            <Route path='/list/edit/:id' element={<EditAgent/>} />

          <Route path='/notfound' element={<RouteNotFound/>} />
          <Route path='*' element={<RouteNotFound/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
