import React, { useMemo, Suspense } from 'react';
import logo from './logo.svg';
import { BrowserRouter, Routes, Router, Link, Route, Outlet } from 'react-router-dom';
import './App.css';
import routers from './routers';
import type { RoutersConfigType } from './routers';


function App(props: any) {
  console.log(props, 'app的props')
  return (
    <div className="App">
      <header className="App-header">
        {RenderNav(routers)}
      </header>
      <div>
        <Outlet />
      </div>
    </div >
  );
}

function RenderNav(routers: RoutersConfigType, fatherPath = '') {
  console.log('Nav 更新了')
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
      console.log(to, 111)
      return <li key={name + path}>
        <Link to={to}>{name}</Link>
        {
          children ? RenderNav(children, fatherPath = to) : undefined
        }
      </li>
    })}
  </ol>
}

export default App;
