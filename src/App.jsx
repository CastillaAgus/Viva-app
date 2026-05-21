import { Layout } from './components/Layout/Layout';
import './App.css';
import ProductGrid from './components/ProductGrid/ProductGrid';
import TeamGrid from './components/TeamGrid/TeamGrid';
import { FormularioContainer } from './components/FormularioContainer/FormularioContainer';
import { Routes, Route } from 'react-router-dom';
import Hero from './components/Hero/Hero';
import Product from './components/Product/Product';
import Inicio from './components/Inicio/Inicio';
function App() {

  return (
   <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Inicio />} />
        <Route path="/productos" element={<ProductGrid 
                           mensaje={"Nuestros productos"} destacados={false}/>} />
         <Route path="/nosotros" element={<TeamGrid
					   Mensaje={"Nuestro Equipo"}/>} />
        <Route path="/alta" element={<FormularioContainer />} />
        <Route path="/producto/:id" element={<Product />} />
      </Route>    
    </Routes>
       )
}

export default App
