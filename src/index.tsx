import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { Route,Router,BrowserRouter, Routes, HashRouter, Navigate, Link, } from 'react-router-dom';
import routers from './routers';
import type { RoutersConfigType } from './routers';
import store from './store';
import { Provider } from 'react-redux';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    {/* 这里可以换成 BrowserRouter，因为要放到git上，所以临时使用hash */}
    <HashRouter basename=''>
      <Suspense fallback={<h1>lodaing.....</h1>}>
        <Provider store={store}>
          <header className="App-header">
            {RenderNav(routers)}
          </header>
          <Routes>
            {RenderMyRoutes(routers)}
            <Route path="*" element={<h1>404...</h1>} />
          </Routes>
        </Provider>
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