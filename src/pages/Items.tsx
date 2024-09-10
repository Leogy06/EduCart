import React, { ReactNode, useEffect, useState } from "react";
import { useAPIInstance } from "../api/getLink";
import Card from "../components/cards/Card";
import ItemSkeletonLoader from "../layouts/ItemSkeletonLoader";
import Button from "../layouts/Button";
import { FaPlus } from "react-icons/fa6";

interface ItemContainerProps {
  children: ReactNode;
}

const ItemContainer: React.FC<ItemContainerProps> = ({ children }) => {
  return <div className=" grid grid-cols-1 md:grid-cols-3">{children}</div>;
};

export interface ItemUseState {
  _id: string;
  name: string;
  category: string;
  stockQuantity: number;
}

interface ItemCardProps {
  item: ItemUseState;
}

const ItemCard: React.FC<ItemCardProps> = ({ item }) => {
  return (
    <div>
      <Card
        name={item.name}
        category={item.category}
        stockQuantity={item.stockQuantity}
      />
    </div>
  );
};

const Items = () => {
  const eduCartAPI = useAPIInstance();
  const [items, setItems] = useState<ItemUseState[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchItems = async () => {
      setIsLoading(true);
      try {
        const response = await eduCartAPI.get("/items/getAllItems");

        setItems(response.data.items);
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchItems();
  }, [eduCartAPI]);

  return (
    <div className=" min-h-full">
      <h1 className="text-lg mb-8">Products</h1>
      {isLoading ? (
        <ItemSkeletonLoader />
      ) : (
        <ItemContainer>
          {items.map((item) => (
            <ItemCard key={item._id} item={item} />
          ))}
        </ItemContainer>
      )}
      {/* Creat item button  */}
      <Button
        btnClassName=" absolute bottom-2 right-2"
        onBtnClick={() => console.log("Hello")}
        btnText="Add item"
      />
    </div>
  );
};

export default Items;
