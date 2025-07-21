import { fetcher } from "@/lib/swr/fetcher";
import ProductView from "@/views/Product/Main";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import useSWR from "swr";

const ProductPage = () => {
  const [isLogin, setIsLogin] = useState(true);
  // const [products, setProducts] = useState([]);
  // const [isLoading, setIsLoading] = useState(false);
  const { push } = useRouter();

  useEffect(() => {
    if (!isLogin) {
      push("/auth/login");
    }
  }, []);

  // Fetching product data using SWR
  const { data, error, isLoading } = useSWR("/api/product", fetcher);

  // useEffect(() => {
  //   fetch("/api/product")
  //     .then((response) => response.json())
  //     .then((res) => {
  //       setProducts(res.data);
  //     })
  //     .catch((error) => {
  //       console.error("Error fetching product data:", error);
  //     });
  // }, []);

  return (
    <ProductView products={isLoading ? {} : data.data}/>
  );
};

export default ProductPage;
