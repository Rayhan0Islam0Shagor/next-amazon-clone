import Image from "next/image";
import { useSelector } from "react-redux";
import CheckoutProduct from "../components/CheckoutProduct";
import Header from "../components/Header";
import { selectItems } from "../slices/basketSlice";

const checkout = () => {
  const items = useSelector(selectItems);
  return (
    <div className="bg-gray-100">
      <Header />

      <main className="lg:flex max-w-screen-xl2 mx-auto">
        <div className="flex-grow p-5 shadow-sm">
          <Image
            src="https://links.papareact.com/ikj"
            width={1020}
            height={250}
            objectFit="contain"
          />

          <div className="flex flex-col p-5 space-y-10 bg-white">
            <h1 className="text-3xl border-b pb-4 font-bold">
              {items.length === 0
                ? "Your Amazon Basket is empty"
                : `Your Shopping Basket`}
            </h1>

            {items.map((item, i) => {
              return (
                <CheckoutProduct
                  key={i}
                  id={item.id}
                  title={item.title}
                  price={item.price}
                  description={item.description}
                  category={item.category}
                  image={item.image}
                  hasPrime={item.hasPrime}
                  rating={item.rating}
                />
              );
            })}
          </div>
        </div>
        {/* right */}
      </main>
    </div>
  );
};

export default checkout;
