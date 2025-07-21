import Link from "next/link";
import styles from "./DetailProduct.module.scss";
import { ProductType } from "@/types/product.type";

const DetailProductView = ({product}: { product: ProductType }) => {

  return (
    <>
      <h1 className={styles.title}>Detail Product</h1>
      <div className={styles.productDetail}>
        <div className={styles.productDetail__image}>
          <img src={product.image} alt={product.name} />
        </div>
        <h4 className={styles.productDetail__name}>{product.name}</h4>
        <p className={styles.productDetail__category}>{product.category}</p>
        <p className={styles.productDetail__price}>{product.price && product.price.toLocaleString("id-ID", { style: "currency", currency: "IDR" })}</p>
        <Link href="/product">
          <button className={styles.productDetail__backButton}>Back to Products</button>
        </Link>
      </div>
    </>
  );
}

export default DetailProductView;