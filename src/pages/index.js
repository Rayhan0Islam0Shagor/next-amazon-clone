import Head from "next/head";
import Banner from "../components/Banner";
import Header from "../components/Header";
import ProductFeed from "../components/ProductFeed";

export default function Home({ Products }) {
  return (
    <div className="bg-grey-100">
      <Head>
        <title>Amazon 2.0</title>
      </Head>

      <Header />
      <div className="max-w-screen-2xl mx-auto">
        <Banner />
        <ProductFeed products={Products} />
      </div>
    </div>
  );
}

export const getServerSideProps = async (context) => {
  const res = await fetch("https://fakestoreapi.com/products");
  const Products = await res.json();

  return {
    props: {
      Products,
    },
  };
};
