import React from "react";
import { budgetData } from "../data/budgetData";

const BudgetVsActual = () => {
  return (
    <div style={{ marginTop: "50px" }}>
      <h2>Budget vs Actual</h2>

      <table style={{ width: "100%", borderCollapse: "collapse" }}>
        <thead>
          <tr>
            <th>Category</th>
            <th>Budget</th>
            <th>Actual</th>
            <th>Variance</th>
          </tr>
        </thead>
        <tbody>
          {budgetData.map((item, index) => {
            const variance = item.budget - item.actual;

            return (
              <tr key={index}>
                <td>{item.category}</td>
                <td>${item.budget.toLocaleString()}</td>
                <td>${item.actual.toLocaleString()}</td>
                <td style={{ color: variance < 0 ? "red" : "green" }}>
                  {variance < 0 ? "-" : "+"}${Math.abs(variance).toLocaleString()}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default BudgetVsActual;
