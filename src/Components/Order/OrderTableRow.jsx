const OrderTableRow = () => {
  return (
    <tr className="border-t border-gray-700">
      <td className="py-3">21</td>
      <td className="py-3">Sumit Saha</td>
      <td className="py-3">5</td>
      <td className="py-3">123123</td>
      <td className="py-3">
        <span className="text-red-500">PENDING</span>
      </td>
      <td className="py-3">
        <button className="bg-gray-800 hover:bg-red-600 text-xs px-3 py-1 rounded-full mr-1 transition-colors duration-300">
          Delete
        </button>
        <button className="bg-gray-800 hover:bg-green-600 text-xs px-3 py-1 rounded-full transition-colors duration-300">
          DELIVER
        </button>
      </td>
    </tr>
  );
};

export default OrderTableRow;
