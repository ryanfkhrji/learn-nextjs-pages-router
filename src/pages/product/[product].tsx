// Pembuatan Slug: [id].tsx
// File: src/pages/product/[id].tsx

import { fetcher } from '@/lib/swr/fetcher';
import { ProductType } from '@/types/product.type';
import DetailProductView from '@/views/DetailProduct';
import { useRouter } from 'next/router';
import useSWR from 'swr';

const DetailProductPage = ({product}: { product: ProductType }) => {
  const { query} = useRouter();

  // Client-side fetching using SWR
  // const { data, error, isLoading } = useSWR(`/api/product/${query.product}`, fetcher);

  return (
    <div>
      {/* Client-side fetching using SWR */}
      {/* <DetailProductView product={isLoading ? {} : data.data} /> */}

      {/* Server-side rendering */}
      <DetailProductView product={product} />
    </div>
  );
}

export default DetailProductPage;

// Using Server-side rendering to fetch product data
export async function getServerSideProps({params}: {params: {product: string}}) {
  // didalam params itu kenapa namanya product, karena di [product].tsx
  // params.product itu adalah slug yang kita buat di [product].tsx

  // fecth data
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/product/${params.product}`);
  const response = await res.json();

  return {
    props: {
      product: response.data,
    },
  };
}