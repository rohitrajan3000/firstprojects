
import { useState } from 'react';
import { Button } from 'react-bootstrap';
import Navbar from 'react-bootstrap/Navbar';
import './App.css';
import Logo from './assets/7.png';
import Home from './components/home';
function App() {
  const [count, setCount] = useState(0)

  return (
    <div>

      <Navbar className="bg-body-tertiary">
        <Navbar.Brand href="/">
          <img
            src={Logo}
            width="30"
            height="30"
            className="d-inline-block align-top"
            alt=""
          />
          InstaShop!
        </Navbar.Brand>
        <Navbar.Collapse className="justify-content-end">
          <Button>login</Button>
        </Navbar.Collapse>
      </Navbar>
      <Home />

    </div>
  )
}

export default App
