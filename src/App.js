import { useState } from 'react';
import './App.css';
import Feature from './pages/Feature';
import Header from './components/Header';
import Footer from './components/Footer';
import Profile from './pages/Profile';
import Home from './pages/Home';

function App() {
  const [menu, setMenu] = useState(1);

  const content = () => {
    if (menu === 1) {return <Home/>}
    else if(menu === 2) {return <Feature />}
    else if(menu === 3) {return <Profile />}
  }

  return (
    <div className="App">
      <Header onClick={setMenu} />
      {content()}
      <Footer />
    </div>
  );
}

export default App;
