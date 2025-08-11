const SummaryCard = ({ children, style }) => {
  const { textColor, textColorNum, bgColor, totalOrders } = style;
  return (
    <div className="bg-cardbg rounded-lg p-4 relative overflow-hidden">
      <div className={`text-5xl font-bold ${textColorNum} mb-2`}>
        {totalOrders}
      </div>
      <div
        className={`${bgColor} bg-opacity-50 ${textColor} text-xs font-medium px-3 py-1 rounded-full inline-block`}
      >
        {children}
      </div>
    </div>
  );
};

export default SummaryCard;
