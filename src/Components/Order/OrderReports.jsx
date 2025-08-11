import OrdersFilters from "./OrdersFilters";
import OrderTable from "./OrderTable";

const OrderReports = () => {
  return (
    <div>
      <div class="flex justify-between items-center mb-4">
        <h2 class="text-xl font-bold mb-4">Order Reports</h2>

        {/* Order Filters */}
        <OrdersFilters />
      </div>
      {/* Order Table */}
      <OrderTable />
    </div>
  );
};

export default OrderReports;
