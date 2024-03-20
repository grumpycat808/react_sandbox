import React, { useState } from "react";
import Table from "./Table";

function Form() {
  const onSubmit = (e) => {
    e.preventDefault();
  };

  const [rows, setRows] = useState(0);
  const [columns, setColumns] = useState(0);
  return (
    <>
      <form>
        <label>
          Rows:
          <input
            type="number"
            name="rows"
            onChange={(e) => setRows(e.target.value)}
          />
        </label>
        <label>
          Columns:
          <input
            type="number"
            name="columns"
            onChange={(e) => setColumns(e.target.value)}
          />
        </label>
        <input type="submit" value="Submit" onClick={onSubmit} />
      </form>
      <Table rows={rows} columns={columns}></Table>
    </>
  );
}

export default Form;
