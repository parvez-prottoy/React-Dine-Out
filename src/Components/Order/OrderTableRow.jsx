const OrderTableRow = () => {
  return (
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
  );
};

export default OrderTableRow;
