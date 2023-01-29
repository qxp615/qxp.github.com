import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { Route, Routes, HashRouter, Navigate, Link } from 'react-router-dom';
import routers from './routers';
import type { RoutersConfigType } from './routers';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>

    <HashRouter basename=''>
      <Suspense fallback={<h1>lodaing.....</h1>}>
        <header className="App-header">
          {RenderNav(routers)}
        </header>
        <Routes>
          {RenderMyRoutes(routers)}
          <Route path="*" element={<h1>404...</h1>} />
        </Routes>
      </Suspense>
    </HashRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

function RenderMyRoutes(routesConfig: RoutersConfigType) {
  const route = routesConfig.map(({ path, name, component: Com, children, redirect, index }) => {
    return <>
      <Route index={index} key={Math.random()} path={path} element={redirect ? <Navigate to={redirect}></Navigate> : <Com />}>
        {
          children ? RenderMyRoutes(children) : undefined
        }
      </Route>
    </>
  })
  console.log(route, 'route')
  return route
}


function RenderNav(routers: RoutersConfigType, fatherPath = '') {
  return <ol>
    {routers.map(({ path, name, children }) => {
      let to = ''
      if (path[0] === '/') {
        to = path
      } else if (fatherPath && fatherPath !== '/') {
        to = fatherPath + '/' + path
      } else {
        to = path
      }
      return <li key={name + path}>
        <Link to={to}>{name}</Link>
        {
          children ? RenderNav(children, fatherPath = to) : undefined
        }
      </li>
    })}
  </ol>
}