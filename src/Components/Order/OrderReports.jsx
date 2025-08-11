import OrdersFilters from "./OrdersFilters";
import OrderTable from "./OrderTable";

const OrderReports = () => {
  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold mb-4">Order Reports</h2>

        {/* Order Filters */}
        <OrdersFilters />
      </div>
      {/* Order Table */}
      <OrderTable />
    </div>
  );
};

export default OrderReports;
