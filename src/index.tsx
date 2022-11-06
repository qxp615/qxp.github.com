import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { Route, Routes, HashRouter } from 'react-router-dom';
import routers from './routers';
import type { RoutersConfigType } from './routers';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <HashRouter basename='/'>
      <Suspense fallback={<h1>lodaing.....</h1>}>
        <Routes>
          {RenderMyRoutes(routers)}
          <Route path="1" element={<h1>404...</h1>} />
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
  const route = routesConfig.map(({ path, name, component: Com, children }) => {
    return <Route key={Math.random()} path={path} element={<Com />}>
      {
        children ? RenderMyRoutes(children) : undefined
      }
    </Route>
  })
  console.log(route, 'route')
  return route
}
