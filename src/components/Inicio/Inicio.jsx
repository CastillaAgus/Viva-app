import Hero from "../Hero/Hero";
import ProductGrid from "../ProductGrid/ProductGrid";

function Inicio() {

    return( 
        <>
        <Hero />
        <ProductGrid mensaje={"Productos en Oferta"} destacados={true}/>
</>
    );
}

export default Inicio;