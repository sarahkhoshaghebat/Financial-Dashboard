function FinanceCard({ month, revenue, expenses }) {
  const profit = revenue - expenses;

  return (
    <div style={styles.card}>
      <h3>{month}</h3>
      <p>Revenue: ${revenue.toLocaleString()}</p>
      <p>Expenses: ${expenses.toLocaleString()}</p>
      <p style={{ fontWeight: "bold" }}>
        Net Profit: ${profit.toLocaleString()}
      </p>
    </div>
  );
}

const styles = {
  card: {
    background: "#fff",
    padding: "20px",
    borderRadius: "12px",
    width: "220px",
    boxShadow: "0 8px 20px rgba(0,0,0,0.08)",
  },
};

export default FinanceCard;
