import React from "react";
import Table from "react-bootstrap/Table";

function CurrencyTable({ data }) {
  return (
    <Table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Min Size</th>
        </tr>
      </thead>
      <tbody>
        {data.map((currency) => (
          <tr key={currency.id}>
            <td>{currency.id}</td>
            <td>{currency.name}</td>
            <td>{currency.min_size}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}

export default CurrencyTable;
