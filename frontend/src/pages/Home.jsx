import Header from "../components/Header";
import Footer from "../components/Footer";
import ProductCard from "../components/ProductCard";
export default function Home() {


  return (
    <div className="h-screen flex flex-col">
      <Header />

     
        {/*Product Boxes */}

        
          <ProductCard />

   
      <Footer />
    </div>
  );
}
