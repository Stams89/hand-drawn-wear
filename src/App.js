import { Routes, Route, useNavigate } from 'react-router-dom';

import { AuthContext } from './services/contexts/AuthContext';

import { Catalog } from "./components/Catalog";
import { Footer } from "./components/Footer";
import { TopBar } from "./components/TopBar";
import { Details } from './components/Details';
import { Header } from "./components/Header";
import { Home } from './components/Home';
import { Login } from './components/Login';
import { Register } from './components/Register';
import { useState } from 'react';



function App() {
  const [auth, setAuth] = useState({});
  const navigate = useNavigate();

  const userLogin = (authData) => {
    setAuth(authData)
  }

  return (
    <AuthContext.Provider value={{ user:auth, userLogin}}>
    <div >
      <TopBar />
      <Header />
      <main id="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={ <Register />}/>
          <Route path="/catalog" element={<Catalog />} />
          <Route path="/details" element={<Details />} />

        </Routes>

        <Footer />
      </main>

    </div>
    </AuthContext.Provider>
  );
}

export default App;
