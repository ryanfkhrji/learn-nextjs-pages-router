import { useRouter } from "next/router";

const ShopPage = () => {
  const { query } = useRouter();
  console.log("Query parameters:", query);

  return (
    <div>
      <h1>Shop Page</h1>
      {/* <p>Shop : {`${query.slug ? query.slug[0] + "-" + query.slug[1]: ""}`}</p> */}

      {query.slug && query.slug.length > 0 ? (
        <p>Shop: {query.slug[0]} - {query.slug[1]}</p>
      ) : (
        <p>Tidak ada slug</p>
      )}
    </div>
  );
};

export default ShopPage;
