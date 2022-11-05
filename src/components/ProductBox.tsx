import Product from "../interfaces/Product";

interface Props {
  product: Product;
}

export default function ProductBox({product}: Props) {
  return (
    <div className="flex flex-col m-2 border-2 rounded-xl">
      <img
        src={product.image}
        alt={product.title}
        className="w-52 h-52 self-center mt-4 ml-4"
      ></img>
      <div className="text-gray-400 mb-4 mt-4 ml-4 text-lg capitalize">
        {" "}
        {product.category}{" "}
      </div>
      <div className="mb-4 mt-4 ml-4 text-xl"> {product.title} </div>
      <div className="mb-4 mt-4 ml-4 text-xl"> ${product.price} </div>
    </div>
  );
}
