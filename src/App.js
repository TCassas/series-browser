import './App.css'
import Home from './components/Home'
import Info from './components/Info'
import React  from 'react'
import { Switch, Link, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

function App() {
  const location = useLocation();
  return (
    <div>
      <AnimatePresence>
        <Switch location={location} key={location.key}>
          <Route path='/' exact component={Home}/>
          <Route path='/show/:id' component={Info}/>
        </Switch>
      </AnimatePresence>
    </div>
  );
}

export default App;
