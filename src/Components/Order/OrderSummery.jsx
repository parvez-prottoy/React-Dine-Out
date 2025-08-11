import SummaryCard from "./SummaryCard";

const OrderSummery = () => {
  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Order Summary</h2>
      <div className="grid grid-cols-3 gap-4 mb-6">
        {/* Summary Card Total Orders */}
        <SummaryCard
          style={{
            textColor: "text-yellow-200",
            textColorNum: "text-yellow-500",
            bgColor: "bg-yellow-800",
            totalOrders: 8,
          }}
        >
          Total Order
        </SummaryCard>
        {/* Summary Card Pending Orders */}
        <SummaryCard
          style={{
            textColor: "text-red-200",
            textColorNum: "text-red-500",
            bgColor: "bg-red-800",
            totalOrders: 3,
          }}
        >
          Pending
        </SummaryCard>
        {/* Summary Card Delivered Orders */}
        <SummaryCard
          style={{
            textColor: "text-green-200",
            textColorNum: "text-green-500",
            bgColor: "bg-green-800",
            totalOrders: 5,
          }}
        >
          Delivered
        </SummaryCard>
      </div>
    </div>
  );
};

export default OrderSummery;
