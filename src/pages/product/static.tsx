import ProductView from "@/views/Product/Main";
import { ProductType } from "@/types/product.type";

const ProductPage = (props: { products: ProductType[] }) => {
  const { products } = props;

  return (
    <div>
      <ProductView products={products} />
    </div>
  );
};

export default ProductPage;

export async function getStaticProps() {
  // fecth data
  const res = await fetch("http://localhost:3000/api/product");
  const response = await res.json();

  return {
    props: {
      products: response.data,
    },
    // ngeregenerate the page every 10 seconds
    revalidate: 10,
  };
}