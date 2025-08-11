const OrderReports = () => {
  return (
    <div>
      <div class="flex justify-between items-center mb-4">
        <h2 class="text-xl font-bold mb-4">Order Reports</h2>

        <div class="flex gap-4 items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="lucide lucide-funnel-icon lucide-funnel"
          >
            <path d="M10 20a1 1 0 0 0 .553.895l2 1A1 1 0 0 0 14 21v-7a2 2 0 0 1 .517-1.341L21.74 4.67A1 1 0 0 0 21 3H3a1 1 0 0 0-.742 1.67l7.225 7.989A2 2 0 0 1 10 14z" />
          </svg>
          <select class="appearance-none bg-zinc-900 accent-orange-600 border-none outline-none rounded-sm">
            <option>All</option>
            <option>Pending</option>
            <option>Delivered</option>
          </select>
        </div>
      </div>
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
              {/* <!-- Row 1 --> */}
              <tr class="border-t border-gray-700">
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
              </tr>

              {/* <!-- Row 2 --> */}
              <tr class="border-t border-gray-700">
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
              </tr>

              {/* <!-- Row 3 --> */}
              <tr class="border-t border-gray-700">
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
              </tr>

              {/* <!-- Row 4 --> */}
              <tr class="border-t border-gray-700">
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
              </tr>

              {/* <!-- Row 5 --> */}
              <tr class="border-t border-gray-700">
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
              </tr>

              {/* <!-- Row 6 --> */}
              <tr class="border-t border-gray-700">
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
              </tr>

              {/* <!-- Row 7 --> */}
              <tr class="border-t border-gray-700">
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
              </tr>

              {/* <!-- Row 8 --> */}
              <tr class="border-t border-gray-700">
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
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default OrderReports;
