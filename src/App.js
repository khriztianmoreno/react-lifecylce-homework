import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Home from './pages/Home'
import Detail from './pages/Detail'

import './App.css';

function App() {
  return (
    <BrowserRouter>
      {/* Navbar */}
      {/* <Navbar /> */}

      {/* Routing */}
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/:id" exact component={Detail} />
      </Switch>

      {/* Footer */}
      {/* <Footer /> */}
    </BrowserRouter>
  );
}

export default App;
