import incomeStatement from "../data/incomeStatement";

function Dashboard() {
  return (
    <>
      <h2>Income Statement Overview</h2>

      <div className="dashboard">
        {incomeStatement.map((item) => {
          const netProfit =
            item.revenue - item.cogs - item.expenses;

          return (
            <div className="card" key={item.month}>
              <h4>{item.month}</h4>
              <p>Revenue: ${item.revenue.toLocaleString()}</p>
              <p>Expenses: ${item.expenses.toLocaleString()}</p>
              <p>
                <strong>
                  Net Profit: ${netProfit.toLocaleString()}
                </strong>
              </p>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Dashboard;
