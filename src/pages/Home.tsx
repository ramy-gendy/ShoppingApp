import { useEffect, useState } from "react";
import ProductBox from "../components/ProductBox";
import Product from "../interfaces/Product";
import HeroBox from "../components/HeroBox";
import SortByComponent from "../components/SortBy";
import orderBy from "lodash/orderBy";

export default function Home() {
  const [allProducts, setAllProducts] = useState<any[]>([]);
  const [currentProducts, setCurrentProducts] = useState<any[]>([]);
  const [categories, setCategories] = useState<any[]>([]);
  const [filteredCategories, setFilteredCategories] = useState<string[]>([]);
  const [textFilter, setTextFilter] = useState<string>("");
  const [selectedSort, _] = useState<string>("");

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      // .then((json) => console.log(json))
      .then((json) => {
        setAllProducts(json);
        setCurrentProducts(orderBy(json, "title", "asc"));
        const categories = [...new Set(json.map((c: Product) => c.category))];
        setCategories(categories);
      });
  }, []);

  const handleFilteredCategoriesClick = (e: any) => {
    const categoryName = e.target.name;

    let filteredCategoriesList = filteredCategories;

    if (filteredCategoriesList.includes(categoryName)) {
      filteredCategoriesList = filteredCategoriesList.filter(
        (category) => category !== categoryName
      );
    } else {
      filteredCategoriesList.push(categoryName);
    }

    setFilteredCategories(filteredCategoriesList);

    if (filteredCategoriesList.length > 0) {
      const filteredProducts = allProducts.filter((product) =>
        filteredCategoriesList.includes(product.category)
      );
      setCurrentProducts(filteredProducts);
    } else {
      setCurrentProducts(allProducts);
    }
  };

  const sortByValue = (e: any) => {
    const selectedValue = e.target.value;

    let sortedList: any;
    switch (selectedValue) {
      case "nameAsc":
        sortedList = orderBy(currentProducts, "title", "asc");
        break;
      case "nameDesc":
        sortedList = orderBy(currentProducts, "title", "desc");
        break;
      case "priceAsc":
        sortedList = orderBy(currentProducts, "price", "asc");
        break;
      case "priceDesc":
        sortedList = orderBy(currentProducts, "price", "desc");
        break;
    }

    setCurrentProducts(sortedList);
  };

  const resetSort = () => {
    let sortedList: any;
    sortedList = orderBy(currentProducts, "title", "asc");
    setCurrentProducts(sortedList);
  };
  return (
    <>
      <HeroBox />
      <div className="grid grid-cols-2"></div>
      <div className="grid md:grid-cols-3 mb-5">
        <div id="searchInput" className="place-self-center">
          <input
            type="text"
            name="searchInput"
            maxLength={100}
            placeholder="What do you need?"
            className="border-4 h-32 w-52"
            onChange={(e) => setTextFilter(e.target.value.trim())}
          />
        </div>
        <div id="sortByFilters" className="place-self-center mb-4">
          <div className="text-3xl">Sort By</div>
          <div className={`grid grid-rows-4`}>
            <SortByComponent
              name="priceAsc"
              label="Price From Lowest to Highest"
              value="priceAsc"
              state={selectedSort}
              onChange={sortByValue}
            />
            <SortByComponent
              name="priceDesc"
              label="Price From Highest to Lowest"
              value="priceDesc"
              state={selectedSort}
              onChange={sortByValue}
            />
            <SortByComponent
              name="nameAsc"
              label="Title A-Z"
              value="nameAsc"
              state={selectedSort}
              onChange={sortByValue}
            />
            <SortByComponent
              name="nameDesc"
              label="Title Z-A"
              value="nameDesc"
              state={selectedSort}
              onChange={sortByValue}
            />
            <div className="mt-4">
              <input type="radio" value="reset" name="sortBy" onChange={resetSort} className="hover:text-orange-400 active:text-orange-400 mr-4"/>
              <label>Reset</label>
            </div>
          </div>
        </div>
        <div id="categories" className="place-self-center mb-4">
          <div className="text-3xl">Product Categories</div>
          <div className={`grid grid-rows-${categories.length}`}>
            {categories.map((category) => (
              <div key={category} className="mt-4">
                <input
                  type="checkbox"
                  value={category}
                  name={category}
                  className="hover:text-orange-400 active:text-orange-400 mr-4"
                  onClick={(e) => handleFilteredCategoriesClick(e)}
                ></input>
                <label>{category}</label>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div
        id="productsView"
        className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4`}
      >
        {currentProducts
          .filter(
            (product) => product.title.includes(textFilter) || textFilter === ""
          )
          .map((product) => (
            <ProductBox product={product} key={product.id} />
          ))}
      </div>
    </>
  );
}
