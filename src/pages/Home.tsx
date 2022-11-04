import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import ProductBox from "../components/ProductBox";
import Product from "../interfaces/Product";
import HeroBox from "../components/HeroBox";

export default function Home() {
  const [products, setProducts] = useState<any[]>([]);
  const [categories, setCategories] = useState<any[]>([]);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      // .then((json) => console.log(json))
      .then((json) => {
        setProducts(json);
        const categories = [...new Set(json.map((c: Product) => c.category))];
        setCategories(categories);
      });
  }, []);
  return (
    <>
      <HeroBox />
      <div
        id="productsView"
        className={`grid grid-cols-3`}
      >
        {products.map((product) => (
          <ProductBox product={product} key={product.id} />
        ))}
      </div>
    </>
  );
}
