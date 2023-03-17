import { Catalog } from "./components/Catalog";
import { Footer } from "./components/Footer";
import { Navigation } from "./components/Navigation";
import { Products } from "./components/Products";
import { Subscribe } from "./components/Subscribe";


function App() {
  return (
    <div>
      <Navigation />

      <Catalog />

      <Products />

      <Subscribe />

      <Footer />
    </div>
  );
}

export default App;
