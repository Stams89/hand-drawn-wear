import { Routes, Route } from 'react-router-dom';

import { Catalog } from "./components/Catalog";
import { Footer } from "./components/Footer";
import { TopBar } from "./components/TopBar";
import { Details } from './components/Details';
import { Header } from "./components/Header";
import { Home } from './components/Home';
import { Login } from './components/Login';
import { Register } from './components/Register';



function App() {
  return (
    <div>
      <TopBar />
      <Header />
      <main id="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/catalog" element={<Catalog />} />
          <Route path="/details" element={<Details />} />

        </Routes>

        <Footer />
      </main>

    </div>
  );
}

export default App;
