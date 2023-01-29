import { Link, Outlet } from 'react-router-dom';
import './App.css';
import routers from './routers';
import type { RoutersConfigType } from './routers';


function App(props: any) {
  console.log(props, 'app的props')
  return (
    <div className="App">
      <div>
        <Outlet />
      </div>
    </div >
  );
}

export default App;
