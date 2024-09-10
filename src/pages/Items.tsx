import React, { ReactNode, useEffect, useState } from "react";
import { useAPIInstance } from "../api/getLink";
import Card from "../components/cards/Card";

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

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await eduCartAPI.get("/items/getAllItems");

        setItems(response.data.items);
      } catch (error) {
        console.error(error);
      }
    };
    fetchItems();
  }, [eduCartAPI]);

  return (
    <>
      <h1 className="text-lg mb-8">Products</h1>
      <ItemContainer>
        {items.map((item) => (
          <ItemCard key={item._id} item={item} />
        ))}
      </ItemContainer>
    </>
  );
};

export default Items;
