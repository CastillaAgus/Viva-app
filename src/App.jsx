import { Layout } from './components/Layout/Layout';
import './App.css';
import ProductGrid from './components/ProductGrid/ProductGrid';
import TeamGrid from './components/TeamGrid/TeamGrid';
import { FormularioContainer } from './components/FormularioContainer/FormularioContainer';
import { Routes, Route } from 'react-router-dom';
import Hero from './components/Hero/Hero';
import Product from './components/Product/Product';

function App() {

  return (
   <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Hero />} />
        <Route path="/productos" element={<ProductGrid 
                           Mensaje={"Nuestro productos"}/>} />
         <Route path="/nosotros" element={<TeamGrid
					   Mensaje={"Conoce a nuestro equipo"}/>} />
        <Route path="/alta" element={<FormularioContainer />} />
        <Route path="/producto/:id" element={<Product />} />
      </Route>    
    </Routes>
       )
}

export default App
