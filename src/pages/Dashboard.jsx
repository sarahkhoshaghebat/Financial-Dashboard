import Header from "../components/Header";
import FinanceCard from "../components/FinanceCard";
import RevenueChart from "../components/RevenueChart";
import { financialData } from "../data/financialData";
import FinancialRatios from "../components/FinancialRatios";
import BudgetVsActual from "../components/BudgetVsActual";


function Dashboard() {
  return (
    <div style={styles.container}>
      <Header />

      <div style={styles.cards}>
        {financialData.map((item) => (
          <FinanceCard
            key={item.month}
            month={item.month}
            revenue={item.revenue}
            expenses={item.expenses}
          />
        ))}
      </div>

      <RevenueChart data={financialData} />
    </div>
  );
}

const styles = {
  container: {
    padding: "40px",
    background: "#f5f7fa",
    minHeight: "100vh",
  },
  cards: {
    display: "flex",
    gap: "20px",
    justifyContent: "center",
  },
};

<>
<FinancialRatios data={financialData} />
<BudgetVsActual />
</>




export default Dashboard;
