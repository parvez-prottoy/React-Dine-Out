import ChoseItem from "./ChoseItem";
import { foods as foodData } from "../../db/foods.js";
import { useState } from "react";
const ChooseItems = ({ onOrderItems, orderItems }) => {
  const [foods] = useState(foodData);
  return (
    <div className="mb-4">
      <label className="block text-sm font-medium mb-2">Choose Items</label>
      <div className="items-container">
        {foods.map((food) => (
          <ChoseItem
            key={food.id}
            food={food}
            onOrderItems={onOrderItems}
            orderItems={orderItems}
          />
        ))}
      </div>
    </div>
  );
};

export default ChooseItems;
