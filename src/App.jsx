import { Layout } from './components/Layout/Layout';
import './App.css';
import ProductGrid from './components/ProductGrid/ProductGrid';
import TeamGrid from './components/TeamGrid/TeamGrid';
function App() {

  return (
   
      <Layout>
        <ProductGrid />    
        <TeamGrid />
      </Layout>  
       )
}

export default App
