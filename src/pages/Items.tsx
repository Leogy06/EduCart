import React, { useEffect, useState } from "react";
import { useAPIInstance } from "../api/getLink";

interface Items {
  _id: string;
  name: string;
}

const Items = () => {
  const eduCartAPI = useAPIInstance();
  const [items, setItems] = useState<Items[]>([]);

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
      <h1 className="text-lg">Products</h1>
      {items.map((item) => (
        <div key={item._id} className=" border border-red-500">
          {item.name}
        </div>
      ))}
    </>
  );
};

export default Items;
