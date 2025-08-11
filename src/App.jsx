import Header from "./Components/Header/Header";
import CreateOrder from "./Components/Order/CreateOrder";
import OrderSummery from "./Components/Order/OrderSummery";

const App = () => {
  return (
    <div className="container mx-auto px-4 h-auto md:h-screen flex flex-col">
      <Header />
      <main className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6 flex-grow">
        {/* Left Sidebar */}
        <CreateOrder />
        {/* Right Sidebar */}
        <div className="md:col-span-2 h-[calc(100vh - 130px)]">
          {/* Order Summery */}
          <OrderSummery />
        </div>
      </main>
    </div>
  );
};

export default App;
