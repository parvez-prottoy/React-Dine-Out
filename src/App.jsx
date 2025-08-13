import { useState } from "react";
import Header from "./Components/Header/Header";
import CreateOrder from "./Components/Order/CreateOrder";
import OrderReports from "./Components/Order/OrderReports";
import OrderSummery from "./Components/Order/OrderSummery";

const App = () => {
  const [confirmOrders, setConfirmOrders] = useState([]);
  const handleConfirmOrders = (orders) => {
    setConfirmOrders([...confirmOrders, orders]);
  };
  return (
    <div className="container mx-auto px-4 flex flex-col">
      <Header />
      <main className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6  flex-col md:flex-row">
        {/* Left Sidebar */}
        <CreateOrder onConfirmOrders={handleConfirmOrders} />
        {/* Right Sidebar */}
        <div className="md:col-span-2">
          {/* Order Summery */}
          <OrderSummery />
          {/* Order Reports */}
          <OrderReports />
        </div>
      </main>
    </div>
  );
};

export default App;
