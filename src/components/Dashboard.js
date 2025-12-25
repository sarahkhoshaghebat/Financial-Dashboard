import incomeStatement from "../data/incomeStatement";

function Dashboard() {
  return (
    <div>
      <h2>Income Statement Overview</h2>

      {incomeStatement.map((item) => {
        const netProfit =
          item.revenue - item.cogs - item.expenses;

        return (
          <div key={item.month}>
            <h4>{item.month}</h4>
            <p>Revenue: ${item.revenue}</p>
            <p>Expenses: ${item.expenses}</p>
            <p>Net Profit: ${netProfit}</p>
          </div>
        );
      })}
    </div>
  );
}

export default Dashboard;
