function FinancialRatios({ data }) {
  const totalRevenue = data.reduce((sum, item) => sum + item.revenue, 0);
  const totalExpenses = data.reduce((sum, item) => sum + item.expenses, 0);
  const totalProfit = totalRevenue - totalExpenses;

  const grossMargin = ((totalRevenue - totalExpenses) / totalRevenue) * 100;
  const netMargin = (totalProfit / totalRevenue) * 100;

  return (
    <div style={styles.container}>
      <h2>Financial Ratios</h2>

      <div style={styles.cards}>
        <div style={styles.card}>
          <h4>Gross Margin</h4>
          <p>{grossMargin.toFixed(2)}%</p>
        </div>

        <div style={styles.card}>
          <h4>Net Margin</h4>
          <p>{netMargin.toFixed(2)}%</p>
        </div>
      </div>
    </div>
  );
}

const styles = {
  container: {
    marginTop: 50,
    textAlign: "center",
  },
  cards: {
    display: "flex",
    justifyContent: "center",
    gap: "20px",
  },
  card: {
    background: "#fff",
    padding: "20px",
    width: "200px",
    borderRadius: "10px",
    boxShadow: "0 5px 15px rgba(0,0,0,0.1)",
  },
};

export default FinancialRatios;
