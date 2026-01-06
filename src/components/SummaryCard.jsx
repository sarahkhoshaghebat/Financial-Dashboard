function SummaryCard({ month, revenue, expenses, profit }) {
  return (
    <div className="card">
      <h3>{month}</h3>
      <p>Revenue: ${revenue}</p>
      <p>Expenses: ${expenses}</p>
      <strong>Net Profit: ${profit}</strong>
    </div>
  );
}

export default SummaryCard;
