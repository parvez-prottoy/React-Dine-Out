import ChoseItem from "./ChoseItem";

const ChooseItems = () => {
  return (
    <div className="mb-4">
      <label className="block text-sm font-medium mb-2">Choose Items</label>
      <div className="items-container">
        <ChoseItem />
        <ChoseItem />
      </div>
    </div>
  );
};

export default ChooseItems;
