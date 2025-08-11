import OrderTableRow from "./OrderTableRow";

const OrderTable = () => {
  return (
    <div class="bg-cardbg rounded-lg p-4">
      <div class="reports-container">
        <table class="min-w-full">
          <thead>
            <tr class="text-left text-sm">
              <th class="pb-3 font-medium">ID</th>
              <th class="pb-3 font-medium">Customer Name</th>
              <th class="pb-3 font-medium">Items</th>
              <th class="pb-3 font-medium">Amount</th>
              <th class="pb-3 font-medium">Status</th>
              <th class="pb-3 font-medium">Action</th>
            </tr>
          </thead>
          <tbody class="text-sm">
            <OrderTableRow />
            <OrderTableRow />
            {/* <!-- Row 1 --> */}
            {/* <tr class="border-t border-gray-700">
                <td class="py-3">21</td>
                <td class="py-3">Sumit Saha</td>
                <td class="py-3">5</td>
                <td class="py-3">123123</td>
                <td class="py-3">
                  <span class="text-red-500">PENDING</span>
                </td>
                <td class="py-3">
                  <button class="bg-gray-800 hover:bg-red-600 text-xs px-3 py-1 rounded-full mr-1 transition-colors duration-300">
                    Delete
                  </button>
                  <button class="bg-gray-800 hover:bg-green-600 text-xs px-3 py-1 rounded-full transition-colors duration-300">
                    DELIVER
                  </button>
                </td>
              </tr> */}

            {/* <!-- Row 2 --> */}
            {/* <tr class="border-t border-gray-700">
                <td class="py-3">21</td>
                <td class="py-3">Akash Ahmed</td>
                <td class="py-3">5</td>
                <td class="py-3">123123</td>
                <td class="py-3">
                  <span class="text-green-500">DELIVERED</span>
                </td>
                <td class="py-3">
                  <button class="bg-gray-800 hover:bg-red-600 text-xs px-3 py-1 rounded-full mr-1 transition-colors duration-300">
                    Delete
                  </button>
                </td>
              </tr> */}

            {/* <!-- Row 3 --> */}
            {/* <tr class="border-t border-gray-700">
                <td class="py-3">21</td>
                <td class="py-3">Saad Hasan</td>
                <td class="py-3">5</td>
                <td class="py-3">123123</td>
                <td class="py-3">
                  <span class="text-red-500">PENDING</span>
                </td>
                <td class="py-3">
                  <button class="bg-gray-800 hover:bg-red-600 text-xs px-3 py-1 rounded-full mr-1 transition-colors duration-300">
                    Delete
                  </button>
                  <button class="bg-gray-800 hover:bg-green-600 text-xs px-3 py-1 rounded-full transition-colors duration-300">
                    DELIVER
                  </button>
                </td>
              </tr> */}

            {/* <!-- Row 4 --> */}
            {/* <tr class="border-t border-gray-700">
                <td class="py-3">21</td>
                <td class="py-3">MD Salahuddin</td>
                <td class="py-3">5</td>
                <td class="py-3">123123</td>
                <td class="py-3">
                  <span class="text-red-500">PENDING</span>
                </td>
                <td class="py-3">
                  <button class="bg-gray-800 hover:bg-red-600 text-xs px-3 py-1 rounded-full mr-1 transition-colors duration-300">
                    Delete
                  </button>
                  <button class="bg-gray-800 hover:bg-green-600 text-xs px-3 py-1 rounded-full transition-colors duration-300">
                    DELIVER
                  </button>
                </td>
              </tr> */}

            {/* <!-- Row 5 --> */}
            {/* <tr class="border-t border-gray-700">
                <td class="py-3">21</td>
                <td class="py-3">Ferdous</td>
                <td class="py-3">5</td>
                <td class="py-3">123123</td>
                <td class="py-3">
                  <span class="text-red-500">PENDING</span>
                </td>
                <td class="py-3">
                  <button class="bg-gray-800 hover:bg-red-600 text-xs px-3 py-1 rounded-full mr-1 transition-colors duration-300">
                    Delete
                  </button>
                  <button class="bg-gray-800 hover:bg-green-600 text-xs px-3 py-1 rounded-full transition-colors duration-300">
                    DELIVER
                  </button>
                </td>
              </tr> */}

            {/* <!-- Row 6 --> */}
            {/* <tr class="border-t border-gray-700">
                <td class="py-3">21</td>
                <td class="py-3">Rafe</td>
                <td class="py-3">5</td>
                <td class="py-3">123123</td>
                <td class="py-3">
                  <span class="text-red-500">PENDING</span>
                </td>
                <td class="py-3">
                  <button class="bg-gray-800 hover:bg-red-600 text-xs px-3 py-1 rounded-full mr-1 transition-colors duration-300">
                    Delete
                  </button>
                  <button class="bg-gray-800 hover:bg-green-600 text-xs px-3 py-1 rounded-full transition-colors duration-300">
                    DELIVER
                  </button>
                </td>
              </tr> */}

            {/* <!-- Row 7 --> */}
            {/* <tr class="border-t border-gray-700">
                <td class="py-3">21</td>
                <td class="py-3">Sarwar</td>
                <td class="py-3">5</td>
                <td class="py-3">123123</td>
                <td class="py-3">
                  <span class="text-red-500">PENDING</span>
                </td>
                <td class="py-3">
                  <button class="bg-gray-800 hover:bg-red-600 text-xs px-3 py-1 rounded-full mr-1 transition-colors duration-300">
                    Delete
                  </button>
                  <button class="bg-gray-800 hover:bg-green-600 text-xs px-3 py-1 rounded-full transition-colors duration-300">
                    DELIVER
                  </button>
                </td>
              </tr> */}

            {/* <!-- Row 8 --> */}
            {/* <tr class="border-t border-gray-700">
                <td class="py-3">21</td>
                <td class="py-3">Obaidul</td>
                <td class="py-3">5</td>
                <td class="py-3">123123</td>
                <td class="py-3">
                  <span class="text-red-500">PENDING</span>
                </td>
                <td class="py-3">
                  <button class="bg-gray-800 hover:bg-red-600 text-xs px-3 py-1 rounded-full mr-1 transition-colors duration-300">
                    Delete
                  </button>
                  <button class="bg-gray-800 hover:bg-green-600 text-xs px-3 py-1 rounded-full transition-colors duration-300">
                    DELIVER
                  </button>
                </td>
              </tr> */}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default OrderTable;
