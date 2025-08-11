import Header from "./Components/Header/Header";
import CreateOrder from "./Components/Order/CreateOrder";

const App = () => {
  return (
    <div className="container mx-auto px-4 h-screen flex flex-col">
      <Header />
      <main className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6 flex-grow">
        {/* Left Sidebar */}
        <CreateOrder />
      </main>
    </div>
  );
};

export default App;
