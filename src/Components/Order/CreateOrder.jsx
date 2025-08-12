import { useState } from "react";
import ChooseItems from "./ChooseItems";
import CustomerInput from "./CustomerInput";

const CreateOrder = () => {
  const [customerName, setCustomerName] = useState("");
  const [orderItems, setOrderItems] = useState([]);
  const handleCusNameChange = (name) => {
    setCustomerName(name);
  };
  const handlePlaceOrder = () => {
    if (customerName.length === 0) {
      return alert("Please enter a customer name before placing an order.");
    }
  };
  const handleOrderItems = (item) => {
    if (orderItems.some((i) => i.id === item.id)) {
      return setOrderItems(orderItems.filter((i) => i.id !== item.id));
    }
    setOrderItems([...orderItems, item]);
  };
  console.log(orderItems);
  return (
    <div className="bg-cardbg rounded-lg p-6 ">
      <h2 className="text-xl font-bold mb-1">CREATE ORDER</h2>
      <p className="text-gray-400 text-sm mb-4">
        Accurately fulfill customer orders based on a precise understanding of
        their requirements.
      </p>
      {/* Customer Name Input */}
      <CustomerInput onCusName={handleCusNameChange} />
      {/* Choose Items  */}
      <ChooseItems onOrderItems={handleOrderItems} orderItems={orderItems} />
      {/* Place Order Button */}
      <button
        onClick={handlePlaceOrder}
        className="w-full bg-primary hover:bg-opacity-90 text-white font-medium py-3 rounded-full transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1 cursor-pointer"
      >
        Place Order (BDT 100)
      </button>
    </div>
  );
};

export default CreateOrder;
