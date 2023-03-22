import { Routes, Route, useNavigate } from 'react-router-dom';

import { AuthContext } from './services/contexts/AuthContext';
import { useLocalStorage } from './hooks/useLocalStorage';

import { Catalog } from "./components/Catalog";
import { Footer } from "./components/Footer";
import { TopBar } from "./components/TopBar";
import { Details } from './components/Details';
import { Header } from "./components/Header";
import { Home } from './components/Home';
import { Login } from './components/Login';
import { Register } from './components/Register';
import { useState } from 'react';
import { Logout } from './components/Logout';
import { AddProduct } from './components/AddProduct';
import { useEffect } from 'react';
import firebase from '../src/components/firebase';
import "../src/components/firebase";


function App() {
  const [auth, setAuth] = useState({});
  const navigate = useNavigate();

  const [products, setProducts] = useState([]);
 
  useEffect(() => {
    const db = firebase.firestore();
    db.collection("Products")
      .get()
      .then((result) => {
        const data = [];
        result.forEach((doc) => {
          data.push({ id: doc.id, ...doc.data() });
        });
        setProducts(data);
      });
  }, []);
 

  const userLogin = (authData) => {
    setAuth(authData)
  }

  const onAddProductSubmit = async (data) => {
    const db = firebase.firestore();
    const newProductRef = await db.collection("Products").add(data);
    navigate ('/catalog');
    // perform any additional actions here, such as displaying a success message or redirecting the user
  }
  console.log(products);
  return (
    <AuthContext.Provider value={{ user: auth, userLogin }}>
      <div >
        <TopBar />
        <Header />
        <main id="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/catalog" element={<Catalog products={products} />} />
            <Route path="/logout" element={<Logout />} />
            <Route path="/add" element={<AddProduct onAddProductSubmit={onAddProductSubmit}/>} />
            <Route path="/catalog/:prodId" element={<Details  />} />
          </Routes>

          <Footer />
        </main>

      </div>
    </AuthContext.Provider>
  );
}

export default App;