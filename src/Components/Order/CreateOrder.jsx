import ChooseItems from "./ChooseItems";
import CustomerInput from "./CustomerInput";

const CreateOrder = () => {
  return (
    <div className="bg-cardbg rounded-lg p-6 h-[calc(100vh - 130px)]">
      <h2 className="text-xl font-bold mb-1">CREATE ORDER</h2>
      <p className="text-gray-400 text-sm mb-4">
        Accurately fulfill customer orders based on a precise understanding of
        their requirements.
      </p>
      {/* Customer Name Input */}
      <CustomerInput />
      {/* Choose Items  */}
      <ChooseItems />
      {/* Place Order Button */}
      <button className="w-full bg-primary hover:bg-opacity-90 text-white font-medium py-3 rounded-full transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1">
        Place Order (BDT 100)
      </button>
    </div>
  );
};

export default CreateOrder;
