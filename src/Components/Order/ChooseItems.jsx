import ChoseItem from "./ChoseItem";

const ChooseItems = () => {
  return (
    <div class="mb-4">
      <label class="block text-sm font-medium mb-2">Choose Items</label>
      <div class="items-container">
        <ChoseItem />
        <ChoseItem />
      </div>
    </div>
  );
};

export default ChooseItems;
