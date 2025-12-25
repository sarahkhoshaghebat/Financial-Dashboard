import incomeStatement from "./data/incomeStatement";

function App() {
  return (
    <div>
      <h1>Financial Dashboard</h1>

      {incomeStatement.map((item) => {
        const netProfit =
          item.revenue - item.cogs - item.expenses;

        return (
          <div key={item.month}>
            <h3>{item.month}</h3>
            <p>Revenue: {item.revenue}</p>
            <p>Net Profit: {netProfit}</p>
          </div>
        );
      })}
    </div>
  );
}

export default App;
