// components/ExportCSVButton.js

import React from "react";

const ExportCSVButton = ({ data = [], columns = [], fileName = "table_data" }) => {
  const exportToCSV = () => {
    const headers = ["S.No", ...columns.map((col) => col.label)];
    const rows = data.map((row, i) => [
      i + 1,
      ...columns.map((col) => row[col.key]),
    ]);

    const csvContent =
      "data:text/csv;charset=utf-8," +
      [headers, ...rows]
        .map((e) =>
          e.map((val) => `"${String(val).replace(/"/g, '""')}"`).join(",")
        )
        .join("\n");

    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", `${fileName}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <button className="btn btn-sm btn-success" onClick={exportToCSV}>
      Export CSV
    </button>
  );
};

export default ExportCSVButton;
