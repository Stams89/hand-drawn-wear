import { Routes, Route } from 'react-router-dom';

import { Catalog } from "./components/Catalog";
import { Footer } from "./components/Footer";
import { TopBar } from "./components/TopBar";
import { Products } from "./components/Products";
import { Subscribe } from "./components/Subscribe";
import { Header } from "./components/Header";
import { Home } from './components/Home';


function App() {
  return (
    <div>
      <TopBar />
      <Header />
      <main id="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </main>
      

      <Catalog />

      <Products />

      <Subscribe />

      <Footer />
    </div>
  );
}

export default App;
