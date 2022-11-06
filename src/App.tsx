import { Link, Outlet } from 'react-router-dom';
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

export default App;
